pizza_list_array = ["Veg margherita pizza","Mushroom pizza"];

function getmenu()
	{    
        // Give the appropriate id name as pizza_name
        var html_data="";
        pizza_list_array.sort();
        for(var i=0;i<pizza_list_array.length;i++){
                html_data=html_data+pizza_list_array[i]+"<br>"
        }
        document.getElementById("display_menu").innerHTML=html_data;
        // var item = document.getElementById("pizza_name").value; 
       
        //Add push() function to push item into array
        // pizza_list_array.push(item);
        // document.getElementById("display_menu").innerHTML=pizza_list_array;
        // var remove_commas = pizza_list_array.join("<br># ");
        // document.getElementById("display_menu").innerHTML =  "# " + remove_commas;
	}


        function add_item()
        {
                var html_data="";
                var item=document.getElementById("add_item").value ;
                pizza_list_array.sort();
                for(var i=0;i<pizza_list_array.length;i++){
                        html_data=html_data+pizza_list_array[i]+"<br>"
                }
                pizza_list_array.push(item);
                document.getElementById("display_add_items").innerHTML=pizza_list_array;
        }