// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecuritySuggestionListRequestListConfigRulesRequest extends $dara.Model {
  /**
   * @example
   * cp-d7b061dbe91500aa179a
   */
  compliancePackId?: string;
  /**
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @example
   * The name of the rule.
   */
  configRuleName?: string;
  /**
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @example
   * ecs
   */
  keyword?: string;
  /**
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  /**
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

