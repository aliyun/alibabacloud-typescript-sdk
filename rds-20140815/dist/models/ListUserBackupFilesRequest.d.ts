import * as $dara from '@darabonba/typescript';
export declare class ListUserBackupFilesRequest extends $dara.Model {
    /**
     * @remarks
     * Queries target user backups by user backup ID.
     *
     * @example
     * b-kwwvr7v8t7of****
     */
    backupId?: string;
    /**
     * @remarks
     * Queries target user backups by comment.
     * > You can enter a partial comment of the target user backup for fuzzy match.
     *
     * @example
     * BackupTest
     */
    comment?: string;
    /**
     * @remarks
     * Queries target user backups by the OSS download URL of the user backup file. For more information about how to obtain the OSS download URL of a user backup file, see [Obtain the URL of an uploaded object](https://help.aliyun.com/document_detail/39607.html).
     *
     * @example
     * https://****.oss-ap-****.aliyuncs.com/backup_qp.xb
     */
    ossUrl?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * Queries target user backups by the status of the user backup file. Valid values:
     * * **Importing**: The backup is being imported.
     * * **Failed**: The import failed.
     * * **CheckSuccess**: The verification passed.
     * * **BackupSuccess**: The import succeeded.
     * * **Deleted**: The backup is deleted.
     *
     * @example
     * CheckSuccess
     */
    status?: string;
    /**
     * @remarks
     * Queries target user backups by tag.
     *
     * @example
     * key1:value1
     */
    tags?: string;
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
