// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySupabaseInstanceInfoForAdminResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * Anonymity key
   * 
   * @example
   * 1111
   */
  anonKey?: string;
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Database instance creation time
   * 
   * @example
   * 111
   */
  dbInstanceCreateTime?: string;
  /**
   * @remarks
   * Database instance ID
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
   * Database type (rds/polardb)
   * 
   * @example
   * ORACLE
   */
  dbType?: string;
  /**
   * @remarks
   * Additional information
   * 
   * @example
   * {\\"appId\\":\\"APP_NTJAK8P11SNZDJ3M6BWC\\"}
   */
  extra?: string;
  /**
   * @remarks
   * Instance creation completion time
   * 
   * @example
   * 111
   */
  instanceCreateFinishedTime?: string;
  /**
   * @remarks
   * Instance creation status
   * 
   * @example
   * 1111
   */
  instanceCreateStatus?: string;
  /**
   * @remarks
   * Deletion flag
   * 
   * @example
   * false
   */
  isDeleted?: number;
  /**
   * @remarks
   * RDS database access password
   * 
   * @example
   * 111
   */
  rdsDatabasePassword?: string;
  /**
   * @remarks
   * Service key
   * 
   * @example
   * e80f5a7a08514709a2fb
   */
  serviceKey?: string;
  /**
   * @remarks
   * Status. 0: paused; 1: running
   * 
   * @example
   * RUNNING
   */
  status?: number;
  /**
   * @remarks
   * Supabase Dashboard password
   * 
   * @example
   * 1111
   */
  supabaseDashboardPassword?: string;
  /**
   * @remarks
   * Supabase Dashboard username
   * 
   * @example
   * 1111
   */
  supabaseDashboardUserName?: string;
  /**
   * @remarks
   * Supabase instance creation time
   * 
   * @example
   * 111
   */
  supabaseInstanceCreateTime?: string;
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
   * Supabase Kong URL
   * 
   * @example
   * 111
   */
  supabaseKongUrl?: string;
  /**
   * @remarks
   * Supabase instance PrivateLink address
   * 
   * @example
   * 1111
   */
  supabasePrivateIp?: string;
  /**
   * @remarks
   * Supabase instance public endpoint
   * 
   * @example
   * 111
   */
  supabasePublicIp?: string;
  /**
   * @remarks
   * Supabase public URL
   * 
   * @example
   * 111
   */
  supabasePublicUrl?: string;
  /**
   * @remarks
   * Tenant ID
   * 
   * @example
   * GFCBAMJH-zh_CN
   */
  tenantId?: string;
  /**
   * @remarks
   * User ID
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
   * App Name.
   * 
   * @example
   * dewuApp
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
   * Dynamic error message used to replace the `%s` placeholder in the **ErrMessage** error message.  
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
   * Response data
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

