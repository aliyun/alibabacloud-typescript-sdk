// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmAddressPoolRequestAddr extends $dara.Model {
  /**
   * @remarks
   * The weight of the address pool.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The mode of the address pool. Valid values:
   * 
   * *   **SMART**: smart return
   * *   **ONLINE**: always online
   * *   **OFFLINE**: always offline
   * 
   * @example
   * SMART
   */
  mode?: string;
  /**
   * @remarks
   * The address in the address pool.
   * 
   * @example
   * 1.1.1.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      mode: 'string',
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

