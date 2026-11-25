import * as $dara from '@darabonba/typescript';
export declare class ListAppConversationMessagesResponseBodyModule extends $dara.Model {
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
     * The chat ID.
     *
     * @example
     * chat-xrz3etcl2bsygwlx8g
     */
    chatId?: string;
    /**
     * @remarks
     * The current chat status.
     *
     * @example
     * created
     */
    chatStatus?: string;
    /**
     * @remarks
     * The ID of the called data API operation.
     *
     * @example
     * {\"DeviceName\": u\"\u667a\u80fd\u63d2\u5ea716A\", \"BlidMac\": \"18bc5a53351c\", \"DeviceModel\": \"ABSP21-16M\", \"DeviceCategory\": u\"\u63d2\u5ea7\", \"DeviceManufacturer\": \"\", \"DeviceType\": 140}
     */
    content?: string;
    /**
     * @remarks
     * The content type.
     *
     * @example
     * image/png
     */
    contentType?: string;
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * 872be9bc-3097-433d-b462-596202455102
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
     * The update time.
     *
     * @example
     * 2025-08-28T02:25:41Z
     */
    gmtModified?: string;
    /**
     * @remarks
     * The message ID.
     *
     * @example
     * 5f9e88ce-f223-4447-a23e-cb574df6c97a
     */
    messageId?: string;
    /**
     * @remarks
     * The business extension metadata in Map format. The value must be a JSON string.
     *
     * @example
     * {\"appId\":\"WS20260507200853000001\",\"inputTokens\":1411,\"outputTokens\":51}
     */
    metaData?: string;
    /**
     * @remarks
     * **[Deprecated]** The region serial number.
     *
     * @example
     * 1
     */
    no?: number;
    /**
     * @remarks
     * The role of the conversation participant. Valid values:
     *
     * - user: The user.
     *
     * - assistant: The assistant.
     *
     * - system: The system.
     *
     * - function: The function.
     *
     * - plugin: The plug-in.
     *
     * - tool: The tool.
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
     * 11
     */
    sectionId?: string;
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * 865181640657408
     */
    siteId?: string;
    /**
     * @remarks
     * The file type.
     *
     * @example
     * IMAGE
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
export declare class ListAppConversationMessagesResponseBody extends $dara.Model {
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
     * The app name.
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
     * The dynamic error message, which is used to replace the `%s` placeholder in the **ErrMessage** response parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the **DtsJobId** request parameter is invalid.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The invalid parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The number of results returned per query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The response data.
     */
    module?: ListAppConversationMessagesResponseBodyModule[];
    /**
     * @remarks
     * The token used to start the next query. This parameter is empty if there are no more results.
     *
     * @example
     * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
     */
    nextToken?: string;
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
     * System exception
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
