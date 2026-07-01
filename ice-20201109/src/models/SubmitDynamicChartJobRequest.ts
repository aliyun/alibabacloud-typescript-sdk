// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDynamicChartJobRequest extends $dara.Model {
  /**
   * @remarks
   * The axis style settings. If `XAxisFontInterval` is not specified or is set to 0, the system automatically calculates the interval.
   * 
   * @example
   * {"FontFile":"Microsoft YaHei","XAxisFontSize":"30","YAxisFontSize":"30","XAxisFontInterval":"30","AxisColor":"30"}
   */
  axisParams?: string;
  /**
   * @remarks
   * The settings for the chart background. You can specify a Background Color or a Background Image.
   * 
   * @example
   * {"Color":"#000000","ImageUrl":"http://your-bucket.oss-cn-shanghai.aliyuncs.com/obj.jpg"}
   */
  background?: string;
  /**
   * @remarks
   * The overall configuration for the chart\\"s appearance and timing.
   * 
   * @example
   * {"Style":"Normal","TitleStartTime":"3000","ChartStartTime":"3000","VideoDuration":"15000"}
   */
  chartConfig?: string;
  /**
   * @remarks
   * The chart title settings.
   * 
   * @example
   * {"Text":" primary title","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}
   */
  chartTitle?: string;
  /**
   * @remarks
   * The chart type to generate.
   * 
   * This parameter is required.
   * 
   * @example
   * Line
   */
  chartType?: string;
  /**
   * @remarks
   * The data source label settings.
   * 
   * @example
   * {"Text":"Data source","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}
   */
  dataSource?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * Task description
   */
  description?: string;
  /**
   * @remarks
   * The input data configuration, which specifies the Excel file location.
   * 
   * This parameter is required.
   * 
   * @example
   * {"XlsFile":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/obj.xls"}
   */
  input?: string;
  /**
   * @remarks
   * The output video configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {"MediaURL":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/obj.mp4","Bitrate":2000,"Width":800,"Height":680}
   */
  outputConfig?: string;
  /**
   * @remarks
   * The subtitle settings.
   * 
   * @example
   * {"Text":"Subtitle","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}
   */
  subtitle?: string;
  /**
   * @remarks
   * The job title.
   * 
   * @example
   * Task title
   */
  title?: string;
  /**
   * @remarks
   * The data unit label settings.
   * 
   * @example
   * {"Text":"Unit","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}
   */
  unit?: string;
  /**
   * @remarks
   * The custom user data in JSON format.
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

