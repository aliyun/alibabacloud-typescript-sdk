import * as $dara from '@darabonba/typescript';
export declare class ListAgentSpecsRequest extends $dara.Model {
    /**
     * @remarks
     * The AgentSpec name used as a search keyword. This parameter is used together with the search parameter.
     *
     * @example
     * my-worker
     */
    agentSpecName?: string;
    /**
     * @remarks
     * The business tag used for fuzzy filtering.
     *
     * @example
     * ai
     */
    bizTag?: string;
    /**
     * @remarks
     * The field by which to sort the results. Set the value to download_count to sort by download count. By default, results are sorted by update time.
     *
     * @example
     * download_count
     */
    orderBy?: string;
    /**
     * @remarks
     * The owner used to filter the results.
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
     * The visibility scope used to filter the results. Valid values:
     *
     * - PUBLIC
     * - PRIVATE
     *
     * @example
     * PUBLIC
     */
    scope?: string;
    /**
     * @remarks
     * The search mode. Valid values:
     *
     * - accurate: exact match.
     * - blur: fuzzy match.
     *
     * Default value: blur.
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
