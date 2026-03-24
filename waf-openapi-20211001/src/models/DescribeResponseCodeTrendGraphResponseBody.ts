// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResponseCodeTrendGraphResponseBodyResponseCodes extends $dara.Model {
  /**
   * @remarks
   * The number of 302 response codes.
   * 
   * @example
   * 0
   */
  code302Pv?: number;
  /**
   * @remarks
   * The number of 405 response codes.
   * 
   * @example
   * 121645464
   */
  code405Pv?: number;
  /**
   * @remarks
   * The number of 444 response codes.
   * 
   * @example
   * 0
   */
  code444Pv?: number;
  /**
   * @remarks
   * The number of 499 response codes.
   * 
   * @example
   * 0
   */
  code499Pv?: number;
  /**
   * @remarks
   * The number of 5xx response codes.
   * 
   * @example
   * 2932
   */
  code5xxPv?: number;
  /**
   * @remarks
   * The serial number of the time interval, sorted in chronological order.
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
   * The request ID.
   * 
   * @example
   * 7D46493E-84DD-58CE-80A7-8643F2B09ECC
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of response codes.
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

