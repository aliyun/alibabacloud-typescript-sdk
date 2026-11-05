import * as $dara from '@darabonba/typescript';
export declare class DeleteDBInstanceRequest extends $dara.Model {
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
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The data retention policy for archived backups after the instance is released. Valid values:
     *
     * * **None**: No archived backups are retained.
     * * **Lastest**: Only the last archived backup is retained.
     * * **All**: All archived backups are retained.
     *
     * >This parameter is supported only for ApsaraDB RDS for MySQL instances with Premium Local SSDs.
     *
     * @example
     * Lastest
     */
    releasedKeepPolicy?: string;
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
