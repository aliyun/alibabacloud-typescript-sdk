// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQueueUpStreamBindingsResponseBodyData } from "./ListQueueUpStreamBindingsResponseBodyData";


export class ListQueueUpStreamBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQueueUpStreamBindingsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8BFB1C9D-08A2-4859-A47C-403C9EFA2***
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
      data: ListQueueUpStreamBindingsResponseBodyData,
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

