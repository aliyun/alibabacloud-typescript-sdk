// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataMaskingRunHistoryResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of data conflict rows, which indicates the number of rows where the masked data to be inserted into the destination table conflicts with the existing data in the destination table.
   * 
   * @example
   * 0
   */
  conflictCount?: number;
  /**
   * @remarks
   * The type of the destination product where the masked data is stored. Valid values: **1**: MaxCompute, **2**: OSS, **3**: ADS, **4**: OTS, **5**: RDS, and others.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The type of the destination product. Valid values: **MaxCompute, OSS, ADS, OTS, RDS**, and others.
   * 
   * @example
   * OSS
   */
  dstTypeCode?: string;
  /**
   * @remarks
   * The end time of the execution.
   * 
   * @example
   * 1582251233000
   */
  endTime?: number;
  /**
   * @remarks
   * The error code for the task execution failure. This parameter has a value only when the task execution fails.
   * 
   * @example
   * masking_task_not_found
   */
  failCode?: string;
  /**
   * @remarks
   * The reason for the task execution failure.
   * 
   * @example
   * error
   */
  failMsg?: string;
  /**
   * @remarks
   * Indicates whether a download file exists. Valid values:
   * 
   * - **1**: Yes.
   * - **0**: No.
   * 
   * @example
   * 1
   */
  hasDownloadFile?: number;
  /**
   * @remarks
   * The number of subtasks that have been created.
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
   * The number of rows masked.
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
   * The sequence number of the task execution.
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
   * The type of the source product to which the data to be masked belongs. Valid values: **1**: MaxCompute, **2**: OSS, **3**: ADS, **4**: OTS, **5**: RDS, and others.
   * 
   * @example
   * 2
   */
  srcType?: number;
  /**
   * @remarks
   * The type of the source product. Valid values: **MaxCompute, OSS, ADS, OTS, RDS**, and others.
   * 
   * @example
   * OSS
   */
  srcTypeCode?: string;
  /**
   * @remarks
   * The execution time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1582251233000
   */
  startTime?: number;
  /**
   * @remarks
   * The task execution status. Valid values:
   * - **-1**: Waiting for execution.
   * - **0**: Running.
   * - **1**: Executed successfully.
   * - **2**: Execution failed.
   * - **3**: Terminated by user.
   * - **4**: Partially failed.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * mt4HBgtw1B******
   */
  taskId?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * - **1**: Manual.
   * - **2**: Scheduled.
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
   * The page number of the current page in the results.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of data masking task information.
   */
  items?: DescribeDataMaskingRunHistoryResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page in the results.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 769FB3C1-F4C9-4******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the results.
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

