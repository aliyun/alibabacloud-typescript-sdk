// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateConfigRulesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * value-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The compliance package ID.
   * 
   * @example
   * cp-fe416457e0d90022****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * 
   * *   COMPLIANT: The resources are evaluated as compliant.
   * *   NON_COMPLIANT: The resources are evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to the resources.
   * *   INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-rule-name
   */
  configRuleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   ACTIVE: The rule is being used to monitor resource configurations.
   * *   DELETING: The rule is being deleted.
   * *   EVALUATING: The rule is triggered and is being used to monitor resource configurations.
   * *   INACTIVE: The rule is disabled.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The keyword that is used for queries.
   * 
   * You can perform a fuzzy search by rule ID, rule name, rule description, or managed rule ID.
   * 
   * @example
   * ecs
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Minimum value: 1. Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource type for the rule to evaluate.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The risk level of the resources that do not comply with the rule. Valid values:
   * 
   * *   1: high
   * *   2: medium
   * *   3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  sortBy?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
   */
  tag?: ListAggregateConfigRulesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      complianceType: 'ComplianceType',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypes: 'ResourceTypes',
      riskLevel: 'RiskLevel',
      sortBy: 'SortBy',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
      complianceType: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypes: 'string',
      riskLevel: 'number',
      sortBy: 'string',
      tag: { 'type': 'array', 'itemType': ListAggregateConfigRulesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

