// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDisableJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * A message that provides more information about the response.
   * 
   * @example
   * disable failed jobs=[99341]
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful. Valid values:
   * 
   * - **true**: The operation was successful.
   * 
   * - **false**: The operation failed.
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

