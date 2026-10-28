// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotPriceItem extends $dara.Model {
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
   * The spot instance discount.
   * 
   * @example
   * 0.1
   */
  spotDiscount?: number;
  /**
   * @remarks
   * The timestamp of the current spot instance price.
   * 
   * @example
   * 2024-01-17T06:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotDiscount: 'SpotDiscount',
      timestamp: 'Timestamp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotDiscount: 'number',
      timestamp: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

