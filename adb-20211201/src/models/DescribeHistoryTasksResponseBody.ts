// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * null
   * 
   * @example
   * test
   */
  authAction?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * test
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * 141345906006****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * test
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * AQFmy+hZZsvoWTQ2NTJFQUFBLUIyNjktMzk5NS05MEZCLUMxMzgwNDUwMDA2Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * null
   * 
   * *   **null**
   * *   **null**
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * null
   * 
   * *   **null**
   * *   **null**
   * *   **null**
   * *   **null**
   * *   **null**
   * 
   * @example
   * ControlPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Allowed operation information. When used specifically, matches operation Action based on currentStepName+status in this information. If no Action is matched, represents task current status does not support operations.
   * 
   * @example
   * {\\"steps\\":[{\\"action_info\\":{\\"Waiting\\":[\\"modifySwitchTime\\"]},\\"step_name\\":\\"exec_task\\"}]}
   */
  actionInfo?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * 141345906006****
   */
  callerSource?: string;
  /**
   * @remarks
   * null
   * 
   * *   **null**
   * *   **null**
   * 
   * @example
   * User
   */
  callerUid?: string;
  /**
   * @remarks
   * Current executing step name. If empty, represents task has not started.
   * 
   * @example
   * exec_task
   */
  currentStepName?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * analyticdb
   */
  dbType?: string;
  /**
   * @remarks
   * Task end time.
   * 
   * @example
   * 2022-02-03T12:06:17Z
   */
  endTime?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * amv-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * Instance type.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * ads
   */
  product?: string;
  /**
   * @remarks
   * Indicates the task progress.
   * 
   * @example
   * 79.0
   */
  progress?: number;
  /**
   * @remarks
   * The reason why the current task was initiated.
   * 
   * @example
   * test
   */
  reasonCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Estimated remaining execution time, in seconds.
   * 
   * @example
   * 1000
   */
  remainTime?: number;
  /**
   * @remarks
   * Task start time.
   * 
   * @example
   * 2022-02-03T11:31:03Z
   */
  startTime?: string;
  /**
   * @remarks
   * Task status. Valid values:
   * 
   * *   **Scheduled**
   * *   **Running**
   * *   **Succeed**
   * *   **Failed**: The task failed.
   * *   **Cancelling**
   * *   **Canceled**
   * *   **Waiting**
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task details.
   * 
   * @example
   * {\\"callerUid\\":\\"test\\"}
   */
  taskDetail?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @remarks
   * Task type.
   * 
   * @example
   * autotest_dispatch_cases
   */
  taskType?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * 141345906006****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      actionInfo: 'ActionInfo',
      callerSource: 'CallerSource',
      callerUid: 'CallerUid',
      currentStepName: 'CurrentStepName',
      dbType: 'DbType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      product: 'Product',
      progress: 'Progress',
      reasonCode: 'ReasonCode',
      regionId: 'RegionId',
      remainTime: 'RemainTime',
      startTime: 'StartTime',
      status: 'Status',
      taskDetail: 'TaskDetail',
      taskId: 'TaskId',
      taskType: 'TaskType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionInfo: 'string',
      callerSource: 'string',
      callerUid: 'string',
      currentStepName: 'string',
      dbType: 'string',
      endTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      product: 'string',
      progress: 'number',
      reasonCode: 'string',
      regionId: 'string',
      remainTime: 'number',
      startTime: 'string',
      status: 'string',
      taskDetail: 'string',
      taskId: 'string',
      taskType: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * null
   */
  accessDeniedDetail?: DescribeHistoryTasksResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The task list.
   */
  items?: DescribeHistoryTasksResponseBodyItems[];
  /**
   * @remarks
   * The returned message. null
   * 
   * *   null****
   * *   null
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * Request ID.
   * 
   * @example
   * E51713A3-BB45-5616-AB15-170B704F8F01
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total record count.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeHistoryTasksResponseBodyAccessDeniedDetail,
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': DescribeHistoryTasksResponseBodyItems },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

