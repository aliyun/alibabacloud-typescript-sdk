// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityCheckDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. A value of 200 indicates success. Any other value indicates failure, and the caller can determine the cause of failure based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * When an error occurs, this field provides error details; when the operation succeeds, it returns "successful".
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. The caller can use this field to determine whether the request was successful: true indicates success; false or null indicates failure.
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

