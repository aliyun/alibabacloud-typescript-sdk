// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyInstancePriceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to select high-availability resources for zone-disaster recovery.
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The description of high-availability resources for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haResourceSpecShrink?: string;
  /**
   * @remarks
   * The vSwitch group in the secondary zone for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haVSwitchIdsShrink?: string;
  /**
   * @remarks
   * The instance ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 500043499350689
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * This parameter is required.
   */
  resourceSpecShrink?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - true: Yes.
   * - false: No.
   */
  usePromotionCode?: boolean;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      haResourceSpecShrink: 'HaResourceSpec',
      haVSwitchIdsShrink: 'HaVSwitchIds',
      instanceId: 'InstanceId',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
      usePromotionCode: 'UsePromotionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      haResourceSpecShrink: 'string',
      haVSwitchIdsShrink: 'string',
      instanceId: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceSpecShrink: 'string',
      usePromotionCode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

