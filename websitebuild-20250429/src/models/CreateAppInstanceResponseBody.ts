// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250915163734000001
   */
  bizId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * idaas-cn-7mz2uc8v902
   */
  instanceId?: string;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 250822465990301
   */
  orderId?: string;
  /**
   * @remarks
   * siteId
   * 
   * @example
   * abcd.scd.wanwang.xin
   */
  siteHost?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      siteHost: 'SiteHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      instanceId: 'string',
      orderId: 'string',
      siteHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceResponseBody extends $dara.Model {
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
   * Whether retry is allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * Application name, query this application by name
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
   * Dynamic error message, used to replace the `%s` in the **ErrMessage** error message.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid**, and **DynamicMessage** returns **DtsJobId**, it means that the input parameter **DtsJobId** is invalid.
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
  module?: CreateAppInstanceResponseBodyModule;
  /**
   * @remarks
   * ID of the request
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
   * Exception message
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
      module: CreateAppInstanceResponseBodyModule,
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

