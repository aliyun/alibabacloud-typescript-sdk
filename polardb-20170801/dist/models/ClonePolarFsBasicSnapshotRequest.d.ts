import * as $dara from '@darabonba/typescript';
export declare class ClonePolarFsBasicSnapshotRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the database cluster.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the Polarlakebase instance.
     *
     * @example
     * pfs-test*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The source path of the file resource. This parameter is empty if the type is local.
     *
     * @example
     * /test
     */
    sourcePath?: string;
    /**
     * @remarks
     * The destination path.
     *
     * @example
     * /testclone
     */
    targetPath?: string;
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
