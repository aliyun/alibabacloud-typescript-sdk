import * as $dara from '@darabonba/typescript';
export declare class ListMcpsRequest extends $dara.Model {
    /**
     * @remarks
     * Filters the results by custom tags. An exact match is required.
     *
     * @example
     * Knowledge base
     */
    customTag?: string;
    /**
     * @remarks
     * The maximum number of entries to return per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The MCP service name or service ID. This parameter is used in conjunction with SearchType.
     *
     * @example
     * my-mcp-server
     */
    name?: string;
    /**
     * @remarks
     * The pagination token for the next page.
     *
     * @example
     * next-page-token
     */
    nextToken?: string;
    /**
     * @remarks
     * Filters the results by official usage tags.
     *
     * @example
     * KNOWLEDGE_BASE
     */
    officialTag?: string;
    /**
     * @remarks
     * The name matching mode. This parameter takes effect only when Name is specified. Valid values: accurate (exact match) and blur (fuzzy match). Default value: blur.
     *
     * @example
     * blur
     */
    searchType?: string;
    /**
     * @remarks
     * Specifies whether the service is still subject to official template usage constraints.
     */
    usageActive?: boolean;
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
