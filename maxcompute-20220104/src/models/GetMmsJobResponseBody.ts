// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMmsJobResponseBodyData } from "./GetMmsJobResponseBodyData";


export class GetMmsJobResponseBody extends $dara.Model {
  data?: GetMmsJobResponseBodyData;
  /**
   * @example
   * D9F872FD-5DDE-30A6-8C8A-1B8C6A81059F
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
      data: GetMmsJobResponseBodyData,
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

