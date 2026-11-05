import * as $dara from '@darabonba/typescript';
export declare class DeleteSQLRateLimitingRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
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
     * The names of the SQL throttling rules to delete. To delete multiple rules in a batch, separate the rule names with commas (,).
     *
     * > Call the [DescribeSQLRateLimitingRules](https://help.aliyun.com/document_detail/212573.html) operation to view the details of all SQL throttling rules for the target cluster, including their names.
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
