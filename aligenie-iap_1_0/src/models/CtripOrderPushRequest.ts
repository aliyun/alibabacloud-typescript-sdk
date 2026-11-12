// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CtripOrderPushRequest extends $dara.Model {
  journeyId?: string;
  /**
   * @example
   * "scheduleItem"
   */
  scheduleItem?: string;
  /**
   * @example
   * "123456789"
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      journeyId: 'JourneyId',
      scheduleItem: 'ScheduleItem',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyId: 'string',
      scheduleItem: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

