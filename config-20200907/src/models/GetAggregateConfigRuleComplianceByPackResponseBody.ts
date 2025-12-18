// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation result returned by the rule. Valid values:
   * 
   * *   COMPLIANT: The relevant resources are evaluated as compliant.
   * *   NON_COMPLIANT: The relevant resources are evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to your resources.
   * *   INSUFFICIENT_DATA: No resource data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * cr-fdc8626622af00f9****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-rule-name
   */
  configRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-541e626622af0087****
   */
  compliancePackId?: string;
  compliantCount?: number;
  /**
   * @remarks
   * The information about rules in the compliance package.
   */
  configRuleCompliances?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
  ignoredCount?: number;
  insufficientDataCount?: number;
  /**
   * @remarks
   * The number of rules against which specific resources are evaluated as non-compliant.
   * 
   * @example
   * 0
   */
  nonCompliantCount?: number;
  notApplicableCount?: number;
  /**
   * @remarks
   * The total number of rules in the compliance package.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliantCount: 'CompliantCount',
      configRuleCompliances: 'ConfigRuleCompliances',
      ignoredCount: 'IgnoredCount',
      insufficientDataCount: 'InsufficientDataCount',
      nonCompliantCount: 'NonCompliantCount',
      notApplicableCount: 'NotApplicableCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliantCount: 'number',
      configRuleCompliances: { 'type': 'array', 'itemType': GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances },
      ignoredCount: 'number',
      insufficientDataCount: 'number',
      nonCompliantCount: 'number',
      notApplicableCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configRuleCompliances)) {
      $dara.Model.validateArray(this.configRuleCompliances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation results that are returned by rules in the compliance package.
   */
  configRuleComplianceResult?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C6B0C0A8-3245-48F1-AEAB-BC1A446E99D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleComplianceResult: 'ConfigRuleComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleComplianceResult: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configRuleComplianceResult && typeof (this.configRuleComplianceResult as any).validate === 'function') {
      (this.configRuleComplianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

