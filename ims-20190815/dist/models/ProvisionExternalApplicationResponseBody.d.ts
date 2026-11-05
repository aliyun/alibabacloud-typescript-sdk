import * as $dara from '@darabonba/typescript';
export declare class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
export declare class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes extends $dara.Model {
    predefinedScope?: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope[];
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
export declare class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope extends $dara.Model {
    predefinedScopes?: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes;
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
export declare class ProvisionExternalApplicationResponseBodyExternalApplication extends $dara.Model {
    /**
     * @remarks
     * The application principal name in the format of `<app_name>@app.<account_id>.onaliyun.com`.
     *
     * @example
     * GiteePrd@app.177242285274****.onaliyun.com
     */
    appPrincipalName?: string;
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
     * The permission scope information of the application.
     */
    delegatedScope?: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope;
    /**
     * @remarks
     * The display name.
     *
     * @example
     * GiteeAliyun
     */
    displayName?: string;
    /**
     * @remarks
     * The external application ID.
     *
     * @example
     * 403550611646604****
     */
    foreignAppId?: string;
    /**
     * @remarks
     * The Alibaba Cloud account ID to which the external application is installed.
     *
     * @example
     * 157242285274****
     */
    tenantId?: string;
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
export declare class ProvisionExternalApplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The external application information.
     */
    externalApplication?: ProvisionExternalApplicationResponseBodyExternalApplication;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 55535873-9A6B-5C87-853F-C7CD258826F2
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
