// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAbnormalyEventsResponseBodyData } from "./ListAbnormalyEventsResponseBodyData";


export class ListAbnormalyEventsResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListAbnormalyEventsResponseBodyData[];
  message?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAbnormalyEventsResponseBodyData },
      message: 'string',
      total: 'number',
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

