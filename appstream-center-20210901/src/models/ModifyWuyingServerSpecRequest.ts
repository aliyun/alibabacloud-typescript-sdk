// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWuyingServerSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the workstation after the specification change is complete.
   * 
   * - `stopped`: Shuts down the workstation after the specification change is complete.
   * 
   * This option is applicable to Enterprise Edition or container workstations that support this setting.
   * 
   * @example
   * stopped
   */
  afterStatus?: string;
  /**
   * @remarks
   * The product type of the target workstation, which must be consistent with the actual type of the resource. For Enterprise Edition workstations, use `WuyingServer`. If this parameter is omitted, `WuyingServer` is used by default.
   * 
   * @example
   * WuyingServer
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the promotion, which is used to identify a promotional event or coupon.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The ID of the target workstation specification. This parameter is required when you call the operation. Select a specification that is available in the region where the workstation is located and compatible with existing resources.
   * 
   * **Limits:** Conversion between CPU specifications and GPU specifications is not supported.
   * 
   * @example
   * eds.proworkstation_flagship_elite_ne.96c384g.192g4x
   */
  serverInstanceType?: string;
  /**
   * @remarks
   * The ID of the workstation whose specifications you want to modify. This parameter is required.
   * 
   * @example
   * ws-0bw2f11****dial
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      afterStatus: 'AfterStatus',
      productType: 'ProductType',
      promotionId: 'PromotionId',
      serverInstanceType: 'ServerInstanceType',
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterStatus: 'string',
      productType: 'string',
      promotionId: 'string',
      serverInstanceType: 'string',
      wuyingServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

