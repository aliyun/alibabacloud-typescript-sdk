import * as $dara from '@darabonba/typescript';
export declare class ListAIStaffChatMessagesResponseBodyModuleMessages extends $dara.Model {
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
     * The ID of the current conversation turn.
     *
     * @example
     * 54a0bfa0-41bd-4e96-acd9-fb13c0474452
     */
    chatId?: string;
    /**
     * @remarks
     * The current conversation status.
     *
     * @example
     * success
     */
    chatStatus?: string;
    /**
     * @remarks
     * The ID of the invoked data API.
     *
     * @example
     * domain cnamenwww.buyhao8.com www.buyhao8.com.a1.initrr.comn
     */
    content?: string;
    /**
     * @remarks
     * The content type.
     *
     * @example
     * application/octet-stream
     */
    contentType?: string;
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * job-675163021891846144
     */
    conversationId?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 1723532098
     */
    gmtCreate?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 1591339051000
     */
    gmtModified?: string;
    /**
     * @remarks
     * The message ID.
     *
     * @example
     * 1dafa033-e72b-44c2-99b7-bc202c5b6198
     */
    messageId?: string;
    /**
     * @remarks
     * The business extension metadata. The value must be a JSON string in map format.
     */
    metaData?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The role of the conversation participant. Valid values:
     *
     * - user: User.
     *
     * - assistant: Assistant.
     *
     * - system: System.
     *
     * - function: Function.
     *
     * - plugin: Plug-in.
     *
     * - tool: Tool.
     *
     * @example
     * user
     */
    role?: string;
    /**
     * @remarks
     * The section ID of the check item.
     *
     * @example
     * 324
     */
    sectionId?: string;
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * 928636774795776
     */
    siteId?: string;
    /**
     * @remarks
     * The file type.
     *
     * @example
     * SINGLE
     */
    type?: string;
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
export declare class ListAIStaffChatMessagesResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The sender type. Valid values:
     * - **ADMIN**: System.
     * - **CUSTOMER**: Visitor.
     * - **AGENT**: Agent.
     */
    messages?: ListAIStaffChatMessagesResponseBodyModuleMessages[];
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
export declare class ListAIStaffChatMessagesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access denial details.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Specifies whether a retry is allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The name of the app.
     *
     * @example
     * or
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
     * The dynamic message. This parameter is not in use and can be ignored.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The returned error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The response data.
     */
    module?: ListAIStaffChatMessagesResponseBodyModule;
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
     * System error
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
