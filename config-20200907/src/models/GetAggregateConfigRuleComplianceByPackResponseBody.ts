// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances extends $dara.Model {
  /**
   * @remarks
   * The compliance result. Valid values:
   * 
   * - COMPLIANT: The rule is compliant.
   * 
   * - NON_COMPLIANT: The rule is non-compliant.
   * 
   * - NOT_APPLICABLE: The rule is not applicable.
   * 
   * - INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The ID of the rule in the compliance pack.
   * 
   * @example
   * cr-fdc8626622af00f9****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule in the compliance pack.
   * 
   * @example
   * The bandwidth of the Elastic IP instance meets the minimum requirements.
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
   * The ID of the compliance pack.
   * 
   * @example
   * cp-541e626622af0087****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The total number of rules for which all evaluation results are **Compliant**.
   * 
   * @example
   * 0
   */
  compliantCount?: number;
  /**
   * @remarks
   * A list of rule compliance results.
   */
  configRuleCompliances?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
  /**
   * @remarks
   * The total number of rules whose evaluation results include **Ignored**.
   * 
   * @example
   * 1
   */
  ignoredCount?: number;
  /**
   * @remarks
   * The total number of rules whose evaluation results include **Insufficient Data**.
   * 
   * @example
   * 1
   */
  insufficientDataCount?: number;
  /**
   * @remarks
   * The number of non-compliant rules.
   * 
   * @example
   * 1
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of rules whose evaluation results include **Not Applicable**.
   * 
   * @example
   * 1
   */
  notApplicableCount?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 2
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
   * The compliance results of the rules in the compliance pack.
   */
  configRuleComplianceResult?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  /**
   * @remarks
   * The request ID.
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

