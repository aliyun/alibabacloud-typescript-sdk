// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVccRequest extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the Lingjun connection instance. Unit: Mbit/s. Valid values: 1000 to 400000
   * 
   * @example
   * 1000
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the order placed on the instance.
   * 
   * @example
   * 20006627643
   */
  orderId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The name of the Lingjun connection instance.
   * 
   * @example
   * vcc-heyuan-backup
   */
  vccName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      orderId: 'OrderId',
      regionId: 'RegionId',
      vccId: 'VccId',
      vccName: 'VccName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      orderId: 'string',
      regionId: 'string',
      vccId: 'string',
      vccName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

