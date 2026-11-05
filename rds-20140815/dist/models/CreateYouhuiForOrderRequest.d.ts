import * as $dara from '@darabonba/typescript';
export declare class CreateYouhuiForOrderRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the created ticket.
     *
     * This parameter is required.
     *
     * @example
     * 171151088708****
     */
    activityId?: number;
    ownerId?: string;
    /**
     * @remarks
     * The promotion ID. You can call the GetResourcePrice operation to obtain the promotion ID.
     *
     * This parameter is required.
     *
     * @example
     * 200000199****
     */
    promotionId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
