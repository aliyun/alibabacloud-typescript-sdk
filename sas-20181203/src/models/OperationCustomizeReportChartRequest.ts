// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationCustomizeReportChartRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the chart that is included in the report. Separate multiple IDs with commas (,).
   * 
   * >  You can call the [DescribeChartList](~~DescribeChartList~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * CID_VUL_SUMMARY,CID_VUL_TREND,CID_VUL_OPERATION_TREND,CID_BASELINE_CHECK_SUMMARY,CID_BASELINE_CHECK_TREND,CID_BASELINE_CHECK_OPERATION_TREND
   */
  chartIds?: string;
  /**
   * @remarks
   * The ID of the report.
   * 
   * >  You can call the [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      chartIds: 'ChartIds',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartIds: 'string',
      reportId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

