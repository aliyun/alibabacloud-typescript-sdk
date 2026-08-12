// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSecurityCheckServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * - **200**: Succeeded.
   * - **Others (400, 500)**: Failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEE90F8C-EDC2-5394-953B-D07A121612B5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

