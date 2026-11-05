import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupTasksRequest extends $dara.Model {
    /**
     * @remarks
     * The backup job ID.
     *
     * @example
     * 11111111
     */
    backupJobId?: string;
    /**
     * @remarks
     * The backup mode. Valid values:
     *
     * - **Automated**: An automatic backup.
     *
     * - **Manual**: A manual backup.
     *
     * @example
     * Manual
     */
    backupMode?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-***************
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
