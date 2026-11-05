import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceDelayedReplicationTimeRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the read-only instance. You can call DescribeDBInstances to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rr-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerId?: number;
    /**
     * @remarks
     * The replication delay time of the read-only instance. Unit: seconds.
     *
     * This parameter is required.
     *
     * @example
     * 100
     */
    readSQLReplicationTime?: string;
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
