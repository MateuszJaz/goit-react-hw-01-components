import user from '../data/user';
import statistics from '../data/statistics';
import friends from '../data/friends';
import transactions from '../data/transactions';

import { UserProfile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import { TransactionHistory } from './transaction-history/transaction-history';

export const App = () => {
  return (
    <>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
