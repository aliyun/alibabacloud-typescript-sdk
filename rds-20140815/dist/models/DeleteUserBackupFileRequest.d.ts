import * as $dara from '@darabonba/typescript';
export declare class DeleteUserBackupFileRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the user backup. You can call the ListUserBackupFiles operation to query the ID.
     *
     * This parameter is required.
     *
     * @example
     * b-w1haya7e4i25****
     */
    backupId?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
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
