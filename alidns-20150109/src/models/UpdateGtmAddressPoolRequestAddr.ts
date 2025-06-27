// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmAddressPoolRequestAddr extends $dara.Model {
  /**
   * @remarks
   * The weight of the address pool that you want to modify.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The mode of the address pool that you want to modify.
   * 
   * *   **SMART**: Intelligent return
   * *   **ONLINE**: Always online
   * *   **OFFLINE**: Always offline
   * 
   * @example
   * SMART
   */
  mode?: string;
  /**
   * @remarks
   * The addresses in the address pool.
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

