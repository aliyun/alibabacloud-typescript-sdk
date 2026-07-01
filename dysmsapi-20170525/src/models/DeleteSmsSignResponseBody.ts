// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * * The value OK indicates that the request was successful.
   * * For information about other return values, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the deleted signature.
   * 
   * @example
   * 阿里云
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

