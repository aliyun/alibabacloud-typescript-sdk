import * as $dara from '@darabonba/typescript';
export declare class UpdateAgentIMChannelRequestBodyChannelConfig extends $dara.Model {
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
export declare class UpdateAgentIMChannelRequestBody extends $dara.Model {
    /**
     * @remarks
     * The channel behavior configuration. This configuration is fully replaced when passed. An empty object indicates that the default values are restored.
     */
    channelConfig?: UpdateAgentIMChannelRequestBodyChannelConfig;
    /**
     * @remarks
     * Specifies whether to enable the IM channel. Default value: true.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The ID of the bound ServiceEndpoint. The endpoint must belong to the specified agent and its current version, and must be ready and have a public endpoint.
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
export declare class UpdateAgentIMChannelRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UpdateAgentIMChannelRequestBody;
    /**
     * @remarks
     * The reserved idempotence token. The backend does not provide persistent idempotence guarantees in the current phase.
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
