// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVirtualNumberRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value 200 indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The numbers that failed to be associated.
   * 
   * > If all numbers are associated, no value is returned for this parameter.
   * 
   * @example
   * 1321111****
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

