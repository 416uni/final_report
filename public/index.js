// public/index.js
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.user-name').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        alert(event.target.innerHTML);
      });
    });

    document.querySelector('.ki').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "奇" }) });
      window.location.reload();
    });

    document.querySelector('.seki').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "跡" }) });
      window.location.reload();
    });

    document.querySelector('.tai').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "体" }) });
      window.location.reload();
    });

    document.querySelector('.kenn').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "験" }) });
      window.location.reload();
    });

    document.querySelector('.exclamation').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "！" }) });
      window.location.reload();
    });

    document.querySelector('.a').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "ア" }) });
      window.location.reload();
    });

    document.querySelector('.nn').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "ン" }) });
      window.location.reload();
    });

    document.querySelector('.bi').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "ビ" }) });
      window.location.reload();
    });

    document.querySelector('.ri').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "リ" }) });
      window.location.reload();
    });

    document.querySelector('.ba').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "バ" }) });
      window.location.reload();
    });

    document.querySelector('.bo').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "ボ" }) });
      window.location.reload();
    });

    document.querySelector('.mark').addEventListener('click', async(event) => {
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: "ー" }) });
      window.location.reload();
    });

    document.querySelector('.delete').addEventListener('click', (event) => {
      fetch('/api/user', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify() });
      window.location.reload();
    });

    document.querySelector('.r').addEventListener('click', async(event) => {
      const kiseki = ["奇", "跡", "体", "験"];
      const unbelievable = ["ア", "ビ", "リ", "バ", "ボ"];
        let k = "";
      for(let i = 0; i < 4; i++) {
        let k_number = Math.trunc(Math.random() * 4);
        k += kiseki[k_number];
      }
      k += "！";
      let u_number = Math.trunc(Math.random() * 5);
      k += unbelievable[u_number];
      k += "ン";
      for(let i = 0; i < 4; i++) {
        let u_number = Math.trunc(Math.random() * 5);
        k += unbelievable[u_number];
      }
      k += "ー";
      await fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: k }) });
      
      window.location.reload();
    });
  });