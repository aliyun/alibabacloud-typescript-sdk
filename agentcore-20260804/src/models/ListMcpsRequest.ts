// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpsRequest extends $dara.Model {
  /**
   * @remarks
   * The custom tags used to filter results. An exact match is required.
   * 
   * @example
   * Knowledge base
   */
  customTag?: string;
  /**
   * @remarks
   * 默认 false，仅返回修订号、状态、源和工具数量。需要完整配置时使用 GetMcp，或显式设置为 true。
   * 
   * @example
   * false
   */
  includeVirtualConfig?: boolean;
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
   * The official usage tags used to filter results.
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
   * 按 MCP 类型筛选，省略时返回全部类型。
   * 
   * @example
   * VIRTUAL
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether the service is still subject to official template usage constraints.
   */
  usageActive?: boolean;
  static names(): { [key: string]: string } {
    return {
      customTag: 'customTag',
      includeVirtualConfig: 'includeVirtualConfig',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      officialTag: 'officialTag',
      searchType: 'searchType',
      type: 'type',
      usageActive: 'usageActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTag: 'string',
      includeVirtualConfig: 'boolean',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      officialTag: 'string',
      searchType: 'string',
      type: 'string',
      usageActive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

