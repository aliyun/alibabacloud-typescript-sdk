// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFirewallRulesRequest extends $dara.Model {
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
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A JSON string that contains the configuration parameters and their values for the firewall rule to add. All parameter values must be strings. For example: `{"id":"test","enabled":"true","mode":"Collecting","users":{"applies_to":[]},"endpoint":"[{"EndpointName":"pe-************","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"},{"EndpointName":"pe-************","EndpointType":"Custom","DBEndpointDescription":"pc-************"},{"EndpointName":"pe-************","EndpointType":"Custom","DBEndpointDescription":"pc-************K"}]","type":"WhiteList"}`. The JSON string contains the following parameters:
   * 
   * - `"id"`: Required. The name of the firewall rule.
   * 
   * - `"endpoint"`: Required. The information about the instance endpoint.
   * 
   * @example
   * {"id":"test","enabled":"true","mode":"Collecting","users":{"applies_to":[]},"endpoint":"[{"EndpointName":"pe-************","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"},{"EndpointName":"pe-************","EndpointType":"Custom","DBEndpointDescription":"pc-************"},{"EndpointName":"pe-************","EndpointType":"Custom","DBEndpointDescription":"pc-************K"}]","type":"WhiteList"}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The name of the firewall rule. You can specify only one rule name.
   * 
   * > - Call the [DescribeFirewallRules](https://help.aliyun.com/document_detail/212573.html) operation to view the details of all firewall rules for the target cluster, including the rule names.
   * >
   * > - If the specified rule name does not exist in the cluster, the system automatically creates a new firewall rule based on the name and the value of the `RuleConfig` parameter.
   * 
   * @example
   * testrule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleConfig: 'RuleConfig',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleConfig: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

