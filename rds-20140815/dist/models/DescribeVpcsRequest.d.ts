import * as $dara from '@darabonba/typescript';
export declare class DescribeVpcsRequest extends $dara.Model {
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 20.
     *
     * @example
     * 20
     */
    pageSize?: number;
    /**
     * @remarks
     * The cloud product type.
     *
     * @example
     * rds
     */
    product?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmxxtz*****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The ID of the VPC. Specify this parameter to query a specific VPC.
     *
     * @example
     * vpc-bp1bva4qkmvqt******
     */
    vpcId?: string;
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-beijing-g
     */
    zoneId?: string;
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
