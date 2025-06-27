// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary } from "./DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary";
import { DescribeNisInspectionReportSummaryResponseBodySummaryRiskSummary } from "./DescribeNisInspectionReportSummaryResponseBodySummaryRiskSummary";


export class DescribeNisInspectionReportSummaryResponseBodySummary extends $dara.Model {
  /**
   * @example
   * 11
   */
  checkItemCount?: number;
  /**
   * @example
   * 123
   */
  checkResourceCount?: number;
  passRateSummary?: DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary[];
  riskSummary?: DescribeNisInspectionReportSummaryResponseBodySummaryRiskSummary[];
  static names(): { [key: string]: string } {
    return {
      checkItemCount: 'CheckItemCount',
      checkResourceCount: 'CheckResourceCount',
      passRateSummary: 'PassRateSummary',
      riskSummary: 'RiskSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItemCount: 'number',
      checkResourceCount: 'number',
      passRateSummary: { 'type': 'array', 'itemType': DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary },
      riskSummary: { 'type': 'array', 'itemType': DescribeNisInspectionReportSummaryResponseBodySummaryRiskSummary },
    };
  }

  validate() {
    if(Array.isArray(this.passRateSummary)) {
      $dara.Model.validateArray(this.passRateSummary);
    }
    if(Array.isArray(this.riskSummary)) {
      $dara.Model.validateArray(this.riskSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

