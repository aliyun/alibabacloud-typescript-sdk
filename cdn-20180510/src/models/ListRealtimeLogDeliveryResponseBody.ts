// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRealtimeLogDeliveryResponseBodyContent } from "./ListRealtimeLogDeliveryResponseBodyContent";


export class ListRealtimeLogDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The logging information.
   */
  content?: ListRealtimeLogDeliveryResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30559C03-86C9-4EEC-B840-0DC5F5A2189B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListRealtimeLogDeliveryResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

