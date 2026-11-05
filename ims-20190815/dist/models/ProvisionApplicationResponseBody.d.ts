import * as $dara from '@darabonba/typescript';
export declare class ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
export declare class ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes extends $dara.Model {
    predefinedScope?: ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope[];
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
export declare class ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScope extends $dara.Model {
    predefinedScopes?: ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes;
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
export declare class ProvisionApplicationResponseBodyApplicationProvisionInfo extends $dara.Model {
    /**
     * @remarks
     * The ID of the Alibaba Cloud account.
     *
     * @example
     * 177242285274****
     */
    accountId?: string;
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
     * The name of the application principal. The value is in the `<app_name>@app.<account_id>.onaliyun.com` format.
     *
     * @example
     * GiteePrd@app.177242285274****.onaliyun.com
     */
    appPrincipalName?: string;
    /**
     * @remarks
     * The time when the application was installed. The value is a timestamp.
     *
     * @example
     * 1603693518000
     */
    createDate?: string;
    /**
     * @remarks
     * The information about the permissions that are granted to the application.
     */
    delegatedScope?: ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScope;
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
     * The ID of the Alibaba Cloud account for which the application was installed.
     *
     * @example
     * 177242285274****
     */
    tenantId?: string;
    /**
     * @remarks
     * The update time. The value is a timestamp.
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
export declare class ProvisionApplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The installation information of the application.
     */
    applicationProvisionInfo?: ProvisionApplicationResponseBodyApplicationProvisionInfo;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C8AE06ED-9593-5BF9-8D4A-68D5DDCC90AB
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
