import * as $dara from '@darabonba/typescript';
export declare class ModifySQLCollectorRetentionRequest extends $dara.Model {
    /**
     * @remarks
     * The log retention period of SQL Explorer. Valid values:
     * - 30: 30 days.
     * - 180: 180 days.
     * - 365: 1 year.
     * - 1095: 3 years.
     * - 1825: 5 years.
     *
     * This parameter is required.
     *
     * @example
     * 365
     */
    configValue?: string;
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
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The ID of the resource group. You can call the DescribeDBInstanceAttribute operation to query the ID.
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
