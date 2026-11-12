import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBComputeClustersRequest extends $dara.Model {
    /**
     * @remarks
     * The compute instance ID used for fuzzy matching. Example: pc-2ze8k.
     *
     * @example
     * pc-2ze8k
     */
    computeClusterId?: string;
    /**
     * @remarks
     * The ID of the AgenticDB cluster. The ID must start with pagc-. You can create the cluster by calling CreateDBCluster and setting AgenticDbType to dedicated and ServerlessType to AgileServerless. Standard PolarDB cluster IDs with the pc- prefix are not supported.
     *
     * This parameter is required.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 30. Maximum value: 100.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The status filter. Valid values: Running, Stopped, and Waiting.
     *
     * @example
     * Running
     */
    status?: string;
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
