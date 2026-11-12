import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupLogDownloadLinksRequest extends $dara.Model {
    /**
     * @remarks
     * The redo log backup IDs.
     *
     * > First, invoke DescribeBackupLogs to obtain valid IDs. This parameter is required when you invoke the operation. If omitted, an InvalidArchiveLogIds.Malformed error (HTTP 400) is returned.
     *
     * @example
     * 78167430
     */
    backupLogIds?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * > This parameter is required for the call. If omitted, an InvalidDBClusterId.Malformed error (HTTP 400) is returned.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The validity period of the download links, in hours. Valid values: 1 to 596523.
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
