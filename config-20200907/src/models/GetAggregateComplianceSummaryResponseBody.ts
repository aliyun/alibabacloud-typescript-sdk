// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule extends $dara.Model {
  /**
   * @remarks
   * The time when the compliance statistics were collected. Unit: milliseconds.
   * 
   * @example
   * 1589853822103
   */
  complianceSummaryTimestamp?: number;
  /**
   * @remarks
   * The number of compliant rules.
   * 
   * @example
   * 4
   */
  compliantCount?: number;
  /**
   * @remarks
   * The number of non-compliant rules.
   * 
   * @example
   * 5
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 9
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

export class GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource extends $dara.Model {
  /**
   * @remarks
   * The time when the compliance statistics were collected. Unit: milliseconds.
   * 
   * @example
   * 1589853822103
   */
  complianceSummaryTimestamp?: number;
  /**
   * @remarks
   * The number of compliant resources.
   * 
   * @example
   * 20
   */
  compliantCount?: number;
  highRiskRuleNonCompliantResourceCount?: number;
  lowRiskRuleNonCompliantResourceCount?: number;
  mediumRiskRuleNonCompliantResourceCount?: number;
  /**
   * @remarks
   * The number of non-compliant resources.
   * 
   * @example
   * 11
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 31
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

export class GetAggregateComplianceSummaryResponseBodyComplianceSummary extends $dara.Model {
  /**
   * @remarks
   * The summary of compliance statistics from the rule dimension.
   */
  complianceSummaryByConfigRule?: GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule;
  /**
   * @remarks
   * The summary of compliance statistics from the resource dimension.
   */
  complianceSummaryByResource?: GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryByConfigRule: 'ComplianceSummaryByConfigRule',
      complianceSummaryByResource: 'ComplianceSummaryByResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryByConfigRule: GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule,
      complianceSummaryByResource: GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource,
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

export class GetAggregateComplianceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance statistics.
   */
  complianceSummary?: GetAggregateComplianceSummaryResponseBodyComplianceSummary;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 929B8360-BD57-54FF-96DB-AD1D9B476769
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
      complianceSummary: GetAggregateComplianceSummaryResponseBodyComplianceSummary,
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

