// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySupabaseInstanceInfoForAdminResponseBodyModule extends $dara.Model {
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
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The time when the database instance was created.
   * 
   * @example
   * 111
   */
  dbInstanceCreateTime?: string;
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
   * The database type. Valid values:
   * - rds
   * - polardb.
   * 
   * @example
   * ORACLE
   */
  dbType?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {\\"appId\\":\\"APP_NTJAK8P11SNZDJ3M6BWC\\"}
   */
  extra?: string;
  /**
   * @remarks
   * The time when the instance creation was completed.
   * 
   * @example
   * 111
   */
  instanceCreateFinishedTime?: string;
  /**
   * @remarks
   * The creation status of the instance.
   * 
   * @example
   * 1111
   */
  instanceCreateStatus?: string;
  /**
   * @remarks
   * The deletion flag.
   * 
   * @example
   * false
   */
  isDeleted?: number;
  /**
   * @remarks
   * The password for accessing the ApsaraDB RDS database.
   * 
   * @example
   * 111
   */
  rdsDatabasePassword?: string;
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
   * The instance status. Valid values:
   * - 0: Paused.
   * - 1: Running.
   * 
   * @example
   * RUNNING
   */
  status?: number;
  /**
   * @remarks
   * The password for the Supabase Dashboard.
   * 
   * @example
   * 1111
   */
  supabaseDashboardPassword?: string;
  /**
   * @remarks
   * The username for the Supabase Dashboard.
   * 
   * @example
   * 1111
   */
  supabaseDashboardUserName?: string;
  /**
   * @remarks
   * The time when the Supabase instance was created.
   * 
   * @example
   * 111
   */
  supabaseInstanceCreateTime?: string;
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
   * Supabase Kong URL
   * 
   * @example
   * 111
   */
  supabaseKongUrl?: string;
  /**
   * @remarks
   * The private endpoint of the Supabase instance.
   * 
   * @example
   * 1111
   */
  supabasePrivateIp?: string;
  /**
   * @remarks
   * The public endpoint of the Supabase instance.
   * 
   * @example
   * 111
   */
  supabasePublicIp?: string;
  /**
   * @remarks
   * The public URL of the Supabase instance.
   * 
   * @example
   * 111
   */
  supabasePublicUrl?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * GFCBAMJH-zh_CN
   */
  tenantId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 111
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

export class QuerySupabaseInstanceInfoForAdminResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
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
   * dewuApp
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
   * The dynamic error message, which replaces the `%s` placeholder in the **ErrMessage** response element.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
   */
  module?: QuerySupabaseInstanceInfoForAdminResponseBodyModule;
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
   * The error message.
   * 
   * @example
   * 系统异常
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
      module: QuerySupabaseInstanceInfoForAdminResponseBodyModule,
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

