import * as $dara from '@darabonba/typescript';
import { DataI18nValue } from "./DataI18nValue";
export declare class GetMcpMarketItemResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The MCP marketplace template category.
     *
     * @example
     * knowledge
     */
    category?: string;
    /**
     * @remarks
     * The MCP service description.
     *
     * @example
     * An MCP service for querying knowledge bases
     */
    description?: string;
    /**
     * @remarks
     * The template display metadata.
     */
    displayMetadata?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The multilingual display content, organized by BCP-47 language tags. Falls back to default fields when the specified language is not matched.
     */
    i18n?: {
        [key: string]: DataI18nValue;
    };
    /**
     * @remarks
     * The icon URL of the MCP marketplace template.
     *
     * @example
     * https://example.com/mcp-icon.png
     */
    iconUrl?: string;
    /**
     * @remarks
     * The number of times the template has been installed.
     *
     * @example
     * 12
     */
    installCount?: number;
    /**
     * @remarks
     * The MCP marketplace template ID.
     *
     * @example
     * market-1
     */
    marketItemId?: string;
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
     * The MCP marketplace template name.
     *
     * @example
     * Knowledge
     */
    name?: string;
    /**
     * @remarks
     * The official usage tag.
     *
     * @example
     * KNOWLEDGE_BASE
     */
    officialTag?: string;
    /**
     * @remarks
     * The MCP protocol.
     *
     * @example
     * StreamableHTTP
     */
    protocol?: string;
    /**
     * @remarks
     * The usage instructions for the MCP marketplace template.
     *
     * @example
     * # Knowledge\\nKnowledge base query service
     */
    readme?: string;
    /**
     * @remarks
     * The template schema version.
     *
     * @example
     * 1.0
     */
    schemaVersion?: string;
    /**
     * @remarks
     * The template input schema, represented as a JSON Schema string.
     *
     * @example
     * {"type":"object","properties":{"addresses":{"type":"array","items":{"type":"string"}}}}
     */
    templateInputSchema?: string;
    /**
     * @remarks
     * The MCP marketplace template version.
     *
     * @example
     * 1.0.0
     */
    templateVersion?: string;
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
export declare class GetMcpMarketItemResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The response data.
     */
    data?: GetMcpMarketItemResponseBodyData;
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
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID, which is used to locate and troubleshoot issues.
     *
     * @example
     * request-123456
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
     */
    success?: boolean;
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
