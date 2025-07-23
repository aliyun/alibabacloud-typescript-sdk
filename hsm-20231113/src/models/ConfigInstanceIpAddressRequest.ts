// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigInstanceIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-cn-mp90fxef****
   */
  instanceId?: string;
  /**
   * @remarks
   * The endpoint of the VPC to which the HMS belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the HMS belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-u7gb0qahu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the HMS belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-lmkmivmo6****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ip: 'Ip',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ip: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

