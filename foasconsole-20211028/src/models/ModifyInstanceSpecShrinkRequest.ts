// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the workspace has zone-disaster recovery resources.
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The zone-disaster recovery resource specifications.
   */
  haResourceSpecShrink?: string;
  /**
   * @remarks
   * The vSwitch group in the secondary zone for zone-disaster recovery.
   */
  haVSwitchIdsShrink?: string;
  /**
   * @remarks
   * The order instance ID.
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

