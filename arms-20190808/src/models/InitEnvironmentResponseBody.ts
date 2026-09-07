// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitEnvironmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The operation result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D6C358A-A58B-4F4B-94CE-F5AAF023****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

