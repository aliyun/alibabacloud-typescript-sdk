// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAlarmResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the event-triggered task.
   * 
   * @example
   * asg-bp1hvbnmkl10vll5****_83948190-acdd-483f-98f7-b77f4778****
   */
  alarmTaskId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BACACF83-7070-4953-A8FD-D81F89F1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
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

