// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLlmProxyConfigForAdminResponseBodyModule extends $dara.Model {
  /**
   * @example
   * qwen3.5-plus
   */
  allowedModels?: string;
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * qwen3.5-plus
   */
  blockedModels?: string;
  /**
   * @example
   * adds2
   */
  capability?: string;
  /**
   * @example
   * -1
   */
  dailyLimit?: number;
  /**
   * @example
   * -1
   */
  dailyTokenLimit?: number;
  /**
   * @example
   * True
   */
  enabled?: boolean;
  extend?: string;
  /**
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @example
   * 16257
   */
  id?: number;
  /**
   * @example
   * 121.41.11.161,10.200.255.60
   */
  ipBlacklist?: string;
  /**
   * @example
   * 121.41.11.161,10.200.255.60
   */
  ipWhitelist?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * or
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  errorArgs?: any[];
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
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  rootErrorMsg?: string;
  /**
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

