import * as $dara from '@darabonba/typescript';
export declare class CreateAppAssistantAgentResponseBodyModuleCredential extends $dara.Model {
    /**
     * @remarks
     * The extended field.
     *
     * @example
     * {}
     */
    extra?: {
        [key: string]: string;
    };
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
export declare class CreateAppAssistantAgentResponseBodyModuleEmbedConfig extends $dara.Model {
    /**
     * @remarks
     * The extended field.
     *
     * @example
     * {}
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
export declare class CreateAppAssistantAgentResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The agent ID returned by the platform.
     *
     * @example
     * duanwei@qianrutest
     */
    agentId?: string;
    /**
     * @remarks
     * The name of the agent.
     *
     * @example
     * 测试业务空间
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
    credential?: CreateAppAssistantAgentResponseBodyModuleCredential;
    /**
     * @remarks
     * The embedding configuration.
     */
    embedConfig?: CreateAppAssistantAgentResponseBodyModuleEmbedConfig;
    /**
     * @remarks
     * The extended parameters.
     *
     * @example
     * {}
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
     * The application ID of the agent on the platform.
     *
     * @example
     * WA12313131313
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
     * 1231313131
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
export declare class CreateAppAssistantAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access denied details.
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
     * dewuApp
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
     * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the request parameter **DtsJobId** is invalid.
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
    module?: CreateAppAssistantAgentResponseBodyModule;
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
     * The error message.
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
