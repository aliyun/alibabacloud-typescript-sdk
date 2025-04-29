// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyData } from "./ListInstancesResponseBodyData";


export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListInstancesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CCBB1225-C392-480E-8C7F-D09AB2CD2***
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
      data: ListInstancesResponseBodyData,
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

