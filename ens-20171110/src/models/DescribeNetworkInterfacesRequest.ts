// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-tianjin-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of edge nodes. N indicates the number of edge node IDs that you can specify at the same time. Valid values of N: 1 to 100.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5t7z99n32gplriv
   */
  instanceId?: string;
  /**
   * @remarks
   * IPv6 addresses N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-2zeuphj08tt7q3brd****
   */
  networkId?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-58z57orgmt6d1****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The IDs of the elastic network interfaces (ENIs). N indicates the number of ENI IDs that you can specify at the same time. Valid values of N: 1 to 100.
   */
  networkInterfaceIds?: string[];
  /**
   * @remarks
   * The name of the ENI.
   * 
   * @example
   * test-01
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: string;
  /**
   * @remarks
   * The primary IP address of the ENI.
   * 
   * @example
   * ***
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The ID of the security group to which the secondary ENI belongs. To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
   * 
   * @example
   * sg-5p1fg655nh68xyz9i***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the ENI. Valid values:
   * 
   * *   Available: The ENI is available.
   * *   Attaching: The ENI is being attached to an instance.
   * *   InUse: The ENI is attached to an instance.
   * *   Detaching: The ENI is being detached from an instance.
   * *   Deleting: The ENI is being deleted.
   * 
   * This parameter is empty by default, which indicates that ENIs in all states are queried.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The type of the ENI. Valid values:
   * 
   * *   Primary: the primary ENI.
   * *   Secondary: the secondary ENI.
   * 
   * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
   * 
   * @example
   * Secondary
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-12345
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      instanceId: 'InstanceId',
      ipv6Address: 'Ipv6Address',
      networkId: 'NetworkId',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceIds: 'NetworkInterfaceIds',
      networkInterfaceName: 'NetworkInterfaceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      primaryIpAddress: 'PrimaryIpAddress',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      type: 'Type',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      networkId: 'string',
      networkInterfaceId: 'string',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      primaryIpAddress: 'string',
      securityGroupId: 'string',
      status: 'string',
      type: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.networkInterfaceIds)) {
      $dara.Model.validateArray(this.networkInterfaceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

