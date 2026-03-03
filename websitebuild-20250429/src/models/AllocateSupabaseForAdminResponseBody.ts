// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateSupabaseForAdminResponseBodyModule extends $dara.Model {
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
   * 111
   */
  dbInstanceCreateTime?: string;
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
   * ORACLE
   */
  dbType?: string;
  /**
   * @example
   * {\\"appId\\":\\"APP_NTJAK8P11SNZDJ3M6BWC\\"}
   */
  extra?: string;
  /**
   * @example
   * 111
   */
  instanceCreateFinishedTime?: string;
  /**
   * @example
   * 1111
   */
  instanceCreateStatus?: string;
  /**
   * @example
   * false
   */
  isDeleted?: number;
  /**
   * @example
   * 111
   */
  rdsDatabasePassword?: string;
  /**
   * @example
   * e80f5a7a08514709a2fb
   */
  serviceKey?: string;
  /**
   * @example
   * NORMAL
   */
  status?: number;
  /**
   * @example
   * 1111
   */
  supabaseDashboardPassword?: string;
  /**
   * @example
   * 111
   */
  supabaseDashboardUserName?: string;
  /**
   * @example
   * 111
   */
  supabaseInstanceCreateTime?: string;
  /**
   * @example
   * 1111
   */
  supabaseInstanceId?: string;
  /**
   * @remarks
   * Supabase Kong URL
   * 
   * @example
   * 111
   */
  supabaseKongUrl?: string;
  /**
   * @example
   * 1111
   */
  supabasePrivateIp?: string;
  /**
   * @example
   * 111
   */
  supabasePublicIp?: string;
  /**
   * @example
   * 111
   */
  supabasePublicUrl?: string;
  /**
   * @example
   * GFCBAMJH-zh_CN
   */
  tenantId?: string;
  /**
   * @example
   * 1111
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      anonKey: 'AnonKey',
      bizId: 'BizId',
      dbInstanceCreateTime: 'DbInstanceCreateTime',
      dbInstanceId: 'DbInstanceId',
      dbPublicUrl: 'DbPublicUrl',
      dbType: 'DbType',
      extra: 'Extra',
      instanceCreateFinishedTime: 'InstanceCreateFinishedTime',
      instanceCreateStatus: 'InstanceCreateStatus',
      isDeleted: 'IsDeleted',
      rdsDatabasePassword: 'RdsDatabasePassword',
      serviceKey: 'ServiceKey',
      status: 'Status',
      supabaseDashboardPassword: 'SupabaseDashboardPassword',
      supabaseDashboardUserName: 'SupabaseDashboardUserName',
      supabaseInstanceCreateTime: 'SupabaseInstanceCreateTime',
      supabaseInstanceId: 'SupabaseInstanceId',
      supabaseKongUrl: 'SupabaseKongUrl',
      supabasePrivateIp: 'SupabasePrivateIp',
      supabasePublicIp: 'SupabasePublicIp',
      supabasePublicUrl: 'SupabasePublicUrl',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anonKey: 'string',
      bizId: 'string',
      dbInstanceCreateTime: 'string',
      dbInstanceId: 'string',
      dbPublicUrl: 'string',
      dbType: 'string',
      extra: 'string',
      instanceCreateFinishedTime: 'string',
      instanceCreateStatus: 'string',
      isDeleted: 'number',
      rdsDatabasePassword: 'string',
      serviceKey: 'string',
      status: 'number',
      supabaseDashboardPassword: 'string',
      supabaseDashboardUserName: 'string',
      supabaseInstanceCreateTime: 'string',
      supabaseInstanceId: 'string',
      supabaseKongUrl: 'string',
      supabasePrivateIp: 'string',
      supabasePublicIp: 'string',
      supabasePublicUrl: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateSupabaseForAdminResponseBody extends $dara.Model {
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
  module?: AllocateSupabaseForAdminResponseBodyModule;
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
      module: AllocateSupabaseForAdminResponseBodyModule,
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

