import * as $dara from '@darabonba/typescript';
export declare class DeleteBackupRequest extends $dara.Model {
    /**
     * @remarks
     * The backup set ID. You can call DescribeBackups to query the backup set ID. Separate multiple values with commas (,). You can specify up to 100 values at a time.
     * >Only backup sets whose **StoreStatus** is **Enabled** in the DescribeBackups response can be deleted.
     *
     * This parameter is required.
     *
     * @example
     * 32490****
     */
    backupId?: string;
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
