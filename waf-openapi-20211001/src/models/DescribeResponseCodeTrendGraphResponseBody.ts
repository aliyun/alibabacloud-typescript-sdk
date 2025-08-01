// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResponseCodeTrendGraphResponseBodyResponseCodes extends $dara.Model {
  /**
   * @remarks
   * The number of 302 error codes that are returned.
   * 
   * @example
   * 0
   */
  code302Pv?: number;
  /**
   * @remarks
   * The number of 405 error codes that are returned.
   * 
   * @example
   * 121645464
   */
  code405Pv?: number;
  /**
   * @remarks
   * The number of 444 error codes that are returned.
   * 
   * @example
   * 0
   */
  code444Pv?: number;
  /**
   * @remarks
   * The number of 499 error codes that are returned.
   * 
   * @example
   * 0
   */
  code499Pv?: number;
  /**
   * @remarks
   * The number of 5xx error codes that are returned.
   * 
   * @example
   * 2932
   */
  code5xxPv?: number;
  /**
   * @remarks
   * The serial number of the time interval. The serial numbers are arranged in chronological order.
   * 
   * @example
   * 10
   */
  index?: number;
  static names(): { [key: string]: string } {
    return {
      code302Pv: '302Pv',
      code405Pv: '405Pv',
      code444Pv: '444Pv',
      code499Pv: '499Pv',
      code5xxPv: '5xxPv',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code302Pv: 'number',
      code405Pv: 'number',
      code444Pv: 'number',
      code499Pv: 'number',
      code5xxPv: 'number',
      index: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResponseCodeTrendGraphResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D46493E-84DD-58CE-80A7-8643****9ECC
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the statistics of the error codes.
   */
  responseCodes?: DescribeResponseCodeTrendGraphResponseBodyResponseCodes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseCodes: 'ResponseCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseCodes: { 'type': 'array', 'itemType': DescribeResponseCodeTrendGraphResponseBodyResponseCodes },
    };
  }

  validate() {
    if(Array.isArray(this.responseCodes)) {
      $dara.Model.validateArray(this.responseCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

