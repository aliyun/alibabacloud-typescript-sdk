// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWarningConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates that the request was successful. Other values indicate that the request failed. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * If the request fails, this field provides the error details. If the request is successful, the value is \\`successful\\`.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of \\`true\\` indicates success. A value of \\`false\\` or \\`null\\` indicates failure.
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

