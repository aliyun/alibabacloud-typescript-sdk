// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLHistoryListResponseBodySQLHistoryListList } from "./DescribeSqlhistoryListResponseBodySqlhistoryListList";


export class DescribeSQLHistoryListResponseBodySQLHistoryList extends $dara.Model {
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  count?: number;
  list?: DescribeSQLHistoryListResponseBodySQLHistoryListList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      list: { 'type': 'array', 'itemType': DescribeSQLHistoryListResponseBodySQLHistoryListList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

