var i = 0;
var textQuest =
` <div class="col-10">
        <form>
            <div class="form-group">
            <label for="">Question</label>
            <input type="text" class="form-control" id="" placeholder="Enter question here">
            </div>
            <div class="form-group">
            <label for="">Answer</label>
            <textarea class="form-control" id="" rows="3" placeholder="Enter question answer here"></textarea>
            </div>
        </form>
        <hr>
        <br>
    </div>`;

//var boolQues=``;
var multiQues=
`  <div class="col-10">
<form>
    <div class="form-group">
        <label for="">Question</label>
        <input type="text" class="form-control" id="" placeholder="Enter question here">
      </div>
      
      <div class="form-check form-switch"  style="float: right;">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Self Correction</label>
        </div>
      <div class="form-group" style="width: 60%;">
        <label for="">Answer Select</label><br>
        <input class="form-check-input" type="checkbox" value="" id="">
        <input type="text" class="form-control" id="" placeholder="option1"><br>
        <input class="  form-check-input" type="checkbox" value="" id="">
        <input type="text" class="form-control" id="" placeholder="option2"><br>
        <input class="  form-check-input" type="checkbox" value="" id="">
        <input type="text" class="form-control" id="" placeholder="option3"><br>
        <input class=" form-check-input" type="checkbox" value="" id="">
        <input type="text" class="form-control" id="" placeholder="option4"><br>                                   
    </div> 
</form>
<hr>
<br>  
</div>    `;

function AppendQues()
{
    i++;
    let header =`<div class="col-10"> <h3>Question ${i} </h3></div><br>`
    let quesVal=document.getElementById("quesType").value;
    let quesContainer = document.getElementById("quesList");
    switch(quesVal){
        case "text":
        {
            quesContainer.innerHTML +=  header+textQuest;
            break;
        }
        case "multiple":
        {
            quesContainer.innerHTML += header +multiQues;
            break;
        }
        case "boolean":
        {
            let boolQues=`<div class="col-10">
                            <form>
                                <div class="form-group">
                                <label for="">Question</label>
                                <input type="text" class="form-control" id="" placeholder="Enter question here">
                                </div>  

                                <div class="form-check form-switch" style="float: right;" >
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Self Correction</label>
                                </div>


                                <label for="">Answer</label>                  
                                <div  style="padding-left: 30px;"class="form-group">
                                    
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="rad${i}" id="" value="true" >
                                        <label class="form-check-label" for="">
                                        True
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="rad${i}" id="" value="false">
                                        <label class="form-check-label" for="">
                                            False
                                        </label>
                                    </div>                      
                                </div>
                            </form>
                            <hr>
                            <br>          
                        </div>`
            quesContainer.innerHTML += header+boolQues;
        }
        default:
        {
            break;
        }
    }

}