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
   * The validity period of the Lark group member snapshot for fallback reuse, in seconds. This parameter can be explicitly set only for FEISHU synchronization links. A value of -1 indicates that the snapshot never expires. A value of 0 disables snapshot fallback reuse. A positive integer indicates the maximum age of the snapshot allowed for reuse. Default value: -1. If this parameter is omitted, -1 takes effect.
   * 
   * @example
   * -1
   */
  feishuChatMemberStaleTtlSeconds?: number;
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
   * The name of the link.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  linkName?: string;
  /**
   * @remarks
   * The endpoint of the DingTalk document MCP server.
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
   * The endpoint of the DingTalk sheet MCP server.
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
   * The synchronization interval, in minutes.
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
   * The Lark user access token. This token is used only when the application identity cannot retrieve group members because the bot is not in the group chat.
   * 
   * @example
   * ******
   */
  userAccessToken?: string;
  /**
   * @remarks
   * The ID of the DingTalk operator.
   * 
   * @example
   * 123***56
   */
  userId?: string;
  /**
   * @remarks
   * The Lark user refresh token. This token must be provided together with UserAccessToken to automatically rotate the fallback identity for retrieving group members.
   * 
   * @example
   * ******
   */
  userRefreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      description: 'Description',
      feishuChatMemberStaleTtlSeconds: 'FeishuChatMemberStaleTtlSeconds',
      knowledgeBaseId: 'KnowledgeBaseId',
      linkName: 'LinkName',
      mcpEndpoint: 'McpEndpoint',
      regionId: 'RegionId',
      sheetMcpEndpoint: 'SheetMcpEndpoint',
      sourceDir: 'SourceDir',
      sourceType: 'SourceType',
      syncIntervalMinutes: 'SyncIntervalMinutes',
      tenantId: 'TenantId',
      userAccessToken: 'UserAccessToken',
      userId: 'UserId',
      userRefreshToken: 'UserRefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      description: 'string',
      feishuChatMemberStaleTtlSeconds: 'number',
      knowledgeBaseId: 'string',
      linkName: 'string',
      mcpEndpoint: 'string',
      regionId: 'string',
      sheetMcpEndpoint: 'string',
      sourceDir: 'string',
      sourceType: 'string',
      syncIntervalMinutes: 'number',
      tenantId: 'string',
      userAccessToken: 'string',
      userId: 'string',
      userRefreshToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

