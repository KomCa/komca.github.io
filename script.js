const header = document.querySelector('.header');




window.onscroll = () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > window.innerHeight * 70 / 100) {
    nav.style.width = '100%';
    nav.style.borderBottomRightRadius = '0';
    nav.style.borderTopRightRadius = '0';
  } else {
    nav.style.width = '30%';
    nav.style.borderBottomRightRadius = 'var(--border)';
    nav.style.borderTopRightRadius = 'var(--border)';
  }
};





const profileArray = ['profil.jpg', 'profil2.jpg', 'profil3.jpg'];
let counter = 0;


const changeBackground = (array) => {
  if (counter === array.length) {
    counter = 0;
  }
  header.style.background = `url(/profile/${array[counter]})`;
  header.style.backgroundSize = 'cover';
  header.style.backgroundPosition = 'center 30%';
  counter++;
}

setInterval(() => changeBackground(profileArray), 1000 * 3);







const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

setInterval(() => {
  const container = document.querySelector('.event >h2');
  const date = new Date();
  const day = date.getDate();
  const month = bulan[date.getMonth()];
  const year = date.getFullYear();

  let formattedDay = day >=10 ? day : `0${day}`;

  container.textContent = `${formattedDay}, ${month} ${year}`;
}, 1000 * 60 * 60)









const loadMember = async () => {
  const container = document.querySelector('.info');
  const res = await fetch('/member.csv');
  let data = (await res.text()).split('\n');

  for (let i = 1; i < data.length; i++) {
    let cols = data[i].split(',');
    let nama = cols[0].trim();
    let jabatan = cols[1].trim();
    let foto = cols[2].trim();

    let item = document.createElement('div');
    let itemNama = document.createElement('h5');
    let itemJabatan = document.createElement('a');
    let itemFoto = document.createElement('img');

    itemNama.textContent = nama;
    itemJabatan.textContent = jabatan;
    itemFoto.src = `/${foto}`;

    item.appendChild(itemFoto);
    item.appendChild(itemNama);
    item.appendChild(itemJabatan);


    container.appendChild(item);
  }

}

loadMember();

