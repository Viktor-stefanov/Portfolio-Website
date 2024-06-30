import coverPhoto from "../assets/cv_photo.jpeg";

function Home() {
  return (
    <div className="grid grid-cols-2 h-screen place-items-center">
      <div>
        <img
          src={coverPhoto}
          alt="Image of Viktor Stefanov"
          width={500}
          height={500}
          className="rounded-full"
        />
      </div>
      <div className="h-[250px]">
        <h1 className="text-4xl text-bold my-8">My name is Viktor Stefanov</h1>
        <p className="text-xl">
          I do front-end and back-end development creating beautiful UIs and
          intricate APIs for the web and I love to learn new things.
        </p>
      </div>
    </div>
  );
}

export default Home;
