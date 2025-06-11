// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAnomalySQLListResponseBodyAnomalySQLList } from "./DescribeAnomalySqllistResponseBodyAnomalySqllist";


export class DescribeAnomalySQLListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of suspicious SQL statements.
   */
  anomalySQLList?: DescribeAnomalySQLListResponseBodyAnomalySQLList[];
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
   * The total count.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      anomalySQLList: 'AnomalySQLList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anomalySQLList: { 'type': 'array', 'itemType': DescribeAnomalySQLListResponseBodyAnomalySQLList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.anomalySQLList)) {
      $dara.Model.validateArray(this.anomalySQLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

