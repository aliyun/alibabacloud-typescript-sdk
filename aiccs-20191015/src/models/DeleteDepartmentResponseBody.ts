// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDepartmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. Valid values:
   * - **true**: Succeeded
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * seccessful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98B032F5-6473-4EAC-8BA8-C28993513A1F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API was invoked successfully. Valid values:
   * - **true**: Succeeded.
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
      data: 'boolean',
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

