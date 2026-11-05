import * as $dara from '@darabonba/typescript';
export declare class DeletePolarFsRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all Data Warehouse Edition clusters in a specific region.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The PolarFs instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pcs-2ze0i74ka607wck3
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
