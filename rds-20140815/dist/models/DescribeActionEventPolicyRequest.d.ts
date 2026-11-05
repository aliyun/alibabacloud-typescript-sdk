import * as $dara from '@darabonba/typescript';
export declare class DescribeActionEventPolicyRequest extends $dara.Model {
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call DescribeRegions to obtain the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID. You can call DescribeDBInstanceAttribute to obtain the resource group ID.
     *
     * @example
     * rg-acfmy*****
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
