// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitComplaintResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The current quality check score.
   * 
   * @example
   * 90
   */
  data?: string;
  /**
   * @remarks
   * The response message. If the request is successful, "successful" is returned. If the request fails, an error message is returned.
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
   * Indicates whether the request was successful. A value of `true` indicates success, and a value of `false` or `null` indicates failure.
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

