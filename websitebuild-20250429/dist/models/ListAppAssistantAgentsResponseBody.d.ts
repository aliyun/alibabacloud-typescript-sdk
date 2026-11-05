import * as $dara from '@darabonba/typescript';
export declare class ListAppAssistantAgentsResponseBodyModuleCredential extends $dara.Model {
    /**
     * @remarks
     * API Key
     *
     * @example
     * akm-xxxxxxx
     */
    apiKey?: string;
    /**
     * @remarks
     * API Secret
     *
     * @example
     * sk-xxxxxx
     */
    apiSecret?: string;
    /**
     * @remarks
     * The extension field.
     */
    extra?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The password.
     *
     * @example
     * ***
     */
    password?: string;
    /**
     * @remarks
     * The username.
     *
     * @example
     * Test
     */
    username?: string;
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
export declare class ListAppAssistantAgentsResponseBodyModuleEmbedConfig extends $dara.Model {
    /**
     * @remarks
     * The extension field.
     */
    extra?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The raw embedding script.
     */
    rawScript?: string;
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
export declare class ListAppAssistantAgentsResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The agent ID returned by the platform.
     *
     * @example
     * liyang1_v@soulapp
     */
    agentId?: string;
    /**
     * @remarks
     * The agent name.
     *
     * @example
     * 演示
     */
    agentName?: string;
    /**
     * @remarks
     * The business ID of the associated application instance.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The authentication credential.
     */
    credential?: ListAppAssistantAgentsResponseBodyModuleCredential;
    /**
     * @remarks
     * The embedding configuration.
     */
    embedConfig?: ListAppAssistantAgentsResponseBodyModuleEmbedConfig;
    /**
     * @remarks
     * The extension parameters.
     */
    extraParams?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 1740479834
     */
    gmtCreate?: string;
    /**
     * @remarks
     * The modification time.
     *
     * @example
     * 2025-08-28T02:25:41Z
     */
    gmtModified?: string;
    /**
     * @remarks
     * The platform application ID of the agent.
     *
     * @example
     * WA12313123131
     */
    platformAppId?: string;
    /**
     * @remarks
     * The platform type.
     *
     * @example
     * VMWARE
     */
    platformType?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * NORMAL
     */
    status?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 1231311312
     */
    userId?: string;
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
export declare class ListAppAssistantAgentsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason why access was denied.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether a retry is allowed.
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
     * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response element.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the **DtsJobId** request parameter is invalid.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The response data.
     */
    module?: ListAppAssistantAgentsResponseBodyModule[];
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
     * 系统异常
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * A reserved parameter.
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
