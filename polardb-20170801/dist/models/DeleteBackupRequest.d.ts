import * as $dara from '@darabonba/typescript';
export declare class DeleteBackupRequest extends $dara.Model {
    /**
     * @remarks
     * The backup ID. If you need to specify multiple backup IDs, separate the backup IDs with commas (,).
     *
     * >  You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the backup IDs.
     *
     * This parameter is required.
     *
     * @example
     * 11111111
     */
    backupId?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
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
