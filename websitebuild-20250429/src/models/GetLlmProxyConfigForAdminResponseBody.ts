// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLlmProxyConfigForAdminResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The list of allowed models.
   * 
   * @example
   * qwen3.5-plus
   */
  allowedModels?: string;
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The list of blocked models.
   * 
   * @example
   * qwen3.5-plus
   */
  blockedModels?: string;
  /**
   * @remarks
   * The specific permissions granted to processes in the container. Only NET_ADMIN and NET_RAW are supported.
   * 
   * > NET_RAW is not supported by default. Submit a ticket to apply for this permission.
   * 
   * @example
   * adds2
   */
  capability?: string;
  /**
   * @remarks
   * The maximum number of requests per day.
   * 
   * @example
   * -1
   */
  dailyLimit?: number;
  /**
   * @remarks
   * The maximum number of tokens per day.
   * 
   * @example
   * -1
   */
  dailyTokenLimit?: number;
  /**
   * @remarks
   * Specifies whether scheduled delivery of resource snapshots is enabled.
   * 
   * Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * True
   */
  enabled?: boolean;
  /**
   * @remarks
   * The extended configuration in JSON format.
   * 
   * @example
   * {\\"deliveryNodeName\\":\\"绑定域名及发布\\",\\"deliveryNodeStatus\\":\\"Finish\\",\\"deliveryOperatorRole\\":\\"Provider\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 16257
   */
  id?: number;
  /**
   * @remarks
   * The IP blacklist.
   * 
   * @example
   * 121.41.11.161,10.200.255.60
   */
  ipBlacklist?: string;
  /**
   * @remarks
   * The IP whitelist. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 121.41.11.161,10.200.255.60
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The maximum number of requests per minute.
   * 
   * @example
   * -1
   */
  rpmLimit?: number;
  /**
   * @remarks
   * trial,draft,live,refunded,expired,released
   * 
   * @example
   * NORMAL
   */
  status?: number;
  /**
   * @remarks
   * The reason for suspension.
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
   * The detailed reason why access is denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retries are allowed. Valid values:
   * - false: Retries are not allowed.
   * - true: Retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name. The application with this name is queried.
   * 
   * @example
   * or
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic code. This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message. This parameter is used to replace the `%s` variable in the **ErrMessage** parameter.
   * > For example, if the **ErrMessage** parameter returns **The Value of Input Parameter %s is not valid** and the **DynamicMessage** parameter returns **DtsJobId**, the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The returned object.
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
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The exception message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is synchronously processed.
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

