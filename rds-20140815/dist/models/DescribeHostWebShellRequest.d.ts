import * as $dara from '@darabonba/typescript';
export declare class DescribeHostWebShellRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the account used to log on to the host of the ApsaraDB RDS instance.
     *
     * This parameter is required.
     *
     * @example
     * testOsAccount1
     */
    accountName?: string;
    /**
     * @remarks
     * The password of the host account.
     *
     * This parameter is required.
     *
     * @example
     * ****
     */
    accountPassword?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The hostname of the instance. You can call the DescribeDBInstanceIpHostname operation to query the hostname.
     *
     * This parameter is required.
     *
     * @example
     * testHost1
     */
    hostName?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID of the instance. You can call the DescribeDBInstanceAttribute operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionID?: string;
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
