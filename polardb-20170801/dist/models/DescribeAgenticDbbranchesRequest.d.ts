import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBBranchesRequest extends $dara.Model {
    /**
     * @remarks
     * The branch name for fuzzy matching.
     *
     * @example
     * feature
     */
    branchName?: string;
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
     * The project ID.
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
     * The status used to filter branches. Valid values: Running, Pending, and Paused.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The tenant ID.
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
