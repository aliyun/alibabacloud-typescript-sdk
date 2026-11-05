import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawChannelsShrinkRequest extends $dara.Model {
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
     * The channel IDs to query. Leave this parameter empty to return all channels.
     *
     * @example
     * feishu,telegram
     */
    channelListShrink?: string;
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
