// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnceTaskResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
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
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The execution details of the task. The value of this parameter is in the JSON format.
   * 
   * *   **causeCode**: the returned code for the cause.
   * *   **causeMsg**: the returned message for the cause.
   * *   **resCode**: the returned code for troubleshooting.
   * *   **resMsg**: the returned message for troubleshooting.
   * *   **problemType**: the type of the issue.
   * *   **dispatchType**: the task delivery method.
   * *   **uuid**: the UUID of the server.
   * *   **instanceId**: the instance ID of the server.
   * *   **internetIp**: the public IP address of the server.
   * *   **intranetIp**: the private IP address of the server.
   * *   **instanceName**: the instance name of the server.
   * *   **url**: the download URL of the troubleshooting log.
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
   * The number of tasks that fail to be executed.
   * 
   * @example
   * 2
   */
  failCount?: number;
  /**
   * @remarks
   * The progress of the task. Unit: percent (%).
   * 
   * @example
   * 10%
   */
  progress?: string;
  /**
   * @remarks
   * The execution result of the task.
   * 
   * @example
   * successful
   */
  resultInfo?: string;
  /**
   * @remarks
   * The number of tasks that are executed.
   * 
   * @example
   * 7
   */
  successCount?: number;
  /**
   * @remarks
   * The timestamp that indicates the time when the task ends. Unit: milliseconds.
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
   * The name of the task.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskName?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the task starts. Unit: milliseconds.
   * 
   * @example
   * 1649732012000
   */
  taskStartTime?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **1**: The task is started.
   * *   **2**: The task is complete.
   * *   **3**: The task fails.
   * *   **4**: The task times out.
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @remarks
   * The text description of the status for the task. Valid values:
   * 
   * *   **INIT**: The task is pending start.
   * *   **START**: The task is started.
   * *   **DISPATCH**: The self-check command is issued.
   * *   **SUCCESS**: The self-check is complete.
   * *   **FAIL**: The task fails.
   * *   **TIMEOUT**: The task times out.
   * 
   * @example
   * INIT
   */
  taskStatusText?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **CLIENT_PROBLEM_CHECK**: a task of the Security Center client
   * *   **CLIENT_DEV_OPS**: an O\\&M task of Cloud Assistant
   * *   **ASSET_SECURITY_CHECK**: a task for asset information collection
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
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the tasks.
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

