// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceFeatureGateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Whether the restart process can be controlled from the console.
   * 
   * @example
   * true
   */
  consoleControlRestart?: boolean;
  /**
   * @remarks
   * Whether materialized views can be managed.
   * 
   * @example
   * true
   */
  enableManageMv?: boolean;
  /**
   * @remarks
   * Whether managed security groups are supported.
   * 
   * @example
   * true
   */
  fullManagedSecurityGroup?: boolean;
  /**
   * @remarks
   * Whether DLF meta tokens can be mounted.
   * 
   * @example
   * true
   */
  mountDlfMetaToken?: boolean;
  /**
   * @remarks
   * A list of new configuration types.
   */
  supportAddConfigTypes?: string[];
  /**
   * @remarks
   * Whether data backup is supported.
   * 
   * - **1**: Supports data backup.
   * 
   * - **2**: Does not support data backup.
   * 
   * @example
   * true
   */
  supportBackup?: boolean;
  /**
   * @remarks
   * Whether agents can be created.
   * 
   * @example
   * true
   */
  supportCreateAgent?: boolean;
  /**
   * @remarks
   * Whether compute groups with specifications other than `standard` can be created.
   * 
   * @example
   * true
   */
  supportCreateNonStandardNodeGroup?: boolean;
  /**
   * @remarks
   * Whether elastic ephemeral disks are supported.
   * 
   * @example
   * true
   */
  supportEed?: boolean;
  /**
   * @remarks
   * Whether the AI function is supported.
   * 
   * @example
   * true
   */
  supportEnableAi?: boolean;
  /**
   * @remarks
   * Whether SSL can be enabled.
   * 
   * @example
   * true
   */
  supportEnableSSL?: boolean;
  /**
   * @remarks
   * Whether fast restart is supported for configuration changes.
   * 
   * @example
   * true
   */
  supportFastModeModifyConfig?: boolean;
  /**
   * @remarks
   * Whether resources can be modified by using fast restart.
   * 
   * @example
   * true
   */
  supportFastModeModifyResource?: boolean;
  /**
   * @remarks
   * Whether fast restart is supported.
   * 
   * @example
   * true
   */
  supportFastRestart?: boolean;
  /**
   * @remarks
   * Whether the FE gateway is supported.
   * 
   * @example
   * true
   */
  supportFeGateway?: boolean;
  /**
   * @remarks
   * Whether custom domain names are supported.
   * 
   * @example
   * true
   */
  supportHostAlias?: boolean;
  /**
   * @remarks
   * Whether the time zone can be modified.
   * 
   * @example
   * true
   */
  supportModifyTimezone?: boolean;
  /**
   * @remarks
   * Whether observers can be deployed across multiple availability zones (AZs).
   * 
   * @example
   * true
   */
  supportMultiAZ?: boolean;
  /**
   * @remarks
   * Whether the instance uses compute nodes (CNs).
   * 
   * @example
   * true
   */
  useComputeNode?: boolean;
  supportCompactionService?: boolean;
  /**
   * @remarks
   * Whether the Compaction Service allowlist feature is supported.
   * 
   * @example
   * true
   */
  supportCompactionServiceWhiteList?: boolean;
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
      supportCompactionService: 'supportCompactionService',
      supportCompactionServiceWhiteList: 'supportCompactionServiceWhiteList',
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
      supportCompactionService: 'boolean',
      supportCompactionServiceWhiteList: 'boolean',
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
   * The details of the access denial.
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
   * Indicates whether the request was successful.
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

