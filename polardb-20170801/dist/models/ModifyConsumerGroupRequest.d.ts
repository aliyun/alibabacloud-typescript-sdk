import * as $dara from '@darabonba/typescript';
export declare class ModifyConsumerGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the consumer group.
     *
     * This parameter is required.
     *
     * @example
     * cg-xxxxxx
     */
    consumerGroupName?: string;
    /**
     * @remarks
     * The ID of the gateway instance.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * Indicates whether the consumer group is the default group. Valid values: `0` (false) and `1` (true).
     *
     * @example
     * 0
     */
    isDefault?: string;
    /**
     * @remarks
     * The nickname of the consumer group.
     *
     * @example
     * yonghu
     */
    nickName?: string;
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
