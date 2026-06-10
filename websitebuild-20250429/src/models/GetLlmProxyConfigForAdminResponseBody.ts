// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLlmProxyConfigForAdminResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * List of supported models
   * 
   * @example
   * qwen3.5-plus
   */
  allowedModels?: string;
  /**
   * @remarks
   * Business ID of the application instance
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * List of blocked models
   * 
   * @example
   * qwen3.5-plus
   */
  blockedModels?: string;
  /**
   * @remarks
   * Grants specific permissions to processes within the container. Currently, only NET_ADMIN and NET_RAW are supported.  
   * 
   * > NET_RAW is not supported by default. You must submit a ticket to request it.
   * 
   * @example
   * adds2
   */
  capability?: string;
  /**
   * @remarks
   * Daily request quota
   * 
   * @example
   * -1
   */
  dailyLimit?: number;
  /**
   * @remarks
   * Daily token quota
   * 
   * @example
   * -1
   */
  dailyTokenLimit?: number;
  /**
   * @remarks
   * Indicates whether scheduled delivery of resource snapshots is enabled.  
   * 
   * Valid values:  
   * - true: Enabled.  
   * - false: Shutdown.
   * 
   * @example
   * True
   */
  enabled?: boolean;
  /**
   * @remarks
   * Extension configuration (in JSON format)
   * 
   * @example
   * {\\"deliveryNodeName\\":\\"绑定域名及发布\\",\\"deliveryNodeStatus\\":\\"Finish\\",\\"deliveryOperatorRole\\":\\"Provider\\"}
   */
  extend?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary key
   * 
   * @example
   * 16257
   */
  id?: number;
  /**
   * @remarks
   * IP blacklist
   * 
   * @example
   * 121.41.11.161,10.200.255.60
   */
  ipBlacklist?: string;
  /**
   * @remarks
   * IP whitelist, with multiple entries separated by commas
   * 
   * @example
   * 121.41.11.161,10.200.255.60
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * Requests per minute quota
   * 
   * @example
   * -1
   */
  rpmLimit?: number;
  /**
   * @remarks
   * trial, draft, live, refunded, expired, released
   * 
   * @example
   * NORMAL
   */
  status?: number;
  /**
   * @remarks
   * Reason for pause.
   * 
   * @example
   * xxx
   */
  suspendReason?: string;
  static names(): { [key: string]: string } {
    return {
      allowedModels: 'AllowedModels',
      bizId: 'BizId',
      blockedModels: 'BlockedModels',
      capability: 'Capability',
      dailyLimit: 'DailyLimit',
      dailyTokenLimit: 'DailyTokenLimit',
      enabled: 'Enabled',
      extend: 'Extend',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ipBlacklist: 'IpBlacklist',
      ipWhitelist: 'IpWhitelist',
      rpmLimit: 'RpmLimit',
      status: 'Status',
      suspendReason: 'SuspendReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModels: 'string',
      bizId: 'string',
      blockedModels: 'string',
      capability: 'string',
      dailyLimit: 'number',
      dailyTokenLimit: 'number',
      enabled: 'boolean',
      extend: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ipBlacklist: 'string',
      ipWhitelist: 'string',
      rpmLimit: 'number',
      status: 'number',
      suspendReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLlmProxyConfigForAdminResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed reason for access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed. Valid values:  
   * - false: Retry is not allowed.  
   * - true: Retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * Application name. Query the application with this name.
   * 
   * @example
   * or
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic code. This parameter is not used and can be ignored.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > For example, if **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Error parameters returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Returned object.
   */
  module?: GetLlmProxyConfigForAdminResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is processed synchronously.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      module: 'Module',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      module: GetLlmProxyConfigForAdminResponseBodyModule,
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

