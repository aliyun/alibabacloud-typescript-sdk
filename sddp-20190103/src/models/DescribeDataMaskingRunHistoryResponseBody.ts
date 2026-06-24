// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataMaskingRunHistoryResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of data conflicts. This is the number of rows to be inserted into the destination table that conflict with existing data.
   * 
   * @example
   * 0
   */
  conflictCount?: number;
  /**
   * @remarks
   * The type of service to which the masked data is destined. Valid values: **1** for MaxCompute, **2** for OSS, **3** for ADS, **4** for OTS, and **5** for RDS.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The type of the destination service. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * OSS
   */
  dstTypeCode?: string;
  /**
   * @remarks
   * The time when the execution ended. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1582251233000
   */
  endTime?: number;
  /**
   * @remarks
   * The error code returned when the task fails. This parameter has a value only if the task fails.
   * 
   * @example
   * masking_task_not_found
   */
  failCode?: string;
  /**
   * @remarks
   * The reason the task failed.
   * 
   * @example
   * error
   */
  failMsg?: string;
  /**
   * @remarks
   * Indicates whether a download file is available.
   * 
   * - **1**: Yes.
   * 
   * - **0**: No.
   * 
   * @example
   * 1
   */
  hasDownloadFile?: number;
  /**
   * @remarks
   * The number of created subtasks.
   * 
   * @example
   * 4
   */
  hasSubProcess?: number;
  /**
   * @remarks
   * The ID of the execution record.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of masked rows.
   * 
   * @example
   * 100
   */
  maskingCount?: number;
  /**
   * @remarks
   * The execution progress.
   * 
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @remarks
   * The number of times the task has been executed.
   * 
   * @example
   * 1
   */
  runIndex?: number;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * add
   */
  srcTableName?: string;
  /**
   * @remarks
   * The type of service to which the source data belongs. Valid values: **1** for MaxCompute, **2** for OSS, **3** for ADS, **4** for OTS, and **5** for RDS.
   * 
   * @example
   * 2
   */
  srcType?: number;
  /**
   * @remarks
   * The type of the source service. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * OSS
   */
  srcTypeCode?: string;
  /**
   * @remarks
   * The time when the execution started. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1582251233000
   */
  startTime?: number;
  /**
   * @remarks
   * The execution status of the task. Valid values:
   * 
   * - -**1**: pending.
   * 
   * - **0**: running.
   * 
   * - **1**: successful.
   * 
   * - **2**: failed.
   * 
   * - **3**: stopped by user.
   * 
   * - **4**: partially failed.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * mt4HBgtw1B******
   */
  taskId?: string;
  /**
   * @remarks
   * The execution method. Valid values:
   * 
   * - **1**: manual.
   * 
   * - **2**: scheduled.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      conflictCount: 'ConflictCount',
      dstType: 'DstType',
      dstTypeCode: 'DstTypeCode',
      endTime: 'EndTime',
      failCode: 'FailCode',
      failMsg: 'FailMsg',
      hasDownloadFile: 'HasDownloadFile',
      hasSubProcess: 'HasSubProcess',
      id: 'Id',
      maskingCount: 'MaskingCount',
      percentage: 'Percentage',
      runIndex: 'RunIndex',
      srcTableName: 'SrcTableName',
      srcType: 'SrcType',
      srcTypeCode: 'SrcTypeCode',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictCount: 'number',
      dstType: 'number',
      dstTypeCode: 'string',
      endTime: 'number',
      failCode: 'string',
      failMsg: 'string',
      hasDownloadFile: 'number',
      hasSubProcess: 'number',
      id: 'number',
      maskingCount: 'number',
      percentage: 'number',
      runIndex: 'number',
      srcTableName: 'string',
      srcType: 'number',
      srcTypeCode: 'string',
      startTime: 'number',
      status: 'number',
      taskId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataMaskingRunHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of data masking task details.
   */
  items?: DescribeDataMaskingRunHistoryResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataMaskingRunHistoryResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

