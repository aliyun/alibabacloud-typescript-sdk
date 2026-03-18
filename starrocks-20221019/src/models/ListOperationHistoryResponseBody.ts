// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHistoryResponseBodyData extends $dara.Model {
  /**
   * @example
   * FE enable = true
   */
  afterValue?: string;
  /**
   * @example
   * FE enable = false
   */
  beforeValue?: string;
  /**
   * @example
   * 1742179008000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1742179008000
   */
  gmtEnd?: number;
  /**
   * @example
   * c-cd7a3a6f2186d5c9
   */
  instanceId?: string;
  operationDetail?: string;
  /**
   * @example
   * op-f49743caa809****
   */
  operationId?: string;
  /**
   * @example
   * COMPLETED
   */
  operationStatus?: string;
  /**
   * @example
   * upgrade_version
   */
  operationType?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      afterValue: 'AfterValue',
      beforeValue: 'BeforeValue',
      gmtCreate: 'GmtCreate',
      gmtEnd: 'GmtEnd',
      instanceId: 'InstanceId',
      operationDetail: 'OperationDetail',
      operationId: 'OperationId',
      operationStatus: 'OperationStatus',
      operationType: 'OperationType',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterValue: 'string',
      beforeValue: 'string',
      gmtCreate: 'number',
      gmtEnd: 'number',
      instanceId: 'string',
      operationDetail: 'string',
      operationId: 'string',
      operationStatus: 'string',
      operationType: 'string',
      progress: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: ListOperationHistoryResponseBodyData[];
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 832
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
      data: { 'type': 'array', 'itemType': ListOperationHistoryResponseBodyData },
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

