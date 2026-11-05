import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupLogDownloadLinksRequest extends $dara.Model {
    /**
     * @remarks
     * The IDs of the redo log backups.
     *
     * @example
     * 78167430
     */
    backupLogIds?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The validity period of the download URL in hours. Valid values: 1 to 596523.
     *
     * @example
     * 3
     */
    expireHours?: number;
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
