import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBBranchRestoreWindowRequest extends $dara.Model {
    /**
     * @remarks
     * The source branch ID.
     *
     * This parameter is required.
     *
     * @example
     * br-1a2b3c4d5e6f
     */
    branchId?: string;
    /**
     * @remarks
     * The AgenticDB cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The target project ID.
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
