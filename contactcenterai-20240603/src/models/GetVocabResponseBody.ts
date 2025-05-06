// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVocabResponseBodyData } from "./GetVocabResponseBodyData";


export class GetVocabResponseBody extends $dara.Model {
  data?: GetVocabResponseBodyData;
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
      data: GetVocabResponseBodyData,
      requestId: 'string',
      success: 'string',
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

