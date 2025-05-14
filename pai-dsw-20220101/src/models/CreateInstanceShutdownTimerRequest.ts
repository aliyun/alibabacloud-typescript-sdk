// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceShutdownTimerRequest extends $dara.Model {
  /**
   * @remarks
   * The scheduled stop time.
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  dueTime?: string;
  /**
   * @remarks
   * The time duration before the instance is stopped. Unit: milliseconds.
   * 
   * @example
   * 3600000
   */
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      remainingTimeInMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

