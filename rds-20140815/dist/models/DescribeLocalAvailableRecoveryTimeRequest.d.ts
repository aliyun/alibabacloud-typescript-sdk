import * as $dara from '@darabonba/typescript';
export declare class DescribeLocalAvailableRecoveryTimeRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp1f****
     */
    DBInstanceId?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    region?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfm****
     */
    resourceGroupId?: string;
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
