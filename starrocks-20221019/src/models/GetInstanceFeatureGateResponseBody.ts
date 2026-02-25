// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceFeatureGateResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  consoleControlRestart?: boolean;
  /**
   * @example
   * true
   */
  enableManageMv?: boolean;
  /**
   * @example
   * true
   */
  fullManagedSecurityGroup?: boolean;
  /**
   * @example
   * true
   */
  mountDlfMetaToken?: boolean;
  supportAddConfigTypes?: string[];
  /**
   * @example
   * true
   */
  supportBackup?: boolean;
  /**
   * @example
   * true
   */
  supportCreateAgent?: boolean;
  /**
   * @example
   * true
   */
  supportCreateNonStandardNodeGroup?: boolean;
  /**
   * @example
   * true
   */
  supportEed?: boolean;
  /**
   * @example
   * true
   */
  supportEnableAi?: boolean;
  /**
   * @example
   * true
   */
  supportEnableSSL?: boolean;
  /**
   * @example
   * true
   */
  supportFastModeModifyConfig?: boolean;
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
  supportFeGateway?: boolean;
  /**
   * @example
   * true
   */
  supportHostAlias?: boolean;
  /**
   * @example
   * true
   */
  supportModifyTimezone?: boolean;
  /**
   * @example
   * true
   */
  supportMultiAZ?: boolean;
  /**
   * @example
   * true
   */
  useComputeNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      consoleControlRestart: 'ConsoleControlRestart',
      enableManageMv: 'EnableManageMv',
      fullManagedSecurityGroup: 'FullManagedSecurityGroup',
      mountDlfMetaToken: 'MountDlfMetaToken',
      supportAddConfigTypes: 'SupportAddConfigTypes',
      supportBackup: 'SupportBackup',
      supportCreateAgent: 'SupportCreateAgent',
      supportCreateNonStandardNodeGroup: 'SupportCreateNonStandardNodeGroup',
      supportEed: 'SupportEed',
      supportEnableAi: 'SupportEnableAi',
      supportEnableSSL: 'SupportEnableSSL',
      supportFastModeModifyConfig: 'SupportFastModeModifyConfig',
      supportFastModeModifyResource: 'SupportFastModeModifyResource',
      supportFastRestart: 'SupportFastRestart',
      supportFeGateway: 'SupportFeGateway',
      supportHostAlias: 'SupportHostAlias',
      supportModifyTimezone: 'SupportModifyTimezone',
      supportMultiAZ: 'SupportMultiAZ',
      useComputeNode: 'UseComputeNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleControlRestart: 'boolean',
      enableManageMv: 'boolean',
      fullManagedSecurityGroup: 'boolean',
      mountDlfMetaToken: 'boolean',
      supportAddConfigTypes: { 'type': 'array', 'itemType': 'string' },
      supportBackup: 'boolean',
      supportCreateAgent: 'boolean',
      supportCreateNonStandardNodeGroup: 'boolean',
      supportEed: 'boolean',
      supportEnableAi: 'boolean',
      supportEnableSSL: 'boolean',
      supportFastModeModifyConfig: 'boolean',
      supportFastModeModifyResource: 'boolean',
      supportFastRestart: 'boolean',
      supportFeGateway: 'boolean',
      supportHostAlias: 'boolean',
      supportModifyTimezone: 'boolean',
      supportMultiAZ: 'boolean',
      useComputeNode: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.supportAddConfigTypes)) {
      $dara.Model.validateArray(this.supportAddConfigTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceFeatureGateResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: GetInstanceFeatureGateResponseBodyData;
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
   * B67D142D-D54E-184F-A306-22BDC01B2XXX
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 100
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
      data: GetInstanceFeatureGateResponseBodyData,
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

