// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFunctionInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is displayed only when an exception occurs.
   * 
   * @example
   * iot.common.RamActionPermissionDeny
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
   * 12
   */
  latency?: number;
  /**
   * @remarks
   * The error message. This parameter is displayed only when an exception occurs.
   * 
   * @example
   * Managed id is empty
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 786CC01F-0F1D-5FB5-8BFF-B0F3DB289772
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

