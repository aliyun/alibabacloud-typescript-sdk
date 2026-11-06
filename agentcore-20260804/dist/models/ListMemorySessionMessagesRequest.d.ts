import * as $dara from '@darabonba/typescript';
export declare class ListMemorySessionMessagesRequest extends $dara.Model {
    /**
     * @remarks
     * The agent ID. At least one of Agent ID and User ID must be provided. The length limit is 1 to 128 UTF-8 bytes. The value cannot contain / or *.
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The maximum number of records per page. Default value: 200. Valid values: 1 to 500.
     *
     * @example
     * 200
     */
    maxResults?: number;
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
     * The session ID. The length limit is 1 to 128 UTF-8 bytes. The value cannot contain / or *.
     *
     * This parameter is required.
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The user ID. At least one of User ID and Agent ID must be provided. The length limit is 1 to 128 UTF-8 bytes. The value cannot contain / or *.
     *
     * @example
     * user-001
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
