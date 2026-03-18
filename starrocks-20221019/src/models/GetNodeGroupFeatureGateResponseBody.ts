// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeGroupFeatureGateResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  needRestartAfterModifyDiskSize?: boolean;
  /**
   * @example
   * true
   */
  supportFastModeModifyResource?: boolean;
  /**
   * @example
   * true
   */
  supportFastRestart?: boolean;
  /**
   * @example
   * true
   */
  supportModifySpecType?: boolean;
  static names(): { [key: string]: string } {
    return {
      needRestartAfterModifyDiskSize: 'NeedRestartAfterModifyDiskSize',
      supportFastModeModifyResource: 'SupportFastModeModifyResource',
      supportFastRestart: 'SupportFastRestart',
      supportModifySpecType: 'SupportModifySpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRestartAfterModifyDiskSize: 'boolean',
      supportFastModeModifyResource: 'boolean',
      supportFastRestart: 'boolean',
      supportModifySpecType: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeGroupFeatureGateResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: GetNodeGroupFeatureGateResponseBodyData;
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
   * 3
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
      data: GetNodeGroupFeatureGateResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

