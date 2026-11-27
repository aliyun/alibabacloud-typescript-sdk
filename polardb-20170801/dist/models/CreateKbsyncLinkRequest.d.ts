import * as $dara from '@darabonba/typescript';
export declare class CreateKBSyncLinkRequest extends $dara.Model {
    /**
     * @remarks
     * The endpoint of the DingTalk AI table MCP server.
     *
     * @example
     * https://mcp-gw.dingtalk.com/server/example
     */
    aiTableMcpEndpoint?: string;
    /**
     * @remarks
     * The TTL of a successful snapshot of chat members for fallback reuse, in seconds. This parameter applies to DINGTALK and FEISHU synchronization links. If this parameter is explicitly configured, it takes precedence. If it is not configured, Feishu uses the value of FeishuChatMemberStaleTtlSeconds. A value of -1 indicates that the snapshot never expires. A value of 0 indicates that snapshot fallback reuse is disabled. A positive integer indicates the maximum age of a successful snapshot in the same workspace, enterprise, and chat group allowed for reuse. If this parameter is omitted, Feishu uses the legacy dedicated field. If neither is configured, the default value is -1.
     *
     * @example
     * -1
     */
    chatMemberStaleTtlSeconds?: number;
    /**
     * @remarks
     * The client identifier.
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
     * example-client-secret
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
     * The time-to-live (TTL) of a successful snapshot of Feishu chat members for fallback reuse, in seconds. This parameter can be explicitly set only for FEISHU synchronization links. A value of -1 indicates that the snapshot never expires. A value of 0 indicates that snapshot fallback reuse is disabled. A positive integer indicates the maximum age of a snapshot allowed for reuse. Default value: -1. If this parameter is omitted, the default value -1 takes effect.
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
     * The synchronization scope mode. This parameter applies only to DINGTALK sources and must be set together with SelectionRules. Valid values:
     * - ALL: Synchronizes files in the source directory that are not excluded by excludes. The includes array must be empty.
     * - SELECTED: Synchronizes only files that match includes and are not excluded by excludes. If includes is empty, no files are selected.
     * New configurations take effect starting from the next synchronization.
     *
     * @example
     * SELECTED
     */
    selectionMode?: string;
    /**
     * @remarks
     * The file path filtering rules in JSON format. This parameter contains only two required string arrays: includes and excludes. Paths are relative to SourceDir, and exclusion rules take precedence. GLOB is supported: * and ? do not cross directories, and ** matches zero or more directory levels when it occupies a path segment alone. The two arrays can contain a maximum of 256 entries in total. Each entry must be 1 to 512 characters in length. The maximum size of the JSON text is 65,536 UTF-8 bytes. After a file is removed from the synchronization scope, the corresponding document imported by this synchronization link is cleaned up, without affecting the source file or documents of other synchronization links.
     */
    selectionRules?: string;
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
     * Specifies whether to enable synchronization for source deletions.
     *
     * @example
     * false
     */
    sourceDeleteSyncEnabled?: boolean;
    /**
     * @remarks
     * The address of the source directory for synchronization.
     *
     * This parameter is required.
     *
     * @example
     * https://example.feishu.cn/wiki/space/xxxxxx
     */
    sourceDir?: string;
    /**
     * @remarks
     * The data source type. Valid values: OSS, DINGTALK, FEISHU, and SHAREPOINT.
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
     * The ID of the source tenant. This parameter is required and must be set to the Entra tenant ID when SourceType is set to SHAREPOINT, the tenant_key when SourceType is set to FEISHU, or the corpId when SourceType is set to DINGTALK. This parameter is not required when SourceType is set to OSS.
     *
     * @example
     * 63eexxxx-xxxx-xxxx-xxxx-xxxxxx090f82
     */
    tenantId?: string;
    /**
     * @remarks
     * The Feishu user access token. This token is used only when the application identity cannot expand chat members because the bot is not in the chat group.
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
     * The Feishu user refresh token. This token must be provided together with UserAccessToken to automatically rotate the fallback identity for expanding chat members.
     *
     * @example
     * example-user-refresh-token
     */
    userRefreshToken?: string;
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
