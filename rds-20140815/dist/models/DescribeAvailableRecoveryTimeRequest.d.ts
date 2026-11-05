import * as $dara from '@darabonba/typescript';
export declare class DescribeAvailableRecoveryTimeRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cross-region backup file. You can call the DescribeCrossRegionBackups operation to query the ID of the backup set.
     *
     * This parameter is required.
     *
     * @example
     * 12493****
     */
    crossBackupId?: number;
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-chengdu
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy****
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
