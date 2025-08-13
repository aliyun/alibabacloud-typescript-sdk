// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDecisionResultTrendResponseBodyResultObjectSeriesData extends $dara.Model {
  /**
   * @remarks
   * Number
   * 
   * @example
   * 10
   */
  num?: number;
  /**
   * @remarks
   * ratio
   * 
   * @example
   * 5.56%
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

export class DescribeDecisionResultTrendResponseBodyResultObjectSeries extends $dara.Model {
  /**
   * @remarks
   * Returned data object
   */
  data?: DescribeDecisionResultTrendResponseBodyResultObjectSeriesData[];
  /**
   * @remarks
   * Name.
   * 
   * @example
   * IpTag_FFF
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
      data: { 'type': 'array', 'itemType': DescribeDecisionResultTrendResponseBodyResultObjectSeriesData },
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

export class DescribeDecisionResultTrendResponseBodyResultObjectXaxis extends $dara.Model {
  /**
   * @remarks
   * X-axis data structure.
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

export class DescribeDecisionResultTrendResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Chart data
   */
  series?: DescribeDecisionResultTrendResponseBodyResultObjectSeries[];
  /**
   * @remarks
   * X-axis data
   */
  xaxis?: DescribeDecisionResultTrendResponseBodyResultObjectXaxis;
  static names(): { [key: string]: string } {
    return {
      series: 'series',
      xaxis: 'xaxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      series: { 'type': 'array', 'itemType': DescribeDecisionResultTrendResponseBodyResultObjectSeries },
      xaxis: DescribeDecisionResultTrendResponseBodyResultObjectXaxis,
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

export class DescribeDecisionResultTrendResponseBody extends $dara.Model {
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
   * Request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeDecisionResultTrendResponseBodyResultObject;
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
      resultObject: DescribeDecisionResultTrendResponseBodyResultObject,
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

