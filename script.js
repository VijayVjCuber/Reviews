const buttons = document.querySelectorAll(".buttons");
const surprise = document.getElementsByTagName("button")[0];
let namedisp = document.getElementById("name");
let profiledisp = document.getElementById("profile-img");
let positiondisp = document.getElementById("position");
let reviewdisp = document.getElementById("review");
const reviews = [
    {
        "name": "Vijay",
        "position": "Web Developer",
        "review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        "image":"Vijay.jpg"
    },
    {
        "name": "Vimal",
        "position": "Vera level Developer",
        "review": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        "image":"https://pbs.twimg.com/profile_images/797475691604230144/TwUZujfc_400x400.jpg"
    },
    {
        "name": "Charan",
        "position": "Front End Developer",
        "review": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        "image":"https://static.india.com/wp-content/uploads/2021/03/Ram-Charan-next-target-mother-dream.jpg"
    },
    {
        "name": "Dhayal",
        "position": "Awesome developer",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "image":"https://i.pinimg.com/originals/dd/4c/bb/dd4cbb7af5b14e2a4e3ddab930b12ada.jpg"
    },
    {
        "name": "Aniruddhan",
        "position": "Lawyer",
        "review": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
        "image":"https://static.toiimg.com/photo/msid-74967170/74967170.jpg?118170"
    }
];

let count = 0;
let length = reviews.length;

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(){
        if(btn.innerText===">"){
            count=(count+1)%length;
        }
        else{
            count--;
            if(count<0){
                count=length-1;
            }
        }

        profiledisp.src=reviews[count].image;
        namedisp.innerText=reviews[count].name;
        positiondisp.innerText=reviews[count].position;
        reviewdisp.innerText=reviews[count].review;
    });
});


let lastnum=0;
surprise.onclick=()=>{
    while(count<length){
        count=Math.floor(Math.random()*length);
        if(lastnum!=count){
            lastnum=count;
            break;
        }
    }
    profiledisp.src=reviews[count].image;
    namedisp.innerText=reviews[count].name;
    positiondisp.innerText=reviews[count].position;
    reviewdisp.innerText=reviews[count].review;
}