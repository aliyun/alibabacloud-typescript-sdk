import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBBranchLineageRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the anchor branch. If this parameter is not specified, the primary branch of the project is used by default.
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
     * Specifies whether to include branches in the Destroying state. Default value: false.
     *
     * @example
     * false
     */
    includeDestroying?: boolean;
    /**
     * @remarks
     * The maximum number of levels to return in the view, including the anchor branch itself. Valid values: 1 to 20. Default value: 3. The server automatically allocates the budget for ancestor and descendant levels with a downward bias.
     *
     * @example
     * 3
     */
    maxViewDepth?: number;
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
