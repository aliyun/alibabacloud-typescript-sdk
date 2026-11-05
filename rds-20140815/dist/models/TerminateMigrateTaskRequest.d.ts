import * as $dara from '@darabonba/typescript';
export declare class TerminateMigrateTaskRequest extends $dara.Model {
    /**
     * @remarks
     * Instance ID of the ApsaraDB RDS for SQL Server instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp159vf****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The ID of the backup migration task. You can call the DescribeMigrateTasks operation to query the ID.
     *
     * This parameter is required.
     *
     * @example
     * 56254****
     */
    migrateTaskId?: string;
    ownerId?: number;
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
