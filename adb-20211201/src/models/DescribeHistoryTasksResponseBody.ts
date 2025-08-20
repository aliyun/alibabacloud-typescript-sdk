// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * test
   */
  authAction?: string;
  /**
   * @example
   * test
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 141345906006****
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * test
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQFmy+hZZsvoWTQ2NTJFQUFBLUIyNjktMzk5NS05MEZCLUMxMzgwNDUwMDA2Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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
   * @example
   * {\\"steps\\":[{\\"action_info\\":{\\"Waiting\\":[\\"modifySwitchTime\\"]},\\"step_name\\":\\"exec_task\\"}]}
   */
  actionInfo?: string;
  /**
   * @example
   * 141345906006****
   */
  callerSource?: string;
  /**
   * @example
   * User
   */
  callerUid?: string;
  /**
   * @example
   * exec_task
   */
  currentStepName?: string;
  /**
   * @example
   * analyticdb
   */
  dbType?: string;
  /**
   * @example
   * 2022-02-03T12:06:17Z
   */
  endTime?: string;
  /**
   * @example
   * amv-********
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @example
   * ads
   */
  product?: string;
  /**
   * @example
   * 79.0
   */
  progress?: number;
  /**
   * @example
   * test
   */
  reasonCode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1000
   */
  remainTime?: number;
  /**
   * @example
   * 2022-02-03T11:31:03Z
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * {\\"callerUid\\":\\"test\\"}
   */
  taskDetail?: string;
  /**
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @example
   * autotest_dispatch_cases
   */
  taskType?: string;
  /**
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
  accessDeniedDetail?: DescribeHistoryTasksResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: DescribeHistoryTasksResponseBodyItems[];
  /**
   * @example
   * Success
   */
  message?: string;
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
   * @example
   * E51713A3-BB45-5616-AB15-170B704F8F01
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

