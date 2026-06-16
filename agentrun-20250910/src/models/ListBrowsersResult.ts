// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBrowsersOutput } from "./ListBrowsersOutput";


export class ListBrowsersResult extends $dara.Model {
  /**
   * @remarks
   * The request status. A value of SUCCESS indicates success. On failure, this field contains an error type, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The detailed browser list.
   * 
   * @example
   * {}
   */
  data?: ListBrowsersOutput;
  /**
   * @remarks
   * A unique request identifier for issue tracking.
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
      data: ListBrowsersOutput,
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

