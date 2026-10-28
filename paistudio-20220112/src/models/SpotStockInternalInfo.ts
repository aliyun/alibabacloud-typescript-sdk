// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotStockInternalInfo extends $dara.Model {
  /**
   * @remarks
   * The available quantity.
   * 
   * @example
   * 100
   */
  availableQuantity?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster1
   */
  clusterId?: string;
  /**
   * @remarks
   * The high-performance network zone.
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The total quantity.
   * 
   * @example
   * 1000
   */
  totalQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      availableQuantity: 'availableQuantity',
      clusterId: 'clusterId',
      hpnZone: 'hpnZone',
      totalQuantity: 'totalQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableQuantity: 'number',
      clusterId: 'string',
      hpnZone: 'string',
      totalQuantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

