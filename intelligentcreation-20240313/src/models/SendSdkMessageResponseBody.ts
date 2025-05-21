// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSdkMessageResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: string;
  /**
   * @example
   * system-01
   */
  errorCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @remarks
   * true
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
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

