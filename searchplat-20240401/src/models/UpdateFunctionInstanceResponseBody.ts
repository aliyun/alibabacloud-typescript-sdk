// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunctionInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * not found
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
   * The latency.
   * 
   * @example
   * 34.946
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "xx not found"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5950143C-B8F0-5758-A08A-66F302FD587F
   */
  requestId?: string;
  /**
   * @remarks
   * The request status.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpCode: 'httpCode',
      latency: 'latency',
      message: 'message',
      requestId: 'requestId',
      status: 'status',
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

