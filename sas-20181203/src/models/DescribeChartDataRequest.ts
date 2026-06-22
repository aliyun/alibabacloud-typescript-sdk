// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChartDataRequest extends $dara.Model {
  /**
   * @remarks
   * The chart ID.
   * 
   * > Call the [DescribeChartList](~~DescribeChartList~~) operation to obtain this parameter. This parameter is required if the report version is 1.0.0.
   * 
   * @example
   * CID_ASSET_RISK_TREND
   */
  charId?: string;
  /**
   * @remarks
   * The chart ID.
   * 
   * > Call the [DescribeChartList](~~DescribeChartList~~) operation to obtain this parameter. This parameter is required if the report version is 2.0.0.
   * 
   * @example
   * CID_VUL_SUMMARY
   */
  chartId?: string;
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The report ID.
   * 
   * > Call the [DescribeCustomizeReportList](~~DescribeCustomizeReportList~~) operation to obtain this parameter.
   * 
   * @example
   * 721734
   */
  reportId?: number;
  /**
   * @remarks
   * The end timestamp for statistics. Unit: milliseconds.
   * 
   * @example
   * 1683862286000
   */
  timeEnd?: number;
  /**
   * @remarks
   * The start timestamp for statistics. Unit: milliseconds.
   * 
   * @example
   * 1683603086000
   */
  timeStart?: number;
  static names(): { [key: string]: string } {
    return {
      charId: 'CharId',
      chartId: 'ChartId',
      lang: 'Lang',
      reportId: 'ReportId',
      timeEnd: 'TimeEnd',
      timeStart: 'TimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charId: 'string',
      chartId: 'string',
      lang: 'string',
      reportId: 'number',
      timeEnd: 'number',
      timeStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

