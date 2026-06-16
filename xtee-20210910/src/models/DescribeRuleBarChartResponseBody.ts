// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleBarChartResponseBodyResultObjectSeriesData extends $dara.Model {
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 营销事件
   */
  eventName?: string;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 100
   */
  num?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 营销风险识别评分_高风险_拒绝
   */
  ruleName?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'eventName',
      num: 'num',
      ruleName: 'ruleName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      num: 'number',
      ruleName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleBarChartResponseBodyResultObjectSeries extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeRuleBarChartResponseBodyResultObjectSeriesData[];
  /**
   * @remarks
   * The bar chart type.
   * 
   * @example
   * bar
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeRuleBarChartResponseBodyResultObjectSeriesData },
      type: 'string',
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

export class DescribeRuleBarChartResponseBodyResultObjectYaxis extends $dara.Model {
  /**
   * @remarks
   * The y-axis data items.
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

export class DescribeRuleBarChartResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  series?: DescribeRuleBarChartResponseBodyResultObjectSeries[];
  /**
   * @remarks
   * The y-axis results.
   */
  yaxis?: DescribeRuleBarChartResponseBodyResultObjectYaxis;
  static names(): { [key: string]: string } {
    return {
      series: 'series',
      yaxis: 'yaxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      series: { 'type': 'array', 'itemType': DescribeRuleBarChartResponseBodyResultObjectSeries },
      yaxis: DescribeRuleBarChartResponseBodyResultObjectYaxis,
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    if(this.yaxis && typeof (this.yaxis as any).validate === 'function') {
      (this.yaxis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleBarChartResponseBody extends $dara.Model {
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
   * The response object.
   */
  resultObject?: DescribeRuleBarChartResponseBodyResultObject;
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
      resultObject: DescribeRuleBarChartResponseBodyResultObject,
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

