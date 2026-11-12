import * as $dara from '@darabonba/typescript';
export declare class ListAgentSpecsRequest extends $dara.Model {
    /**
     * @remarks
     * The AgentSpec name, used as a search keyword in combination with the search parameter.
     *
     * @example
     * my-worker
     */
    agentSpecName?: string;
    /**
     * @remarks
     * The business tag for fuzzy filtering.
     *
     * @example
     * ai
     */
    bizTag?: string;
    /**
     * @remarks
     * The sort field. Supports download_count. By default, results are sorted by update time.
     *
     * @example
     * download_count
     */
    orderBy?: string;
    /**
     * @remarks
     * The owner filter.
     *
     * @example
     * user1
     */
    owner?: string;
    /**
     * @remarks
     * The page number. Pages start from 1. Default value: 1.
     *
     * @example
     * 1
     */
    pageNo?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 10. Maximum value: 50.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The visibility scope filter. Valid values: PUBLIC and PRIVATE.
     *
     * @example
     * PUBLIC
     */
    scope?: string;
    /**
     * @remarks
     * The search mode. Valid values: accurate (exact match) and blur (fuzzy match). Default value: blur.
     *
     * @example
     * blur
     */
    search?: string;
    /**
     * @remarks
     * Specifies whether to return the Skills and McpServers lists. Default value: false.
     *
     * @example
     * true
     */
    withCapabilities?: boolean;
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
