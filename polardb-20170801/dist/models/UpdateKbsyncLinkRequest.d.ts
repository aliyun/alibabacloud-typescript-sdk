import * as $dara from '@darabonba/typescript';
export declare class UpdateKBSyncLinkRequest extends $dara.Model {
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
     * The client secret.
     *
     * @example
     * example-client-secret
     */
    clientSecret?: string;
    /**
     * @remarks
     * The validity period of the successful snapshot of Lark group members for fallback reuse, in seconds. This parameter can be explicitly set only for FEISHU synchronization links. A value of -1 indicates that the snapshot never expires. A value of 0 disables snapshot fallback reuse. A positive integer indicates the maximum age of the snapshot allowed for reuse. If this parameter is omitted, the original value is retained. Explicitly passing -1 restores the default behavior.
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
     * The ID of the DingTalk user who performs the operation.
     *
     * @example
     * 123***56
     */
    userId?: string;
    /**
     * @remarks
     * The new Lark user refresh token. Pass this parameter together with UserAccessToken. Passing empty strings for both parameters deletes the tokens.
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
