import * as $dara from '@darabonba/typescript';
export declare class ListMemorySessionMessagesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The message content.
     *
     * @example
     * The user likes hiking
     */
    content?: string;
    /**
     * @remarks
     * The message role.
     *
     * @example
     * user
     */
    role?: string;
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
export declare class ListMemorySessionMessagesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message list.
     */
    items?: ListMemorySessionMessagesResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of records per page.
     *
     * @example
     * 200
     */
    maxResults?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The pagination token for the next page.
     *
     * @example
     * eyJvZmZzZXQiOjIwMH0=
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 01A00000-0000-0000-0000-000000000001
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
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
