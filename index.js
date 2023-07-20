$(".buttn").click(function() {
    gapi="https://chart.googleapis.com/chart?cht=qr&chs=";
    image=document.querySelector("img");
    $("img").removeClass("hidden");
    data = document.querySelector("#text").value;
    size=document.querySelector("#size").value;
    console.log(size);
    console.log(data);

            if(data!=="" && size=="100")
            {
                image.src=gapi+"100x100"+"&chl="+data;
            }

            else if(data!=="" && size=="150")
            {

                image.src=gapi+"150x150"+"&chl="+data;
            }

            else if(data!=="" && size=="200")
            {
                image.src=gapi+"200x200"+"&chl="+data;
            }

            else if (data!=="" && size=="250")
            {
                image.src=gapi+"250x250"+"&chl="+data;
            }

            else if (data!=="" && size=="300")
            {
                image.src=gapi+"300x300"+"&chl="+data;
            }

            else
            {
                if(data==""){
                    alert("Please enter text");
                }
                else{
                    alert("Please select the size");
                }

            }
        

});