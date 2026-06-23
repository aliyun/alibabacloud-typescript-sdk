// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadPageItem } from "./ReadPageItem";


export class ReadPageBasicResponseBody extends $dara.Model {
  /**
   * @remarks
   * Parsing result of the target URL
   */
  data?: ReadPageItem;
  /**
   * @remarks
   * Error code
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message
   */
  errorMessage?: string;
  /**
   * @remarks
   * Request ID. Provide this information when troubleshooting issues.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ReadPageItem,
      errorCode: 'string',
      errorMessage: 'string',
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

