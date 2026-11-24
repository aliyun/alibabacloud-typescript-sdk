import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupLogDownloadLinksRequest extends $dara.Model {
    /**
     * @remarks
     * The physical log backup IDs.
     *
     * > Call DescribeBackupLogs to obtain valid IDs. This parameter is required when you call the operation. If you omit this parameter, the InvalidArchiveLogIds.Malformed error (HTTP 400) is returned.
     *
     * @example
     * 78167430
     */
    backupLogIds?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * > This parameter is required when you call the operation. If you omit this parameter, the InvalidDBClusterId.Malformed error (HTTP 400) is returned.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The validity period of the download link, in hours. Valid values: 1 to 596523.
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
