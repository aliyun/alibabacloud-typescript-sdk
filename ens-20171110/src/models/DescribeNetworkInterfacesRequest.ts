// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-tianjin-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of the ENS edge zones. N indicates the sequence number of the edge zone ID. Valid values of N: 1 to 100.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-5t7z99n32gplriv
   */
  instanceId?: string;
  /**
   * @remarks
   * The IPv6 addresses of the elastic network interfaces (ENIs). N indicates the settings for multiple IPv6 addresses. Valid values of N: 1 to 100.
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
   * The ID of the elastic network interfaces (ENIs).
   * 
   * @example
   * eni-58z57orgmt6d1****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The list of IDs of the elastic network interfaces (ENIs). N indicates the settings for multiple elastic network interfaces (ENIs) IDs. Valid values of N: 1 to 100.
   */
  networkInterfaceIds?: string[];
  /**
   * @remarks
   * The name of the elastic network interfaces (ENIs).
   * 
   * @example
   * test-01
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The page number of the instance status list. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page for paging queries. Maximum value: 100. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: string;
  /**
   * @remarks
   * The primary IP address of the elastic network interfaces (ENIs).
   * 
   * @example
   * 10.XXX.XXX.5
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The ID of the security group to which the secondary ENI belongs. Specify this parameter if you want to query the information about secondary ENIs by security group ID.
   * 
   * @example
   * sg-5p1fg655nh68xyz9i***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The stateful status of the elastic network interfaces (ENIs). Valid values:
   * 
   * - Available: available.
   * - Attaching: attaching.
   * - InUse: in use.
   * - Detaching: detaching.
   * - Deleting: the delete operation is in progress.
   * 
   * Default value: empty, which indicates that all statuses are queried.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The type of the elastic network interfaces (ENIs). Valid values:
   * - Primary: primary network interface controller (NIC).
   * - Secondary: secondary network interface controller (NIC).
   * 
   * Default value: empty, which indicates that all types are queried.
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

