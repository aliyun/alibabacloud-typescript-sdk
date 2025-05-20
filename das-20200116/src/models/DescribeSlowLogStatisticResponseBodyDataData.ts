// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogStatisticResponseBodyDataDataLogs } from "./DescribeSlowLogStatisticResponseBodyDataDataLogs";


export class DescribeSlowLogStatisticResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * rm-k2ja51w7cnusg5a1x
   */
  dbInstanceId?: number;
  /**
   * @example
   * 0
   */
  dbInstanceName?: string;
  /**
   * @example
   * 2024-08-08T02:15:00Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  itemsNumbers?: number;
  logs?: DescribeSlowLogStatisticResponseBodyDataDataLogs[];
  /**
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @example
   * pi-wz99g5rn7w1x8h0sf
   */
  nodeId?: string;
  /**
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @example
   * 2024-10-08T02:01:00Z
   */
  startTime?: string;
  /**
   * @example
   * 13
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
      logs: { 'type': 'array', 'itemType': DescribeSlowLogStatisticResponseBodyDataDataLogs },
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

