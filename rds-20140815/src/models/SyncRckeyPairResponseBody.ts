// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SyncRCKeyPairResponseBodyData } from "./SyncRckeyPairResponseBodyData";


export class SyncRCKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the result.
   */
  data?: SyncRCKeyPairResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60478CCB-95EA-5D06-8A51-CAC83A316E9A
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
      data: SyncRCKeyPairResponseBodyData,
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

