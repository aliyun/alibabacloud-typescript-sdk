// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestCloudDisksStatus extends $dara.Model {
  /**
   * @remarks
   * The available capacity. Unit: bytes.
   * 
   * @example
   * 31841058816
   */
  available?: number;
  /**
   * @remarks
   * The capacity. Unit: bytes.
   * 
   * @example
   * 32212254720
   */
  capacity?: number;
  /**
   * @remarks
   * The used capacity. Unit: bytes.
   * 
   * @example
   * 371195904
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      capacity: 'Capacity',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'number',
      capacity: 'number',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

