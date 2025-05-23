// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterInspectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of disabled inspection items.
   */
  disabledCheckItems?: string[];
  /**
   * @remarks
   * Specifies whether to enable cluster inspection.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The inspection period defined using RFC5545 Recurrence Rule. You must specify BYHOUR and BYMINUTE. Only FREQ=DAILY is supported. COUNT or UNTIL is not supported.
   * 
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

