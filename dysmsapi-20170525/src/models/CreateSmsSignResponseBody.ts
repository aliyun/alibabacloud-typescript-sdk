// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request status code.
   * 
   * - OK indicates a successful request.
   * - For other error codes, refer to the [Error Code List](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Work order number.
   * 
   * This parameter is used by auditors when querying the audit. You will need to provide this work order number if you require expedited review.
   * 
   * @example
   * 2004415****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting and issue localization.
   * 
   * @example
   * CCA2BCFF-2BA7-427C-90EE-AC6994748607
   */
  requestId?: string;
  /**
   * @remarks
   * Signature name.
   * 
   * @example
   * Aliyun
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
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

