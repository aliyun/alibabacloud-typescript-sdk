import * as $dara from '@darabonba/typescript';
export declare class GetAppSupabaseAuthConfigResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The configuration value. Valid values:
     * - cc_rule: HTTP flood protection rule.
     *
     * - ddos_dispatch: DDoS mitigation interaction scheduling.
     *
     * - edge_safe: edge application security.
     *
     * - blocked_regions: location blacklist.
     *
     * - http_acl_policy: accurate access control.
     *
     * - bot_manager: bot traffic management.
     *
     * - ip_reputation: IP reputation library.
     */
    configs?: {
        [key: string]: any;
    };
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
export declare class GetAppSupabaseAuthConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason why access was denied.
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
     * The dynamic error message, which is used to replace the `%s` placeholder in the ErrMessage parameter.
     * > If ErrMessage returns **The Value of Input Parameter %s is not valid** and DynamicMessage returns **DtsJobId**, the DtsJobId request parameter is invalid.
     *
     * @example
     * abc
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
    module?: GetAppSupabaseAuthConfigResponseBodyModule;
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
     * SYSTEM.EROR
     */
    rootErrorCode?: string;
    /**
     * @remarks
     * The exception message.
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
