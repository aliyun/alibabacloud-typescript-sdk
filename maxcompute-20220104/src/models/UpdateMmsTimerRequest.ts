// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsTimerRequest extends $dara.Model {
  /**
   * @example
   * Daily
   */
  scheduleType?: string;
  stopped?: boolean;
  /**
   * @example
   * 2025-09-20
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleType: 'scheduleType',
      stopped: 'stopped',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleType: 'string',
      stopped: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

