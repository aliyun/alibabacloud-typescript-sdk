// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitReviewInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. 200 indicates success.
   * 
   * > If the value is different, it indicates failure. Callers can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returns the quality inspection score after review upon successful saving.
   * 
   * @example
   * 95
   */
  data?: string;
  /**
   * @remarks
   * Indicates error details on failure, or **successful** on success.
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
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * Callers can use this field to determine if the request was successful:
   * 
   * - true indicates success
   * 
   * - false/null indicates failure
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

