import * as $dara from '@darabonba/typescript';
export declare class CreateAppInstanceTicketResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The time when the access token expires.
     *
     * @example
     * 1768619049924
     */
    accessTokenExpiresAt?: string;
    /**
     * @remarks
     * The time when the access token was issued.
     *
     * @example
     * 1768619049924
     */
    accessTokenIssuedAt?: string;
    /**
     * @remarks
     * The access token value.
     *
     * @example
     * be9750d595b6cd7c93a80b46
     */
    accessTokenValue?: string;
    /**
     * @remarks
     * The user ID.
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
     * {\\"resourceGroupId\\":\\"\\",\\"page\\":1,\\"size\\":10,\\"selected\\":\\"[\\\\\\"kvstore\\\\\\"]\\"}
     */
    attributes?: string;
    /**
     * @remarks
     * The authorization code type.
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
     * The user ID.
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
     * The refresh token value.
     *
     * @example
     * be9750d595b6cd7c93a80b46
     */
    refreshTokenValue?: string;
    /**
     * @remarks
     * The external unique identifier.
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
export declare class CreateAppInstanceTicketResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reasons for access denial.
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
     * The dynamic error message, which is used to replace `%s` in the error message of the **ErrMessage** response parameter. If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the **DtsJobId** request parameter is invalid.
     *
     * @example
     * SYSTEM_ERRROR
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
    module?: CreateAppInstanceTicketResponseBodyModule;
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
