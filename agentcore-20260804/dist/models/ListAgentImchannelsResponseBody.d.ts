import * as $dara from '@darabonba/typescript';
export declare class ListAgentIMChannelsResponseBodyItemsChannelConfig extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to display the thinking process in IM messages. Default value: false.
     */
    showThinking?: boolean;
    /**
     * @remarks
     * Specifies whether to display the tool calling process in IM messages. Default value: false.
     */
    showToolCalls?: boolean;
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
export declare class ListAgentIMChannelsResponseBodyItemsCredentialSummary extends $dara.Model {
    /**
     * @remarks
     * The list of configured secret field names. Secret values are not included.
     */
    configuredSecretFields?: string[];
    /**
     * @remarks
     * The non-sensitive credential fields and their values.
     */
    nonSecretFields?: {
        [key: string]: string;
    };
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
export declare class ListAgentIMChannelsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The agent ID.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * The behavior configuration of the channel.
     */
    channelConfig?: ListAgentIMChannelsResponseBodyItemsChannelConfig;
    /**
     * @remarks
     * The IM channel type. Valid values: DINGTALK (DingTalk), FEISHU (Lark), WECOM (WeCom).
     *
     * @example
     * DINGTALK
     */
    channelType?: string;
    /**
     * @remarks
     * The creation time in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * The channel credential summary. Only non-sensitive fields and configured secret field names are returned. Secret values are not returned.
     */
    credentialSummary?: ListAgentIMChannelsResponseBodyItemsCredentialSummary;
    /**
     * @remarks
     * Specifies whether the IM channel is enabled. The default value is true upon creation.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The public network access URL of the attached ServiceEndpoint.
     *
     * @example
     * https://agent.example.com
     */
    endpointUrl?: string;
    /**
     * @remarks
     * The IM channel ID.
     *
     * @example
     * imc-1
     */
    imChannelId?: string;
    /**
     * @remarks
     * The ID of the bound ServiceEndpoint. The endpoint must belong to the specified agent and its current version, be in the Ready state, and have a public network address.
     *
     * @example
     * se-1
     */
    serviceEndpointId?: string;
    /**
     * @remarks
     * The IM channel status. Valid values: CREATING (Creating), READY (Ready), UPDATING (Updating), FAILED (Failed), DELETING (Deleting), DELETE_FAILED (Deletion failed).
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The reason for the current status of the IM channel.
     *
     * @example
     * AppFlow creation failed
     */
    statusReason?: string;
    /**
     * @remarks
     * The update time in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    updateTime?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-1
     */
    workspaceId?: string;
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
export declare class ListAgentIMChannelsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value is SUCCESS if the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code. The value is 200 if the request is successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of IM channels.
     */
    items?: ListAgentIMChannelsResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of entries returned per page for the current request.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The message about the request processing result.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The token for the next page. An empty value indicates that the last page is reached.
     *
     * @example
     * next-token-1
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of records that meet the conditions.
     *
     * @example
     * 100
     */
    totalCount?: number;
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
