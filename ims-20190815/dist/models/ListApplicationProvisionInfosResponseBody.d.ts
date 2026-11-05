import * as $dara from '@darabonba/typescript';
export declare class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
export declare class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes extends $dara.Model {
    predefinedScope?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope[];
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
export declare class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope extends $dara.Model {
    predefinedScopes?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes;
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
export declare class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo extends $dara.Model {
    accountId?: string;
    appCategory?: string;
    appId?: string;
    appName?: string;
    assignmentType?: string;
    createDate?: string;
    delegatedScope?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope;
    displayName?: string;
    needPrincipalConsent?: boolean;
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
export declare class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos extends $dara.Model {
    applicationProvisionInfo?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo[];
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
export declare class ListApplicationProvisionInfosResponseBody extends $dara.Model {
    applicationProvisionInfos?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E403EBFD-C997-489D-BFC7-37C05E66D67C
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
