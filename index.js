$(".buttn").click(function() {
    gapi="https://quickchart.io/qr?";
    image=document.querySelector("img");
    $("img").removeClass("hidden");
    data = document.querySelector("#text").value;
    size=document.querySelector("#size").value;
    console.log(size);
    console.log(data);

            if(data!=="" && size=="100")
            {
                image.src=gapi+"text="+data+"&size=100";
            }

            else if(data!=="" && size=="150")
            {

                image.src=gapi+"text="+data+"&size=150";
            }

            else if(data!=="" && size=="200")
            {
                image.src=gapi+"text="+data+"&size=200";
            }

            else if (data!=="" && size=="250")
            {
                image.src=gapi+"text="+data+"&size=250";
            }

            else if (data!=="" && size=="300")
            {
                image.src=gapi+"text="+data+"&size=300";
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