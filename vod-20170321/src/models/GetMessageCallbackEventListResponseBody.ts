// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageCallbackEventListResponseBody extends $dara.Model {
  eventList?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

