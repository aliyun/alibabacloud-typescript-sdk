// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKBSyncLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the DingTalk AI Tables MCP server. An empty string indicates deletion.
   * 
   * @example
   * https://mcp-gw.dingtalk.com/server/example
   */
  aiTableMcpEndpoint?: string;
  /**
   * @remarks
   * The validity period of the successful group member snapshot used for fallback reuse, in seconds. This parameter applies to DingTalk and Lark synchronization links. If this field is explicitly configured, it takes precedence. If not configured, Lark uses FeishuChatMemberStaleTtlSeconds. A value of -1 indicates that the snapshot never expires. A value of 0 disables snapshot fallback reuse. A positive integer indicates the maximum age of successful snapshots in the same workspace, enterprise, and group allowed for reuse. If omitted, the original value is retained. Explicitly passing -1 restores the default behavior.
   * 
   * @example
   * -1
   */
  chatMemberStaleTtlSeconds?: number;
  /**
   * @remarks
   * The client identifier.
   * 
   * @example
   * cli_xxxxxxbe8
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret information.
   * 
   * @example
   * example-client-secret
   */
  clientSecret?: string;
  /**
   * @remarks
   * The validity period of the successful Lark group member snapshot used for fallback reuse, in seconds. This parameter can only be explicitly set for Lark synchronization links. A value of -1 indicates that the snapshot never expires. A value of 0 disables snapshot fallback reuse. A positive integer indicates the maximum age of the snapshot allowed for reuse. If omitted, the original value is retained. Explicitly passing -1 restores the default behavior.
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
   * This parameter applies only to DingTalk sources and must be set together with SelectionRules. Valid values: ALL: Synchronizes files in the source directory that are not excluded by excludes. The includes parameter must be an empty array. SELECTED: Synchronizes only files that match includes and are not excluded by excludes. If includes is empty, no files are selected. If this parameter is not provided, the original configuration is retained. If both parameters are provided, the original rules are replaced. This parameter cannot be modified at the same time as SyncEnabled. The new configuration takes effect starting from the next synchronization.
   * 
   * @example
   * SELECTED
   */
  selectionMode?: string;
  /**
   * @remarks
   * The file path filtering rules in JSON format. It only contains two required string arrays: includes and excludes. Paths are relative to SourceDir, and exclusion rules take precedence. GLOB is supported: * and ? do not cross directories, and ** matches zero or more directory levels when it occupies a path segment alone. The two arrays can contain a maximum of 256 entries in total. Each entry must be 1 to 512 characters in length. The maximum size of the JSON text is 65,536 UTF-8 bytes. After a file is removed from the synchronization scope, the corresponding documents imported by this synchronization link are cleared, without affecting the source files and documents of other synchronization links.
   */
  selectionRules?: string;
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
   * Specifies whether to synchronize deletions from the source.
   * 
   * @example
   * false
   */
  sourceDeleteSyncEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic synchronization. This parameter can only be modified individually and cannot be changed along with other configurations.
   * 
   * @example
   * false
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * The automatic synchronization interval, in minutes.
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
   * example-user-access-token
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
   * The new Lark user refresh token. It must be provided together with UserAccessToken. Passing two empty strings indicates deletion.
   * 
   * @example
   * example-user-refresh-token
   */
  userRefreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      aiTableMcpEndpoint: 'AiTableMcpEndpoint',
      chatMemberStaleTtlSeconds: 'ChatMemberStaleTtlSeconds',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      feishuChatMemberStaleTtlSeconds: 'FeishuChatMemberStaleTtlSeconds',
      knowledgeBaseId: 'KnowledgeBaseId',
      linkId: 'LinkId',
      mcpEndpoint: 'McpEndpoint',
      regionId: 'RegionId',
      selectionMode: 'SelectionMode',
      selectionRules: 'SelectionRules',
      sheetMcpEndpoint: 'SheetMcpEndpoint',
      sourceDeleteSyncEnabled: 'SourceDeleteSyncEnabled',
      syncEnabled: 'SyncEnabled',
      syncIntervalMinutes: 'SyncIntervalMinutes',
      userAccessToken: 'UserAccessToken',
      userId: 'UserId',
      userRefreshToken: 'UserRefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiTableMcpEndpoint: 'string',
      chatMemberStaleTtlSeconds: 'number',
      clientId: 'string',
      clientSecret: 'string',
      feishuChatMemberStaleTtlSeconds: 'number',
      knowledgeBaseId: 'string',
      linkId: 'string',
      mcpEndpoint: 'string',
      regionId: 'string',
      selectionMode: 'string',
      selectionRules: 'string',
      sheetMcpEndpoint: 'string',
      sourceDeleteSyncEnabled: 'boolean',
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

