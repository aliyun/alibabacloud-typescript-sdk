// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceFeatureGateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the restart process can be controlled from the console.
   * 
   * @example
   * true
   */
  consoleControlRestart?: boolean;
  /**
   * @remarks
   * Indicates whether materialized view management is supported.
   * 
   * @example
   * true
   */
  enableManageMv?: boolean;
  /**
   * @remarks
   * Indicates whether fully managed security groups are supported.
   * 
   * @example
   * true
   */
  fullManagedSecurityGroup?: boolean;
  /**
   * @remarks
   * Indicates whether mounting DLF meta tokens is supported.
   * 
   * @example
   * true
   */
  mountDlfMetaToken?: boolean;
  /**
   * @remarks
   * The list of added configuration types.
   */
  supportAddConfigTypes?: string[];
  /**
   * @remarks
   * Specifies whether data backup is supported. Valid values:
   * 
   * - **1**: Data backup is supported.
   * - **2**: Data backup is not supported.
   * 
   * @example
   * true
   */
  supportBackup?: boolean;
  supportConvertComputeFreeToPostPaid?: boolean;
  /**
   * @remarks
   * Indicates whether agent creation is supported.
   * 
   * @example
   * true
   */
  supportCreateAgent?: boolean;
  /**
   * @remarks
   * Indicates whether compute groups of non-standard specifications can be created.
   * 
   * @example
   * true
   */
  supportCreateNonStandardNodeGroup?: boolean;
  /**
   * @remarks
   * Indicates whether elastic ephemeral disks are supported.
   * 
   * @example
   * true
   */
  supportEed?: boolean;
  /**
   * @remarks
   * Indicates whether AI functions are supported.
   * 
   * @example
   * true
   */
  supportEnableAi?: boolean;
  /**
   * @remarks
   * Indicates whether SSL can be enabled.
   * 
   * @example
   * true
   */
  supportEnableSSL?: boolean;
  /**
   * @remarks
   * Indicates whether fast restart is supported during configuration changes.
   * 
   * @example
   * true
   */
  supportFastModeModifyConfig?: boolean;
  /**
   * @remarks
   * Indicates whether resources can be modified by using fast restart.
   * 
   * @example
   * true
   */
  supportFastModeModifyResource?: boolean;
  /**
   * @remarks
   * Indicates whether fast restart is supported.
   * 
   * @example
   * true
   */
  supportFastRestart?: boolean;
  /**
   * @remarks
   * Indicates whether FE gateways are supported.
   * 
   * @example
   * true
   */
  supportFeGateway?: boolean;
  /**
   * @remarks
   * Indicates whether custom domain names are supported.
   * 
   * @example
   * true
   */
  supportHostAlias?: boolean;
  /**
   * @remarks
   * Indicates whether the time zone can be modified.
   * 
   * @example
   * true
   */
  supportModifyTimezone?: boolean;
  /**
   * @remarks
   * Indicates whether multi-zone deployment of Observers is supported.
   * 
   * @example
   * true
   */
  supportMultiAZ?: boolean;
  /**
   * @remarks
   * Indicates whether compute nodes are used.
   * 
   * @example
   * true
   */
  useComputeNode?: boolean;
  /**
   * @remarks
   * Specifies whether the compaction service is supported.
   */
  supportCompactionService?: boolean;
  /**
   * @remarks
   * Specifies whether the compaction service whitelist feature is supported.
   * 
   * @example
   * true
   */
  supportCompactionServiceWhiteList?: boolean;
  /**
   * @remarks
   * Specifies whether load-based auto scaling rules can be created. This is determined based on the featureEnabled field, the canary release status of the resource owner UID, and the mode, version, architecture, and plan. It does not indicate whether existing rules continue to be executed.
   */
  supportLoadBasedAutoScaling?: boolean;
  static names(): { [key: string]: string } {
    return {
      consoleControlRestart: 'ConsoleControlRestart',
      enableManageMv: 'EnableManageMv',
      fullManagedSecurityGroup: 'FullManagedSecurityGroup',
      mountDlfMetaToken: 'MountDlfMetaToken',
      supportAddConfigTypes: 'SupportAddConfigTypes',
      supportBackup: 'SupportBackup',
      supportConvertComputeFreeToPostPaid: 'SupportConvertComputeFreeToPostPaid',
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
      supportCompactionService: 'supportCompactionService',
      supportCompactionServiceWhiteList: 'supportCompactionServiceWhiteList',
      supportLoadBasedAutoScaling: 'supportLoadBasedAutoScaling',
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
      supportConvertComputeFreeToPostPaid: 'boolean',
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
      supportCompactionService: 'boolean',
      supportCompactionServiceWhiteList: 'boolean',
      supportLoadBasedAutoScaling: 'boolean',
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
  /**
   * @remarks
   * The returned data.
   */
  data?: GetInstanceFeatureGateResponseBodyData;
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
   * B67D142D-D54E-184F-A306-22BDC01B2XXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of instances.
   * 
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

