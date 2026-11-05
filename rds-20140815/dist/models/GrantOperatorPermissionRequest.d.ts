import * as $dara from '@darabonba/typescript';
export declare class GrantOperatorPermissionRequest extends $dara.Model {
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
    /**
     * @remarks
     * The expiration time of the permissions. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2019-03-27T16:00:00Z
     */
    expiredTime?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The type of the permissions to be granted. Valid values:
     * - **Control**: configuration permissions. You can view and modify the instance configurations.
     * - **Data**: database permissions. You can view table schemas, indexes, and SQL statements.
     *
     * This parameter is required.
     *
     * @example
     * Control
     */
    privileges?: string;
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
