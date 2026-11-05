import * as $dara from '@darabonba/typescript';
export declare class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
export declare class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes extends $dara.Model {
    predefinedScope?: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope[];
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
export declare class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope extends $dara.Model {
    predefinedScopes?: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes;
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
export declare class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication extends $dara.Model {
    appPrincipalName?: string;
    createDate?: string;
    delegatedScope?: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope;
    displayName?: string;
    foreignAppId?: string;
    tenantId?: string;
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
export declare class ListExternalApplicationsResponseBodyExternalApplications extends $dara.Model {
    externalApplication?: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication[];
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
export declare class ListExternalApplicationsResponseBody extends $dara.Model {
    externalApplications?: ListExternalApplicationsResponseBodyExternalApplications;
    /**
     * @remarks
     * Indicates whether the response is truncated. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * true
     */
    isTruncated?: boolean;
    /**
     * @remarks
     * A pagination token. It can be used in the next request to retrieve a new page of results.
     *
     * > This parameter is returned only when `IsTruncated` is `true`.
     *
     * @example
     * EXAMPLE
     */
    marker?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 936E1D9C-157D-45BD-8A3B-81C0716EB077
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
