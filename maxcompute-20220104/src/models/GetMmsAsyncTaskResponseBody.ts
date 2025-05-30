// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMmsAsyncTaskResponseBodyData } from "./GetMmsAsyncTaskResponseBodyData";


export class GetMmsAsyncTaskResponseBody extends $dara.Model {
  data?: GetMmsAsyncTaskResponseBodyData;
  /**
   * @example
   * 688003E1-D1B4-5468-957E-2FFB3AC8D79B
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
      data: GetMmsAsyncTaskResponseBodyData,
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

