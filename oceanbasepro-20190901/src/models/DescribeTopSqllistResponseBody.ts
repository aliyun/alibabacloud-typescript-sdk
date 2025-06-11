// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTopSQLListResponseBodyTopSQLList } from "./DescribeTopSqllistResponseBodyTopSqllist";


export class DescribeTopSQLListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud CLI
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The I/O wait time, in ms.
   */
  topSQLList?: DescribeTopSQLListResponseBodyTopSQLList[];
  /**
   * @remarks
   * It is an online CLI tool that allows you to quickly retrieve and debug APIs. It can dynamically generate executable SDK code samples.
   * 
   * @example
   * 9
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topSQLList: 'TopSQLList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topSQLList: { 'type': 'array', 'itemType': DescribeTopSQLListResponseBodyTopSQLList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.topSQLList)) {
      $dara.Model.validateArray(this.topSQLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

