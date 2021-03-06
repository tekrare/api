import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('pseudo');
    t.nonNull.string('email');
    t.nonNull.string('password');
    t.nonNull.boolean('isAdmin');
    t.string('walletAddress');
  },
});
