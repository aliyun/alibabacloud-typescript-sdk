// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The unique Request ID.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the operation succeeded. Valid values:
   * 
   * - **true**: The operation succeeded.
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

