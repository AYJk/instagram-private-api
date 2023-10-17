import { Repository } from '../core/repository';
import { BluesGraphQLRequestOptions } from '../types';

export class BluesGraphQLRepository extends Repository {
  public async graphQL<T extends { data: any }>(options: BluesGraphQLRequestOptions): Promise<T> {
    const { body } = await this.client.request.send<T>(
      {
        url: '/graphql/query/',
        method: 'GET',
        qs: {
          query_hash: options.query_hash,
          variables: JSON.stringify(options.variables),
        },
      },
      true,
    );
    return body;
  }
}
