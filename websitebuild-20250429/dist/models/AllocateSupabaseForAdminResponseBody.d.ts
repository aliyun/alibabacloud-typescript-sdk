import * as $dara from '@darabonba/typescript';
export declare class AllocateSupabaseForAdminResponseBodyModule extends $dara.Model {
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
     * WS20250915163734000001
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
     * The type of the database.
     *
     * @example
     * ORACLE
     */
    dbType?: string;
    /**
     * @remarks
     * The extra information.
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
     * The access password for the RDS database.
     *
     * @example
     * 111
     */
    rdsDatabasePassword?: string;
    /**
     * @remarks
     * The read-only business schema name parsed by the Builder trusted binding. This name cannot be used as input for tenant switching.
     *
     * @example
     * tenant_00000000-0000-4000-8000-000000000001_schema
     */
    schemaName?: string;
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
     * The status. Valid values: 0 (Paused) and 1 (Running).
     *
     * @example
     * NORMAL
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
     * 111
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
     * The private network endpoint of the Supabase instance.
     *
     * @example
     * 1111
     */
    supabasePrivateIp?: string;
    /**
     * @remarks
     * The public network connection endpoint of the Supabase instance.
     *
     * @example
     * 111
     */
    supabasePublicIp?: string;
    /**
     * @remarks
     * The public URL of Supabase.
     *
     * @example
     * 111
     */
    supabasePublicUrl?: string;
    /**
     * @remarks
     * The ID of the tenant.
     *
     * @example
     * GFCBAMJH-zh_CN
     */
    tenantId?: string;
    /**
     * @remarks
     * The read-only tenant mode: schema indicates the legacy Builder pool, and db or agenticdb indicates the new platform. The history record can be empty.
     *
     * @example
     * schema
     */
    tenantMode?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 1111
     */
    userId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class AllocateSupabaseForAdminResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the permission check failure.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Specifies whether retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The name of the application.
     *
     * @example
     * or
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
     * The dynamic error message.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The returned error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The response data.
     */
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
     * System error
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * Specifies whether the request is processed synchronously.
     *
     * @example
     * True
     */
    synchro?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
