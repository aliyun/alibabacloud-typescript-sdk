// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BrowserSessionListOut } from "./BrowserSessionListOut";


export class ListBrowserSessionResult extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of SUCCESS indicates the request succeeded. On failure, an error code is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The operation\\"s payload.
   * 
   * @example
   * {}
   */
  data?: BrowserSessionListOut;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BrowserSessionListOut,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

