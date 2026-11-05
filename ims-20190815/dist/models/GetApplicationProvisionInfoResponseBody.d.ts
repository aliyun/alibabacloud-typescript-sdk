import * as $dara from '@darabonba/typescript';
export declare class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
    description?: string;
    name?: string;
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
export declare class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes extends $dara.Model {
    predefinedScope?: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope[];
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
export declare class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope extends $dara.Model {
    predefinedScopes?: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes;
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
export declare class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud account ID.
     *
     * @example
     * 177242285274****
     */
    accountId?: string;
    /**
     * @remarks
     * The application category. Valid values:
     * - Official: official applications
     * - ThirdParty: regular third-party applications
     *
     * @example
     * ThirdParty
     */
    appCategory?: string;
    /**
     * @remarks
     * The ID of the application.
     *
     * @example
     * 452392483381546****
     */
    appId?: string;
    /**
     * @remarks
     * The name of the application.
     *
     * @example
     * GiteePrd
     */
    appName?: string;
    /**
     * @remarks
     * The application assignment type. Valid values:
     * - AllowAll: No assignment is required. All RAM users and roles can access the application.
     * - OnDemand: Assignment is required on demand. RAM users and roles can access the application only after it is assigned to them.
     *
     * @example
     * AllowAll
     */
    assignmentType?: string;
    /**
     * @remarks
     * The installation timestamp.
     *
     * @example
     * 1603693518000
     */
    createDate?: string;
    /**
     * @remarks
     * The application permission scope information.
     */
    delegatedScope?: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope;
    /**
     * @remarks
     * The display name of the application.
     *
     * @example
     * GiteeAliyun
     */
    displayName?: string;
    /**
     * @remarks
     * Indicates whether user authorization is required.
     *
     * @example
     * true
     */
    needPrincipalConsent?: boolean;
    /**
     * @remarks
     * The update timestamp.
     *
     * @example
     * 1603693518000
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
export declare class GetApplicationProvisionInfoResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application installation information.
     */
    applicationProvisionInfo?: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 936E1D9C-157D-45BD-8A3B-81C0716EB078
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
