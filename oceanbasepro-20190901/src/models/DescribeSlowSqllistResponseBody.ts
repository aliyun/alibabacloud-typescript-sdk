// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowSQLListResponseBodySlowSQLList } from "./DescribeSlowSqllistResponseBodySlowSqllist";


export class DescribeSlowSQLListResponseBody extends $dara.Model {
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
   * The list of slow SQL statements.
   */
  slowSQLList?: DescribeSlowSQLListResponseBodySlowSQLList[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowSQLList: 'SlowSQLList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowSQLList: { 'type': 'array', 'itemType': DescribeSlowSQLListResponseBodySlowSQLList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slowSQLList)) {
      $dara.Model.validateArray(this.slowSQLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

