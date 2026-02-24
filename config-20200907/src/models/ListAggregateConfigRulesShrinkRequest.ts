// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateConfigRulesShrinkRequest extends $dara.Model {
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
   * The ID of the compliance package.
   * 
   * @example
   * cp-fe416457e0d90022****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * 
   * - COMPLIANT: The resource is compliant.
   * 
   * - NON_COMPLIANT: The resource is non-compliant.
   * 
   * - NOT_APPLICABLE: The rule does not apply to the resource.
   * 
   * - INSUFFICIENT_DATA: No data is available.
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
   * The name of the rule.
   */
  configRuleName?: string;
  /**
   * @remarks
   * The state of the rule. Valid values:
   * 
   * - ACTIVE: The rule is enabled.
   * 
   * - DELETING: The rule is being deleted.
   * 
   * - EVALUATING: The rule is being evaluated.
   * 
   * - INACTIVE: The rule is disabled.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The keyword for a fuzzy query.
   * 
   * The keyword can be a rule ID, rule name, rule description, or rule template identifier.
   * 
   * @example
   * ecs
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type to be evaluated by the rule.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The risk level of the rule. Valid values:
   * 
   * - 1: high
   * 
   * - 2: medium
   * 
   * - 3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The method that is used to sort the rules. By default, this parameter is not specified. Set the value to `CreateDate-Desc` to sort the rules in descending order of their creation time.
   * 
   * @example
   * CreateDate-Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add a maximum of 20 tags.
   */
  tagShrink?: string;
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
      tagShrink: 'Tag',
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
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

