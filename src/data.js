import { ReactComponent as main } from './assets/icons/main.svg';
import { ReactComponent as momitor } from './assets/icons/monitor.svg';
import { ReactComponent as user } from './assets/icons/user.svg';
import { ReactComponent as team } from './assets/icons/team.svg';
import { ReactComponent as file } from './assets/icons/file.svg';
import { ReactComponent as chart } from './assets/icons/chart.svg';
import { ReactComponent as arrowUp } from './assets/icons/arrow_up.svg';
import { ReactComponent as arrowDown } from './assets/icons/arrow_down.svg';

export const data = [
  {
    id: 1,
    title: 'Main',
    Icon: main,
    pathname: '/main',
  },
  {
    id: 2,
    section: 'Monitor',
    title: 'Monitor',
    Icon: momitor,
    pathname: '/monitor',
  },
  {
    id: 3,
    title: 'Users',
    Icon: user,
    pathname: '',
    ArrowUp: arrowUp,
    ArrowDown: arrowDown,
    child: [
      { title: 'Active', pathname: '/users/active-users' },
      { title: 'New', pathname: '/users/new-users' },
      { title: 'All', pathname: '/users/all-users' },
    ],
  },
  {
    id: 4,
    title: 'Teams',
    Icon: team,
    pathname: '',
    ArrowUp: arrowUp,
    ArrowDown: arrowDown,
    child: [
      {
        title: 'Active',
        pathname: '/teams/active-team',
      },
      {
        title: 'New',
        pathname: '/teams/new-team',
      },
      {
        title: 'All',
        pathname: '/teams/all-team',
      },
    ],
  },
  {
    id: 5,
    title: 'Statistics',
    Icon: chart,
    pathname: '/statistics',
  },
  {
    id: 6,
    title: 'Files',
    Icon: file,
    pathname: '/files',
    child: [],
  },
];
