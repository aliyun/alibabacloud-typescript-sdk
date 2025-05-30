// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsJobsResponseBodyData } from "./ListMmsJobsResponseBodyData";


export class ListMmsJobsResponseBody extends $dara.Model {
  data?: ListMmsJobsResponseBodyData;
  /**
   * @example
   * 1112E7C7-C65F-57A2-A7C7-3B178AA257B6
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
      data: ListMmsJobsResponseBodyData,
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

