import * as $dara from '@darabonba/typescript';
export declare class CancelPolarFsFileQuotaRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarDB cluster that the application depends on.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The file paths. Separate multiple paths with a comma (`,`).
     *
     * This parameter is required.
     *
     * @example
     * /path1,/path2
     */
    filePathIds?: string;
    /**
     * @remarks
     * The ID of the Polarlakebase instance.
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
