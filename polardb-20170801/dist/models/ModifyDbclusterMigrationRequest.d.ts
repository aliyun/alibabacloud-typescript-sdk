import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterMigrationRequest extends $dara.Model {
    /**
     * @remarks
     * The specific endpoints to be switched. The value is a JSON string that contains the endpoints to be swapped in pairs.
     * > This parameter takes effect only when SwapConnectionString is set to true.
     *
     * @example
     * {"rm-2ze73el581cs*****.mysql.pre.rds.aliyuncs.com":"pc-2ze8200s298e*****.mysql.polardb.pre.rds.aliyuncs.com","rm-2ze73el581cs86*****.mysql.pre.rds.aliyuncs.com":"test-p*****.mysql.polardb.pre.rds.aliyuncs.com"}
     */
    connectionStrings?: string;
    /**
     * @remarks
     * The ID of the PolarDB cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the new instance or cluster. Valid values:
     * * Before the switchover, enter the PolarDB cluster ID to perform the switchover.
     * * After the switchover, enter the ApsaraDB RDS instance ID to perform a rollback.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    newMasterInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
    /**
     * @remarks
     * The instance ID of the source ApsaraDB RDS instance.
     *
     * This parameter is required.
     *
     * @example
     * rm-************
     */
    sourceRDSDBInstanceId?: string;
    /**
     * @remarks
     * Specifies whether to switch the endpoints. Valid values:
     *
     * - **true**: Switches the endpoints. You do not need to modify the connection configurations of your application.
     * - **false**: Does not switch the endpoints. You must modify the connection configurations of your application to use the new PolarDB endpoints.
     *
     * Default value: **false**.
     *
     * @example
     * false
     */
    swapConnectionString?: string;
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
