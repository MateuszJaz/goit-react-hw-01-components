import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory'

import user from '../data/user';
import data from '../data/statistics';
import friends from '../data/friends';
import transactions from '../data/transactions.json';

export const App = () => (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </>
  );

