// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the compliance summary was generated. Unit: milliseconds.
   * 
   * @example
   * 1589853712165
   */
  complianceSummaryTimestamp?: number;
  /**
   * @remarks
   * The number of compliant rules.
   * 
   * @example
   * 5
   */
  compliantCount?: number;
  /**
   * @remarks
   * The number of non-compliant rules.
   * 
   * @example
   * 11
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryTimestamp: 'ComplianceSummaryTimestamp',
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryTimestamp: 'number',
      compliantCount: 'number',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the compliance summary was generated. Unit: milliseconds.
   * 
   * @example
   * 1589853712165
   */
  complianceSummaryTimestamp?: number;
  /**
   * @remarks
   * The number of compliant resources.
   * 
   * @example
   * 1
   */
  compliantCount?: number;
  /**
   * @remarks
   * The number of non-compliant resources detected by high-risk rules.
   * 
   * > Note: This value can be greater than the total number of resources in your account. Resources are counted based on each rule. For example, if a resource is evaluated as non-compliant by two rules, the value of this parameter increases by 2.
   * 
   * @example
   * 2
   */
  highRiskRuleNonCompliantResourceCount?: number;
  /**
   * @remarks
   * The number of non-compliant resources detected by low-risk rules.
   * 
   * > Note: This value can be greater than the total number of resources in your account. Resources are counted based on each rule. For example, if a resource is evaluated as non-compliant by two low-risk rules, the value of this parameter increases by 2.
   * 
   * @example
   * 2
   */
  lowRiskRuleNonCompliantResourceCount?: number;
  /**
   * @remarks
   * The number of non-compliant resources detected by medium-risk rules.
   * 
   * > Note: This value can be greater than the total number of resources in your account. Resources are counted based on each rule. For example, if a resource is evaluated as non-compliant by two rules, the value of this parameter increases by 2.
   * 
   * @example
   * 6
   */
  mediumRiskRuleNonCompliantResourceCount?: number;
  /**
   * @remarks
   * The number of non-compliant resources.
   * 
   * @example
   * 12
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryTimestamp: 'ComplianceSummaryTimestamp',
      compliantCount: 'CompliantCount',
      highRiskRuleNonCompliantResourceCount: 'HighRiskRuleNonCompliantResourceCount',
      lowRiskRuleNonCompliantResourceCount: 'LowRiskRuleNonCompliantResourceCount',
      mediumRiskRuleNonCompliantResourceCount: 'MediumRiskRuleNonCompliantResourceCount',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryTimestamp: 'number',
      compliantCount: 'number',
      highRiskRuleNonCompliantResourceCount: 'number',
      lowRiskRuleNonCompliantResourceCount: 'number',
      mediumRiskRuleNonCompliantResourceCount: 'number',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComplianceSummaryResponseBodyComplianceSummary extends $dara.Model {
  /**
   * @remarks
   * The compliance summary by rule.
   */
  complianceSummaryByConfigRule?: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule;
  /**
   * @remarks
   * The compliance summary by resource.
   */
  complianceSummaryByResource?: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryByConfigRule: 'ComplianceSummaryByConfigRule',
      complianceSummaryByResource: 'ComplianceSummaryByResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryByConfigRule: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule,
      complianceSummaryByResource: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource,
    };
  }

  validate() {
    if(this.complianceSummaryByConfigRule && typeof (this.complianceSummaryByConfigRule as any).validate === 'function') {
      (this.complianceSummaryByConfigRule as any).validate();
    }
    if(this.complianceSummaryByResource && typeof (this.complianceSummaryByResource as any).validate === 'function') {
      (this.complianceSummaryByResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComplianceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance summary.
   */
  complianceSummary?: GetComplianceSummaryResponseBodyComplianceSummary;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CAEE6F34-DEDC-4BAA-AA8C-946D5D008737
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceSummary: 'ComplianceSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummary: GetComplianceSummaryResponseBodyComplianceSummary,
      requestId: 'string',
    };
  }

  validate() {
    if(this.complianceSummary && typeof (this.complianceSummary as any).validate === 'function') {
      (this.complianceSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

