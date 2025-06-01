// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIdpConfigsResponseBodyData } from "./ListIdpConfigsResponseBodyData";


export class ListIdpConfigsResponseBody extends $dara.Model {
  data?: ListIdpConfigsResponseBodyData;
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
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
      data: ListIdpConfigsResponseBodyData,
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

