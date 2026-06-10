// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceEntitlementResponseBodyModuleItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an instance has been assigned
   */
  allocated?: boolean;
  /**
   * @remarks
   * Is this item currently active?
   * 
   * @example
   * on
   */
  available?: boolean;
  /**
   * @remarks
   * Authorization item identity
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether configuration has been completed
   * 
   * @example
   * true
   */
  configured?: boolean;
  /**
   * @remarks
   * Is this item entitled in the version?
   */
  entitled?: boolean;
  /**
   * @remarks
   * Feature source type (PLUGIN/SKILL/CHANNEL/SYSTEM)
   * 
   * @example
   * 5
   */
  featureType?: string;
  /**
   * @remarks
   * Runtime instance ID
   * 
   * @example
   * waf_v2intl_public_intl-sg-i5c43rcpw04
   */
  instanceId?: string;
  /**
   * @remarks
   * Authorization item Name
   * 
   * @example
   * 4e46d24b56bfa944b5e6f2305715bc4e.jpg
   */
  name?: string;
  /**
   * @remarks
   * Plugin ID
   * 
   * @example
   * alipay-isv
   */
  pluginId?: string;
  /**
   * @remarks
   * Total quota
   * 
   * @example
   * 10
   */
  quota?: number;
  /**
   * @remarks
   * Remaining quantity
   * 
   * @example
   * 1234
   */
  remaining?: number;
  /**
   * @remarks
   * Resource domain association identity
   * 
   * @example
   * SmsCount
   */
  resourceCode?: string;
  /**
   * @remarks
   * Resource type (QUOTA/LIMIT)
   * 
   * @example
   * filesystem
   */
  resourceType?: string;
  /**
   * @remarks
   * Is it running?
   * 
   * @example
   * 0
   */
  running?: boolean;
  /**
   * @remarks
   * Authorization Type (FEATURE / RESOURCE / RUNTIME)
   * 
   * @example
   * question
   */
  type?: string;
  /**
   * @remarks
   * Usage percentage
   * 
   * @example
   * 10
   */
  usagePercent?: number;
  /**
   * @remarks
   * Usage
   * 
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
   * @remarks
   * BizId of the associated application instance
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * All entitlements
   */
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
   * @remarks
   * Permission denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * App Name.
   * 
   * @example
   * ish-intelligence-store-platform-admin-web
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message, used to replace `%s` in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Response data
   */
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
   * Reserved parameter.
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

