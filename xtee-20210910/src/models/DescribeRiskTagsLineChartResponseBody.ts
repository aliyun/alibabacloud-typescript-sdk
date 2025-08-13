// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskTagsLineChartResponseBodyResultObjectSeries extends $dara.Model {
  /**
   * @remarks
   * Data
   * 
   * @example
   * 10
   */
  data?: number;
  /**
   * @remarks
   * Name
   * 
   * @example
   * rm0102
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskTagsLineChartResponseBodyResultObjectXaxis extends $dara.Model {
  /**
   * @remarks
   * Data returned by the chart
   */
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
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

export class DescribeRiskTagsLineChartResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Call percentage, represented as a decimal
   */
  percent?: number[];
  /**
   * @remarks
   * Chart data
   */
  series?: DescribeRiskTagsLineChartResponseBodyResultObjectSeries[];
  /**
   * @remarks
   * Total number of records.
   */
  total?: number[];
  /**
   * @remarks
   * X-axis data of the chart
   */
  xaxis?: DescribeRiskTagsLineChartResponseBodyResultObjectXaxis;
  static names(): { [key: string]: string } {
    return {
      percent: 'Percent',
      series: 'Series',
      total: 'Total',
      xaxis: 'Xaxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percent: { 'type': 'array', 'itemType': 'number' },
      series: { 'type': 'array', 'itemType': DescribeRiskTagsLineChartResponseBodyResultObjectSeries },
      total: { 'type': 'array', 'itemType': 'number' },
      xaxis: DescribeRiskTagsLineChartResponseBodyResultObjectXaxis,
    };
  }

  validate() {
    if(Array.isArray(this.percent)) {
      $dara.Model.validateArray(this.percent);
    }
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    if(Array.isArray(this.total)) {
      $dara.Model.validateArray(this.total);
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

export class DescribeRiskTagsLineChartResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. Note: 200 indicates success.
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
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information
   */
  resultObject?: DescribeRiskTagsLineChartResponseBodyResultObject;
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
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeRiskTagsLineChartResponseBodyResultObject,
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

