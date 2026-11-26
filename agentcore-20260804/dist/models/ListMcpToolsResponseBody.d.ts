import * as $dara from '@darabonba/typescript';
export declare class ListMcpToolsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * 工具名称、说明和输入输出 Schema 的规范化 SHA-256 摘要。
     *
     * @example
     * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
     */
    definitionDigest?: string;
    /**
     * @remarks
     * The input parameter schema of the tool.
     *
     * @example
     * {"type":"object"}
     */
    inputSchema?: string;
    /**
     * @remarks
     * The output parameter schema of the tool.
     *
     * @example
     * {"type":"object"}
     */
    outputSchema?: string;
    /**
     * @remarks
     * The MCP tool description.
     *
     * @example
     * Get the current time
     */
    toolDescription?: string;
    /**
     * @remarks
     * The MCP tool name.
     *
     * @example
     * get-current-time
     */
    toolName?: string;
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
export declare class ListMcpToolsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * Success
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list data.
     */
    items?: ListMcpToolsResponseBodyItems[];
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
     * The response message.
     *
     * @example
     * The request is processed successfully
     */
    message?: string;
    /**
     * @remarks
     * The token for the next page.
     *
     * @example
     * next-page-token
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 100
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
