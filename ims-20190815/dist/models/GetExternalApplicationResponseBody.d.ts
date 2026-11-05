import * as $dara from '@darabonba/typescript';
export declare class GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
export declare class GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes extends $dara.Model {
    predefinedScope?: GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope[];
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
export declare class GetExternalApplicationResponseBodyExternalApplicationDelegatedScope extends $dara.Model {
    predefinedScopes?: GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes;
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
export declare class GetExternalApplicationResponseBodyExternalApplication extends $dara.Model {
    /**
     * @remarks
     * The name of the application principal. The value is in the `<app_name>@app.<account_id>.onaliyun.com` format.
     *
     * @example
     * GiteePrd@app.153082740420****.onaliyun.com
     */
    appPrincipalName?: string;
    /**
     * @remarks
     * The time when the application was installed. The value is a timestamp.
     *
     * @example
     * 1737534146000
     */
    createDate?: string;
    /**
     * @remarks
     * The information about the permissions that are granted on the application.
     */
    delegatedScope?: GetExternalApplicationResponseBodyExternalApplicationDelegatedScope;
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
     * The ID of the application.
     *
     * @example
     * 407426893752729****
     */
    foreignAppId?: string;
    /**
     * @remarks
     * The ID of the Alibaba Cloud account for which the application is installed.
     *
     * @example
     * 173082740420****
     */
    tenantId?: string;
    /**
     * @remarks
     * The update time of the application. The value is a timestamp.
     *
     * @example
     * 1737534146000
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
export declare class GetExternalApplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The information about the external application.
     */
    externalApplication?: GetExternalApplicationResponseBodyExternalApplication;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E4C4D1BD-2558-5BD1-8C36-A5D7FB174A55
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
