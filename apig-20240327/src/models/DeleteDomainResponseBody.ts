// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to trace the API call link.
   * 
   * @example
   * A60EE5CA-1294-532A-9775-8D2FD1C6EFBF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
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

