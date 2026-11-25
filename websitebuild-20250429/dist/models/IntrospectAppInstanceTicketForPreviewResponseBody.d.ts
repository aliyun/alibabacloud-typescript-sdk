import * as $dara from '@darabonba/typescript';
export declare class IntrospectAppInstanceTicketForPreviewResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The time when the access token expires.
     *
     * @example
     * 2025-12-18T22:30:00+08:00
     */
    accessTokenExpiresAt?: string;
    /**
     * @remarks
     * The time when the access token was issued.
     *
     * @example
     * 2025-12-18T22:30:00+08:00
     */
    accessTokenIssuedAt?: string;
    /**
     * @remarks
     * The value of the access token.
     *
     * @example
     * 2108341e17661121129745384e79f9
     */
    accessTokenValue?: string;
    /**
     * @remarks
     * aliyunPk
     *
     * @example
     * 12343131221311
     */
    aliyunPk?: string;
    /**
     * @remarks
     * The extended attributes.
     *
     * @example
     * {}
     */
    attributes?: string;
    /**
     * @remarks
     * The authorization grant type.
     *
     * @example
     * authorization_code
     */
    authorizationGrantType?: string;
    /**
     * @remarks
     * bid
     *
     * @example
     * 123131
     */
    bid?: string;
    /**
     * @remarks
     * The parent Alibaba Cloud account ID.
     *
     * @example
     * 12343131221311
     */
    parentPk?: string;
    /**
     * @remarks
     * The time when the refresh token expires.
     *
     * @example
     * 1768619049924
     */
    refreshTokenExpiresAt?: string;
    /**
     * @remarks
     * The time when the refresh token was issued.
     *
     * @example
     * 1768619049924
     */
    refreshTokenIssuedAt?: string;
    /**
     * @remarks
     * The value of the refresh token.
     *
     * @example
     * be9750d595b6cd7c93a80b46
     */
    refreshTokenValue?: string;
    /**
     * @remarks
     * The external UUID.
     *
     * @example
     * hdm_33be9750d595b6cd7c93a80b46734b22
     */
    uuid?: string;
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
export declare class IntrospectAppInstanceTicketForPreviewResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed cause of the access denied error.
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
     * The dynamic error message, which is used to replace `%s` in the error message of the **ErrMessage** response parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the **DtsJobId** request parameter is invalid.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The error arguments.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The response object.
     */
    module?: IntrospectAppInstanceTicketForPreviewResponseBodyModule;
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
