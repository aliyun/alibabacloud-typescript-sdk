import * as $dara from '@darabonba/typescript';
export declare class ModifyPolarFsInstanceDescriptionRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query all clusters in the target region, including cluster IDs.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The description of the PolarFS instance.
     *
     * This parameter is required.
     *
     * @example
     * pcs-****************
     */
    polarFsInstanceDescription?: string;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pcs-****************
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query all available regions for the current account, including region IDs.
     *
     * @example
     * cn-hangzhou
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
