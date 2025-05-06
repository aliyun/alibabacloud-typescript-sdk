// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogContentsResponseBodyListLogContent } from "./ListLogContentsResponseBodyListLogContent";


export class ListLogContentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Log content.
   */
  listLogContent?: ListLogContentsResponseBodyListLogContent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listLogContent: 'listLogContent',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listLogContent: ListLogContentsResponseBodyListLogContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.listLogContent && typeof (this.listLogContent as any).validate === 'function') {
      (this.listLogContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

