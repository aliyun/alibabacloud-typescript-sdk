// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQueuesResponseBodyData } from "./ListQueuesResponseBodyData";


export class ListQueuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQueuesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE811989-9F02-42CE-97A6-2239CB5C2***
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
      data: ListQueuesResponseBodyData,
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

