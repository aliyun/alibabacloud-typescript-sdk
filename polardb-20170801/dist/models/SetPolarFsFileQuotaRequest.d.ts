import * as $dara from '@darabonba/typescript';
export declare class SetPolarFsFileQuotaRequestFilePathQuotas extends $dara.Model {
    /**
     * @remarks
     * The quota capacity. Unit: GB.
     *
     * @example
     * 100
     */
    capacity?: number;
    /**
     * @remarks
     * The directory path.
     *
     * @example
     * /a/project
     */
    filePathId?: string;
    /**
     * @remarks
     * The quota inodes.
     *
     * @example
     * 100
     */
    inodes?: number;
    /**
     * @remarks
     * The number of subdirectory levels to traverse under `FilePathId`. A value of 1 indicates that only the first-level subdirectories are traversed. A value of 0 indicates that all levels are traversed to the deepest level.
     *
     * @example
     * 1
     */
    maxDepth?: number;
    /**
     * @remarks
     * The IDs of the rules to apply, separated by commas (,).
     *
     * @example
     * 1,2
     */
    quotaIds?: string;
    /**
     * @remarks
     * The mode in which rules take effect on existing files. Valid values:
     *
     * - **missing**: Rules take effect only when they are missing. This is the default value.
     * - **all**: Rules take effect on all files.
     *
     * @example
     * missing
     */
    strategy?: string;
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
export declare class SetPolarFsFileQuotaRequest extends $dara.Model {
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
     * The details of the quota rules to apply to directories.
     *
     * This parameter is required.
     */
    filePathQuotas?: SetPolarFsFileQuotaRequestFilePathQuotas[];
    /**
     * @remarks
     * The Polarlakebase instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-2ze0i74ka607*****
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
