import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsMappingRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID. This parameter is required. If you do not specify this parameter, the API returns InvalidDBClusterId.Malformed (HTTP 400). You can call the DescribeDBClusters operation to query the cluster IDs within your account.
     *
     * @example
     * pc-**************
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
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: **30**.
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
