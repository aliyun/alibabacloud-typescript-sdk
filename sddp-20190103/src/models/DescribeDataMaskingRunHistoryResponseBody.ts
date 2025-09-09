// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataMaskingRunHistoryResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of rows that are in conflict with the data to be de-identified in the destination table to which the data to be de-identified is moved.
   * 
   * @example
   * 0
   */
  conflictCount?: number;
  /**
   * @remarks
   * The type of the service to which the de-identified data belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The service that stores the de-identified data. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * OSS
   */
  dstTypeCode?: string;
  /**
   * @remarks
   * The end time of the de-identification task.
   * 
   * @example
   * 1582251233000
   */
  endTime?: number;
  /**
   * @remarks
   * The error code that is returned when the de-identification task fails.
   * 
   * @example
   * masking_task_not_found
   */
  failCode?: string;
  /**
   * @remarks
   * The reason why the de-identification task fails.
   * 
   * @example
   * error
   */
  failMsg?: string;
  /**
   * @remarks
   * Indicates whether a file is available for download.
   * 
   * *   **1**: yes
   * *   **0**: no
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
   * The ID of the task execution record.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of rows that are de-identified.
   * 
   * @example
   * 100
   */
  maskingCount?: number;
  /**
   * @remarks
   * The progress of the de-identification task.
   * 
   * @example
   * 100
   */
  percentage?: number;
  /**
   * @remarks
   * The number of times that the de-identification task is executed.
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
   * The type of the service to which the data to be de-identified belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  srcType?: number;
  /**
   * @remarks
   * The service to which the data to be de-identified belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * OSS
   */
  srcTypeCode?: string;
  /**
   * @remarks
   * The time when the de-identification task was executed. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1582251233000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the de-identification task. Valid values:
   * 
   * *   **-1**: waiting
   * *   **0**: being executed
   * *   **1**: executed
   * *   **2**: failed to be executed
   * *   **3**: terminated
   * *   **4**: partially failed
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the identification task.
   * 
   * @example
   * mt4HBgtw1B******
   */
  taskId?: string;
  /**
   * @remarks
   * The mode in which the de-identification task is executed. Valid values:
   * 
   * *   **1**: manual
   * *   **2**: scheduled
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
   * The execution information about the de-identification task.
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

