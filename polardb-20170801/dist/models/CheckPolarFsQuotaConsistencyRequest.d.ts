import * as $dara from '@darabonba/typescript';
export declare class CheckPolarFsQuotaConsistencyRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to repair inconsistent quotas. Valid values:
     *
     * * false
     * * true
     *
     * @example
     * false
     */
    enableRepair?: boolean;
    /**
     * @remarks
     * Specifies whether to calculate the total usage of the directory in strict mode. Valid values:
     *
     * * false
     * * true
     *
     * @example
     * false
     */
    enableStrictCalculate?: boolean;
    /**
     * @remarks
     * The directory.
     *
     * @example
     * /test
     */
    path?: string;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-test****
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
