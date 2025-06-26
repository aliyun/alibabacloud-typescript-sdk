// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAccountResponseBodyData } from "./DeleteAccountResponseBodyData";


export class DeleteAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteAccountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 21D06907-CEA5-561D-B6B1-198BCCE99ED1
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
      data: DeleteAccountResponseBodyData,
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

