// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndPenetrationTestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > 200: Success. Other values (such as 500 and 400): Error codes.
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
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B48613E-86DE-5411-BDBE-429C80B45F3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - **true**: The call is successful.                                
   * - **false**: The call failed.
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

