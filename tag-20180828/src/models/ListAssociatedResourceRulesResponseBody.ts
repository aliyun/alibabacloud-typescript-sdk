// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssociatedResourceRulesResponseBodyRules extends $dara.Model {
  existingStatus?: string;
  /**
   * @remarks
   * The name of the associated resource rule.
   * 
   * @example
   * rule:UpdateLoadBalancerZones-UpdateLoadBalancerAddressTypeConfig-TagAlb:Alb-LoadBalancer:Vpc-Eip
   */
  settingName?: string;
  /**
   * @remarks
   * The status of the associated resource rule. Valid values: `Enable` and `Disable`.
   * 
   * @example
   * Disable/Enable
   */
  status?: string;
  /**
   * @remarks
   * The Tag Keys to which the rule applies.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      existingStatus: 'ExistingStatus',
      settingName: 'SettingName',
      status: 'Status',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existingStatus: 'string',
      settingName: 'string',
      status: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssociatedResourceRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * You can use the `NextToken` parameter to determine whether there is a token that can be used to start the next query. Valid values:
   * 
   * - If `NextToken` is empty, no next query is performed.
   * 
   * - If a value is returned for `NextToken`, the value is the token that is used for the next query.
   * 
   * This parameter is required.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * 6E27F22C-EDA3-132E-A53F-77DE3BC2343D
   */
  requestId?: string;
  /**
   * @remarks
   * A list of associated resource rules.
   */
  rules?: ListAssociatedResourceRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListAssociatedResourceRulesResponseBodyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

