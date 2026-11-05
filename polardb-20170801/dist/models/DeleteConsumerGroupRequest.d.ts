import * as $dara from '@darabonba/typescript';
export declare class DeleteConsumerGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the consumer group to delete. You can obtain the ID from the ConsumerGroupId parameter returned by the CreateConsumerGroup operation.
     *
     * This parameter is required.
     *
     * @example
     * cg-xxxxxxx
     */
    consumerGroupName?: string;
    /**
     * @remarks
     * The ID of the gateway instance. You can obtain the ID from the GwClusterId parameter returned by the CreateGateway operation.
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
