// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  ha?: boolean;
  haResourceSpecShrink?: string;
  haVSwitchIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  promotionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
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

