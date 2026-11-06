import * as $dara from '@darabonba/typescript';
export declare class CreateAgentIMChannelRequestBodyChannelConfig extends $dara.Model {
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
export declare class CreateAgentIMChannelRequestBody extends $dara.Model {
    /**
     * @remarks
     * The channel behavior configuration.
     */
    channelConfig?: CreateAgentIMChannelRequestBodyChannelConfig;
    /**
     * @remarks
     * The IM channel type. Valid values: DINGTALK (DingTalk), FEISHU (Lark), and WECOM (WeCom).
     *
     * This parameter is required.
     *
     * @example
     * DINGTALK
     */
    channelType?: string;
    /**
     * @remarks
     * The channel credentials. You must pass all credential fields and ensure that the field values are non-empty strings. For DingTalk, use clientID and clientSecret. For Lark, use appId and appSecret. For WeCom, use botId and secret.
     *
     * This parameter is required.
     */
    credential?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * Specifies whether to enable the IM channel. Default value: true.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The ID of the bound service endpoint. The endpoint must belong to the specified agent and its current version, be in the ready state, and have a publicly accessible address.
     *
     * This parameter is required.
     *
     * @example
     * se-1
     */
    serviceEndpointId?: string;
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
export declare class CreateAgentIMChannelRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: CreateAgentIMChannelRequestBody;
    /**
     * @remarks
     * The reserved idempotency token. The backend does not provide persistent idempotency guarantees in the current phase.
     *
     * @example
     * client-token-1
     */
    clientToken?: string;
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
