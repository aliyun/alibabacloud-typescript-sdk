// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLniPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 2022-12-26 20:16:36
   */
  gmtCreate?: string;
  /**
   * @remarks
   * MAC address of the secondary private network
   * 
   * @example
   * 00-ff-84-15-ba-67
   */
  ipAddressMac?: string;
  /**
   * @remarks
   * IP unique identifier
   * 
   * @example
   * sip-xxxxx
   */
  ipName?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:ListVpdRouteEntries, arn=acs:eflo:cn-wulanchabu:1263399219805497:vpd_rte/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-2ze4uww7n6hsfzrwq77y
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The secondary private IP address of the Lingjun network interface controller.
   * 
   * @example
   * 10.42.5.92
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the rule.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The subnet instance ID.
   * 
   * @example
   * subnet-aj93mko8
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      ipAddressMac: 'IpAddressMac',
      ipName: 'IpName',
      message: 'Message',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      ipAddressMac: 'string',
      ipName: 'string',
      message: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      subnetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

