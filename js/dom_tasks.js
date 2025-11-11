// dom_tasks.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('read-dom');
    if (!btn) return;
  
    btn.addEventListener('click', () => {
      // Demonstrate grabbing values from the DOM
      // The assignment suggested e.g. document.getElementsByTagName('p')[2].childNodes[1].innerText
      // We'll read from the specific IDs we created above
      const surname = document.getElementById('surname')?.innerText || '';
      const given = document.getElementById('givenname')?.innerText || '';
      const year = document.getElementById('birthyear')?.innerText || '';
  
      const out = document.getElementById('dom-result');
      out.innerHTML = `<p>Фамилия: <strong>${surname}</strong></p>
                       <p>Имя: <strong>${given}</strong></p>
                       <p>Год рождения: <strong>${year}</strong></p>
                       <p>Пример селектора (пример из задания): <code>document.getElementsByTagName('p')[2].childNodes[1].innerText</code></p>`;
    });
  });

  let translate = false

function setLanguage()
{
    if (translate == false){
        document.querySelector('#pas p:nth-child(1)').textContent = 'Паспорт выдан: UMVD OF RUSSIA'
        document.querySelector('#pas p:nth-child(2)').textContent = 'FOR SEDOVA'
        document.querySelector('#pas p:nth-child(4)').textContent = 'Фамилия: SIZOVA'
        document.querySelector('#pas p:nth-child(5)').textContent = 'Имя: ANASTASIA'
        document.querySelector('#pas p:nth-child(6)').textContent = 'Отчество: BORISOVNA'
        document.querySelector('#pas p:nth-child(8)').textContent = 'Место рождения: yglya'
        translate = true
    }
    else{
        document.querySelector('#pas p:nth-child(1)').textContent = 'Паспорт выдан: УМВД РОССИИ'
        document.querySelector('#pas p:nth-child(2)').textContent = 'ПО СЕДОВА'
        document.querySelector('#pas p:nth-child(4)').textContent = 'Фамилия: СИЗОВА'
        document.querySelector('#pas p:nth-child(5)').textContent = 'Имя: АНАСТАСИЯ'
        document.querySelector('#pas p:nth-child(6)').textContent = 'Отчество: БОРИСОВНА'
        document.querySelector('#pas p:nth-child(8)').textContent = 'Место рождения: угля'
        translate = false
    }
}
