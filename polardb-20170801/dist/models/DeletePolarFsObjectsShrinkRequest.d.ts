import * as $dara from '@darabonba/typescript';
export declare class DeletePolarFsObjectsShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-***
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The list of files to delete. Parameter value examples:
     * - **Cold Storage Edition** Example directory path to delete: test001/
     * - **Cold Storage Edition** Example file path to delete: test001/file.txt
     * - **Basic Edition** Example directory path to delete: /dir
     * - **Basic Edition** Example file path to delete: /dir/file.txt
     *
     * This parameter is required.
     */
    objectsToDeleteShrink?: string;
    /**
     * @remarks
     * The PolarLakebase instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-2ze0i7*****
     */
    polarFsInstanceId?: string;
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
