// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogTasksResponseBodyDataListFilters extends $dara.Model {
  /**
   * @remarks
   * The filter parameter.
   * 
   * > For supported filter parameters and their values, refer to **Supplementary description of request parameters**.
   * 
   * @example
   * keyWords
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter parameter.
   * 
   * @example
   * select
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlLogTasksResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The analysis task completion time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1712751923000
   */
  analysisTaskFinishTime?: number;
  /**
   * @remarks
   * The analysis task status.
   * 
   * > This is an internal system parameter. You do not need to pay attention to it.
   * 
   * @example
   * SCAN_ANALYZE_COMPLETED
   */
  analysisTaskStatus?: string;
  /**
   * @remarks
   * The task creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1681363254423
   */
  createTime?: number;
  /**
   * @remarks
   * The task end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1705975320000
   */
  end?: number;
  /**
   * @remarks
   * Indicates whether the task has expired. Valid values:
   * 
   * - **true**: The task has expired.
   * - **false**: The task has not expired.
   * 
   * @example
   * false
   */
  expire?: boolean;
  /**
   * @remarks
   * The list of query filter conditions.
   */
  filters?: DescribeSqlLogTasksResponseBodyDataListFilters[];
  /**
   * @remarks
   * The VPC internal endpoint.
   * 
   * @example
   * https://das-sqllog-download-oss-cn-shanghai-internal.aliyuncs.com
   * /la
   */
  innerResult?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * r-bp1nti25tc7bq5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The total number of logs.
   * 
   * @example
   * 99999
   */
  logCount?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * SQL audit export 1
   */
  name?: string;
  /**
   * @remarks
   * The task progress.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The link address when the task type is **Export**.
   * 
   * @example
   * https://das-sqllog-download-cn-shanghai.oss-cn-shanghai.aliyuncs.com/la
   */
  result?: string;
  /**
   * @remarks
   * The number of scanned files.
   * 
   * @example
   * 3000
   */
  scanFileSize?: number;
  /**
   * @remarks
   * The task start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1683859555482
   */
  start?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **INIT**: Pending scheduling.
   * - **RUNNING**: Running.
   * - **FAILED**: Failed.
   * - **CANCELED**: Canceled.
   * - **COMPLETED**: Completed.
   * 
   * > When the task is in the **COMPLETED** state, you can view the results of the batch task.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 9a4f5c4494dbd6713185d87a97aa53e8
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **Export**: export task.
   * - **Query**: query task.
   * 
   * @example
   * Export
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      analysisTaskFinishTime: 'AnalysisTaskFinishTime',
      analysisTaskStatus: 'AnalysisTaskStatus',
      createTime: 'CreateTime',
      end: 'End',
      expire: 'Expire',
      filters: 'Filters',
      innerResult: 'InnerResult',
      instanceId: 'InstanceId',
      logCount: 'LogCount',
      name: 'Name',
      progress: 'Progress',
      result: 'Result',
      scanFileSize: 'ScanFileSize',
      start: 'Start',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTaskFinishTime: 'number',
      analysisTaskStatus: 'string',
      createTime: 'number',
      end: 'number',
      expire: 'boolean',
      filters: { 'type': 'array', 'itemType': DescribeSqlLogTasksResponseBodyDataListFilters },
      innerResult: 'string',
      instanceId: 'string',
      logCount: 'number',
      name: 'string',
      progress: 'number',
      result: 'string',
      scanFileSize: 'number',
      start: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlLogTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned information.
   */
  list?: DescribeSqlLogTasksResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 40
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeSqlLogTasksResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
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

export class DescribeSqlLogTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeSqlLogTasksResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * >If the request is successful, **Successful** is returned. If the request fails, an error message is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSqlLogTasksResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

