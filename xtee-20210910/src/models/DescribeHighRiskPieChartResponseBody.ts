// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCityGrid extends $dara.Model {
  /**
   * @remarks
   * The chart identifier. Default value: false.
   * 
   * @example
   * false
   */
  show?: boolean;
  static names(): { [key: string]: string } {
    return {
      show: 'show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      show: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCitySeriesData extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * 杭州市
   */
  name?: string;
  /**
   * @remarks
   * The data value.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCitySeries extends $dara.Model {
  /**
   * @remarks
   * The response data object.
   */
  data?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCitySeriesData[];
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * 杭州市
   */
  name?: string;
  /**
   * @remarks
   * The chart identifier. Default value: false.
   * 
   * @example
   * false
   */
  roseType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      name: 'name',
      roseType: 'roseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCitySeriesData },
      name: 'string',
      roseType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCity extends $dara.Model {
  /**
   * @remarks
   * The chart identifier. Default value: true.
   * 
   * @example
   * true
   */
  animation?: boolean;
  /**
   * @remarks
   * The grid to which the chart belongs.
   */
  grid?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCityGrid;
  /**
   * @remarks
   * The chart data.
   */
  series?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCitySeries[];
  static names(): { [key: string]: string } {
    return {
      animation: 'animation',
      grid: 'grid',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      animation: 'boolean',
      grid: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCityGrid,
      series: { 'type': 'array', 'itemType': DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCitySeries },
    };
  }

  validate() {
    if(this.grid && typeof (this.grid as any).validate === 'function') {
      (this.grid as any).validate();
    }
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceGrid extends $dara.Model {
  /**
   * @remarks
   * The chart identifier. Default value: false.
   * 
   * @example
   * false
   */
  show?: boolean;
  static names(): { [key: string]: string } {
    return {
      show: 'show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      show: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceSeriesData extends $dara.Model {
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * 浙江省
   */
  name?: string;
  /**
   * @remarks
   * The data value.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceSeries extends $dara.Model {
  /**
   * @remarks
   * The response data object.
   */
  data?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceSeriesData[];
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * 浙江省
   */
  name?: string;
  /**
   * @remarks
   * The chart identifier. Default value: false.
   * 
   * @example
   * false
   */
  roseType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      name: 'name',
      roseType: 'roseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceSeriesData },
      name: 'string',
      roseType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvince extends $dara.Model {
  /**
   * @remarks
   * The chart identifier. Default value: true.
   * 
   * @example
   * true
   */
  animation?: boolean;
  /**
   * @remarks
   * The grid to which the chart belongs.
   */
  grid?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceGrid;
  /**
   * @remarks
   * The chart data.
   */
  series?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceSeries[];
  static names(): { [key: string]: string } {
    return {
      animation: 'animation',
      grid: 'grid',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      animation: 'boolean',
      grid: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceGrid,
      series: { 'type': 'array', 'itemType': DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceSeries },
    };
  }

  validate() {
    if(this.grid && typeof (this.grid as any).validate === 'function') {
      (this.grid as any).validate();
    }
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCityGrid extends $dara.Model {
  /**
   * @remarks
   * The chart identifier. Default value: false.
   * 
   * @example
   * false
   */
  show?: boolean;
  static names(): { [key: string]: string } {
    return {
      show: 'show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      show: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCitySeriesData extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * 杭州市
   */
  name?: string;
  /**
   * @remarks
   * The data value.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCitySeries extends $dara.Model {
  /**
   * @remarks
   * The response data object.
   */
  data?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCitySeriesData[];
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * 杭州市
   */
  name?: string;
  /**
   * @remarks
   * The chart identifier. Default value: false.
   * 
   * @example
   * false
   */
  roseType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      name: 'name',
      roseType: 'roseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCitySeriesData },
      name: 'string',
      roseType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCity extends $dara.Model {
  /**
   * @remarks
   * The chart identifier. Default value: true.
   * 
   * @example
   * true
   */
  animation?: boolean;
  /**
   * @remarks
   * The grid to which the chart belongs.
   */
  grid?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCityGrid;
  /**
   * @remarks
   * The chart data.
   */
  series?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCitySeries[];
  static names(): { [key: string]: string } {
    return {
      animation: 'animation',
      grid: 'grid',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      animation: 'boolean',
      grid: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCityGrid,
      series: { 'type': 'array', 'itemType': DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCitySeries },
    };
  }

  validate() {
    if(this.grid && typeof (this.grid as any).validate === 'function') {
      (this.grid as any).validate();
    }
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceGrid extends $dara.Model {
  /**
   * @remarks
   * The chart identifier. Default value: false.
   * 
   * @example
   * false
   */
  show?: boolean;
  static names(): { [key: string]: string } {
    return {
      show: 'show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      show: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceSeriesData extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * 浙江省
   */
  name?: string;
  /**
   * @remarks
   * The data value.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceSeries extends $dara.Model {
  /**
   * @remarks
   * The high-risk location data.
   */
  data?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceSeriesData[];
  /**
   * @remarks
   * The display title.
   * 
   * @example
   * 分值区间占比
   */
  name?: string;
  /**
   * @remarks
   * The chart identifier. Default value: false.
   * 
   * @example
   * false
   */
  roseType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      name: 'name',
      roseType: 'roseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceSeriesData },
      name: 'string',
      roseType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvince extends $dara.Model {
  /**
   * @remarks
   * The identifier. Default value: true.
   * 
   * @example
   * true
   */
  animation?: boolean;
  /**
   * @remarks
   * The grid to which the chart belongs.
   */
  grid?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceGrid;
  /**
   * @remarks
   * The chart data.
   */
  series?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceSeries[];
  static names(): { [key: string]: string } {
    return {
      animation: 'animation',
      grid: 'grid',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      animation: 'boolean',
      grid: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceGrid,
      series: { 'type': 'array', 'itemType': DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceSeries },
    };
  }

  validate() {
    if(this.grid && typeof (this.grid as any).validate === 'function') {
      (this.grid as any).validate();
    }
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The city to which the high-risk IP address belongs.
   */
  highRiskIPCity?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCity;
  /**
   * @remarks
   * The province to which the high-risk IP address belongs.
   */
  highRiskIPProvince?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvince;
  /**
   * @remarks
   * The city to which the high-risk phone number belongs.
   */
  highRiskMobileCity?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCity;
  /**
   * @remarks
   * The province to which the high-risk phone number belongs.
   */
  highRiskMobileProvince?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvince;
  static names(): { [key: string]: string } {
    return {
      highRiskIPCity: 'highRiskIPCity',
      highRiskIPProvince: 'highRiskIPProvince',
      highRiskMobileCity: 'highRiskMobileCity',
      highRiskMobileProvince: 'highRiskMobileProvince',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highRiskIPCity: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCity,
      highRiskIPProvince: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvince,
      highRiskMobileCity: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCity,
      highRiskMobileProvince: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvince,
    };
  }

  validate() {
    if(this.highRiskIPCity && typeof (this.highRiskIPCity as any).validate === 'function') {
      (this.highRiskIPCity as any).validate();
    }
    if(this.highRiskIPProvince && typeof (this.highRiskIPProvince as any).validate === 'function') {
      (this.highRiskIPProvince as any).validate();
    }
    if(this.highRiskMobileCity && typeof (this.highRiskMobileCity as any).validate === 'function') {
      (this.highRiskMobileCity as any).validate();
    }
    if(this.highRiskMobileProvince && typeof (this.highRiskMobileProvince as any).validate === 'function') {
      (this.highRiskMobileProvince as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighRiskPieChartResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * The input parameter data is not valid. order_storage_company_num component not found
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * The response object.
   */
  resultObject?: DescribeHighRiskPieChartResponseBodyResultObject;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      resultObject: 'resultObject',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeHighRiskPieChartResponseBodyResultObject,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

