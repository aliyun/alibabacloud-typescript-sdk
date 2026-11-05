import * as $dara from '@darabonba/typescript';
export declare class ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
export declare class ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes extends $dara.Model {
    predefinedScope?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope[];
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
export declare class ListApplicationsResponseBodyApplicationsApplicationDelegatedScope extends $dara.Model {
    predefinedScopes?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes;
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
export declare class ListApplicationsResponseBodyApplicationsApplicationRedirectUris extends $dara.Model {
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
export declare class ListApplicationsResponseBodyApplicationsApplication extends $dara.Model {
    accessTokenValidity?: number;
    accountId?: string;
    appId?: string;
    appName?: string;
    appType?: string;
    assignmentType?: string;
    createDate?: string;
    delegatedScope?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScope;
    displayName?: string;
    isMultiTenant?: boolean;
    needPrincipalConsent?: boolean;
    protocolVersion?: string;
    redirectUris?: ListApplicationsResponseBodyApplicationsApplicationRedirectUris;
    refreshTokenValidity?: number;
    secretRequired?: boolean;
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
export declare class ListApplicationsResponseBodyApplications extends $dara.Model {
    application?: ListApplicationsResponseBodyApplicationsApplication[];
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
export declare class ListApplicationsResponseBody extends $dara.Model {
    applications?: ListApplicationsResponseBodyApplications;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CE458B58-8C40-46F7-A9D4-CB85136B0C06
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
