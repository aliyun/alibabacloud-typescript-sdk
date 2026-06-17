// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSQLRateLimitingRulesRequest extends $dara.Model {
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
   * The configuration of the SQL throttling rule to add or modify, specified as a JSON string. The values of the parameters must be strings. Example: `{"id":"test","enabled":"true","match_mode":"0","template":"dXBkYXRlIHQgc2V0IGEgPSAxIHdoZXJlIGlkID0gMQ==","user":"","database":"","waiting":1024,"endpoint":"[{"EndpointName":"pe-***********","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"}]","throttle_mode":0,"concurrency":1}`. The JSON string contains the following parameters:
   * 
   * - `"id"`: Required. The name of the throttling rule. The name must meet the following requirements:
   * 
   *   - It cannot exceed 30 characters in length.
   * 
   *   - It must consist of uppercase letters, lowercase letters, and digits.
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
   * 
   * > - Call the [DescribeSQLRateLimitingRules](https://help.aliyun.com/document_detail/212573.html) operation to view the details of all SQL throttling rules for the target cluster, including the rule names.
   * >
   * > - If the specified rule name does not exist in the current cluster, the system automatically creates a new SQL throttling rule based on the rule name and the value of the `RuleConfig` parameter.
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

