// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChartDataResponseBodyAllChartSubTypeList extends $dara.Model {
  /**
   * @remarks
   * The chart subtype.
   * 
   * @example
   * CID_SUSPICIOUS_TREND-ALL
   */
  subType?: string;
  /**
   * @remarks
   * The chart subtype name.
   * 
   * @example
   * All Alerts
   */
  subTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      subType: 'SubType',
      subTypeName: 'SubTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subType: 'string',
      subTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChartDataResponseBodyCoordinateDataYAxisList extends $dara.Model {
  /**
   * @remarks
   * The data type name.
   * 
   * @example
   * Port
   */
  name?: string;
  /**
   * @remarks
   * The chart subtype data.
   * 
   * @example
   * CID_SUSPICIOUS_TREND-AL
   */
  subType?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * high
   */
  type?: string;
  /**
   * @remarks
   * The Y-axis values corresponding to each X-axis point.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      subType: 'SubType',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      subType: 'string',
      type: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChartDataResponseBodyCoordinateData extends $dara.Model {
  /**
   * @remarks
   * The list of X-axis values.
   */
  XAxis?: string[];
  /**
   * @remarks
   * The list of Y-axis values.
   */
  YAxisList?: DescribeChartDataResponseBodyCoordinateDataYAxisList[];
  static names(): { [key: string]: string } {
    return {
      XAxis: 'XAxis',
      YAxisList: 'YAxisList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XAxis: { 'type': 'array', 'itemType': 'string' },
      YAxisList: { 'type': 'array', 'itemType': DescribeChartDataResponseBodyCoordinateDataYAxisList },
    };
  }

  validate() {
    if(Array.isArray(this.XAxis)) {
      $dara.Model.validateArray(this.XAxis);
    }
    if(Array.isArray(this.YAxisList)) {
      $dara.Model.validateArray(this.YAxisList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChartDataResponseBodyMultipleData extends $dara.Model {
  /**
   * @remarks
   * The font color in RGBA hexadecimal color code.
   * 
   * @example
   * #FFA800
   */
  color?: string;
  /**
   * @remarks
   * The data type name.
   * 
   * @example
   * Safety
   */
  name?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * safe
   */
  type?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * 0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      name: 'string',
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChartDataResponseBodySingleData extends $dara.Model {
  /**
   * @remarks
   * The data type name.
   * 
   * @example
   * suspicious
   */
  name?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * suspicious
   */
  type?: string;
  /**
   * @remarks
   * The data value of the single-value chart.
   * 
   * @example
   * 172
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChartDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available values for all subtypes of the chart.
   */
  allChartSubTypeList?: DescribeChartDataResponseBodyAllChartSubTypeList[];
  /**
   * @remarks
   * The chart data type. Valid values:
   * - **commonCoordinate**: common coordinate
   * - **timeCoordinate**: time-axis coordinate
   * - **multipleValue**: multiple values
   * - **singleValue**: single value
   * - **propertyValue**: property value
   * - **propertyArrayValue**: array property value.
   * 
   * @example
   * propertyArrayValue
   */
  chartDataType?: string;
  /**
   * @remarks
   * The list of selected chart subtype values.
   */
  chartSubTypeList?: string[];
  /**
   * @remarks
   * The chart type. Valid values:
   * - **timeLine**: timeline chart
   * - **timeBar**: time-axis bar chart
   * - **bar**: bar chart
   * - **line**: line chart
   * - **pie**: pie chart
   * - **gauge**: gauge chart
   * - **table**: table
   * - **text**: text.
   * 
   * @example
   * timeBar
   */
  chartType?: string;
  /**
   * @remarks
   * The coordinate data.
   */
  coordinateData?: DescribeChartDataResponseBodyCoordinateData;
  /**
   * @remarks
   * The multiple-value chart data.
   */
  multipleData?: DescribeChartDataResponseBodyMultipleData[];
  /**
   * @remarks
   * The array chart property values.
   * 
   * @example
   * []
   */
  propertyArrayValue?: string;
  /**
   * @remarks
   * The property value in the chart.
   * 
   * @example
   * {\\"totalCount\\": \\"0\\"}
   */
  propertyValue?: string;
  /**
   * @remarks
   * The property array of the chart.
   * 
   * @example
   * []
   */
  properyArrayValue?: string;
  /**
   * @remarks
   * The request ID generated by Alibaba Cloud for this request. You can use it to troubleshoot issues.
   * 
   * @example
   * 50CCE62A-2BC4-5CF8-B976-E4F62A31****
   */
  requestId?: string;
  /**
   * @remarks
   * The single-value chart data.
   */
  singleData?: DescribeChartDataResponseBodySingleData;
  static names(): { [key: string]: string } {
    return {
      allChartSubTypeList: 'AllChartSubTypeList',
      chartDataType: 'ChartDataType',
      chartSubTypeList: 'ChartSubTypeList',
      chartType: 'ChartType',
      coordinateData: 'CoordinateData',
      multipleData: 'MultipleData',
      propertyArrayValue: 'PropertyArrayValue',
      propertyValue: 'PropertyValue',
      properyArrayValue: 'ProperyArrayValue',
      requestId: 'RequestId',
      singleData: 'SingleData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allChartSubTypeList: { 'type': 'array', 'itemType': DescribeChartDataResponseBodyAllChartSubTypeList },
      chartDataType: 'string',
      chartSubTypeList: { 'type': 'array', 'itemType': 'string' },
      chartType: 'string',
      coordinateData: DescribeChartDataResponseBodyCoordinateData,
      multipleData: { 'type': 'array', 'itemType': DescribeChartDataResponseBodyMultipleData },
      propertyArrayValue: 'string',
      propertyValue: 'string',
      properyArrayValue: 'string',
      requestId: 'string',
      singleData: DescribeChartDataResponseBodySingleData,
    };
  }

  validate() {
    if(Array.isArray(this.allChartSubTypeList)) {
      $dara.Model.validateArray(this.allChartSubTypeList);
    }
    if(Array.isArray(this.chartSubTypeList)) {
      $dara.Model.validateArray(this.chartSubTypeList);
    }
    if(this.coordinateData && typeof (this.coordinateData as any).validate === 'function') {
      (this.coordinateData as any).validate();
    }
    if(Array.isArray(this.multipleData)) {
      $dara.Model.validateArray(this.multipleData);
    }
    if(this.singleData && typeof (this.singleData as any).validate === 'function') {
      (this.singleData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

