import * as $dara from '@darabonba/typescript';
export declare class GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
    description?: string;
    name?: string;
    required?: boolean;
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
export declare class GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopes extends $dara.Model {
    predefinedScope?: GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope[];
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
export declare class GetApplicationResponseBodyApplicationDelegatedScope extends $dara.Model {
    predefinedScopes?: GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopes;
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
export declare class GetApplicationResponseBodyApplicationRedirectUris extends $dara.Model {
    redirectUri?: string[];
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
export declare class GetApplicationResponseBodyApplication extends $dara.Model {
    /**
     * @remarks
     * The validity period of the access token. Unit: seconds.
     *
     * @example
     * 3600
     */
    accessTokenValidity?: number;
    /**
     * @remarks
     * The Alibaba Cloud account ID to which the application belongs.
     *
     * @example
     * 177242285274****
     */
    accountId?: string;
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * 472457090344041****
     */
    appId?: string;
    /**
     * @remarks
     * The application name.
     *
     * @example
     * myapp
     */
    appName?: string;
    /**
     * @remarks
     * The application type. Valid values:
     *
     * - WebApp: web applications that are based on browser interactions.
     * - NativeApp: local applications that run in operating systems, such as desktop or shift operating systems.
     * - ServerApp: applications that directly access Alibaba Cloud services without requiring user logon. Currently, only user synchronization applications based on the System for Cross-domain Identity Management protocol are supported.
     *
     * @example
     * WebApp
     */
    appType?: string;
    /**
     * @remarks
     * The application assignment type. Valid values:
     * + AllowAll: full assignment. All RAM users and roles within the account are allowed to use the application.
     * + OnDemand: on-demand assignment. Only specified RAM users and roles within the account are allowed to use the application.
     *
     * @example
     * AllowAll
     */
    assignmentType?: string;
    /**
     * @remarks
     * The creation time. Format: RFC 3339 (UTC). Example: 2020-10-23T08:06:57Z.
     *
     * @example
     * 2020-10-23T08:06:57Z
     */
    createDate?: string;
    /**
     * @remarks
     * The delegated scope information of the application.
     */
    delegatedScope?: GetApplicationResponseBodyApplicationDelegatedScope;
    /**
     * @remarks
     * The display name of the application.
     *
     * @example
     * myapp
     */
    displayName?: string;
    /**
     * @remarks
     * Specifies whether the application can be installed by other accounts.
     *
     * @example
     * true
     */
    isMultiTenant?: boolean;
    /**
     * @remarks
     * Specifies whether user authorization is required. Valid values:
     * + true: User authorization is required.
     * + false: User authorization is not required.
     *
     * @example
     * true
     */
    needPrincipalConsent?: boolean;
    /**
     * @remarks
     * The OAuth protocol version of the application. Valid values:
     * + `2.0`: OAuth 2.0 protocol.
     * + `2.1`: OAuth 2.1 protocol.
     *
     * @example
     * 2.0
     */
    protocolVersion?: string;
    redirectUris?: GetApplicationResponseBodyApplicationRedirectUris;
    /**
     * @remarks
     * The validity period of the refresh token. Unit: seconds.
     *
     * @example
     * 7776000
     */
    refreshTokenValidity?: number;
    /**
     * @remarks
     * Specifies whether an application secret is required.
     *
     * @example
     * true
     */
    secretRequired?: boolean;
    /**
     * @remarks
     * The update time. Format: RFC 3339 (UTC). Example: 2020-10-23T08:06:57Z.
     *
     * @example
     * 2020-10-23T08:06:57Z
     */
    updateDate?: string;
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
export declare class GetApplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application information.
     */
    application?: GetApplicationResponseBodyApplication;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6616F09B-2768-4C11-8866-A8EE4C4A583E
     */
    requestId?: string;
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
