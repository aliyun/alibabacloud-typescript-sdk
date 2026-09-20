// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ItemsI18nValue } from "./ItemsI18nValue";


export class ListMcpMarketItemsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The category of the MCP marketplace template.
   * 
   * @example
   * knowledge
   */
  category?: string;
  /**
   * @remarks
   * The description of the MCP service.
   * 
   * @example
   * An MCP service for querying knowledge bases
   */
  description?: string;
  /**
   * @remarks
   * The display metadata of the template.
   */
  displayMetadata?: { [key: string]: any };
  /**
   * @remarks
   * The multilingual display content organized by BCP-47 language tags. Falls back to default fields if the specified language is not matched.
   */
  i18n?: { [key: string]: ItemsI18nValue };
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
   * The ID of the MCP marketplace template.
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
   * The name of the MCP marketplace template.
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
   * The usage instructions of the MCP marketplace template.
   * 
   * @example
   * # Knowledge\\nKnowledge base query service
   */
  readme?: string;
  /**
   * @remarks
   * The schema version of the template.
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
   * The version of the MCP marketplace template.
   * 
   * @example
   * 1.0.0
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      description: 'description',
      displayMetadata: 'displayMetadata',
      i18n: 'i18n',
      iconUrl: 'iconUrl',
      installCount: 'installCount',
      marketItemId: 'marketItemId',
      mcpType: 'mcpType',
      name: 'name',
      officialTag: 'officialTag',
      protocol: 'protocol',
      readme: 'readme',
      schemaVersion: 'schemaVersion',
      templateInputSchema: 'templateInputSchema',
      templateVersion: 'templateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      displayMetadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      i18n: { 'type': 'map', 'keyType': 'string', 'valueType': ItemsI18nValue },
      iconUrl: 'string',
      installCount: 'number',
      marketItemId: 'string',
      mcpType: 'string',
      name: 'string',
      officialTag: 'string',
      protocol: 'string',
      readme: 'string',
      schemaVersion: 'string',
      templateInputSchema: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(this.displayMetadata) {
      $dara.Model.validateMap(this.displayMetadata);
    }
    if(this.i18n) {
      $dara.Model.validateMap(this.i18n);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcpMarketItemsResponseBody extends $dara.Model {
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of query results.
   */
  items?: ListMcpMarketItemsResponseBodyItems[];
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
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
  /**
   * @remarks
   * The total number of records that match the specified conditions.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListMcpMarketItemsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

