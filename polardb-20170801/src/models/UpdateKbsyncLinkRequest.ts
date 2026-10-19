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
   * The validity period of a successful Lark group member snapshot used for fallback reuse, in seconds. This parameter can be explicitly set only for FEISHU synchronization links. A value of -1 indicates that the snapshot never expires. A value of 0 disables snapshot fallback reuse. A positive integer indicates the maximum age of a snapshot allowed for reuse. If this parameter is omitted, the original value is retained. Explicitly passing -1 restores the default behavior.
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
   * The ID of the synchronization link.
   * 
   * This parameter is required.
   * 
   * @example
   * pkbl-xxxxx
   */
  linkId?: string;
  /**
   * @remarks
   * The endpoint of the DingTalk Docs MCP server.
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
   * The endpoint of the DingTalk Sheets MCP server.
   * 
   * @example
   * https://mcp-gw.dingtalk.com/server/1a2b3cxxxxxx567?key=d5e6fxxxxxx543
   */
  sheetMcpEndpoint?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic synchronization. This parameter must be modified individually and cannot be changed along with other configurations.
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
   * The new Lark user access token.
   * 
   * @example
   * ******
   */
  userAccessToken?: string;
  /**
   * @remarks
   * The ID of the DingTalk user that performs the operation.
   * 
   * @example
   * 123***56
   */
  userId?: string;
  /**
   * @remarks
   * The new Lark user refresh token. Pass this parameter together with UserAccessToken. Passing empty strings for both parameters indicates deletion.
   * 
   * @example
   * ******
   */
  userRefreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      feishuChatMemberStaleTtlSeconds: 'FeishuChatMemberStaleTtlSeconds',
      knowledgeBaseId: 'KnowledgeBaseId',
      linkId: 'LinkId',
      mcpEndpoint: 'McpEndpoint',
      regionId: 'RegionId',
      sheetMcpEndpoint: 'SheetMcpEndpoint',
      syncEnabled: 'SyncEnabled',
      syncIntervalMinutes: 'SyncIntervalMinutes',
      userAccessToken: 'UserAccessToken',
      userId: 'UserId',
      userRefreshToken: 'UserRefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      feishuChatMemberStaleTtlSeconds: 'number',
      knowledgeBaseId: 'string',
      linkId: 'string',
      mcpEndpoint: 'string',
      regionId: 'string',
      sheetMcpEndpoint: 'string',
      syncEnabled: 'boolean',
      syncIntervalMinutes: 'number',
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

