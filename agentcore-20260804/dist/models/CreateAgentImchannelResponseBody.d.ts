import * as $dara from '@darabonba/typescript';
export declare class CreateAgentIMChannelResponseBodyDataChannelConfig extends $dara.Model {
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
export declare class CreateAgentIMChannelResponseBodyDataCredentialSummary extends $dara.Model {
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
export declare class CreateAgentIMChannelResponseBodyData extends $dara.Model {
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
     * The channel behavior configuration.
     */
    channelConfig?: CreateAgentIMChannelResponseBodyDataChannelConfig;
    /**
     * @remarks
     * The IM channel type. Valid values: DINGTALK (DingTalk), FEISHU (Lark), and WECOM (WeCom).
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
     * The channel credential summary. Only non-sensitive fields and the names of configured secret fields are returned. Secret values are not returned.
     */
    credentialSummary?: CreateAgentIMChannelResponseBodyDataCredentialSummary;
    /**
     * @remarks
     * Specifies whether to enable the IM channel. Default value: true.
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
     * The ID of the bound ServiceEndpoint. The endpoint must belong to the specified agent and its current version, and must be ready and have a public address.
     *
     * @example
     * se-1
     */
    serviceEndpointId?: string;
    /**
     * @remarks
     * The IM channel status. Valid values: CREATING (Creating), READY (Ready), UPDATING (Updating), FAILED (Failed), DELETING (Deleting), and DELETE_FAILED (Deletion failed).
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
export declare class CreateAgentIMChannelResponseBody extends $dara.Model {
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
     * The IM channel information after creation.
     */
    data?: CreateAgentIMChannelResponseBodyData;
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
     * The request processing result message.
     *
     * @example
     * success
     */
    message?: string;
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
