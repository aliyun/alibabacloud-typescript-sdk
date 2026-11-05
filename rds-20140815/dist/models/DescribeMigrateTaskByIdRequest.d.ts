import * as $dara from '@darabonba/typescript';
export declare class DescribeMigrateTaskByIdRequest extends $dara.Model {
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp11e1tzg****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The ID of the OSS backup migration task. You can call the DescribeMigrateTasks operation to query the ID.
     *
     * This parameter is required.
     *
     * @example
     * 235943
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
