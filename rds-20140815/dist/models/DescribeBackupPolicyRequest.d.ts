import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The backup type. Valid values:
     * * **DataBackupPolicy**: data backup
     * * **LogBackupPolicy**: log backup
     *
     * @example
     * DataBackupPolicy
     */
    backupPolicyMode?: string;
    /**
     * @remarks
     * The backup compression method. Valid values:
     * * **0**: no compression
     * * **1**: zlib compression
     * * **2**: parallel zlib compression
     * * **4**: quicklz compression with database and table restoration enabled
     * * **8**: quicklz compression without database and table restoration supported
     *
     * @example
     * 1
     */
    compressType?: string;
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
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
     * The data retention policy for archive backups of deleted **MySQL** instances. Valid values:
     *
     * * **None**: no retention
     * * **Lastest**: retains the last archive backup
     * * **All**: retains all archive backups
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
