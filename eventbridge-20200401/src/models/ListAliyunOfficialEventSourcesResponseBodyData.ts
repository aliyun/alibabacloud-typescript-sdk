// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList } from "./ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList";


export class ListAliyunOfficialEventSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event sources.
   */
  eventSourceList?: ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList[];
  static names(): { [key: string]: string } {
    return {
      eventSourceList: 'EventSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceList: { 'type': 'array', 'itemType': ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList },
    };
  }

  validate() {
    if(Array.isArray(this.eventSourceList)) {
      $dara.Model.validateArray(this.eventSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

