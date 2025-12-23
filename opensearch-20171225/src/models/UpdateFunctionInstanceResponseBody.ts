// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunctionInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
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
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 10
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
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
   * "3A809095-C554-5CF5-8FCE-BE19D4673790"
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request. Valid values:
   * 
   * *       OK: The request was successful.
   * *       FAIL: The request failed.
   * 
   * @example
   * OK
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

