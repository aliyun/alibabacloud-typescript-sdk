// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduleExecuteTimeRequest extends $dara.Model {
  /**
   * @example
   * eb7efbc90864a0***
   */
  eventId?: string;
  /**
   * @example
   * 2026-01-30T08:45:00Z
   */
  scheduleExecuteTime?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'eventId',
      scheduleExecuteTime: 'scheduleExecuteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      scheduleExecuteTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

