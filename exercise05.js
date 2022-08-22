var arr1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
var arr2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major" , "Leo"];
var name = prompt("Nhập vào tên ngôi sao ở arr1 :");
var result = null;
function findStarIndex(){
    for (var i = 0 ; i<arr1.length;i++) {
        if (name == arr1[i])
            return i;
    }
    return -1;
}
let starIndex = findStarIndex();
if (starIndex != -1) {
    result = arr2[starIndex];
} else {
    result = "Không tìm thấy";
}
document.write(result);