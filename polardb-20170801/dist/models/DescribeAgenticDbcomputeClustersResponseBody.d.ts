import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBComputeClustersResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The associated branch ID.
     *
     * @example
     * br-7g8h9i0j1k2l
     */
    branchId?: string;
    /**
     * @remarks
     * The associated branch name.
     *
     * @example
     * feature-analytics
     */
    branchName?: string;
    /**
     * @remarks
     * The compute instance ID.
     *
     * @example
     * pc-g0lsayq8c5qe
     */
    computeClusterId?: string;
    /**
     * @remarks
     * The number of compute nodes (fixed to 1 in the first phase).
     *
     * @example
     * 1
     */
    computeNodeCount?: number;
    /**
     * @remarks
     * The creation time. The time is in ISO 8601 format and uses the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-06-10T11:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * The description.
     *
     * @example
     * Compute cluster for analytics
     */
    description?: string;
    /**
     * @remarks
     * Indicates whether it is the default branch.
     *
     * @example
     * false
     */
    isDefaultBranch?: boolean;
    /**
     * @remarks
     * The last activation time.
     * The time is in ISO 8601 format and uses the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-06-10T12:30:00Z
     */
    lastActivatedAt?: string;
    /**
     * @remarks
     * The maximum compute unit.
     *
     * @example
     * 2
     */
    maxCU?: string;
    /**
     * @remarks
     * The minimum compute unit.
     *
     * @example
     * 0.25
     */
    minCU?: string;
    /**
     * @remarks
     * The operator type.
     *
     * @example
     * Neon
     */
    operatorType?: string;
    /**
     * @remarks
     * The parent branch ID. An empty string indicates the root branch.
     *
     * @example
     * br-1a2b3c4d5e6f
     */
    parentBranchId?: string;
    /**
     * @remarks
     * The parent branch name. An empty string indicates the root branch.
     *
     * @example
     * main
     */
    parentBranchName?: string;
    /**
     * @remarks
     * The associated project ID.
     *
     * @example
     * proj-a1b2c3d4e5f6
     */
    projectId?: string;
    /**
     * @remarks
     * The associated project name.
     *
     * @example
     * analytics-prod
     */
    projectName?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The used data volume (in bytes).
     *
     * @example
     * 1073741824
     */
    storageSize?: number;
    /**
     * @remarks
     * The associated tenant ID.
     *
     * @example
     * t-4b83e0da66674951
     */
    tenantId?: string;
    /**
     * @remarks
     * The associated tenant name.
     *
     * @example
     * my-saas-app
     */
    tenantName?: string;
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
export declare class DescribeAgenticDBComputeClustersResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of compute instances.
     */
    items?: DescribeAgenticDBComputeClustersResponseBodyItems[];
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
     * The number of entries per page.
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
     * F6A7B8C9-D0E1-2345-FABC-678901234FAB
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 3
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
