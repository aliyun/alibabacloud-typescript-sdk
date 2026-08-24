// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogTasksResponseBodyDataListFilters extends $dara.Model {
  /**
   * @remarks
   * The filter parameter.
   * 
   * > For information about the supported filter parameters and their valid values, see **Additional information about request parameters**.
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
   * The analysis completion time, represented as a unix timestamp in milliseconds.
   * 
   * @example
   * 1712751923000
   */
  analysisTaskFinishTime?: number;
  /**
   * @remarks
   * The status of the analysis task.
   * 
   * > This is an internal parameter. You can ignore it.
   * 
   * @example
   * SCAN_ANALYZE_COMPLETED
   */
  analysisTaskStatus?: string;
  /**
   * @remarks
   * The task creation time, represented as a unix timestamp in milliseconds.
   * 
   * @example
   * 1681363254423
   */
  createTime?: number;
  /**
   * @remarks
   * The task end time, represented as a unix timestamp in milliseconds.
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
   * 
   * - **false**: The task has not expired.
   * 
   * @example
   * false
   */
  expire?: boolean;
  /**
   * @remarks
   * A list of filter conditions.
   */
  filters?: DescribeSqlLogTasksResponseBodyDataListFilters[];
  /**
   * @remarks
   * The VPC-internal URL for accessing the task result.
   * 
   * @example
   * https://das-sqllog-download-oss-cn-shanghai-internal.aliyuncs.com
   * /la
   */
  innerResult?: string;
  /**
   * @remarks
   * The ID of the database instance.
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
   * The name of the task.
   * 
   * @example
   * SQL audit export 1
   */
  name?: string;
  /**
   * @remarks
   * The progress of the task.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The URL that is returned when **TaskType** is set to **Export**.
   * 
   * @example
   * https://das-sqllog-download-cn-shanghai.oss-cn-shanghai.aliyuncs.com/la
   */
  result?: string;
  /**
   * @remarks
   * The total size of the scanned files, in bytes.
   * 
   * @example
   * 3000
   */
  scanFileSize?: number;
  /**
   * @remarks
   * The task start time, represented as a unix timestamp in milliseconds.
   * 
   * @example
   * 1683859555482
   */
  start?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **INIT**: pending scheduling.
   * 
   * - **RUNNING**: running.
   * 
   * - **FAILED**: failed.
   * 
   * - **CANCELED**: canceled.
   * 
   * - **COMPLETED**: completed.
   * 
   * > You can view the result of an offline task only when its status is **COMPLETED**.
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
   * - **Export**: an export task.
   * 
   * - **Query**: a query task.
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
   * The list of tasks.
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
   * The page size.
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
   * The response message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
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

