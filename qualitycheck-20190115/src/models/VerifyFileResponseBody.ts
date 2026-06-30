// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** indicates success. Other values indicate failure. Callers can determine the failure reason using this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Current detection accuracy: Number of incorrect characters in verified files / Total number of characters in verified files.
   * 
   * @example
   * 0.9485294
   */
  data?: number;
  /**
   * @remarks
   * Error details when an error occurs. Successful when successful.
   * 
   * @example
   * s
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Callers can determine if the request was successful using this field: true indicates success; false/null indicates failure.
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
      data: 'number',
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

