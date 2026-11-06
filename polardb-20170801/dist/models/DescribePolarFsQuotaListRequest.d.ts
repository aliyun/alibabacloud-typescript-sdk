import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsQuotaListRequest extends $dara.Model {
    /**
     * @remarks
     * The PolarDB instance ID on which the application depends.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: 30, 50, and 100. Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-2ze0i74ka607*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The quota mode. Currently, only quota is supported, which indicates that quota policies are queried.
     *
     * @example
     * quota
     */
    quotaMode?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
