// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnceTaskResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of client tasks displayed on the current page in a paged query.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of client tasks per page in a paged query. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of client tasks returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnceTaskResponseBodyTaskManageResponseList extends $dara.Model {
  /**
   * @remarks
   * The task execution details. This parameter is in JSON format.
   * 
   * - **causeCode**: the return code of the troubleshooting cause.
   * - **causeMsg**: the return message of the troubleshooting cause.
   * - **resCode**: the troubleshooting return code.
   * - **resMsg**: the troubleshooting return message.
   * - **problemType**: the problem type.
   * - **dispatchType**: the task dispatch method.
   * - **uuid**: the server UUID.
   * - **instanceId**: the ID of the server instance.
   * - **internetIp**: the public IP address of the server.
   * - **intranetIp**: the private IP address of the server.
   * - **instanceName**: the name of the server instance.
   * - **url**: the download URL of the troubleshooting log.
   * 
   * @example
   * [
   *       {
   *             "dispatchType": "manual",
   *             "causeMsg": [],
   *             "causeCode": [],
   *             "resCode": [
   *                   "1003"
   *             ],
   *             "resMsg": [
   *                   "powershell -executionpolicy bypass -c \\"(New-Object Net.WebClient).DownloadFile(\\"http://aegis.alicdn.com/download/aegis_client_self_check/win32/aegis_checker.exe\\", $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath(\\".\\\\\\\\aegis_checker.exe\\"))\\"; \\"./aegis_checker.exe -b eyJtb2RlIjoxLCJqc3J2X2RvbWFpbiI6W10sImlzc3VlIjoib2ZmbGluZSIsInVwZGF0ZV9kb21haW4iOltdLCJ1dWlkIjoiaW5ldC1lYWUwNDg2Ny0wMDJmLTQyM2QtYWYwMC1jNzJjZDYyOWIyNDgiLCJjbWRfaWR4IjoiNDRjZThiZWI3ZGYyYTQxMjQ1NGM4ZDc5OTE1ODI1MzMifQ==\\""
   *             ],
   *             "problemType": "offline",
   *             "uuid": "inet-eae04867-002f-423d-af00-c72cd629****"
   *       }
   * ]
   */
  detailData?: string;
  /**
   * @remarks
   * The number of tasks that failed to be executed.
   * 
   * @example
   * 2
   */
  failCount?: number;
  /**
   * @remarks
   * The task progress, in percentage.
   * 
   * @example
   * 10%
   */
  progress?: string;
  /**
   * @remarks
   * The task execution result.
   * 
   * @example
   * successful
   */
  resultInfo?: string;
  /**
   * @remarks
   * The number of tasks that are executed successfully.
   * 
   * @example
   * 7
   */
  successCount?: number;
  /**
   * @remarks
   * The timestamp when the task actually ends. Unit: milliseconds.
   * 
   * @example
   * 1650267989000
   */
  taskEndTime?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * e900f528f5a6229bb640ca27cb44c98e
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskName?: string;
  /**
   * @remarks
   * The timestamp when the task actually starts. Unit: milliseconds.
   * 
   * @example
   * 1649732012000
   */
  taskStartTime?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - **1**: Started.
   * - **2**: Completed.
   * - **3**: Failed.
   * - **4**: Timed out.
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @remarks
   * The text representation of the task status. Valid values:
   * - **INIT**: Pending.
   * - **START**: Started.
   * - **DISPATCH**: Self-check command dispatched.
   * - **SUCCESS**: Self-check completed.
   * - **FAIL**: Execution failed.
   * - **TIMEOUT**: Timed out.
   * 
   * @example
   * INIT
   */
  taskStatusText?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **CLIENT_PROBLEM_CHECK**: client task
   * - **CLIENT_DEV_OPS**: cloud O&M task
   * - **ASSET_SECURITY_CHECK**: asset information collection task.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      detailData: 'DetailData',
      failCount: 'FailCount',
      progress: 'Progress',
      resultInfo: 'ResultInfo',
      successCount: 'SuccessCount',
      taskEndTime: 'TaskEndTime',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStartTime: 'TaskStartTime',
      taskStatus: 'TaskStatus',
      taskStatusText: 'TaskStatusText',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailData: 'string',
      failCount: 'number',
      progress: 'string',
      resultInfo: 'string',
      successCount: 'number',
      taskEndTime: 'number',
      taskId: 'string',
      taskName: 'string',
      taskStartTime: 'number',
      taskStatus: 'number',
      taskStatusText: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnceTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeOnceTaskResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of client task query results.
   */
  taskManageResponseList?: DescribeOnceTaskResponseBodyTaskManageResponseList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      taskManageResponseList: 'TaskManageResponseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeOnceTaskResponseBodyPageInfo,
      requestId: 'string',
      taskManageResponseList: { 'type': 'array', 'itemType': DescribeOnceTaskResponseBodyTaskManageResponseList },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.taskManageResponseList)) {
      $dara.Model.validateArray(this.taskManageResponseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

