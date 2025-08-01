// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmsConversionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D****
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. If OK is returned, the request is successful. For more information, see [Error codes](https://help.aliyun.com/document_detail/180674.html).
   * 
   * @example
   * OK
   */
  responseCode?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  responseDescription?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

