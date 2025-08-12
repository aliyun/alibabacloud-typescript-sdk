// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The request has failed due to a temporary failure of the server.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05B36C2C-5F6E-48D5-8B41-CE36DD7EE8E0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

