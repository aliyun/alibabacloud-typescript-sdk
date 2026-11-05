import * as $dara from '@darabonba/typescript';
export declare class DescribeRCClusterNodesRequest extends $dara.Model {
    /**
     * @example
     * c919424d85a644078ab1575c3a02c****
     */
    clusterId?: string;
    /**
     * @example
     * rcnpf5e3ee4a65104cf0801f94850d37****
     */
    nodePoolId?: string;
    /**
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @example
     * 10
     */
    pageSize?: number;
    regionId?: string;
    /**
     * @example
     * vpc-2zet5c7111r33zbie****
     */
    vpcId?: string;
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
