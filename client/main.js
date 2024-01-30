const div = document.getElementById('app');

const getImages = async () => {
  const response = await fetch(`${import.meta.env.VITE_ServerURL}/images`);
  const data = await response.json();
  console.log(data)
  return data;
}


const makeImage = async () => {
  let images = await getImages();
  images.forEach(image => {
    let imgTag = document.createElement('img');
    imgTag.src = image.image;
    div.appendChild(imgTag);
  })
}

makeImage();