// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKBSyncLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * cli_xxxxxxbe8
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret.
   * 
   * @example
   * ******
   */
  clientSecret?: string;
  /**
   * @remarks
   * The unique identifier of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The synchronization link ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pkbl-xxxxx
   */
  linkId?: string;
  /**
   * @remarks
   * The MCP Server address for DingTalk documents.
   * 
   * @example
   * https://mcp-gw.dingtalk.com/server/1a2b3cxxxxxx789?key=d5e6fxxxxxx876
   */
  mcpEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The MCP Server address for DingTalk spreadsheets.
   * 
   * @example
   * https://mcp-gw.dingtalk.com/server/1a2b3cxxxxxx567?key=d5e6fxxxxxx543
   */
  sheetMcpEndpoint?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic synchronization. This parameter can only be modified independently and cannot be changed together with other configurations.
   * 
   * @example
   * false
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * 20
   * 
   * @example
   * 20
   */
  syncIntervalMinutes?: number;
  /**
   * @remarks
   * The DingTalk user ID for the operation.
   * 
   * @example
   * 123***56
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      knowledgeBaseId: 'KnowledgeBaseId',
      linkId: 'LinkId',
      mcpEndpoint: 'McpEndpoint',
      regionId: 'RegionId',
      sheetMcpEndpoint: 'SheetMcpEndpoint',
      syncEnabled: 'SyncEnabled',
      syncIntervalMinutes: 'SyncIntervalMinutes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      knowledgeBaseId: 'string',
      linkId: 'string',
      mcpEndpoint: 'string',
      regionId: 'string',
      sheetMcpEndpoint: 'string',
      syncEnabled: 'boolean',
      syncIntervalMinutes: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

