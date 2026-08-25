// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillInstanceAllSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an exception message is returned, such as an error code.
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
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

