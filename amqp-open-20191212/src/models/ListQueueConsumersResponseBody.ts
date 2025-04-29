// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQueueConsumersResponseBodyData } from "./ListQueueConsumersResponseBodyData";


export class ListQueueConsumersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQueueConsumersResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4409B7D5-E4EC-4EB5-804A-385DCDFCD***
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
      data: ListQueueConsumersResponseBodyData,
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

