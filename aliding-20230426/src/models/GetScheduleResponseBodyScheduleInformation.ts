// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetScheduleResponseBodyScheduleInformationScheduleItems } from "./GetScheduleResponseBodyScheduleInformationScheduleItems";


export class GetScheduleResponseBodyScheduleInformation extends $dara.Model {
  /**
   * @example
   * 无权限
   */
  error?: string;
  scheduleItems?: GetScheduleResponseBodyScheduleInformationScheduleItems[];
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      scheduleItems: 'ScheduleItems',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      scheduleItems: { 'type': 'array', 'itemType': GetScheduleResponseBodyScheduleInformationScheduleItems },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scheduleItems)) {
      $dara.Model.validateArray(this.scheduleItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

