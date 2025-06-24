// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListESAIPInfoResponseBodyContent } from "./ListEsaipinfoResponseBodyContent";


export class ListESAIPInfoResponseBody extends $dara.Model {
  content?: ListESAIPInfoResponseBodyContent[];
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListESAIPInfoResponseBodyContent },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

