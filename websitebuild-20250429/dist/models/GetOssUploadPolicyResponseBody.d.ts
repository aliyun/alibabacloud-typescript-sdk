import * as $dara from '@darabonba/typescript';
export declare class GetOssUploadPolicyResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The upload directory path.
     *
     * @example
     * pano_src/100070-2679478/images/
     */
    dir?: string;
    /**
     * @remarks
     * The OSS bucket host address.
     *
     * @example
     * *.com
     */
    host?: string;
    /**
     * @remarks
     * The Base64-encoded policy.
     *
     * @example
     * Accept
     */
    policy?: string;
    /**
     * @remarks
     * The Security Token Service (STS) token. This value is null in non-STS scenarios.
     *
     * @example
     * ***
     */
    securityToken?: string;
    /**
     * @remarks
     * The calculated signature.
     *
     * @example
     * ****************************
     */
    signature?: string;
    /**
     * @remarks
     * The signature version, such as OSS4-HMAC-SHA256.
     *
     * @example
     * 2019-04-02
     */
    version?: string;
    /**
     * @remarks
     * x-oss-credential
     *
     * @example
     * 123123
     */
    xossCredential?: string;
    /**
     * @remarks
     * x-oss-date
     *
     * @example
     * 20260101
     */
    xossDate?: string;
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
export declare class GetOssUploadPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason for the access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether retries are allowed. Valid values:
     * - false: Retries are not allowed.
     * - true: Retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The app name.
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
     * The returned error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The task object.
     */
    module?: GetOssUploadPolicyResponseBodyModule;
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
