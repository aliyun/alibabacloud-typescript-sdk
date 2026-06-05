// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceEntitlementResponseBodyModuleItems extends $dara.Model {
  allocated?: boolean;
  /**
   * @example
   * on
   */
  available?: boolean;
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * true
   */
  configured?: boolean;
  entitled?: boolean;
  /**
   * @example
   * 5
   */
  featureType?: string;
  /**
   * @example
   * waf_v2intl_public_intl-sg-i5c43rcpw04
   */
  instanceId?: string;
  /**
   * @example
   * 4e46d24b56bfa944b5e6f2305715bc4e.jpg
   */
  name?: string;
  /**
   * @example
   * alipay-isv
   */
  pluginId?: string;
  /**
   * @example
   * 10
   */
  quota?: number;
  /**
   * @example
   * 1234
   */
  remaining?: number;
  /**
   * @example
   * SmsCount
   */
  resourceCode?: string;
  /**
   * @example
   * filesystem
   */
  resourceType?: string;
  /**
   * @example
   * 0
   */
  running?: boolean;
  /**
   * @example
   * question
   */
  type?: string;
  /**
   * @example
   * 10
   */
  usagePercent?: number;
  /**
   * @example
   * 3295422523872
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      allocated: 'Allocated',
      available: 'Available',
      code: 'Code',
      configured: 'Configured',
      entitled: 'Entitled',
      featureType: 'FeatureType',
      instanceId: 'InstanceId',
      name: 'Name',
      pluginId: 'PluginId',
      quota: 'Quota',
      remaining: 'Remaining',
      resourceCode: 'ResourceCode',
      resourceType: 'ResourceType',
      running: 'Running',
      type: 'Type',
      usagePercent: 'UsagePercent',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocated: 'boolean',
      available: 'boolean',
      code: 'string',
      configured: 'boolean',
      entitled: 'boolean',
      featureType: 'string',
      instanceId: 'string',
      name: 'string',
      pluginId: 'string',
      quota: 'number',
      remaining: 'number',
      resourceCode: 'string',
      resourceType: 'string',
      running: 'boolean',
      type: 'string',
      usagePercent: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceEntitlementResponseBodyModule extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  items?: GetAppInstanceEntitlementResponseBodyModuleItems[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      items: { 'type': 'array', 'itemType': GetAppInstanceEntitlementResponseBodyModuleItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceEntitlementResponseBody extends $dara.Model {
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
   * ish-intelligence-store-platform-admin-web
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
  module?: GetAppInstanceEntitlementResponseBodyModule;
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
      module: GetAppInstanceEntitlementResponseBodyModule,
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

