function About(props) {
  const { username, address } = props;
  return (
    <>
      <h1>Hi {username}</h1>
      <p>welcome to my word and live in {address}</p>
    </>
  );
}

export default About;
