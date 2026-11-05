import * as $dara from '@darabonba/typescript';
export declare class ListAIStaffChatEventsResponseBodyModuleEvents extends $dara.Model {
    /**
     * @remarks
     * The error message.
     *
     * @example
     * {\\"Recorded\\": False}
     */
    data?: string;
    /**
     * @remarks
     * The primary key.
     *
     * @example
     * 10426
     */
    id?: number;
    /**
     * @remarks
     * The website name.
     *
     * @example
     * Article material 2026050704
     */
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
export declare class ListAIStaffChatEventsResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The unique ID of the message.
     *
     * @example
     * chat-xrz3etcl2bsygwlx8g
     */
    chatId?: string;
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
     * The object ID.
     */
    events?: ListAIStaffChatEventsResponseBodyModuleEvents[];
    /**
     * @remarks
     * The ID of the last SSE event.
     *
     * @example
     * event-21dd6124760a4a259ae33bbd878f6e20
     */
    lastEventId?: number;
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
export declare class ListAIStaffChatEventsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reasons for access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Specifies whether retries are allowed.
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
     * The dynamic error message, which is used to replace the `%s` in the **ErrMessage** error message.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
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
     * The returned object.
     */
    module?: ListAIStaffChatEventsResponseBodyModule;
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
     * Specifies whether the request is processed synchronously.
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
