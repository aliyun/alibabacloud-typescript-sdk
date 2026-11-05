import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceNetworkExpireTimeRequest extends $dara.Model {
    /**
     * @remarks
     * The number of days for the classic network endpoint reservation. Valid values: **1 to 120**. Unit: days.
     *
     * This parameter is required.
     *
     * @example
     * 7
     */
    classicExpiredDays?: number;
    /**
     * @remarks
     * The classic network connectivity endpoint to be extended. Two types of classic network endpoints are supported:
     * * Classic network internal network endpoint
     * * Classic network read/write splitting endpoint
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****.mysql.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
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
