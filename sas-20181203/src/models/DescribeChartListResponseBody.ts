// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChartListResponseBodyChartList extends $dara.Model {
  /**
   * @remarks
   * The business type name. Valid values:
   * 
   * - Overall operation metrics
   * - Asset operation metrics
   * - Security alert operation metrics
   * - Vulnerability operation metrics
   * - Baseline operation metrics
   * - Cloud service operation metrics
   * - Cloud honeypot operation metrics.
   * 
   * @example
   * Overall Operation Metrics
   */
  businessName?: string;
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * - INDEX_SECURITY_OVERALL_OPERATION
   * - INDEX_ASSET_OPERATION
   * - INDEX_SUSPICIOUS_OPERATION
   * - INDEX_VUL_OPERATION
   * - INDEX_BASELINE_CHECK_OPERATION
   * - INDEX_CLOUD_ASSET_OPERATION
   * - INDEX_HONEYPOT_RISK_OPERATION.
   * 
   * @example
   * INDEX_SECURITY_OVERALL_OPERATION
   */
  businessType?: string;
  /**
   * @remarks
   * The chart ID.
   * 
   * @example
   * CID_CLOUD_ASSET_SUMMARY
   */
  chartId?: string;
  /**
   * @remarks
   * The chart name.
   * 
   * @example
   * Security Score
   */
  chartName?: string;
  /**
   * @remarks
   * The chart type. Valid values:
   * 
   * - **text**: text
   * - **table**: table
   * - **gauge**: gauge chart
   * - **pie**: pie chart
   * - **line**: line chart
   * - **bar**: bar chart
   * - **timeBar**: timeline bar chart
   * - **timeLine**: timeline line chart.
   * 
   * @example
   * text
   */
  chartType?: string;
  static names(): { [key: string]: string } {
    return {
      businessName: 'BusinessName',
      businessType: 'BusinessType',
      chartId: 'ChartId',
      chartName: 'ChartName',
      chartType: 'ChartType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessName: 'string',
      businessType: 'string',
      chartId: 'string',
      chartName: 'string',
      chartType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChartListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of charts.
   */
  chartList?: DescribeChartListResponseBodyChartList[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 35B434CC-1615-5937-A04E-A9BC2868DB45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chartList: 'ChartList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartList: { 'type': 'array', 'itemType': DescribeChartListResponseBodyChartList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chartList)) {
      $dara.Model.validateArray(this.chartList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

