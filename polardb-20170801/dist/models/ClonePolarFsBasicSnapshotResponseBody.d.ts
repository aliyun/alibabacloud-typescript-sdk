import * as $dara from '@darabonba/typescript';
export declare class ClonePolarFsBasicSnapshotResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-bp150t3****
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the Polarlakebase instance.
     *
     * @example
     * pfs-2ze0i7*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * CED079B7-A408-41A1-BFF1-EC608E******
     */
    requestId?: string;
    /**
     * @remarks
     * The source path of the file resource.
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
