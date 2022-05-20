var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","grandpa.png", "Papa.png" , "Mimi.png", "Jedi.png", "Misaka.png"];
var names = ["Fmaily Book","Grandpa", "Papa", "Mimi", "Jedi","Misaka"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
