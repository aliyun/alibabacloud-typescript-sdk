// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** means success. Any other value means failure. Use this field to diagnose failures.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Task ID for this request.
   * 
   * @example
   * 6F5934C7-C223-4F0F-BBF3-5B3594***
   */
  data?: string;
  /**
   * @remarks
   * Error details if the request failed. Returns successful if the request succeeded.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID. A unique identifier for this request. Use it to trace the request.
   * 
   * @example
   * 6F5934C7-C223-4F0F-BBF3-5B3594****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. true means success. false or null means failure.
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
      data: 'string',
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

