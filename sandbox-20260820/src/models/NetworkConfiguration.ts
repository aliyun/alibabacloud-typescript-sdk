// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NetworkConfiguration extends $dara.Model {
  /**
   * @remarks
   * The network access mode. Valid values: PUBLIC (public network only), PRIVATE (VPC only), PUBLIC_AND_PRIVATE (both public network and VPC are reachable).
   * 
   * @example
   * PUBLIC_AND_PRIVATE
   */
  networkMode?: string;
  /**
   * @remarks
   * The ID of the security group used by the sandboxed container instances.
   * 
   * @example
   * sg-****
   */
  securityGroupID?: string;
  /**
   * @remarks
   * The ID of the VPC to which the sandboxed container instances are connected.
   * 
   * @example
   * vpc-****
   */
  vpcID?: string;
  /**
   * @remarks
   * The list of vSwitch IDs to which the sandboxed container instances are connected. Configure vSwitches in multiple zones to improve availability.
   */
  vswitchIDs?: string[];
  static names(): { [key: string]: string } {
    return {
      networkMode: 'networkMode',
      securityGroupID: 'securityGroupID',
      vpcID: 'vpcID',
      vswitchIDs: 'vswitchIDs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkMode: 'string',
      securityGroupID: 'string',
      vpcID: 'string',
      vswitchIDs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswitchIDs)) {
      $dara.Model.validateArray(this.vswitchIDs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

