// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecuritySuggestionListRequestListConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * @example
   * cp-d7b061dbe91500aa179a
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * - **COMPLIANT**: Compliant.
   * - **NON_COMPLIANT**: Non-compliant.
   * - **NOT_APPLICABLE**: Not applicable.
   * - **INSUFFICIENT_DATA**: Insufficient data.
   * - **IGNORED**: Ignored.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * The name of the rule.
   */
  configRuleName?: string;
  /**
   * @remarks
   * The rule running status. Valid values:
   * - **ACTIVE**: Active.
   * - **DELETING**: Being deleted.
   * - **EVALUATING**: Being evaluated.
   * - **INACTIVE**: Inactive.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The query keyword.
   * 
   * Supports fuzzy match on the rule ID, rule name, rule description, and rule template identifier.
   * 
   * @example
   * ecs
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * > Minimum value: 1. Default value: 1.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * > Valid values: 1 to 100. Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type evaluated by the rule.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The risk level of the rule. Valid values:
   * 
   * - **1**: High risk.
   * - **2**: Medium risk.
   * - **3**: Low risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecuritySuggestionListRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters.
   */
  listConfigRulesRequest?: GetSecuritySuggestionListRequestListConfigRulesRequest;
  static names(): { [key: string]: string } {
    return {
      listConfigRulesRequest: 'ListConfigRulesRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listConfigRulesRequest: GetSecuritySuggestionListRequestListConfigRulesRequest,
    };
  }

  validate() {
    if(this.listConfigRulesRequest && typeof (this.listConfigRulesRequest as any).validate === 'function') {
      (this.listConfigRulesRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

