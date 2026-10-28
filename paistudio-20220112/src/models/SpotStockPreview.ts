// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotStockPreview extends $dara.Model {
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
   * c1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6
   */
  clusterId?: string;
  /**
   * @remarks
   * The spot instance type.
   * 
   * @example
   * ml.gu8xf.8xlarge-gu108
   */
  instanceType?: string;
  /**
   * @remarks
   * The current spot instance discount.
   * 
   * @example
   * 0.1
   */
  spotDiscount?: number;
  /**
   * @remarks
   * The spot instance inventory status.
   * 
   * @example
   * WithStock
   */
  stockStatus?: string;
  static names(): { [key: string]: string } {
    return {
      availableQuantity: 'AvailableQuantity',
      clusterId: 'ClusterId',
      instanceType: 'InstanceType',
      spotDiscount: 'SpotDiscount',
      stockStatus: 'StockStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableQuantity: 'number',
      clusterId: 'string',
      instanceType: 'string',
      spotDiscount: 'number',
      stockStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

