// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardScopeSaveResponseBody extends $dara.Model {
  message?: string;
  /**
   * @example
   * 05F9C201-1B53-5905-94AB-0D7444D8466A
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  resultCode?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041aa317070996148671005d0a0b
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      requestId: 'requestId',
      resultCode: 'resultCode',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      resultCode: 'number',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

