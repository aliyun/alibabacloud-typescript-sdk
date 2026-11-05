import * as $dara from '@darabonba/typescript';
export declare class UpdateAppPluginResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * trial,draft,live,refunded,expired,released
     *
     * @example
     * NORMAL
     */
    status?: string;
    /**
     * @remarks
     * Indicates whether the operation was successful.
     *
     * @example
     * true
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
export declare class UpdateAppPluginResponseBody extends $dara.Model {
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
     * The name of the application. It must start with a letter and can contain digits, letters, underscores (_), and hyphens (-). The name can be up to 36 characters in length.
     *
     * @example
     * dewuApp
     */
    appName?: string;
    /**
     * @remarks
     * The dynamic code. This parameter is not used and can be ignored.
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
     * The returned error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * Indicates whether the move was successful.
     */
    module?: UpdateAppPluginResponseBodyModule;
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
