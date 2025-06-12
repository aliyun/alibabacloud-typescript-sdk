// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListResponseBodyProcessListDataResultSet extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client that initiates the query.
   * 
   * @example
   * ::ffff:10.1.XX.XX
   */
  initialAddress?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 2dd144fd-4230-4249-b15c-e63f964fbb5a
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The database account.
   * 
   * @example
   * test
   */
  initialUser?: string;
  /**
   * @remarks
   * The SQL statement that is executed in the query.
   * 
   * @example
   * select * from test order by score limit 1;
   */
  query?: string;
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  queryDurationMs?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2021-02-02T09:14:48Z
   */
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialAddress: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      query: 'string',
      queryDurationMs: 'string',
      queryStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

