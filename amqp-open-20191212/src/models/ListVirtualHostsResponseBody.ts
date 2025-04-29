// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVirtualHostsResponseBodyData } from "./ListVirtualHostsResponseBodyData";


export class ListVirtualHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListVirtualHostsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF4DB019-DA4A-4CE3-B220-223BBC93F***
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
      data: ListVirtualHostsResponseBodyData,
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

