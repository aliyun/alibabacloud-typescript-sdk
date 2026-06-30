// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWarningConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. **200** indicates success. Other values indicate failure. The caller can determine the cause of failure based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates error details on failure, or "successful" on success.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. The caller can determine if the request succeeded based on this field: true for success; false/null for failure.
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

