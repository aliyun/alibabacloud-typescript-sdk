import * as $dara from '@darabonba/typescript';
export declare class CreateKBSyncLinkRequest extends $dara.Model {
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
     * The validity period of the successful snapshot of Lark group members for fallback reuse, in seconds. This parameter can be explicitly set only for FEISHU synchronization links. A value of -1 indicates that the snapshot never expires. A value of 0 disables snapshot fallback reuse. A positive integer indicates the maximum age of the snapshot allowed for reuse. Default value: -1. If this parameter is omitted, the default value -1 takes effect.
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
     * The endpoint of the DingTalk sheet MCP server.
     *
     * @example
     * https://mcp-gw.dingtalk.com/server/1a2b3cxxxxxx567?key=d5e6fxxxxxx543
     */
    sheetMcpEndpoint?: string;
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
     * The Lark user access token. This token is used only when the application identity cannot expand group members because the bot is not in the group chat.
     *
     * @example
     * ******
     */
    userAccessToken?: string;
    /**
     * @remarks
     * The ID of the DingTalk user who performs the operation.
     *
     * @example
     * 123***56
     */
    userId?: string;
    /**
     * @remarks
     * The Lark user refresh token. This token must be provided together with UserAccessToken to automatically rotate the fallback identity for expanding group members.
     *
     * @example
     * ******
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
