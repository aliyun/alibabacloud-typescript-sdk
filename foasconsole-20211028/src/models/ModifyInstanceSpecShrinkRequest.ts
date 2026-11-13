// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the workspace has cross-zone high-availability resources.
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The description of the cross-zone high-availability resources.
   */
  haResourceSpecShrink?: string;
  /**
   * @remarks
   * The vSwitch group in the secondary zone for cross-zone high availability.
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

