// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaLogRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * lvwang_guardrail_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The delivery region.
   * 
   * @example
   * cn-beijing
   */
  deliveryRegion?: string;
  /**
   * @remarks
   * The storage capacity.
   * 
   * @example
   * 1
   */
  storage?: number;
  /**
   * @remarks
   * The time to live.
   * 
   * @example
   * 30
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      deliveryRegion: 'DeliveryRegion',
      storage: 'Storage',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      deliveryRegion: 'string',
      storage: 'number',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

