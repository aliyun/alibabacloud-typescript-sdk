import * as $dara from '@darabonba/typescript';
export declare class EnableFirewallRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to enable or disable the specified firewall rules. Valid values:
     *
     * - **true**: Enable.
     * - **false**: Disable.
     *
     * > This parameter takes effect only when a value is specified for the **RuleNameList** parameter.
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
     * A comma-separated list of the firewall rule names to enable or disable.
     *
     * > You can find rule names under **Security Management****SQL Firewall** tab of the cluster.
     *
     * This parameter is required.
     *
     * @example
     * test111
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
