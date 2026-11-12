import * as $dara from '@darabonba/typescript';
export declare class CreateGlobalDataNetworkResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the synchronization link.
     *
     * @example
     * gdc-xxx
     */
    channelId?: string;
    /**
     * @remarks
     * The ID of the global database network (GDN).
     *
     * @example
     * gdn-xxx
     */
    networkId?: string;
    /**
     * @remarks
     * The request ID.
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
