// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetail } from "./GetIdeeventDetailResponseBodyEventDetail";


export class GetIDEEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data snapshot that is generated when an extension point event is triggered.
   * 
   * The fields contained in data snapshots vary based on the types of the triggered extension point events. For more information, see the description of the fields.
   */
  eventDetail?: GetIDEEventDetailResponseBodyEventDetail;
  /**
   * @remarks
   * The request ID.
   * 
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

