import * as $dara from '@darabonba/typescript';
export declare class QueryInspirationBalanceForPartnerResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The remaining amount, calculated as totalQuota minus totalUsed.
     *
     * @example
     * 8
     */
    remaining?: number;
    /**
     * @remarks
     * The remaining amount as a precise value. This field is of the String type and supports decimal display.
     *
     * @example
     * 10
     */
    remainingStr?: string;
    /**
     * @remarks
     * The total quota, which is the sum of initQuota for all valid accounts.
     *
     * @example
     * 10
     */
    totalQuota?: number;
    /**
     * @remarks
     * The total quota as a precise value. This field is of the String type and supports decimal display.
     *
     * @example
     * 10
     */
    totalQuotaStr?: string;
    /**
     * @remarks
     * The total consumed amount, which is the sum of used for all valid accounts.
     *
     * @example
     * 1
     */
    totalUsed?: number;
    /**
     * @remarks
     * The total consumed amount as a precise value. This field is of the String type and supports decimal display.
     *
     * @example
     * 10
     */
    totalUsedStr?: string;
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
export declare class QueryInspirationBalanceForPartnerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access denied details.
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
     * ish-intelligence-store-platform-admin-web
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
     * The dynamic message.
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
    module?: QueryInspirationBalanceForPartnerResponseBodyModule;
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
     * System exception
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * The reserved parameter.
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
