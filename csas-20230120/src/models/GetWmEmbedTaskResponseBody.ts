// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWmEmbedTaskResponseBodyData } from "./GetWmEmbedTaskResponseBodyData";


export class GetWmEmbedTaskResponseBody extends $dara.Model {
  data?: GetWmEmbedTaskResponseBodyData;
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
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
      data: GetWmEmbedTaskResponseBodyData,
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

