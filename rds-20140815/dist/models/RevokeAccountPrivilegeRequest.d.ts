import * as $dara from '@darabonba/typescript';
export declare class RevokeAccountPrivilegeRequest extends $dara.Model {
    /**
     * @remarks
     * The account name.
     *
     * This parameter is required.
     *
     * @example
     * test1
     */
    accountName?: string;
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The database name. All permissions of the account on this database are revoked. Separate multiple database names with commas (,).
     *
     * This parameter is required.
     *
     * @example
     * testDB
     */
    DBName?: string;
    ownerAccount?: string;
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
