// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationActivityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The activity ID.
   * 
   * @example
   * ac-8f3f7c4026e3****
   */
  activityId?: string;
  /**
   * @remarks
   * The activity status. Valid values:
   * 
   * - COMPLETED
   * - RUNNING
   * 
   * @example
   * COMPLETED
   */
  activityStatus?: string;
  consoleRetryCount?: number;
  /**
   * @remarks
   * The end time of the activity.
   * 
   * @example
   * 1742178604000
   */
  endTime?: number;
  errMessage?: string;
  /**
   * @remarks
   * The activity name.
   * 
   * @example
   * UpdateClusterStatusToModifyingConfigStatus
   */
  name?: string;
  /**
   * @remarks
   * The start time of the activity.
   * 
   * @example
   * 1742178604000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityStatus: 'ActivityStatus',
      consoleRetryCount: 'ConsoleRetryCount',
      endTime: 'EndTime',
      errMessage: 'ErrMessage',
      name: 'Name',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityStatus: 'string',
      consoleRetryCount: 'number',
      endTime: 'number',
      errMessage: 'string',
      name: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationActivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission verification failure.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListOperationActivityResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 440
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': ListOperationActivityResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

