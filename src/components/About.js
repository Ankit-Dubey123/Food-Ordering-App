import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React</h2>
      {/* <User name={"Ankit props"} /> */}
      <UserClass name={"Ankit props class"} location={"Ayodhya"} />
    </div>
  );
};

export default About;
