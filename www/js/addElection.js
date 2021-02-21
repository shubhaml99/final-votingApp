document.getElementById("addElection").addEventListener("click",storeElection);


function storeElection() {
  const COMP = document.getElementsByName("COMP");
  const IT = document.getElementsByName("IT");
  const MECH = document.getElementsByName("MECH");

  const FE = document.getElementsByName("FE");
  const SE = document.getElementsByName("SE");
  const TE = document.getElementsByName("TE");
  const BE = document.getElementsByName("BE");

  const l = localStorage;

  const electionTitle=document.getElementById("election-title").value;
  l.setItem("title",electionTitle);
  const electionDescription=document.getElementById("election-description").value;
  l.setItem("description",electionDescription);

  const startDate=document.getElementById("startdatepicker").value;
  l.setItem("startDate",startDate);
  const startTime=document.getElementById("starttimepicker").value;
  l.setItem("startTime",startTime);
  const endDate=document.getElementById("enddatepicker").value;
  l.setItem("endDate",endDate);
  const endTime=document.getElementById("endtimepicker").value;
  l.setItem("endTime",endTime);
  axios
  .post('http://localhost:3000/',{
    title : electionTitle,
    description :electionDescription,
    startDate: startDate,
    startTime: startTime,
    endDate:endDate,
    endTime:endTime
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
}
