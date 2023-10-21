import React from 'react';

const Profile = () => {
  
  const user = {
    profilePic: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png', 
    name: 'John Doe',
    role: 'Web Developer',
    email: 'johndoe@example.com',
    location: 'New York, USA',
    joinDate: 'January 15, 2020',
    bio: 'Passionate web developer with a love for coding and creating awesome websites.'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center">
        <img
          src={user.profilePic}
          alt="Profile"
          className="h-24 w-24 rounded-full mx-auto"
        />
        <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
        <p className="text-gray-500">{user.role}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Basic Information</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Email: {user.email}</li>
          <li>Location: {user.location}</li>
          <li>Joined on: {user.joinDate}</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p className="mt-2">{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;