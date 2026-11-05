import * as $dara from '@darabonba/typescript';
export declare class DisablePolarClawChannelRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The unique ID of the channel.
     *
     * This parameter is required.
     *
     * @example
     * feishu
     */
    channelId?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after the channel is disabled. Defaults to true.
     *
     * @example
     * true
     */
    restart?: boolean;
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
