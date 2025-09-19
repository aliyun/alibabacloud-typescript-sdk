// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChartDataResponseBodyAllChartSubTypeList extends $dara.Model {
  /**
   * @remarks
   * The subtype of the chart.
   * 
   * @example
   * CID_SUSPICIOUS_TREND-ALL
   */
  subType?: string;
  /**
   * @remarks
   * The name of the chart subtype.
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
   * The name of the data type.
   * 
   * @example
   * Port
   */
  name?: string;
  /**
   * @remarks
   * The subtype data of the chart.
   * 
   * @example
   * CID_SUSPICIOUS_TREND-AL
   */
  subType?: string;
  /**
   * @remarks
   * The type of the data.
   * 
   * @example
   * high
   */
  type?: string;
  /**
   * @remarks
   * The values of the y-axis that corresponds to x-axis points.
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
   * The x-axis values.
   */
  XAxis?: string[];
  /**
   * @remarks
   * The y-axis values.
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
   * The font color, which is an RGBA value.
   * 
   * @example
   * #FFA800
   */
  color?: string;
  /**
   * @remarks
   * The name of the data type.
   * 
   * @example
   * Safety
   */
  name?: string;
  /**
   * @remarks
   * The type of the data.
   * 
   * @example
   * safe
   */
  type?: string;
  /**
   * @remarks
   * The attribute value.
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
   * The name of the data type.
   * 
   * @example
   * suspicious
   */
  name?: string;
  /**
   * @remarks
   * The type of the data.
   * 
   * @example
   * suspicious
   */
  type?: string;
  /**
   * @remarks
   * The value in the single value chart.
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
   * The valid values for all subtypes of the chart.
   */
  allChartSubTypeList?: DescribeChartDataResponseBodyAllChartSubTypeList[];
  /**
   * @remarks
   * The data type of the chart. Valid values:
   * 
   * *   **commonCoordinate**
   * *   **timeCoordinate**
   * *   **multipleValue**
   * *   **singleValue**
   * *   **propertyValue**
   * *   **propertyArrayValue**
   * 
   * @example
   * propertyArrayValue
   */
  chartDataType?: string;
  /**
   * @remarks
   * The subtype values in which the chart is selected.
   */
  chartSubTypeList?: string[];
  /**
   * @remarks
   * The type of the chart. Valid values:
   * 
   * *   **timeLine**
   * *   **timeBar**
   * *   **bar**
   * *   **line**
   * *   **pie**
   * *   **gauge**
   * *   **table**
   * *   **text**
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
   * The values in the multi-value charts.
   */
  multipleData?: DescribeChartDataResponseBodyMultipleData[];
  /**
   * @remarks
   * The attribute value of the array chart.
   * 
   * @example
   * []
   */
  propertyArrayValue?: string;
  /**
   * @remarks
   * The data of the chart.
   * 
   * @example
   * {\\"totalCount\\": \\"0\\"}
   */
  propertyValue?: string;
  /**
   * @remarks
   * The array data of the chart.
   * 
   * @example
   * []
   */
  properyArrayValue?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 50CCE62A-2BC4-5CF8-B976-E4F62A31****
   */
  requestId?: string;
  /**
   * @remarks
   * The data of the single value chart.
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

