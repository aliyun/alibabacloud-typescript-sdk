// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterInspectConfigRequest extends $dara.Model {
  disabledCheckItems?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FREQ=DAILY;BYHOUR=10;BYMINUTE=15
   */
  recurrence?: string;
  static names(): { [key: string]: string } {
    return {
      disabledCheckItems: 'disabledCheckItems',
      enabled: 'enabled',
      recurrence: 'recurrence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabledCheckItems: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
      recurrence: 'string',
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

