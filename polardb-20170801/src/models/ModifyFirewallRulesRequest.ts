// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFirewallRulesRequest extends $dara.Model {
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
   * A JSON string that contains the configuration parameters of the firewall rule to modify and their values. The parameter values are strings. Example: `{ "id": "test", "enabled": "true", "mode": "Defending", "users": { "applies_to": [] }, "endpoint": "[{"EndpointName":"pe-***************","EndpointType":"Cluster","DBEndpointDescription":"Cluster Endpoint"},{"EndpointName":"pe-***************","EndpointType":"Custom","DBEndpointDescription":"pc-***************"},{"EndpointName":"pe-***************","EndpointType":"Custom","DBEndpointDescription":"pc-***************"}]", "type": "BlackList", "sub_rules": [] }, "RuleName": "test" }`. The parameters are described as follows:
   * 
   * - `"id"`: Required. The name of the firewall rule.
   * 
   * - `"databases"`: Optional. The names of the databases to which the rule applies. You can specify multiple database names. Separate the names with commas (,). If you leave this parameter empty, the rule applies to all databases in the cluster.
   * 
   * - `"tables"`: Optional. The names of the tables to which the rule applies. You can specify multiple table names. Separate the names with commas (,). If you leave this parameter empty, the rule applies to all tables in the cluster.
   * 
   * - `"columns"`: Required. The names of the fields to which the rule applies. You can specify multiple field names. Separate the names with commas (,).
   * 
   * - `"description"`: Optional. The description of the data masking rule. The description can be up to 64 characters in length.
   * 
   * - `"enabled"`: Required. Specifies whether to enable or disable the data masking rule. Valid values: **true** (enable) and **false** (disable).
   * 
   * - `"applies_to"`: The names of the database accounts to which the rule applies. You can specify multiple database account names. Separate the names with commas (,).
   * 
   * - `"exempted"`: The names of the database accounts to which the rule does not apply. You can specify multiple database account names. Separate the names with commas (,).
   * 
   * > * If you specify the `RuleName` parameter, the `RuleConfig` parameter is required.
   * >
   * > * You must specify either `"applies_to"` or `"exempted"`.
   * 
   * This parameter is required.
   * 
   * @example
   * {"id":"test","enabled":"true","mode":"Collecting","users":{"applies_to":[]},"endpoint":"[{"EndpointName":"pe-************","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"},{"EndpointName":"pe-************","EndpointType":"Custom","DBEndpointDescription":"pc-************"},{"EndpointName":"pe-************","EndpointType":"Custom","DBEndpointDescription":"pc-************K"}]","type":"WhiteList"}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The name of the firewall rule. You can specify only one rule name at a time.
   * 
   * > - Call the [DescribeFirewallRules](https://help.aliyun.com/document_detail/212573.html) operation to query the details of all firewall rules for the target cluster, including the rule names.
   * >
   * > - If the specified rule name does not exist in the current cluster, the system automatically creates a new firewall rule based on the rule name and the value of `RuleConfig`.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
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

