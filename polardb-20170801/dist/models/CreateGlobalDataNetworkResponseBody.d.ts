import * as $dara from '@darabonba/typescript';
export declare class CreateGlobalDataNetworkResponseBody extends $dara.Model {
    /**
     * @remarks
     * The unique ID of the newly created synchronization channel.
     *
     * @example
     * gdc-xxx
     */
    channelId?: string;
    /**
     * @remarks
     * The unique ID of the newly created GDN.
     *
     * @example
     * gdn-xxx
     */
    networkId?: string;
    /**
     * @remarks
     * The unique request ID.
     *
     * @example
     * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
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
