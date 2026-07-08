// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceEntitlementResponseBodyModuleItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an instance is allocated.
   */
  allocated?: boolean;
  /**
   * @remarks
   * Indicates whether this entitlement item is currently available.
   * 
   * @example
   * on
   */
  available?: boolean;
  /**
   * @remarks
   * The code of the entitlement item.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the configuration is complete.
   * 
   * @example
   * true
   */
  configured?: boolean;
  /**
   * @remarks
   * Indicates whether the edition grants this entitlement item.
   */
  entitled?: boolean;
  /**
   * @remarks
   * The feature source type. Valid values: PLUGIN, SKILL, CHANNEL, and SYSTEM.
   * 
   * @example
   * 5
   */
  featureType?: string;
  /**
   * @remarks
   * The runtime instance ID.
   * 
   * @example
   * waf_v2intl_public_intl-sg-i5c43rcpw04
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the entitlement item.
   * 
   * @example
   * 4e46d24b56bfa944b5e6f2305715bc4e.jpg
   */
  name?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * alipay-isv
   */
  pluginId?: string;
  /**
   * @remarks
   * The total quota.
   * 
   * @example
   * 10
   */
  quota?: number;
  /**
   * @remarks
   * The remaining amount.
   * 
   * @example
   * 1234
   */
  remaining?: number;
  /**
   * @remarks
   * The association code of the resource domain.
   * 
   * @example
   * SmsCount
   */
  resourceCode?: string;
  /**
   * @remarks
   * The resource type. Valid values: QUOTA and LIMIT.
   * 
   * @example
   * filesystem
   */
  resourceType?: string;
  /**
   * @remarks
   * Indicates whether the instance is running.
   * 
   * @example
   * 0
   */
  running?: boolean;
  /**
   * @remarks
   * The entitlement type. Valid values: FEATURE, RESOURCE, and RUNTIME.
   * 
   * @example
   * question
   */
  type?: string;
  /**
   * @remarks
   * The usage percentage.
   * 
   * @example
   * 10
   */
  usagePercent?: number;
  /**
   * @remarks
   * The used amount.
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
   * The business ID of the application instance.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The list of all entitlement items.
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
   * The access denied details.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * ish-intelligence-store-platform-admin-web
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error arguments.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
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
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The root error message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * The reserved parameter.
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

