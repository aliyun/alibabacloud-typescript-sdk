// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableFirewallRulesRequest extends $dara.Model {
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
   * *   **true**: enables the specified firewall rules.
   * *   **false**: disables the specified firewall rules.
   * 
   * > This parameter is valid only when you specify the **RuleNameList** parameter.
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
   * The name of the firewall rule that you want to enable for the cluster. You can specify multiple firewall rules at a time. Separate multiple rules with commas (,).
   * 
   * > You can call the **DescribeFirewallRules** operation to query the details of all firewall rules that are applicable to a cluster, such as rule names.
   * 
   * This parameter is required.
   * 
   * @example
   * test111
   */
  ruleNameList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enable: 'Enable',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleNameList: 'RuleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enable: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleNameList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

