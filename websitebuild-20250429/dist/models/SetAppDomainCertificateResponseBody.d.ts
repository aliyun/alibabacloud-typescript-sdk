import * as $dara from '@darabonba/typescript';
export declare class SetAppDomainCertificateResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the operation is successful.
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
export declare class SetAppDomainCertificateResponseBody extends $dara.Model {
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
     * Specifies whether to allow retries. Valid values:
     * - false: Retries are not allowed.
     * - true: Retries are allowed.
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
     * mar
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
     * https://check-result-file-sh.oss-cn-shanghai.aliyuncs.com/uoa11auyf2565k6/uoa11auyf2565k6.sql.zip?Expires=1730520371&OSSAccessKeyId=LTAI5tKUErVCETM4ev9SELNb&Signature=WIutxAQYbbwxX0aeKmdObduLnDg%3D
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
    module?: SetAppDomainCertificateResponseBodyModule;
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
