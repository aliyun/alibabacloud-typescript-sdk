import * as $dara from '@darabonba/typescript';
export declare class ListSandboxesRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries to return per page. Default value: 20. Valid values: 1 to 100.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The cursor for querying the next page. When you turn the page, you must keep workspaceId, agentId, searchText, sessionId, and maxResults unchanged.
     *
     * @example
     * next-token-1
     */
    nextToken?: string;
    /**
     * @remarks
     * Performs a case-insensitive fuzzy search by sandbox ID fragment.
     *
     * @example
     * 2f360
     */
    searchText?: string;
    /**
     * @remarks
     * If this parameter is omitted or left blank, the latest running unit of the agent is queried. If this parameter is specified, the service endpoint must belong to the agent and the target type must be AGENT_VERSION. Otherwise, Resource.NotFound is returned. An independently running service endpoint returns only the sandboxes of its own running unit. If the DEFAULT service endpoint has not taken over independent running, the query falls back to the latest running unit. If a non-DEFAULT service endpoint is not running independently, ServiceEndpointTargetNotReady is returned. If the running unit is not created, an empty list is returned and totalCount is 0, without reporting an error.
     *
     * @example
     * se-7f3a92c1
     */
    serviceEndpointId?: string;
    /**
     * @remarks
     * Performs a case-insensitive fuzzy search by current valid session ID fragment.
     *
     * @example
     * session-a
     */
    sessionId?: string;
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
