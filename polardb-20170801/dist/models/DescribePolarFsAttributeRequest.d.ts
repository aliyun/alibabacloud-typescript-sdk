import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, including the cluster ID.
     *
     * @example
     * pc-bp1q76364ird*****
     */
    DBClusterId?: string;
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
    /**
     * @remarks
     * Specifies whether to query FUSE mount information. Valid values:
     * - **true**: Yes.
     * - **false**: No. Default value.
     *
     * @example
     * false
     */
    queryFuseMountInfo?: boolean;
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
