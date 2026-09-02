// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKBSyncLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cli_xxxxxxbe8
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret.
   * 
   * This parameter is required.
   * 
   * @example
   * ******
   */
  clientSecret?: string;
  /**
   * @remarks
   * The description of the synchronization link.
   * 
   * @example
   * testDesc
   */
  description?: string;
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
   * The name of the synchronization link.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  linkName?: string;
  /**
   * @remarks
   * The DingTalk document MCP Server endpoint.
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
   * The DingTalk spreadsheet MCP Server endpoint.
   * 
   * @example
   * https://mcp-gw.dingtalk.com/server/1a2b3cxxxxxx567?key=d5e6fxxxxxx543
   */
  sheetMcpEndpoint?: string;
  /**
   * @remarks
   * The source directory address for synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.feishu.cn/wiki/space/xxxxxx
   */
  sourceDir?: string;
  /**
   * @remarks
   * The data source type. Valid values: FEISHU and SHAREPOINT.
   * 
   * This parameter is required.
   * 
   * @example
   * FEISHU
   */
  sourceType?: string;
  /**
   * @remarks
   * The synchronization interval. Unit: minutes.
   * 
   * @example
   * 30
   */
  syncIntervalMinutes?: number;
  /**
   * @remarks
   * The tenant ID. This parameter is required when SourceType is set to SHAREPOINT.
   * 
   * @example
   * 63eexxxx-xxxx-xxxx-xxxx-xxxxxx090f82
   */
  tenantId?: string;
  /**
   * @remarks
   * The DingTalk operator user ID.
   * 
   * @example
   * 123***56
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      linkName: 'LinkName',
      mcpEndpoint: 'McpEndpoint',
      regionId: 'RegionId',
      sheetMcpEndpoint: 'SheetMcpEndpoint',
      sourceDir: 'SourceDir',
      sourceType: 'SourceType',
      syncIntervalMinutes: 'SyncIntervalMinutes',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      description: 'string',
      knowledgeBaseId: 'string',
      linkName: 'string',
      mcpEndpoint: 'string',
      regionId: 'string',
      sheetMcpEndpoint: 'string',
      sourceDir: 'string',
      sourceType: 'string',
      syncIntervalMinutes: 'number',
      tenantId: 'string',
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

