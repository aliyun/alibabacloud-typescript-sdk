// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicChartJobRequest extends $dara.Model {
  /**
   * @remarks
   * The axis configurations. If XAxisFontInterval is set to 0 or left empty, the system automatically determines an optimal interval.
   * 
   * @example
   * {"FontFile":"Microsoft YaHei","XAxisFontSize":"30","YAxisFontSize":"30","XAxisFontInterval":"30","AxisColor":"30"}
   */
  axisParams?: string;
  /**
   * @remarks
   * The chart background.
   * 
   * @example
   * {"Color":"#000000","ImageUrl":"http://your-bucket.oss-cn-shanghai.aliyuncs.com/obj.jpg"}
   */
  background?: string;
  /**
   * @remarks
   * The chart configurations.
   * 
   * @example
   * {"Style":"Normal","TitleStartTime":"3000","ChartStartTime":"3000","VideoDuration":"15000"}
   */
  chartConfig?: string;
  /**
   * @remarks
   * The chart title.
   */
  chartTitle?: string;
  /**
   * @remarks
   * The chart type.
   * 
   * Valid values:
   * 
   * *   Line: line chart
   * *   Histogram: bar chart
   * *   Pie: pie chart
   * 
   * This parameter is required.
   * 
   * @example
   * Line
   */
  chartType?: string;
  /**
   * @remarks
   * The data source.
   */
  dataSource?: string;
  /**
   * @remarks
   * The job description.
   */
  description?: string;
  /**
   * @remarks
   * The input data for the chart.
   * 
   * This parameter is required.
   * 
   * @example
   * {"XlsFile":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/obj.xls"}
   */
  input?: string;
  /**
   * @remarks
   * The output configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * {"MediaURL":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/obj.mp4","Bitrate":2000,"Width":800,"Height":680}
   */
  outputConfig?: string;
  /**
   * @remarks
   * The subtitle.
   */
  subtitle?: string;
  /**
   * @remarks
   * The job title.
   */
  title?: string;
  /**
   * @remarks
   * Unit
   */
  unit?: string;
  /**
   * @remarks
   * The custom data in JSON format.
   * 
   * @example
   * {"user":"data"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      axisParams: 'AxisParams',
      background: 'Background',
      chartConfig: 'ChartConfig',
      chartTitle: 'ChartTitle',
      chartType: 'ChartType',
      dataSource: 'DataSource',
      description: 'Description',
      input: 'Input',
      outputConfig: 'OutputConfig',
      subtitle: 'Subtitle',
      title: 'Title',
      unit: 'Unit',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      axisParams: 'string',
      background: 'string',
      chartConfig: 'string',
      chartTitle: 'string',
      chartType: 'string',
      dataSource: 'string',
      description: 'string',
      input: 'string',
      outputConfig: 'string',
      subtitle: 'string',
      title: 'string',
      unit: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

