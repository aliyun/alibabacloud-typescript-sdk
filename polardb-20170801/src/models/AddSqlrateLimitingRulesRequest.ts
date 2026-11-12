// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSQLRateLimitingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. Usage notes: SQL throttling is supported only for PostgreSQL and Oracle engines, and is not supported for MySQL engines.
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
   * The JSON string of the configuration parameters and their values for the SQL throttling rule to be modified. All parameter values are of the string type. Example: `{"id":"test","enabled":"true","match_mode":"0","template":"dXBkYXRlIHQgc2V0IGEgPSAxIHdoZXJlIGlkID0gMQ==","user":"","database":"","waiting":1024,"endpoint":"[{"EndpointName":"pe-***********","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"}]","throttle_mode":0,"concurrency":1}`. Parameters:
   * * `"id"`: Required. The name of the throttling rule. The name must meet the following requirements:
   *   - The name cannot exceed 30 characters in length.
   *   - The name must consist of uppercase and lowercase letters and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * {"id":"test","enabled":"true","match_mode":"0","template":"dXBkYXRlIHQgc2V0IGEgPSAxIHdoZXJlIGlkID0gMQ==","user":"","database":"","waiting":1024,"endpoint":"[{"EndpointName":"pe-***********","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"}]","throttle_mode":0,"concurrency":1}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The name of the SQL throttling rule. You can specify only one rule name at a time.
   * > * You can call the [DescribeSQLRateLimitingRules](https://help.aliyun.com/document_detail/212573.html) operation to query the details of all SQL throttling rules in the specified cluster, including the rule names.
   * > * If the specified rule name does not exist in the current cluster, the system automatically creates an SQL throttling rule based on the name and the `RuleConfig` value.
   * 
   * This parameter is required.
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

