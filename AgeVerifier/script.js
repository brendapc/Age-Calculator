function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano') 
    var res = document.querySelector('div#res') //faz o mesmo que o getelementbyid de uma forma mais moderna

    //res.innerHTML = 'ola'
    if(formAno.value.length == 0 || formAno.value > ano){
        window.alert('[ERRO] tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value);
        //alert('idade calculada: ' + idade)


        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>= 0 && idade<10){
                //criança
                img.setAttribute('src', 'boykid.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'youngBoy.png')
            }else if (idade <60){
                //adulto
                img.setAttribute('src', 'man.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'oldman.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>= 0 && idade<10){
                //criança
                img.setAttribute('src', 'girlkid.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'youngGirl.png')
            }else if (idade <60){
                //adulto
                img.setAttribute('src', 'woman.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'oldwoman.png')
            }
        }
    
        document.getElementById("res").style.textAlign = "center";
        document.getElementById("res").innerHTML = 'detectamos ' + genero + ' com ' +idade +' anos';
        res.appendChild(img)
        
    }
}