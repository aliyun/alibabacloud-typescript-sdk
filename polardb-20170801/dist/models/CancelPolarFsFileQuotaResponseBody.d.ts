import * as $dara from '@darabonba/typescript';
export declare class CancelPolarFsFileQuotaResponseBody extends $dara.Model {
    /**
     * @remarks
     * The file paths for which the quotas were deleted. Multiple paths are separated by a comma (`,`).
     *
     * @example
     * /path1,/path2
     */
    filePathIds?: string;
    /**
     * @remarks
     * The ID of the Polarlakebase instance.
     *
     * @example
     * pfs-2ze0i74ka607*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 2FED790E-FB61-4721-8C1C-07C627******
     */
    requestId?: string;
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
