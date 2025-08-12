// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertLogHistogramResponseBodyAlertLogHistogramList extends $dara.Model {
  /**
   * @remarks
   * The number of alert logs.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The start timestamp of the queried alert logs.
   * 
   * Unit: seconds.
   * 
   * @example
   * 1610074791
   */
  from?: number;
  /**
   * @remarks
   * The end timestamp of the queried alert logs.
   * 
   * Unit: seconds.
   * 
   * @example
   * 1610074800
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of alert logs that were generated during each interval of a time period.
   */
  alertLogHistogramList?: DescribeAlertLogHistogramResponseBodyAlertLogHistogramList[];
  /**
   * @remarks
   * The response code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1C4A3709-BF52-42EE-87B5-7435F0929585
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertLogHistogramList: 'AlertLogHistogramList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogHistogramList: { 'type': 'array', 'itemType': DescribeAlertLogHistogramResponseBodyAlertLogHistogramList },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.alertLogHistogramList)) {
      $dara.Model.validateArray(this.alertLogHistogramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

