// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversionDataResponseBody extends $dara.Model {
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
   * Status code. Returning OK means the request was successful. For other error codes, please refer to the [Error codes](https://help.aliyun.com/document_detail/180674.html) list.
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

