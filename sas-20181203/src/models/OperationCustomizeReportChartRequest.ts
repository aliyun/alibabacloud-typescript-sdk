// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationCustomizeReportChartRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of report chart configurations. Separate multiple IDs with commas (,).
   * >Call [DescribeChartList](~~DescribeChartList~~) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * CID_VUL_SUMMARY,CID_VUL_TREND,CID_VUL_OPERATION_TREND,CID_BASELINE_CHECK_SUMMARY,CID_BASELINE_CHECK_TREND,CID_BASELINE_CHECK_OPERATION_TREND
   */
  chartIds?: string;
  /**
   * @remarks
   * The report ID.
   * >Call [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) to obtain this parameter.
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

