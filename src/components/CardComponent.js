import React, { useState } from 'react';
function Card(props) {
  return (
    <>
      <div class="items-center border border-cyan-600 grid grid-cols-2 w-auto h-max p-2">
        <div className="h-full grid content-around ">
          <div className="ps-4 mb-6">
            <img src={props.Image} width="100px"></img>
          </div>
          <p>id : {props.Id}</p>
          <p>FirstName :{props.FirstName}</p>
          <p>LastName : {props.LastName}</p>
          <p>
            Date of Birth : {props.DOB.getFullYear()}-{props.DOB.getMonth()}-
            {props.DOB.getDate()}
          </p>
        </div>
        <div className="h-full grid content-around">
          <div className="">
            <p>College Name : {props.CollageName}</p>
            <p>Address : {props.Address}</p>
          </div>
          <div className="flex justify-center">
            <img src={props.CollegeLogo} width="80px"></img>
          </div>
        </div>
      </div>
    </>
  );
}

function CardComponent() {
  const [toggle, settoggle] = useState(false);

  function handleClick() {
    settoggle(!toggle);
  }
  const Students = [
    {
      Image:
        'https://images.unsplash.com/photo-1586796676774-c93004ae009f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      Id: 1,
      FirstName: 'Rahen',
      LastName: 'Hingrajiya',
      DOB: new Date(2000, 8, 3),
      CollageName: 'Parul University',
      Address: 'Baroda',
      CollegeLogo:
        'https://www.pressrelease.com/files/e1/6d/866d627b911bf3be5ca5ed825e67.png',
    },
    {
      Image:
        'https://images.unsplash.com/photo-1586796676774-c93004ae009f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      Id: 2,
      FirstName: 'Meet',
      LastName: 'Dhanani',
      DOB: new Date(2001, 4, 21),
      CollageName: 'Parul University',
      Address: 'Rajkot',
      CollegeLogo:
        'https://www.pressrelease.com/files/e1/6d/866d627b911bf3be5ca5ed825e67.png',
    },
    {
      Image:
        'https://images.unsplash.com/photo-1586796676774-c93004ae009f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      Id: 3,
      FirstName: 'Vishal',
      LastName: 'Vadodariya',
      DOB: new Date(2002, 2, 10),
      CollageName: 'Parul University',
      Address: 'Ahemedabad',
      CollegeLogo:
        'https://www.pressrelease.com/files/e1/6d/866d627b911bf3be5ca5ed825e67.png',
    },
    {
      Image:
        'https://images.unsplash.com/photo-1586796676774-c93004ae009f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      Id: 3,
      FirstName: 'Vishal',
      LastName: 'Vadodariya',
      DOB: new Date(2002, 2, 10),
      CollageName: 'Parul University',
      Address: 'Ahemedabad',
      CollegeLogo:
        'https://www.pressrelease.com/files/e1/6d/866d627b911bf3be5ca5ed825e67.png',
    },
  ];
  return (
    <div>
      <div className="text-center mt-3">
        <button onClick={handleClick} type="button" className="border rounded-md border-4 p-1 text-white font-bold bg-red-500 border-black">click here</button>
      </div>

      <div className="grid grid-cols-3 mt-10">
        {toggle && Students.map((value) => {
          return (
            <>
              <Card
                Image={value.Image}
                Id={value.Id}
                FirstName={value.FirstName}
                LastName={value.LastName}
                DOB={value.DOB}
                CollageName={value.CollageName}
                Address={value.Address}
                CollegeLogo={value.CollegeLogo}
              ></Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CardComponent;
