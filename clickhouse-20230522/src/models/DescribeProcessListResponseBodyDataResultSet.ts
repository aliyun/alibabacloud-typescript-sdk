// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListResponseBodyDataResultSet extends $dara.Model {
  /**
   * @remarks
   * The address to which the query statement is sent.
   * 
   * @example
   * 0:0:0:0:0:ffff:1edd65ea
   */
  initialAddress?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * \\"79f7e40b-87e2-4ef4-b6df-21889a3a030e\\"
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The user who executes the query statement.
   * 
   * @example
   * bany
   */
  initialUser?: string;
  /**
   * @remarks
   * The query statement that is running.
   * 
   * @example
   * select * from test
   */
  query?: string;
  /**
   * @remarks
   * The minimum query duration. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  queryDurationMs?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-07-23T10:13:23Z
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
      queryDurationMs: 'number',
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

