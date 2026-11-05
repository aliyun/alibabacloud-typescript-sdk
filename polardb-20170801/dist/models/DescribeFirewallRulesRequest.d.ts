import * as $dara from '@darabonba/typescript';
export declare class DescribeFirewallRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The names of the firewall rules to query. To query multiple rules, separate the rule names with commas (,).
     *
     * > Call the [DescribeFirewallRules](https://help.aliyun.com/document_detail/212573.html) operation to view the details of all firewall rules for the target cluster, including the rule names.
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
