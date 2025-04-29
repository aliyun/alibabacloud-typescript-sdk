// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOtaItemDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cheshi
   */
  isvName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 68cdc6b37c87484c98b479b49306ffbb_0
   */
  otaItemId?: string;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      otaItemId: 'ota_item_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      otaItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

