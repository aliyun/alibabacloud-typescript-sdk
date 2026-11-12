// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceDLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the secondary vSwitches that are directly connected.
   */
  auxVSwitchList?: string[];
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
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the security group that is directly connected.
   * 
   * @example
   * sg-bp1j1z7297hcink9d****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the primary vSwitch that is directly connected.
   * 
   * @example
   * vsw-8vbqn2at0kljjxxxx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC that is directly connected.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      auxVSwitchList: 'AuxVSwitchList',
      destinationCIDRs: 'DestinationCIDRs',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxVSwitchList: { 'type': 'array', 'itemType': 'string' },
      destinationCIDRs: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.auxVSwitchList)) {
      $dara.Model.validateArray(this.auxVSwitchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

