import Repo from '../repo';
import clearRepo from './clearRepo';
import Config from './Config';

export default (config: Config): Repo => {
  return {
    clearRepo: clearRepo(config),
    migrate: async () => Promise.resolve(),
    rollback: async () => Promise.resolve(),
  };
};
