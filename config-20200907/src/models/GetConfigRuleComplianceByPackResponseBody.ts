// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation result of the rule. Valid values:
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
   * The ID of the rule in the compliance package.
   * 
   * @example
   * cr-fdc8626622af00f9****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule in the compliance package.
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

export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-541e626622af0087****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The number of compliant rules.
   * 
   * @example
   * 0
   */
  compliantCount?: number;
  /**
   * @remarks
   * The list of rules in the compliance package and their compliance results.
   */
  configRuleCompliances?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
  /**
   * @remarks
   * The number of ignored rules.
   * 
   * @example
   * 1
   */
  ignoredCount?: number;
  /**
   * @remarks
   * The total number of rules within the compliance package whose evaluation results are "No Data" when assessing resources.
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
   * 0
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The number of rules that are not applicable.
   * 
   * @example
   * 1
   */
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
      configRuleCompliances: { 'type': 'array', 'itemType': GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances },
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

export class GetConfigRuleComplianceByPackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance results for the rules in the compliance package.
   */
  configRuleComplianceResult?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
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
      configRuleComplianceResult: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult,
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

