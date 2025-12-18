// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
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
   * The ID of the rule enabled in the compliance package.
   * 
   * @example
   * cr-fdc8626622af00f9****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule enabled in the compliance package.
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

export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult extends $dara.Model {
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
   * The rule enabled in the compliance package and the compliance evaluation result returned by the rule.
   */
  configRuleCompliances?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
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
   * The total number of rules enabled in the compliance package.
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
   * The information about the compliance evaluation results returned.
   */
  configRuleComplianceResult?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  /**
   * @remarks
   * The ID of the request.
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

