// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceDLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks of the clients that you want to connect to. After this parameter is specified, the CIDR blocks are added to the back-to-origin route of the server. Either this parameter or the VSwitchIdList parameter can be used to determine CIDR blocks.
   * 
   * @example
   * 72.16.0.0/16
   */
  destinationCIDRs?: string;
  /**
   * @remarks
   * The ID of the security group to which the Elastic Compute Service (ECS) instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp149cedsfx2rfspd2d
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the peer primary vSwitch. After this parameter is specified, an elastic network interface (ENI) is created in the VSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitches of the clients that you want to connect to. After this parameter is specified, the CIDR blocks of these vSwitches are added to the back-to-origin route of the server.
   */
  vSwitchIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationCIDRs: 'DestinationCIDRs',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vSwitchIdList: 'VSwitchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCIDRs: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vSwitchIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIdList)) {
      $dara.Model.validateArray(this.vSwitchIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

