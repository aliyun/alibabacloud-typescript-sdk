// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NetworkConfiguration extends $dara.Model {
  /**
   * @remarks
   * The network mode.
   * 
   * @example
   * PRIVATE
   */
  networkMode?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-1234567890abcdef0
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-1234567890abcdef0
   */
  vpcId?: string;
  /**
   * @remarks
   * An array of VSwitch IDs.
   * 
   * @example
   * vsw-1234567890abcdef0,vsw-abcdef1234567890
   */
  vswitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      networkMode: 'networkMode',
      securityGroupId: 'securityGroupId',
      vpcId: 'vpcId',
      vswitchIds: 'vswitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkMode: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswitchIds)) {
      $dara.Model.validateArray(this.vswitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

