// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSupabaseInstanceResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * anonymity key
   * 
   * @example
   * 1111
   */
  anonKey?: string;
  /**
   * @remarks
   * application instance business ID
   * 
   * @example
   * WS20250915163734000001
   */
  bizId?: string;
  /**
   * @remarks
   * database instance ID
   * 
   * @example
   * selectdb-cn-2bl4djolb02
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * Database public URL
   * 
   * @example
   * 111
   */
  dbPublicUrl?: string;
  /**
   * @remarks
   * instance creation status
   * 
   * @example
   * 1111
   */
  instanceCreateStatus?: string;
  /**
   * @remarks
   * service key
   * 
   * @example
   * e80f5a7a08514709a2fb
   */
  serviceKey?: string;
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
   * Supabase instance ID
   * 
   * @example
   * 1111
   */
  supabaseInstanceId?: string;
  /**
   * @remarks
   * Supabase public URL
   * 
   * @example
   * 111
   */
  supabasePublicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      anonKey: 'AnonKey',
      bizId: 'BizId',
      dbInstanceId: 'DbInstanceId',
      dbPublicUrl: 'DbPublicUrl',
      instanceCreateStatus: 'InstanceCreateStatus',
      serviceKey: 'ServiceKey',
      status: 'Status',
      supabaseInstanceId: 'SupabaseInstanceId',
      supabasePublicUrl: 'SupabasePublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anonKey: 'string',
      bizId: 'string',
      dbInstanceId: 'string',
      dbPublicUrl: 'string',
      instanceCreateStatus: 'string',
      serviceKey: 'string',
      status: 'number',
      supabaseInstanceId: 'string',
      supabasePublicUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSupabaseInstanceResponseBody extends $dara.Model {
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
   * Is retry allowed
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
   * spring-cloud-b
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
   * Dynamic error message, used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the provided request parameter **DtsJobId** is invalid.
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
   * Task object
   */
  module?: GetAppSupabaseInstanceResponseBodyModule;
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
   * error code
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
   * Spare parameter.
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
      module: GetAppSupabaseInstanceResponseBodyModule,
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

