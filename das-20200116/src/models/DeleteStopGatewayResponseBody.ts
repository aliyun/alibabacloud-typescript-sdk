// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStopGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result of the DeleteStopGateway operation. Valid values:
   * 
   * *   **0**: The metadata of the DBGateway is deleted.
   * *   **-1**: A system error occurs.
   * *   **-2**: The DBGateway does not exist.
   * *   **-3**: The DBGateway is not stopped and the metadata cannot be deleted.
   * *   **-4**: The metadata of the DBGateway fails to be deleted.
   * 
   * @example
   * 0
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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

