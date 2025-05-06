// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConfigRulesRequestTag } from "./ListConfigRulesRequestTag";


export class ListConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListCompliancePacks](https://help.aliyun.com/document_detail/606968.html).
   * 
   * >  You must configure either the `CompliancePackId` or `ConfigRuleId` parameter.
   * 
   * @example
   * cp-fe416457e0d90022****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The compliance evaluation result of the rule. Valid values:
   * 
   * *   COMPLIANT: The resources are evaluated as compliant.
   * *   NON_COMPLIANT: The resources are evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to the resources.
   * *   INSUFFICIENT_DATA: No resource data is available.
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
   * *   ACTIVE: The rule is enabled.
   * *   DELETING: The rule is being deleted.
   * *   EVALUATING: The rule is being used to evaluate resource configurations.
   * *   INACTIVE: The rule is disabled.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The query keyword.
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
   * Page numbers start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. A minimum of 1 entry can be returned per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resources to be evaluated based on the rule.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The risk level of the resources that are not compliant with the rule. Valid values:
   * 
   * *   1: high
   * *   2: medium
   * *   3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
   */
  tag?: ListConfigRulesRequestTag[];
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
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': ListConfigRulesRequestTag },
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

