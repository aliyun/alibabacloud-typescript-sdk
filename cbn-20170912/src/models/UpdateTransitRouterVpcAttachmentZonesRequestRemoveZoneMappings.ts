// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterVpcAttachmentZonesRequestRemoveZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch that you want to remove from the VPC connection.
   * 
   * You can remove at most 10 vSwitches from a VPC in each call.
   * 
   * @example
   * vsw-wz9f5izl6wshndmta****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone where the vSwitch that you want to remove from the VPC connection is deployed.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
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

