// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddKeywordsToLibResponseBodyData } from "./AddKeywordsToLibResponseBodyData";


export class AddKeywordsToLibResponseBody extends $dara.Model {
  data?: AddKeywordsToLibResponseBodyData;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddKeywordsToLibResponseBodyData,
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

