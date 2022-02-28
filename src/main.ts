import './assets/scss/main.scss';
import qrImage from './assets/images/qr-code.png';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <main class="Main">
    <section>
      <div class="wrapper">
        <div class="card">
          <figure>
            <img src="${qrImage}"/>
            <figcaption>
              <h1>Improve your front-end skills by building projects</h1>
              <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </main>
`;
