// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClientsResponseBody extends $dara.Model {
  /**
   * @example
   * TERMINAL_NOT_FOUND
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * terminal not found
   */
  message?: string;
  /**
   * @example
   * C5DCE54A-B266-522E-A6ED-468AF45F5AAA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

