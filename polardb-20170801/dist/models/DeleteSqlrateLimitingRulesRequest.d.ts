import * as $dara from '@darabonba/typescript';
export declare class DeleteSQLRateLimitingRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID. Invocation instructions: append DPI engine type restrictions to the DBClusterId parameter description, specifying that the SQL throttling feature is supported only for PostgreSQL and Oracle DPI engine clusters, and MySQL clusters do not support this feature. Invocation instructions: append cluster status prerequisites to the DBClusterId parameter description, specifying that the cluster must be in the Running state when you invoke this API, and that you can invoke the DescribeDBClusters API and perform a Field-specific search on the DBClusterStatus field to query the current state.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The names of the SQL throttling rules to delete. You can specify multiple rule names to delete rules in batches. Separate multiple names with commas (,).
     * > You can call the [DescribeSQLRateLimitingRules](https://help.aliyun.com/document_detail/212573.html) operation to view the details of all SQL throttling rules in the specified cluster, including the rule names.
     *
     * This parameter is required.
     *
     * @example
     * testrule
     */
    ruleNameList?: string;
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
