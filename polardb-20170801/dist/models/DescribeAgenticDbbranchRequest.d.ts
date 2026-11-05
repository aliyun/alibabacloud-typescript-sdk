import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBBranchRequest extends $dara.Model {
    /**
     * @remarks
     * The branch ID.
     *
     * This parameter is required.
     *
     * @example
     * br-7g8h9i0j1k2l
     */
    branchId?: string;
    /**
     * @remarks
     * The ID of the AgenticDB cluster.
     *
     * This parameter is required.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The project ID.
     *
     * This parameter is required.
     *
     * @example
     * proj-a1b2c3d4e5f6
     */
    projectId?: string;
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
     * The tenant ID.
     *
     * This parameter is required.
     *
     * @example
     * t-4b83e0da66674951
     */
    tenantId?: string;
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
