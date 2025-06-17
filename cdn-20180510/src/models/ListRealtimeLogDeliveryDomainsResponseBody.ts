// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRealtimeLogDeliveryDomainsResponseBodyContent } from "./ListRealtimeLogDeliveryDomainsResponseBodyContent";


export class ListRealtimeLogDeliveryDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the accelerated domain names.
   */
  content?: ListRealtimeLogDeliveryDomainsResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 95D5B69F-8AEC-419B-8F3A-612B35032B0D
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
      content: ListRealtimeLogDeliveryDomainsResponseBodyContent,
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

