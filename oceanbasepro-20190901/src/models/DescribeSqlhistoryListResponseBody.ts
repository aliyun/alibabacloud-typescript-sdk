// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLHistoryListResponseBodySQLHistoryList } from "./DescribeSqlhistoryListResponseBodySqlhistoryList";


export class DescribeSQLHistoryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The execution history of the SQL statement.
   */
  SQLHistoryList?: DescribeSQLHistoryListResponseBodySQLHistoryList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLHistoryList: 'SQLHistoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLHistoryList: DescribeSQLHistoryListResponseBodySQLHistoryList,
    };
  }

  validate() {
    if(this.SQLHistoryList && typeof (this.SQLHistoryList as any).validate === 'function') {
      (this.SQLHistoryList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

