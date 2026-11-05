import * as $dara from '@darabonba/typescript';
export declare class EnableSQLRateLimitingRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to enable or disable the specified SQL throttling rules. Valid values:
     *
     * - **true**: Enable.
     *
     * - **false**: Disable.
     *
     * > This parameter applies only when you specify the **RuleNameList** parameter.
     *
     * This parameter is required.
     *
     * @example
     * true
     */
    enable?: boolean;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The names of the SQL throttling rules to enable. To specify multiple rules, separate the names with a comma (,).
     *
     * > You can view all SQL throttling rules and their names on the SQL Firewall tab of the Security Management page for the cluster.
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
