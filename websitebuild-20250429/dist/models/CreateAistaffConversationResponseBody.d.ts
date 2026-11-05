import * as $dara from '@darabonba/typescript';
export declare class CreateAIStaffConversationResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The chatbot ID.
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
     * 53467af9-8c4e-4498-9032-1f26978007f8
     */
    chatId?: string;
    /**
     * @remarks
     * The session ID.
     *
     * @example
     * 8642d886-0322-43a9-b12f-6629b067978c
     */
    conversationId?: string;
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
     * The site ID. You can obtain this value by calling the [ListSites](~~ListSites~~) operation.
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
export declare class CreateAIStaffConversationResponseBody extends $dara.Model {
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
     * Indicates whether retry is allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The application name. The application with this name is queried.
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
     * The dynamic message.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The error parameters returned.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The response data.
     */
    module?: CreateAIStaffConversationResponseBodyModule;
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
