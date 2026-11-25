// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLlmProxyConfigForAdminResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The list of supported models.
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
   * Grants specific permissions to processes in the container. Currently, only NET_ADMIN and NET_RAW are supported.
   * 
   * > NET_RAW is not supported by default. Submit a ticket to apply for this permission.
   * 
   * @example
   * adds2
   */
  capability?: string;
  /**
   * @remarks
   * The daily request limit.
   * 
   * @example
   * -1
   */
  dailyLimit?: number;
  /**
   * @remarks
   * The daily token limit.
   * 
   * @example
   * -1
   */
  dailyTokenLimit?: number;
  /**
   * @remarks
   * Specifies whether to enable scheduled delivery of resource snapshots.
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
   * {"deliveryNodeName":"Bind domain name and publish","deliveryNodeStatus":"Finish","deliveryOperatorRole":"Provider"}
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
   * The IP whitelist. Separate multiple IP addresses with commas.
   * 
   * @example
   * 121.41.11.161,10.200.255.60
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The number of requests per minute.
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
   * The detailed reason for access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Specifies whether to allow retries. Valid values:
   * - false: Retries are not allowed.
   * - true: Retries are allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The name of the application to query.
   * 
   * @example
   * or
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic code. This field is not used and can be ignored.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned error parameters.
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
   * System exception
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

