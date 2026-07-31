// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLakeStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status or POP error code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The resource usage details of the cluster.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code returned. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * If the creation operation is implemented asynchronously, a specific JobId is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
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

