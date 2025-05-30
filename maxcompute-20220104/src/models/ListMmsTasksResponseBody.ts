// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsTasksResponseBodyData } from "./ListMmsTasksResponseBodyData";


export class ListMmsTasksResponseBody extends $dara.Model {
  data?: ListMmsTasksResponseBodyData;
  /**
   * @example
   * 373A5CB2-8570-53BE-A98F-729B11D7A8B0
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
      data: ListMmsTasksResponseBodyData,
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

