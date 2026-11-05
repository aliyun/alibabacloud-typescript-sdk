import * as $dara from '@darabonba/typescript';
export declare class ListMcpMarketItemsRequest extends $dara.Model {
    /**
     * @remarks
     * The keyword used to filter MCP marketplace templates.
     *
     * @example
     * Knowledge
     */
    keyword?: string;
    /**
     * @remarks
     * The maximum number of records to return in this query.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The MCP type.
     *
     * @example
     * CODE_PACKAGE
     */
    mcpType?: string;
    /**
     * @remarks
     * The pagination token used to retrieve the next page of results.
     *
     * @example
     * 20
     */
    nextToken?: string;
    /**
     * @remarks
     * The official usage tag.
     *
     * @example
     * KNOWLEDGE_BASE
     */
    officialTag?: string;
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
