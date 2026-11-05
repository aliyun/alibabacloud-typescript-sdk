import * as $dara from '@darabonba/typescript';
export declare class DescribeOssDownloadsRequest extends $dara.Model {
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The ID of the migration task. You can call the DescribeMigrateTasks operation to query the ID.
     *
     * This parameter is required.
     *
     * @example
     * 5625458541
     */
    migrateTaskId?: string;
    ownerId?: number;
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
