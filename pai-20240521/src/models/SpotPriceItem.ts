// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotPriceItem extends $dara.Model {
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
   * 2024-01-17T06:00:00Z
   */
  timestamp?: string;
  /**
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

