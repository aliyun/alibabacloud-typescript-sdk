import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBProjectsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The number of undeleted branches.
     *
     * @example
     * 3
     */
    branchCount?: number;
    /**
     * @remarks
     * The time when the project was created.
     *
     * The time is in ISO 8601 format in the UTC time zone (YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-06-10T11:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * The ID of the associated AgenticDB cluster.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the default branch.
     *
     * @example
     * br-1a2b3c4d5e6f
     */
    defaultBranchId?: string;
    /**
     * @remarks
     * The name of the default branch.
     *
     * @example
     * main
     */
    defaultBranchName?: string;
    /**
     * @remarks
     * The description of the project.
     *
     * @example
     * Production analytics database
     */
    description?: string;
    /**
     * @remarks
     * The retention period of historical data, in seconds.
     *
     * @example
     * 604800
     */
    historyRetentionSeconds?: number;
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
     * The name of the project.
     *
     * @example
     * analytics-prod
     */
    projectName?: string;
    /**
     * @remarks
     * The status of the project. Valid values: Active (normal), Destroying (being destroyed), and Destroyed (destroyed).
     *
     * @example
     * Active
     */
    status?: string;
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
export declare class DescribeAgenticDBProjectsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of projects.
     */
    items?: DescribeAgenticDBProjectsResponseBodyItems[];
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries returned per page.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F6A7B8C9-D0E1-2345-FABC-456789012345
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of projects.
     *
     * @example
     * 1
     */
    totalCount?: number;
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
