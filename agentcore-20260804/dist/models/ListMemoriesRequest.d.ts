import * as $dara from '@darabonba/typescript';
export declare class ListMemoriesRequest extends $dara.Model {
    /**
     * @remarks
     * The agent ID. If you do not specify this parameter, all agents are matched. The value must be 1 to 128 UTF-8 bytes in length and cannot contain slashes (/) or asterisks (*).
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The maximum number of records per page. Default value: 50. Valid values: 1 to 100.
     *
     * @example
     * 50
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token for the next page.
     *
     * @example
     * eyJvZmZzZXQiOjEwfQ==
     */
    nextToken?: string;
    /**
     * @remarks
     * The session ID. If you do not specify this parameter, all sessions are matched. The value must be 1 to 128 UTF-8 bytes in length and cannot contain slashes (/) or asterisks (*).
     *
     * @example
     * session-001
     */
    sessionId?: string;
    /**
     * @remarks
     * The user ID. If you do not specify this parameter, all users are matched. The value must be 1 to 128 UTF-8 bytes in length and cannot contain slashes (/) or asterisks (*).
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
