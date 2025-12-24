// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutionsResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  attempt?: number;
  /**
   * @example
   * 2024-11-12 14:52:42
   */
  dataTime?: string;
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 2024-11-12 14:52:42
   */
  endTime?: string;
  /**
   * @example
   * 1827811800526000
   */
  executor?: string;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @example
   * name=zhangsan
   */
  parameters?: string;
  /**
   * @example
   * success
   */
  result?: string;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @example
   * 2024-11-12 14:52:42
   */
  scheduleTime?: string;
  /**
   * @example
   * 28.0.168.46
   */
  serverIp?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * 1000
   */
  totalTokens?: number;
  /**
   * @example
   * 1
   */
  triggerType?: number;
  /**
   * @example
   * http://192.168.1.9:9999/
   */
  workAddr?: string;
  /**
   * @example
   * 100
   */
  workflowExecutionId?: string;
  /**
   * @example
   * 10
   */
  workflowId?: number;
  /**
   * @example
   * myWorkflow
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attempt: 'Attempt',
      dataTime: 'DataTime',
      duration: 'Duration',
      endTime: 'EndTime',
      executor: 'Executor',
      jobExecutionId: 'JobExecutionId',
      jobId: 'JobId',
      jobName: 'JobName',
      jobType: 'JobType',
      parameters: 'Parameters',
      result: 'Result',
      routeStrategy: 'RouteStrategy',
      scheduleTime: 'ScheduleTime',
      serverIp: 'ServerIp',
      status: 'Status',
      timeType: 'TimeType',
      totalTokens: 'TotalTokens',
      triggerType: 'TriggerType',
      workAddr: 'WorkAddr',
      workflowExecutionId: 'WorkflowExecutionId',
      workflowId: 'WorkflowId',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attempt: 'number',
      dataTime: 'string',
      duration: 'number',
      endTime: 'string',
      executor: 'string',
      jobExecutionId: 'string',
      jobId: 'number',
      jobName: 'string',
      jobType: 'string',
      parameters: 'string',
      result: 'string',
      routeStrategy: 'number',
      scheduleTime: 'string',
      serverIp: 'string',
      status: 'number',
      timeType: 'number',
      totalTokens: 'number',
      triggerType: 'number',
      workAddr: 'string',
      workflowExecutionId: 'string',
      workflowId: 'number',
      workflowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListJobExecutionsResponseBodyDataRecords[];
  /**
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListJobExecutionsResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListJobExecutionsResponseBodyData;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 6BCE89B3-E882-511D-9A75-D452A56EC4B1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
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
      code: 'number',
      data: ListJobExecutionsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

