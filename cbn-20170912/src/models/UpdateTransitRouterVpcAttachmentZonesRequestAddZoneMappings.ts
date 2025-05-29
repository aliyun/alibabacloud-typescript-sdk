// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterVpcAttachmentZonesRequestAddZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch that you want to add to the VPC connection.
   * 
   * You can specify at most 10 vSwitches in each call.
   * 
   * *   If the VPC connection belongs to the current Alibaba Cloud account, you can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query the IDs of the vSwitches and zones of the VPC.
   * *   If the VPC connection belongs to another Alibaba Cloud account, you can call the [ListGrantVSwitchesToCen](https://help.aliyun.com/document_detail/427599.html) operation to query the IDs of the vSwitches and zones of the VPC.
   * 
   * @example
   * vsw-wz988dda8ldm4uvmx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone where the vSwitch that you want to add to the VPC connection is deployed.
   * 
   * You can specify at most 10 vSwitches in each call.
   * 
   * @example
   * cn-hangzhou-h
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

