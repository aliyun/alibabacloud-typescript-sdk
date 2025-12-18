// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule extends $dara.Model {
  /**
   * @remarks
   * The time when the compliance summary was generated. Unit: milliseconds.
   * 
   * @example
   * 1589853712165
   */
  complianceSummaryTimestamp?: number;
  /**
   * @remarks
   * The number of rules evaluated as compliant.
   * 
   * @example
   * 5
   */
  compliantCount?: number;
  /**
   * @remarks
   * The number of rules evaluated as non-compliant.
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
   * The time when the compliance summary was generated. Unit: milliseconds.
   * 
   * @example
   * 1589853712165
   */
  complianceSummaryTimestamp?: number;
  /**
   * @remarks
   * The number of resources evaluated as compliant.
   * 
   * @example
   * 1
   */
  compliantCount?: number;
  highRiskRuleNonCompliantResourceCount?: number;
  lowRiskRuleNonCompliantResourceCount?: number;
  mediumRiskRuleNonCompliantResourceCount?: number;
  /**
   * @remarks
   * The number of resources evaluated as non-compliant.
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
   * The summary of compliance statistics from the rule dimension.
   */
  complianceSummaryByConfigRule?: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule;
  /**
   * @remarks
   * The summary of compliance statistics from the resource dimension.
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
   * The summary of compliance statistics.
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

