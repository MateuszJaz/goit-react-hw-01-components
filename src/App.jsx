import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionsHistory } from './components/TransactionsHistory/TransactionsHistory'

import user from './data/user';
import data from './data/statistics';
import friends from './data/friends';
import transactions from './data/transactions.json';

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

