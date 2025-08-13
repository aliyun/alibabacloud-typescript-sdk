// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRulesForTargetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * You can use the ID to query the content of the related resource non-compliance report in Cloud Config.
   * 
   * >  This parameter is returned only if you use the Tag Policy feature in multi-account mode.
   * 
   * @example
   * ca-efdc33dc9b37002d****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * cr-0lb4866180880069****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The use scenario of the tag policy. Valid values:
   * 
   * *   tags: enables tags with specified tag values to be added to resources.
   * *   rg_inherit: enables resources in a resource group to automatically inherit tags from the resource group.
   * 
   * @example
   * tags
   */
  policyType?: string;
  /**
   * @remarks
   * Indicates whether automatic remediation is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  remediation?: boolean;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * CostCenter
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value for automatic remediation.
   * 
   * @example
   * Project
   */
  tagValue?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 134254031178****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * @example
   * USER
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      policyType: 'PolicyType',
      remediation: 'Remediation',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      policyType: 'string',
      remediation: 'boolean',
      tagKey: 'string',
      tagValue: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesForTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tag detection tasks.
   */
  data?: ListConfigRulesForTargetResponseBodyData[];
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7126AECD-D7AD-5073-8E88-DD2BD1FC139E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListConfigRulesForTargetResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

