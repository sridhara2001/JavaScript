// function formHandler(event) {
//       event.preventDefault();

//       let name = document.getElementById('name').value;
//       let status = document.getElementById('status');

//       let email = document.getElementById('email').value;
//       let status1 = document.getElementById('status1');

//       let profile = document.getElementById('profile').value;
//       let status2 = document.getElementById('status2');

//       let gender = document.querySelector('input[name="gender"]:Checked');
//       let status3 = document.getElementById('status3');

//       let regex = /^[A-Z]+[a-zA-Z]+$/;    
//       let regex1 = /^\S+@\S+\.\S+$/;

//       if (name.length === 0) {
//             status.innerHTML = "Please Enter Your Name";
//             status.style.color = "red";
//       } else {
//             if (regex.test(name) === false || name.length <= 5) {
//             status.innerHTML = "Invalid Name";
//             status.style.color = "red";
//       } else {
//             status.innerHTML = "";
//             }
//       }

//       if (profile.length === 0) {
//             status2.innerHTML = "Please Enter Profile Link";
//             status2.style.color = "red";
//       } else {
//             status2.innerHTML = "";
//       }

//       if (email.length === 0) {
//             status1.innerHTML = "Please Enter Email";
//             status1.style.color = "red";
//       } else {
//             if (regex1.test(email) === false) {
//                   status1.innerHTML = "Invalid Email";
//                   status1.style.color = "red";
//             } else {
//                   status1.innerHTML = "";
//             }
//       }

//       if (gender == null) {
//             status3.innerHTML = "Gender is Required";
//             status3.style.color = "red";
//       } else {
//             status3.innerHTML = "";
//       }
// }
   
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputLink = document.getElementById('link');
const inputGender = document.getElementsByName('gender');
document.getElementById('create').onclick = function(){
      
      const name = inputName.value;
      const email = inputEmail.value;
      const link = inputLink.value;
      const gender = inputGender.value;
      let no = localStorage.length?localStorage.length+1:1;
  
      const obj ={
            'id':no,
            'name':name,
            'email':email,
            'link':link,
            'gender':gender
      };

      if (name && email && link) {
            localStorage.setItem('emp'+no, JSON.stringify(obj));
            window.location.reload();
      } else {
            alert("Input Boxes Cannot Be Empty");
      }
};