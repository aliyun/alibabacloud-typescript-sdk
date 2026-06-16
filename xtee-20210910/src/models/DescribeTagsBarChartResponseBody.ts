// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsBarChartResponseBodyResultObjectSeriesData extends $dara.Model {
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 200
   */
  num?: number;
  /**
   * @remarks
   * The ratio.
   * 
   * @example
   * 10%
   */
  scale?: string;
  static names(): { [key: string]: string } {
    return {
      num: 'num',
      scale: 'scale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      scale: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsBarChartResponseBodyResultObjectSeries extends $dara.Model {
  /**
   * @remarks
   * The chart data list.
   */
  data?: DescribeTagsBarChartResponseBodyResultObjectSeriesData[];
  /**
   * @remarks
   * The series name.
   * 
   * @example
   * tag
   */
  name?: string;
  /**
   * @remarks
   * The chart field, which is the same as the name.
   * 
   * @example
   * tag
   */
  stack?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      name: 'name',
      stack: 'stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeTagsBarChartResponseBodyResultObjectSeriesData },
      name: 'string',
      stack: 'string',
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

export class DescribeTagsBarChartResponseBodyResultObjectXaxis extends $dara.Model {
  /**
   * @remarks
   * The x-axis data items.
   */
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeTagsBarChartResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  series?: DescribeTagsBarChartResponseBodyResultObjectSeries[];
  /**
   * @remarks
   * The x-axis configuration.
   */
  xaxis?: DescribeTagsBarChartResponseBodyResultObjectXaxis;
  static names(): { [key: string]: string } {
    return {
      series: 'series',
      xaxis: 'xaxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      series: { 'type': 'array', 'itemType': DescribeTagsBarChartResponseBodyResultObjectSeries },
      xaxis: DescribeTagsBarChartResponseBodyResultObjectXaxis,
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    if(this.xaxis && typeof (this.xaxis as any).validate === 'function') {
      (this.xaxis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsBarChartResponseBody extends $dara.Model {
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
   * The error message.
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
   * The returned object.
   */
  resultObject?: DescribeTagsBarChartResponseBodyResultObject;
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
      resultObject: DescribeTagsBarChartResponseBodyResultObject,
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

