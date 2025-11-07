// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary extends $dara.Model {
  /**
   * @example
   * 0.98
   */
  passRate?: number;
  /**
   * @example
   * Stability
   */
  passRateScope?: string;
  static names(): { [key: string]: string } {
    return {
      passRate: 'PassRate',
      passRateScope: 'PassRateScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passRate: 'number',
      passRateScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeNisInspectionReportSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 2024-06-03 09:36:00
   */
  endTime?: string;
  /**
   * @example
   * nir-38abb318b27b49cc9a01
   */
  inspectionReportId?: string;
  /**
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @example
   * 4838F3F2-30E1-5D82-B25A-B9FE33BC3E25
   */
  requestId?: string;
  /**
   * @example
   * 2024-06-03 09:35:00
   */
  startTime?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  summary?: DescribeNisInspectionReportSummaryResponseBodySummary;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inspectionReportId: 'InspectionReportId',
      inspectionTaskId: 'InspectionTaskId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      inspectionReportId: 'string',
      inspectionTaskId: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      summary: DescribeNisInspectionReportSummaryResponseBodySummary,
    };
  }

  validate() {
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

