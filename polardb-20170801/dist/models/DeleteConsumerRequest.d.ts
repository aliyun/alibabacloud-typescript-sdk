import * as $dara from '@darabonba/typescript';
export declare class DeleteConsumerRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the consumer.
     *
     * This parameter is required.
     *
     * @example
     * c-mqveroemc***
     */
    consumerId?: string;
    /**
     * @remarks
     * The gateway instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
