// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVocabResponseBodyData } from "./ListVocabResponseBodyData";


export class ListVocabResponseBody extends $dara.Model {
  data?: ListVocabResponseBodyData[];
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-*******F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVocabResponseBodyData },
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

