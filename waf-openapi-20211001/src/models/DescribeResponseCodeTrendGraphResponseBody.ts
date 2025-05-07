// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResponseCodeTrendGraphResponseBodyResponseCodes } from "./DescribeResponseCodeTrendGraphResponseBodyResponseCodes";


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

