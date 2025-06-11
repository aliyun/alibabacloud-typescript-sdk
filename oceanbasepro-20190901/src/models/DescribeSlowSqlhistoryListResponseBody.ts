// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowSQLHistoryListResponseBodySlowSQLHistoryList } from "./DescribeSlowSqlhistoryListResponseBodySlowSqlhistoryList";


export class DescribeSlowSQLHistoryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The execution history of the slow SQL statement.
   */
  slowSQLHistoryList?: DescribeSlowSQLHistoryListResponseBodySlowSQLHistoryList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowSQLHistoryList: 'SlowSQLHistoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowSQLHistoryList: DescribeSlowSQLHistoryListResponseBodySlowSQLHistoryList,
    };
  }

  validate() {
    if(this.slowSQLHistoryList && typeof (this.slowSQLHistoryList as any).validate === 'function') {
      (this.slowSQLHistoryList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

