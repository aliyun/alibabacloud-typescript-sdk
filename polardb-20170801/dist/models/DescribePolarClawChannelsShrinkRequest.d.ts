import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawChannelsShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarClaw application ID. First call DescribeApplications to filter applications where ApplicationType is polardb_polarclaw and Status is Activated, and then use the returned ApplicationId to query channels.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The list of channel IDs to query. If this parameter is left empty, all channels are returned.
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
