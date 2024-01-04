let puisi = [];
const database = async () => {
  const res = await fetch('/puisi/puisi.csv');
  let data = await res.text();
  return data;
}




const loadPuisi = async () => {
  const container = document.querySelector('.puisi > .container');
  const popup = document.querySelector('.popup');
  const popupTitle = document.querySelector('.popup > .title > h1');
  const popupAuthor = document.querySelector('.popup > .title > p');
  const popupBody = document.querySelector('.popup > .body');
  
  const csv = await database();
  const rows = csv.split('\n').slice(1);


  
  for(let i = 0; i < rows.length; i++) {
    let cols = rows[i].split(',');
    let judul = cols[1];
    let pengarang = cols[2];
    let isi = cols[3].replace(/\\n\\n/g, '<br/><br/>');

    let item = document.createElement('div');
    let title = document.createElement('h4');
    let author = document.createElement('h6');
    title.textContent = `${judul}`;
    author.textContent = `Oleh ${pengarang}`;
    item.appendChild(title);
    item.appendChild(author);
    
    item.classList.add('item');

    item.addEventListener('click', (e) => {
      e.preventDefault();
      popupTitle.textContent = judul;
      popupAuthor.textContent = `Karya Oleh ${pengarang}`;
      popupBody.innerHTML = isi;
      popup.classList.remove('hidden');
    });
    container.appendChild(item);
    
  };
}

loadPuisi()



const closeBtn = document.querySelector('.popup > .head > .close-btn');

closeBtn.addEventListener('click', (e) => {
  const popup = document.querySelector('.popup');
  popup.classList.add('hidden');
});
