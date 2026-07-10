// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListResponseBodyDataResultSet extends $dara.Model {
  /**
   * @remarks
   * The address from which the query was initiated.
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
   * The user who initiated the query.
   * 
   * @example
   * bany
   */
  initialUser?: string;
  /**
   * @remarks
   * The query statement.
   * 
   * @example
   * select * from test
   */
  query?: string;
  /**
   * @remarks
   * The execution duration of the query, in milliseconds (ms).
   * 
   * @example
   * 1000
   */
  queryDurationMs?: number;
  /**
   * @remarks
   * The start time of the query. The time is in UTC and follows the `yyyy-MM-ddTHH:mm:ssZ` format.
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

export class DescribeProcessListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-xxxx
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * For testing
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The result set.
   */
  resultSet?: DescribeProcessListResponseBodyDataResultSet[];
  /**
   * @remarks
   * The total number of entries that match the filter criteria.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      resultSet: 'ResultSet',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      resultSet: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyDataResultSet },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultSet)) {
      $dara.Model.validateArray(this.resultSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   */
  data?: DescribeProcessListResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx-xxx-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeProcessListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

