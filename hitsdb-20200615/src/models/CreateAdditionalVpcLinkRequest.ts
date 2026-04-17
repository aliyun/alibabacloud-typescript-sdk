// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdditionalVpcLinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  additionalVpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  additionalVswitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  regionId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVpcId: 'AdditionalVpcId',
      additionalVswitchId: 'AdditionalVswitchId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVpcId: 'string',
      additionalVswitchId: 'string',
      instanceId: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

