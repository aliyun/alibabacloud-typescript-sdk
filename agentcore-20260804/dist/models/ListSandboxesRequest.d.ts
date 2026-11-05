import * as $dara from '@darabonba/typescript';
export declare class ListSandboxesRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of records per page. Default value: 20.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token for querying the next page. When paginating, keep workspaceId, agentId, searchText, sessionId, and maxResults unchanged.
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
     * Performs a case-insensitive fuzzy search by active session ID fragment.
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
