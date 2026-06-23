// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterInspectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of disabled inspection items.
   */
  disabledCheckItems?: string[];
  /**
   * @remarks
   * Specifies whether to enable inspection.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The inspection schedule defined by using the RFC 5545 Recurrence Rule syntax. You must specify BYHOUR and BYMINUTE. Only FREQ=DAILY is supported. COUNT and UNTIL are not supported.
   * 
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

