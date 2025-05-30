// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMmsTaskResponseBodyData } from "./GetMmsTaskResponseBodyData";


export class GetMmsTaskResponseBody extends $dara.Model {
  data?: GetMmsTaskResponseBodyData;
  /**
   * @example
   * 73207140-0FD5-588A-B11A-3CE093924196
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsTaskResponseBodyData,
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

