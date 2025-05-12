// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAbnormalEventsCountResponseBodyData } from "./GetAbnormalEventsCountResponseBodyData";


export class GetAbnormalEventsCountResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetAbnormalEventsCountResponseBodyData[];
  /**
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAbnormalEventsCountResponseBodyData },
      message: 'string',
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

