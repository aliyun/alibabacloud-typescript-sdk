import * as $dara from '@darabonba/typescript';
export declare class ModifySQLCollectorPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to obtain instance ID.
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
     * The ID of the resource group. You can call the DescribeDBInstanceAttribute operation to obtain the ID.
     *
     * @example
     * rg-acfmx****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * Specifies whether to enable or disable the SQL Explorer (SQL Audit) feature. Valid values:
     * - **Enable**
     * - **Disabled**
     *
     * This parameter is required.
     *
     * @example
     * Enable
     */
    SQLCollectorStatus?: string;
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
