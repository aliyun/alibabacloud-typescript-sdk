// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadPageItem } from "./ReadPageItem";


export class ReadPageScrapeResponseBody extends $dara.Model {
  data?: ReadPageItem;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @example
   * 7cd43c86-731a-4d4c-8385-d070cfc509a4
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

