// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssociatedResourceRulesResponseBodyRules extends $dara.Model {
  existingStatus?: string;
  /**
   * @remarks
   * Setting name of the associated resource tag rule.
   * 
   * @example
   * rule:UpdateLoadBalancerZones-UpdateLoadBalancerAddressTypeConfig-TagAlb:Alb-LoadBalancer:Vpc-Eip
   */
  settingName?: string;
  /**
   * @remarks
   * Whether the associated resource tag rule is enabled. Values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * 
   * @example
   * Disable/Enable
   */
  status?: string;
  /**
   * @remarks
   * List of tag keys for the associated resource tag rule.
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
   * Determine if there is a token for the next query based on `NextToken`. Values:
   * 
   * - If `NextToken` is empty, it indicates there is no next query.
   * - If `NextToken` has a value, that value is the token for the next query start.
   * 
   * This parameter is required.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 6E27F22C-EDA3-132E-A53F-77DE3BC2343D
   */
  requestId?: string;
  /**
   * @remarks
   * List of associated resource tag rules.
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

