// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRulesShrinkRequest extends $dara.Model {
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
   * The compliance evaluation result of the rule. Valid values:
   * 
   * - COMPLIANT: Compliant.
   * 
   * - NON_COMPLIANT: Non-compliant.
   * 
   * - NOT_APPLICABLE: Not applicable.
   * 
   * - INSUFFICIENT_DATA: Insufficient data.
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
   * The keyword for the fuzzy query.
   * 
   * Supports fuzzy queries by rule ID, rule name, rule description, or rule template identifier.
   * 
   * @example
   * ecs
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * The default value is 1.
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
   * The type of resource evaluated by the rule.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The risk level of the rule. Valid values:
   * 
   * - 1: High risk.
   * 
   * - 2: Medium risk.
   * 
   * - 3: Low risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The sorting method. This parameter is not required. Set the value to `CreateDate-Desc` to sort the rules by creation time in descending order.
   * 
   * @example
   * CreateDate-Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * A maximum of 20 tags can be attached.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
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

