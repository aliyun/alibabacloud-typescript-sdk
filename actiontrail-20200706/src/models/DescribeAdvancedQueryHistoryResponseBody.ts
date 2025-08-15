// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeAdvancedQueryHistoryResponseBodyQueryHistoryList extends $dara.Model {
  /**
   * @example
   * query-uIkIvLiVSuCKqg0yoa****
   */
  queryId?: string;
  /**
   * @example
   * event.userIdentity.accessKeyId: *
   */
  querySql?: string;
  /**
   * @example
   * false
   */
  simpleQuery?: boolean;
  /**
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
  queryHistoryList?: DescribeAdvancedQueryHistoryResponseBodyQueryHistoryList[];
  /**
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

