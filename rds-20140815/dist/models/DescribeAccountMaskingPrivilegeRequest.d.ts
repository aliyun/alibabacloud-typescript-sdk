import * as $dara from '@darabonba/typescript';
export declare class DescribeAccountMaskingPrivilegeRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-t4n8t18o******6d5
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The database name.
     *
     * @example
     * myDB
     */
    DBName?: string;
    ownerId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * ap-southeast-1
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The account name. You can specify a specific account to query.
     *
     * @example
     * rds
     */
    userName?: string;
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
