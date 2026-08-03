// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeAdvancedQueryHistoryResponseBodyQueryHistoryList extends $dara.Model {
  /**
   * @remarks
   * The ID of the advanced query record.
   * 
   * @example
   * query-uIkIvLiVSuCKqg0yoa****
   */
  queryId?: string;
  /**
   * @remarks
   * The conditional statement for the query.
   * 
   * @example
   * event.userIdentity.accessKeyId: *
   */
  querySql?: string;
  /**
   * @remarks
   * Indicates whether simple query mode is enabled.
   * 
   * @example
   * false
   */
  simpleQuery?: boolean;
  /**
   * @remarks
   * The time when the advanced query record was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1753695874000
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      querySql: 'QuerySql',
      simpleQuery: 'SimpleQuery',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      querySql: 'string',
      simpleQuery: 'boolean',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvancedQueryHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of advanced query records.
   */
  queryHistoryList?: DescribeAdvancedQueryHistoryResponseBodyQueryHistoryList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 19F032B7-5FD8-5AC9-97FD-ACF54371****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryHistoryList: 'QueryHistoryList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryHistoryList: { 'type': 'array', 'itemType': DescribeAdvancedQueryHistoryResponseBodyQueryHistoryList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryHistoryList)) {
      $dara.Model.validateArray(this.queryHistoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

