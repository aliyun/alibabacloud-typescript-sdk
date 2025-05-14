// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryConferenceInfoResponseBodyConfInfo } from "./QueryConferenceInfoResponseBodyConfInfo";


export class QueryConferenceInfoResponseBody extends $dara.Model {
  confInfo?: QueryConferenceInfoResponseBodyConfInfo;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 4248DCC9-785F-5A14-8BE0-830FD52E1261
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      confInfo: 'confInfo',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confInfo: QueryConferenceInfoResponseBodyConfInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.confInfo && typeof (this.confInfo as any).validate === 'function') {
      (this.confInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

