// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportSummaryResponseBodySummaryRiskSummary extends $dara.Model {
  /**
   * @example
   * 0
   */
  resourceCount?: number;
  /**
   * @example
   * 3
   */
  riskCount?: number;
  /**
   * @example
   * HighRisk
   */
  riskLevel?: string;
  /**
   * @example
   * StabilityRisk
   */
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      riskCount: 'RiskCount',
      riskLevel: 'RiskLevel',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      riskCount: 'number',
      riskLevel: 'string',
      riskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

