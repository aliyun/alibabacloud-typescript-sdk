// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCouponTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The operation result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The result message.
   * 
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A747A00F-E096-5244-88B3-3E474BAE3AE4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

