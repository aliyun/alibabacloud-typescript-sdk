// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodyDataLogs } from "./DescribeSlowLogRecordsResponseBodyDataLogs";


export class DescribeSlowLogRecordsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  dbInstanceId?: number;
  /**
   * @example
   * rm-bp157g54vy772****
   */
  dbInstanceName?: string;
  /**
   * @example
   * 1672617600000
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  itemsNumbers?: number;
  logs?: DescribeSlowLogRecordsResponseBodyDataLogs[];
  /**
   * @example
   * 20
   */
  maxRecordsPerPage?: number;
  /**
   * @example
   * node123
   */
  nodeId?: string;
  /**
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @example
   * 1672531200000
   */
  startTime?: string;
  /**
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      endTime: 'EndTime',
      itemsNumbers: 'ItemsNumbers',
      logs: 'Logs',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      nodeId: 'NodeId',
      pageNumbers: 'PageNumbers',
      startTime: 'StartTime',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'number',
      dbInstanceName: 'string',
      endTime: 'string',
      itemsNumbers: 'number',
      logs: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyDataLogs },
      maxRecordsPerPage: 'number',
      nodeId: 'string',
      pageNumbers: 'number',
      startTime: 'string',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

