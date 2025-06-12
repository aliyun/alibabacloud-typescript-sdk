// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Message information
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

