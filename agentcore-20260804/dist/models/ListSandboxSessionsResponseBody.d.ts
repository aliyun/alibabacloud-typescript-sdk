import * as $dara from '@darabonba/typescript';
export declare class ListSandboxSessionsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The external channel type, such as DINGTALK, FEISHU, or WECOM. This parameter is empty for non-external channels.
     *
     * @example
     * DINGTALK
     */
    channelType?: string;
    /**
     * @remarks
     * The unique identifier of the active session.
     *
     * @example
     * sess-2
     */
    sessionId?: string;
    /**
     * @remarks
     * The session source type. Valid values:
     * - API: API call.
     * - CONSOLE_DEBUG: Console debugging.
     * - EXTERNAL_CHANNEL: External channel.
     * - UNKNOWN: Unknown source.
     *
     * @example
     * EXTERNAL_CHANNEL
     */
    sourceType?: string;
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
export declare class ListSandboxSessionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value SUCCESS is returned if the request was successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code. The value 200 is returned if the request was successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of active sessions in the sandbox.
     */
    items?: ListSandboxSessionsResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of records per page for this query.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The response message. The value success is returned if the request was successful.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The pagination token for the next page. An empty value indicates that no more results are available.
     *
     * @example
     * next-token-1
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID, which is used to locate and troubleshoot issues.
     *
     * @example
     * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. Valid values:
     * - true: The request was successful.
     * - false: The request failed.
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of records that match the query conditions.
     *
     * @example
     * 27
     */
    totalCount?: number;
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
