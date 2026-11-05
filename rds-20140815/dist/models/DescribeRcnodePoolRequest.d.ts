import * as $dara from '@darabonba/typescript';
export declare class DescribeRCNodePoolRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the RDS Custom container cluster.
     *
     * @example
     * c463aaa89e2b84cacacfbf23c4867****
     */
    clusterId?: string;
    /**
     * @remarks
     * The ID of the node pool.
     *
     * @example
     * np31da1b38983f4511b490fc62108a****
     */
    nodePoolId?: string;
    /**
     * @remarks
     * The region ID.
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
