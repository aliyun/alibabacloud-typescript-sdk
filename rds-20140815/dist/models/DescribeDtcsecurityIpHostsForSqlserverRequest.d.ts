import * as $dara from '@darabonba/typescript';
export declare class DescribeDTCSecurityIpHostsForSQLServerRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the instance. You can call the DescribeDBInstances operation to obtain the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeDBInstanceAttribute operation to obtain the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the resource group ID.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
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
