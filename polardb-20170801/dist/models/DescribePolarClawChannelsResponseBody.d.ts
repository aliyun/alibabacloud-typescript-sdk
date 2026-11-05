import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawChannelsResponseBodyChannelsAccounts extends $dara.Model {
    /**
     * @remarks
     * The account ID.
     *
     * @example
     * default
     */
    accountId?: string;
    /**
     * @remarks
     * Indicates whether the account is configured.
     *
     * @example
     * true
     */
    configured?: boolean;
    /**
     * @remarks
     * Indicates whether the account is connected.
     *
     * @example
     * true
     */
    connected?: boolean;
    /**
     * @remarks
     * Indicates whether the account is enabled.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * A list of issues related to the account.
     */
    issues?: string[];
    /**
     * @remarks
     * The timestamp (in milliseconds) of the last inbound message.
     *
     * @example
     * 0
     */
    lastInboundAt?: number;
    /**
     * @remarks
     * The timestamp (in milliseconds) of the last outbound message.
     *
     * @example
     * 0
     */
    lastOutboundAt?: number;
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
export declare class DescribePolarClawChannelsResponseBodyChannels extends $dara.Model {
    /**
     * @remarks
     * A list of account objects for the channel.
     */
    accounts?: DescribePolarClawChannelsResponseBodyChannelsAccounts[];
    /**
     * @remarks
     * The channel ID.
     *
     * @example
     * feishu
     */
    channelId?: string;
    /**
     * @remarks
     * Indicates whether the channel is configured.
     *
     * @example
     * true
     */
    configured?: boolean;
    /**
     * @remarks
     * The default account ID for the channel.
     *
     * @example
     * default
     */
    defaultAccountId?: string;
    /**
     * @remarks
     * Indicates whether the channel is enabled.
     *
     * @example
     * true
     */
    enabled?: boolean;
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
export declare class DescribePolarClawChannelsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * A list of PolarClaw channel objects.
     */
    channels?: DescribePolarClawChannelsResponseBodyChannels[];
    /**
     * @remarks
     * The returned status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The response message. A value of `successful` indicates that the request succeeded.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
     */
    requestId?: string;
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
