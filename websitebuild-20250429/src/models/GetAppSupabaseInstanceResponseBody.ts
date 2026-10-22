// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSupabaseInstanceResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The anonymous key.
   * 
   * @example
   * 1111
   */
  anonKey?: string;
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WS20250915163734000001
   */
  bizId?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * selectdb-cn-2bl4djolb02
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The public URL of the database.
   * 
   * @example
   * 111
   */
  dbPublicUrl?: string;
  /**
   * @remarks
   * The instance creation status.
   * 
   * @example
   * 1111
   */
  instanceCreateStatus?: string;
  /**
   * @remarks
   * The service key.
   * 
   * @example
   * e80f5a7a08514709a2fb
   */
  serviceKey?: string;
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
   * The Supabase instance ID.
   * 
   * @example
   * 1111
   */
  supabaseInstanceId?: string;
  /**
   * @remarks
   * The public URL of the Supabase instance.
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
   * The detailed reason why access is denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether a retry is allowed.
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
   * spring-cloud-b
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
   * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** return parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters returned.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The task object.
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
   * System exception.
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * A reserved parameter.
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

