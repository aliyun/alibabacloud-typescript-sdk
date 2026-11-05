import * as $dara from '@darabonba/typescript';
export declare class SwitchAppConversationResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 12343131221311
     */
    aliyunPk?: string;
    /**
     * @remarks
     * The bot ID.
     *
     * @example
     * Zero2
     */
    botId?: string;
    /**
     * @remarks
     * The chat records.
     *
     * @example
     * 123
     */
    chatNum?: number;
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * 8642d886-0322-43a9-b12f-6629b067978c
     */
    conversationId?: string;
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
     * The extended information in JSON string format.
     *
     * @example
     * {\\"appId\\":\\"WS20260504134737000001\\",\\"inputTokens\\":1395,\\"outputTokens\\":38}
     */
    metaData?: string;
    /**
     * @remarks
     * The section ID of the check item.
     *
     * @example
     * 11
     */
    sectionId?: string;
    /**
     * @remarks
     * The site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
     *
     * @example
     * 865181640657408
     */
    siteId?: string;
    /**
     * @remarks
     * The current viewpoint, equivalent to the news title.
     *
     * @example
     * Feel Like Makin\\" Love
     */
    title?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 12345
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
export declare class SwitchAppConversationResponseBody extends $dara.Model {
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
     * Indicates whether retry is allowed.
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
     * watermark
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
     * The dynamic message. This parameter is not in use. Ignore this parameter.
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
    module?: SwitchAppConversationResponseBodyModule;
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
     * The root error message.
     *
     * @example
     * 系统异常
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * The reserved parameter.
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
