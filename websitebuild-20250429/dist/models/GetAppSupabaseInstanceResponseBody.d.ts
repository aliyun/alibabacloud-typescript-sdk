import * as $dara from '@darabonba/typescript';
export declare class GetAppSupabaseInstanceResponseBodyModule extends $dara.Model {
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
     * The read-only business schema name resolved by Builder trusted binding, which cannot be used as input for tenant switching.
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
     * The public URL of Supabase.
     *
     * @example
     * 111
     */
    supabasePublicUrl?: string;
    /**
     * @remarks
     * The read-only tenant mode. The schema is the legacy Builder pool, and db/agenticdb is the new platform. History records can be empty.
     *
     * @example
     * schema
     */
    tenantMode?: string;
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
export declare class GetAppSupabaseInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason for access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether retries are allowed.
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
     * The dynamic error message, which is used to replace `%s` in the error message of the **ErrMessage** response parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
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
     * System exception
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * The backup parameter.
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
