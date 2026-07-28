// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary extends $dara.Model {
  /**
   * @remarks
   * The pass rate.
   * 
   * @example
   * 0.98
   */
  passRate?: number;
  /**
   * @remarks
   * The scope of the pass rate.
   * 
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
   * @remarks
   * The number of resources associated with the risk.
   * 
   * @example
   * 0
   */
  resourceCount?: number;
  /**
   * @remarks
   * The number of risks.
   * 
   * @example
   * 3
   */
  riskCount?: number;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * HighRisk
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk type.
   * 
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
   * @remarks
   * The number of inspection items.
   * 
   * @example
   * 11
   */
  checkItemCount?: number;
  /**
   * @remarks
   * The number of inspected resources.
   * 
   * @example
   * 123
   */
  checkResourceCount?: number;
  /**
   * @remarks
   * The pass rate summary.
   */
  passRateSummary?: DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary[];
  /**
   * @remarks
   * The risk summary.
   */
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
   * @remarks
   * The end time.
   * 
   * @example
   * 2024-06-03 09:36:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the inspection report.
   * 
   * @example
   * nir-38abb318b27b49cc9a01
   */
  inspectionReportId?: string;
  /**
   * @remarks
   * The ID of the inspection task.
   * 
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4838F3F2-30E1-5D82-B25A-B9FE33BC3E25
   */
  requestId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-06-03 09:35:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - Creating
   * 
   * - Active
   * 
   * - Running
   * 
   * - Inactive
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The summary information.
   */
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

