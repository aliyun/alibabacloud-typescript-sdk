// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FraudResultCallBackResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * - **true**: Call succeeded.
   * - **false**: Call failed.
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

