player1_name= localStorage.getItem("Player1");
player2_name= localStorage.getItem("Player2");

p1_score=0;
p2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" :  ";
document.getElementById("player2_name").innerHTML=player2_name+" :  ";

document.getElementById("score_1").innerHTML=" "+p1_score;
document.getElementById("score_2").innerHTML=" "+p2_score;

document.getElementById("q_turn").innerHTML="Question Turn  - "+player1_name;
document.getElementById("a_turn").innerHTML="Answer Turn  - "+player2_name;

function send_q(){
    no1= document.getElementById("input1").value;
    no2= document.getElementById("input2").value;
    correct_a=parseInt(no1)*parseInt(no2);

    question= "<h4> Q. "+no1+"x"+no2+"</h4>";
    a_input= "<br> Answer: <input type='text' id='input_check_box'>";
    c_button= "<br> <br> <button class='btn btn-success' onclick='check()'> Check </button>";
    document.getElementById("output").innerHTML= question+a_input+c_button;
    document.getElementById("q_input").value= "";
}

question_turn="P1";
answer_turn="P2"

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if (get_answer==correct_a){
        if (answer_turn=="P1"){
            p1_score=p1_score+1;
            document.getElementById("score_1").innerHTML=" "+p1_score;
        }
        else{
            p2_score=p2_score+1;
            document.getElementById("score_2").innerHTML=" "+p2_score;
        }
    }

    if (question_turn=="P1"){
        question_turn="P2";
        document.getElementById("q_turn").innerHTML="Question Turn  - "+player2_name;
    }
    else {
        question_turn="P1";
        document.getElementById("q_turn").innerHTML="Question Turn  - "+player1_name;
    }

    if (answer_turn=="P1"){
        answer_turn="P2";
        document.getElementById("a_turn").innerHTML="Answer Turn  - "+player2_name;
    }
    else {
        answer_turn="P1";
        document.getElementById("a_turn").innerHTML="Answer Turn  - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
};