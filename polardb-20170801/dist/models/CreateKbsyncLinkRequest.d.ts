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
     * The validity period of the successful snapshot of Lark chat members for fallback reuse, in seconds. This parameter can be explicitly set only for Lark synchronization links. A value of -1 indicates that the snapshot never expires. A value of 0 indicates that snapshot fallback reuse is disabled. A positive integer indicates the maximum age of the snapshot allowed for reuse. Default value: -1. If this parameter is not specified, the default value -1 is used.
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
     * The Lark user access token. This token is used only when the application identity cannot expand chat members because the bot is not in the chat.
     *
     * @example
     * example-user-access-token
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
     * The Lark user refresh token. This token must be provided together with UserAccessToken and is used to automatically rotate the fallback identity for expanding chat members.
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
