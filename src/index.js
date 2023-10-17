import './css/style.css';
import Team from './js/Iter';
import Character from './js/Character';

const bowman = new Character('Piter', 'Bowman');
const magician = new Character('Mag', 'Magician');

const iterTeam = new Team([bowman, magician]);

for (let i of iterTeam.teamList) {
  console.log(i);
}
