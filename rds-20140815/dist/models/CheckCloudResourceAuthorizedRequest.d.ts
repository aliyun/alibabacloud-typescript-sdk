import * as $dara from '@darabonba/typescript';
export declare class CheckCloudResourceAuthorizedRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     *
     * @example
     * rm-t4n****
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The ID of the destination region. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * us-east-1
     */
    targetRegionId?: string;
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
