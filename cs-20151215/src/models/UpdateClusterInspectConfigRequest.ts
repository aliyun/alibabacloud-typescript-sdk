// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterInspectConfigRequest extends $dara.Model {
  disabledCheckItems?: string[];
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * FREQ=DAILY;BYHOUR=10;BYMINUTE=15
   */
  scheduleTime?: string;
  static names(): { [key: string]: string } {
    return {
      disabledCheckItems: 'disabledCheckItems',
      enabled: 'enabled',
      scheduleTime: 'scheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabledCheckItems: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
      scheduleTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disabledCheckItems)) {
      $dara.Model.validateArray(this.disabledCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

