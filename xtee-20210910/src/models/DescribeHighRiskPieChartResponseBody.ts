// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCityGrid extends $dara.Model {
  /**
   * @remarks
   * Chart flag, default false
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
   * Field name
   * 
   * @example
   * 杭州市
   */
  name?: string;
  /**
   * @remarks
   * Data value
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
   * Returned data object
   */
  data?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCitySeriesData[];
  /**
   * @remarks
   * Field name
   * 
   * @example
   * 杭州市
   */
  name?: string;
  /**
   * @remarks
   * Chart identifier, default is false
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
   * Chart flag, default true
   * 
   * @example
   * true
   */
  animation?: boolean;
  /**
   * @remarks
   * Belonging grid.
   */
  grid?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCityGrid;
  /**
   * @remarks
   * Chart data
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
   * Chart identifier, default is false
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
   * Variable name
   * 
   * @example
   * 浙江省
   */
  name?: string;
  /**
   * @remarks
   * Data value
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
   * Returned data object
   */
  data?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceSeriesData[];
  /**
   * @remarks
   * Field name
   * 
   * @example
   * 浙江省
   */
  name?: string;
  /**
   * @remarks
   * Chart identifier, default is false
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
   * Chart identifier, default is true
   * 
   * @example
   * true
   */
  animation?: boolean;
  /**
   * @remarks
   * Belonging grid.
   */
  grid?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvinceGrid;
  /**
   * @remarks
   * Chart data
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
   * Chart flag, default is false
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
   * Field name
   * 
   * @example
   * 杭州市
   */
  name?: string;
  /**
   * @remarks
   * Data value
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
   * Returned data object
   */
  data?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCitySeriesData[];
  /**
   * @remarks
   * Field name
   * 
   * @example
   * 杭州市
   */
  name?: string;
  /**
   * @remarks
   * Chart flag, default is false
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
   * Chart flag, default is true
   * 
   * @example
   * true
   */
  animation?: boolean;
  /**
   * @remarks
   * Belongs to grid.
   */
  grid?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCityGrid;
  /**
   * @remarks
   * Chart data
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
   * Chart flag, default is false
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
   * Field name
   * 
   * @example
   * 浙江省
   */
  name?: string;
  /**
   * @remarks
   * Data value
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
   * High-risk position data.
   */
  data?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceSeriesData[];
  /**
   * @remarks
   * Display title
   * 
   * @example
   * 分值区间占比
   */
  name?: string;
  /**
   * @remarks
   * Chart identifier, default false
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
   * Indicator, default true
   * 
   * @example
   * true
   */
  animation?: boolean;
  /**
   * @remarks
   * Belongs to grid.
   */
  grid?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileProvinceGrid;
  /**
   * @remarks
   * Chart data
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
   * High-risk IP city
   */
  highRiskIPCity?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPCity;
  /**
   * @remarks
   * High-risk IP归属province
   */
  highRiskIPProvince?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskIPProvince;
  /**
   * @remarks
   * High-risk mobile phone归属city
   */
  highRiskMobileCity?: DescribeHighRiskPieChartResponseBodyResultObjectHighRiskMobileCity;
  /**
   * @remarks
   * High-risk mobile phone\\"s province of origin
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
   * Status code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Error details
   * 
   * @example
   * The input parameter data is not valid. order_storage_company_num component not found
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeHighRiskPieChartResponseBodyResultObject;
  /**
   * @remarks
   * Whether the request was successful.
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

