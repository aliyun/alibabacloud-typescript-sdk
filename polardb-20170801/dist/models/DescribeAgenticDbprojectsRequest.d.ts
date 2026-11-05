import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBProjectsRequest extends $dara.Model {
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
     * The project ID for exact match.
     *
     * @example
     * proj-a1b2c3d4e5f6
     */
    projectId?: string;
    /**
     * @remarks
     * The project name for fuzzy match.
     *
     * @example
     * analytics
     */
    projectName?: string;
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
     * The ID of the tenant.
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
