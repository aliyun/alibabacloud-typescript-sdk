// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFunctionInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is empty if the request is successful.
   * 
   * @example
   * "Instance.NotExist"
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request latency, in milliseconds.
   * 
   * @example
   * 10
   */
  latency?: number;
  /**
   * @remarks
   * The error message. This parameter is empty if the request is successful.
   * 
   * @example
   * "instance not exist."
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * "1081EB05-473C-5BF4-95BE-6D7CAD5E2213"
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request.
   * 
   * - OK: The request is successful.
   * 
   * - FAIL: The request fails.
   * 
   * @example
   * "OK"
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

