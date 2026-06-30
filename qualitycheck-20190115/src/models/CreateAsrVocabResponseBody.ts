// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAsrVocabResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** means success. Any other value means failure. Use this field to diagnose errors.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Hotword ID
   * 
   * @example
   * 71b1795ac8634bd8bdf4d3878480c7c2
   */
  data?: string;
  /**
   * @remarks
   * Error details if the call fails. Returns **successful** on success.
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
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. true means success. **false** or **null** means failure.
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

