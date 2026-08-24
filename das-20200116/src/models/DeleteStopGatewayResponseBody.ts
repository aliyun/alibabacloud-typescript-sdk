// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStopGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code indicating the result of the deletion:
   * 
   * - **0**: Success. The metadata was deleted.
   * 
   * - **-1**: A system error occurred.
   * 
   * - **-2**: The specified database gateway does not exist.
   * 
   * - **-3**: The database gateway is still active (not stopped) and its metadata cannot be deleted.
   * 
   * - **-4**: Failed to delete the metadata.
   * 
   * @example
   * 0
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * > When the request is successful, this parameter returns **Successful**. When the request fails, this parameter returns exception information such as error codes.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FC6C0929-29E1-59FD-8DFE-70D9D41E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful:
   * 
   * - **true**: The operation is successful.
   * 
   * - **false**: The operation failed.
   * 
   * @example
   * true
   */
  success?: string;
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
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

