// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsTaskLogsResponseBodyData } from "./ListMmsTaskLogsResponseBodyData";


export class ListMmsTaskLogsResponseBody extends $dara.Model {
  data?: ListMmsTaskLogsResponseBodyData[];
  /**
   * @example
   * A3AE5649-EF90-54BD-86D0-C632FA950988
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
      data: { 'type': 'array', 'itemType': ListMmsTaskLogsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

