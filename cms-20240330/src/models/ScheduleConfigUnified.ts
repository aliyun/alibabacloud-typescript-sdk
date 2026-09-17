// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduleConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The scheduling interval in seconds. This parameter is used when type is set to FIXED.
   * 
   * @example
   * 30
   */
  intervalSecs?: number;
  /**
   * @remarks
   * The type of the scheduling configuration. FIXED indicates fixed-interval scheduling, which executes periodically based on the interval specified by intervalSecs.
   * 
   * This parameter is required.
   * 
   * @example
   * FIXED
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      intervalSecs: 'intervalSecs',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalSecs: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

