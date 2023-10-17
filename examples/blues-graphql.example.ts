/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';

(async () => {
  const ig = new IgApiClient();
  const userName = 'loisblues2002';
  const password = 'andy57591';
  ig.state.generateDevice(userName);
  ig.state.proxyUrl = 'http://127.0.0.1:1087';
  const auth = await ig.account.login(userName, password);
  console.log(auth);
  const qlResult = await ig.bluesGraphQL.graphQL({
    query_hash: '37479f2b8209594dde7facb0d904896a',
    variables: { id: '6103771', after: '', first: 50 },
  });
  console.log(JSON.stringify(qlResult));
})();
