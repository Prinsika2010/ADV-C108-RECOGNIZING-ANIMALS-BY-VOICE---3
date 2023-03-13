function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.groupCollapsed(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" +random_number_r+ " , " +random_number_g+ " , " +random_number_b+ ")";
        document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+ " , " +random_number_g+ " , " +random_number_b+ ")";

        if (results[0] == "dog")
        {
            img.src="https://img.freepik.com/premium-vector/cute-little-dog-cartoon-isolated-white_143596-3.jpg?w=2000"
        }
        
        else if (results[0].label == "cat")
        {
            img.src="https://www.shutterstock.com/image-vector/cute-grey-cat-cartoon-260nw-1044708187.jpg" 
        }

        else if (results[0].label == "lion")
        {
            img.src="https://t4.ftcdn.net/jpg/01/18/93/99/360_F_118939938_QJEfcc07LQTjaGGvhqlCZtdKV7RyojR5.jpg" 
        }

        else 
        {
            img.src="https://www.shutterstock.com/image-vector/illustration-cute-cow-260nw-347317901.jpg" 

        }

    }
}
