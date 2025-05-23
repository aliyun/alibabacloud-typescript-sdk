// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetail } from "./GetIdeeventDetailResponseBodyEventDetail";


export class GetIDEEventDetailResponseBody extends $dara.Model {
  eventDetail?: GetIDEEventDetailResponseBodyEventDetail;
  /**
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDetail: 'EventDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDetail: GetIDEEventDetailResponseBodyEventDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.eventDetail && typeof (this.eventDetail as any).validate === 'function') {
      (this.eventDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

