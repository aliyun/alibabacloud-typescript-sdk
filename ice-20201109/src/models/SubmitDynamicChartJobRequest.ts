// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicChartJobRequest extends $dara.Model {
  /**
   * @remarks
   * The axis style. If XAxisFontInterval is not specified or is set to 0, the algorithm automatically calculates the interval.
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
   * The chart configuration.
   * 
   * @example
   * {"Style":"Normal","TitleStartTime":"3000","ChartStartTime":"3000","VideoDuration":"15000"}
   */
  chartConfig?: string;
  /**
   * @remarks
   * The main title.
   * 
   * @example
   * {"Text":"ChartTitle","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}
   */
  chartTitle?: string;
  /**
   * @remarks
   * The chart type.
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
   * 
   * @example
   * {"Text":"DataSource","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}
   */
  dataSource?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Job Description
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
   * The output settings.
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
   * 
   * @example
   * {"Text":"Subtitle","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}
   */
  subtitle?: string;
  /**
   * @remarks
   * The task title.
   * 
   * @example
   * Job Title
   */
  title?: string;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * {"Text":"Unit","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}
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

