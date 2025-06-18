// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotStockPreview extends $dara.Model {
  /**
   * @example
   * ml.gu8xf.8xlarge-gu108
   */
  instanceType?: string;
  /**
   * @example
   * 0.1
   */
  spotDiscount?: number;
  /**
   * @example
   * WithStock
   */
  stockStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotDiscount: 'SpotDiscount',
      stockStatus: 'StockStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

