// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNamespacesResponseBodyData } from "./ListNamespacesResponseBodyData";


export class ListNamespacesResponseBody extends $dara.Model {
  data?: ListNamespacesResponseBodyData;
  /**
   * @example
   * D1F1A6F3-7E03-5EAD-B3F1-123456789ABC
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
      data: ListNamespacesResponseBodyData,
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

