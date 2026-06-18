// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChunkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error status code.
   */
  code?: string;
  /**
   * @remarks
   * The business data returned upon a successful request.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned by the operation.
   * 
   * @example
   * "200"
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: Succeeded.
   * - false: Failed.
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
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

