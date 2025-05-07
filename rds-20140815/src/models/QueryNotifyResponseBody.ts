// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryNotifyResponseBodyData } from "./QueryNotifyResponseBodyData";


export class QueryNotifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: QueryNotifyResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94CB8D93-017A-5AE7-A118-6E0F89D93C0A
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
      data: QueryNotifyResponseBodyData,
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

