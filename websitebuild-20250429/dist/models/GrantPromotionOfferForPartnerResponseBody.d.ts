import * as $dara from '@darabonba/typescript';
export declare class GrantPromotionOfferForPartnerResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The message.
     *
     * @example
     * System exception
     */
    message?: string;
    /**
     * @remarks
     * The benefit summary.
     *
     * @example
     * {}
     */
    offerSummary?: string;
    /**
     * @remarks
     * The distribution record ID.
     *
     * @example
     * 5094
     */
    recordId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     *
     * @example
     * True
     */
    success?: boolean;
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
export declare class GrantPromotionOfferForPartnerResponseBody extends $dara.Model {
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
     * Indicates whether retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The application name. The name can contain digits, letters, and hyphens (-). It must start with a letter, cannot end with a hyphen (-), and cannot exceed 36 characters in length.
     *
     * @example
     * or
     */
    appName?: string;
    /**
     * @remarks
     * The dynamic code. This field is currently unused and can be ignored.
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
    module?: GrantPromotionOfferForPartnerResponseBodyModule;
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
     * Indicates whether the request is processed synchronously.
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
