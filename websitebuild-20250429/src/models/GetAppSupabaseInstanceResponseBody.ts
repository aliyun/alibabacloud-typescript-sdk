// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSupabaseInstanceResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1111
   */
  anonKey?: string;
  /**
   * @example
   * WS20250915163734000001
   */
  bizId?: string;
  /**
   * @example
   * selectdb-cn-2bl4djolb02
   */
  dbInstanceId?: string;
  /**
   * @example
   * 111
   */
  dbPublicUrl?: string;
  /**
   * @example
   * 1111
   */
  instanceCreateStatus?: string;
  /**
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
   * @example
   * 1111
   */
  supabaseInstanceId?: string;
  /**
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
   * spring-cloud-b
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

