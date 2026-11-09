// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code of the API operation. A value of 200 indicates success. Other values indicate error codes. For more information, see Error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The result message of the API call.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. A value of true indicates success, and a value of false indicates failure.
   * 
   * @example
   * True
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
      code: 'number',
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

