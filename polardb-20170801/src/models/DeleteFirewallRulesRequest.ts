// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFirewallRulesRequest extends $dara.Model {
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
   * The names of the firewall rules to delete. You can specify multiple rule names. Separate the names with commas (,).
   * 
   * > Call the [DescribeFirewallRules](https://help.aliyun.com/document_detail/212573.html) operation to query the details of all firewall rules for the cluster, including the rule names.
   * 
   * This parameter is required.
   * 
   * @example
   * testrule
   */
  ruleNameList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
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

