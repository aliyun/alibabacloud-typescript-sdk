// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunctionResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. If no error occurs, this parameter is left empty.
   * 
   * @example
   * InvalidRequest
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request. Unit: milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Invalid request.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E375703-5B12-5466-8B48-C4D01AE1291A
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request.
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

