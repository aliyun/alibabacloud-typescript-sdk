// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventResultBarChartResponseBodyResultObjectSeriesData extends $dara.Model {
  /**
   * @remarks
   * Number.
   * 
   * @example
   * 100
   */
  num?: number;
  /**
   * @remarks
   * Scale
   * 
   * @example
   * 50.00%
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

export class DescribeEventResultBarChartResponseBodyResultObjectSeries extends $dara.Model {
  /**
   * @remarks
   * Returned data object
   */
  data?: DescribeEventResultBarChartResponseBodyResultObjectSeriesData[];
  /**
   * @remarks
   * Series name.
   * 
   * @example
   * 通过
   */
  name?: string;
  /**
   * @remarks
   * Label key
   * 
   * @example
   * 通过
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
      data: { 'type': 'array', 'itemType': DescribeEventResultBarChartResponseBodyResultObjectSeriesData },
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

export class DescribeEventResultBarChartResponseBodyResultObjectXaxis extends $dara.Model {
  /**
   * @remarks
   * Returned data object
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

export class DescribeEventResultBarChartResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Chart data
   */
  series?: DescribeEventResultBarChartResponseBodyResultObjectSeries[];
  /**
   * @remarks
   * xaxis interface configuration.
   */
  xaxis?: DescribeEventResultBarChartResponseBodyResultObjectXaxis;
  static names(): { [key: string]: string } {
    return {
      series: 'series',
      xaxis: 'xaxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      series: { 'type': 'array', 'itemType': DescribeEventResultBarChartResponseBodyResultObjectSeries },
      xaxis: DescribeEventResultBarChartResponseBodyResultObjectXaxis,
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

export class DescribeEventResultBarChartResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
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
   * Error message.
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
  resultObject?: DescribeEventResultBarChartResponseBodyResultObject;
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
      resultObject: DescribeEventResultBarChartResponseBodyResultObject,
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

