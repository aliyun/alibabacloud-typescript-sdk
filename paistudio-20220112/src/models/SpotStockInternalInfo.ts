// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotStockInternalInfo extends $dara.Model {
  /**
   * @remarks
   * The number of available Spot Instances.
   */
  availableQuantity?: number;
  /**
   * @remarks
   * The ID of the cluster.
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the high-performance network (HPN) zone.
   */
  hpnZone?: string;
  /**
   * @remarks
   * The total number of Spot Instances.
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

