import * as $dara from '@darabonba/typescript';
export declare class ListMemorySessionsRequest extends $dara.Model {
    /**
     * @remarks
     * The agent ID. If you do not specify this parameter, all agents are matched. The value must be 1 to 128 bytes in length and cannot contain forward slashes (/) or asterisks (*).
     *
     * @example
     * agent-001
     */
    agentId?: string;
    /**
     * @remarks
     * The maximum number of records per page. Default value: 100. Valid values: 1 to 100.
     *
     * @example
     * 100
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token for the next page.
     *
     * @example
     * eyJvZmZzZXQiOjEwMH0=
     */
    nextToken?: string;
    /**
     * @remarks
     * The user ID. If you do not specify this parameter, all users are matched. The value must be 1 to 128 bytes in length and cannot contain forward slashes (/) or asterisks (*).
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
