// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsTrendResponseBodyResultObjectSeriesData extends $dara.Model {
  /**
   * @remarks
   * The number of items in this category.
   * 
   * @example
   * 100
   */
  num?: number;
  /**
   * @remarks
   * The proportion.
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

export class DescribeTagsTrendResponseBodyResultObjectSeries extends $dara.Model {
  /**
   * @remarks
   * The chart data list.
   */
  data?: DescribeTagsTrendResponseBodyResultObjectSeriesData[];
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * rm0102
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeTagsTrendResponseBodyResultObjectSeriesData },
      name: 'string',
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

export class DescribeTagsTrendResponseBodyResultObjectXaxis extends $dara.Model {
  /**
   * @remarks
   * The x-axis data.
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

export class DescribeTagsTrendResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  series?: DescribeTagsTrendResponseBodyResultObjectSeries[];
  /**
   * @remarks
   * The x-axis data.
   */
  xaxis?: DescribeTagsTrendResponseBodyResultObjectXaxis;
  static names(): { [key: string]: string } {
    return {
      series: 'series',
      xaxis: 'xaxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      series: { 'type': 'array', 'itemType': DescribeTagsTrendResponseBodyResultObjectSeries },
      xaxis: DescribeTagsTrendResponseBodyResultObjectXaxis,
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

export class DescribeTagsTrendResponseBody extends $dara.Model {
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
  resultObject?: DescribeTagsTrendResponseBodyResultObject;
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
      resultObject: DescribeTagsTrendResponseBodyResultObject,
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

