// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestNetworkInterface extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to release ENI N when the associated instance is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * >  This parameter takes effect only for secondary ENIs.
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of ENI N.
   * 
   * Take note of the following items:
   * 
   * *   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation.
   * *   The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to specify this parameter.
   * 
   * @example
   * Network_Description
   */
  description?: string;
  /**
   * @remarks
   * The type of ENI N. The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation.
   * 
   * Valid values:
   * 
   * *   Primary
   * *   Secondary
   * 
   * Default value: Secondary.
   * 
   * @example
   * Secondary
   */
  instanceType?: string;
  /**
   * @remarks
   * The IPv6 addresses to assign to the primary ENI. You can assign up to 10 IPv6 addresses to the primary ENI. Valid values of the second N: 1 to 10.
   * 
   * Example: `Ipv6Address.1=2001:db8:1234:1a00::***`.
   * 
   * Take note of the following items:
   * 
   * *   This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you cannot specify this parameter.
   * *   If you specify this parameter, you must set `Amount` to 1 and cannot specify `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6AddressCount`.
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses to randomly generate for the primary ENI. Valid values: 1 to 10.
   * 
   * Take note of the following items:
   * 
   * *   This parameter takes effect only when `NetworkInterface.N.InstanceType` is set to `Primary`. If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you cannot specify this parameter.
   * *   If you specify this parameter, you cannot specify `Ipv6AddressCount`, `Ipv6Address.N`, or `NetworkInterface.N.Ipv6Address.N`.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The index of the network card for ENI N.
   * 
   * Take note of the following items:
   * 
   * *   You can specify network card indexes only for instances of specific instance types.
   * *   If you set NetworkInterface.N.InstanceType to Primary, you can set NetworkInterface.N.NetworkCardIndex only to 0 for instance types that support network cards.
   * *   If you set NetworkInterface.N.InstanceType to Secondary or leave NetworkInterface.N.InstanceType empty, you can specify NetworkInterface.N.NetworkCardIndex based on instance types if the instance types support network cards. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 0
   */
  networkCardIndex?: number;
  /**
   * @remarks
   * The ID of ENI N to attach to the instance.
   * 
   * If you specify this parameter, you must set `Amount` to 1.
   * 
   * >  This parameter takes effect only for secondary ENIs. After you specify an existing secondary ENI, you cannot specify other ENI creation parameters.
   * 
   * @example
   * eni-bp1gn106np8jhxhj****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of ENI N. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Take note of the following items:
   * 
   * *   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you do not need to specify this parameter.
   * 
   * @example
   * Network_Name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication mode of ENI N. Valid values:
   * 
   * *   Standard: uses the TCP communication mode.
   * *   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.
   * 
   * Default value: Standard.
   * 
   * >  The number of ERIs on an instance cannot exceed the maximum number of ERIs that the instance type supports. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The primary IP address to assign to ENI N.
   * 
   * Take note of the following items:
   * 
   * *   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation.
   * 
   *     *   If the value of N is 1, you can configure a primary or secondary ENI. If you specify this parameter, set `Amount` to a numeric value greater than 1, and set NetworkInterface.N.InstanceType to Primary, the specified number of instances are created and consecutive primary IP addresses starting from the specified IP address are assigned to the instances. In this case, you cannot attach secondary ENIs to the instances.
   *     *   If you specify this parameter, set `Amount` to a numeric value greater than 1, and set NetworkInterface.N.InstanceType to Primary, you cannot set `NetworkInterface.2.InstanceType` to Secondary to attach a secondary ENI.
   * 
   * *   If you set `NetworkInterface.N.InstanceType` to `Primary`, this parameter is equivalent to `PrivateIpAddress`. You cannot specify both this parameter and `PrivateIpAddress` in the same request.
   * 
   * *   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, the specified primary IP address is assigned to the secondary ENI. The default value is an IP address that is randomly selected from within the CIDR block of the vSwitch to which to connect the secondary ENI.
   * 
   * > 
   * 
   * *   The first IP address and last three IP addresses of each vSwitch CIDR block are reserved. You cannot specify the IP addresses. For example, if a vSwitch CIDR block is 192.168.1.0/24, the following IP addresses are reserved: 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * @example
   * ``172.16.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The number of queues supported by ENI N.
   * 
   * Take note of the following items:
   * 
   * *   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation.
   * *   The value of this parameter cannot exceed the maximum number of queues allowed per ENI.
   * *   The total number of queues for all ENIs on an instance cannot exceed the queue quota for the instance type. To query the maximum number of queues per ENI and the queue quota for an instance type, you can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation and check the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` values in the response.
   * *   If you specify this parameter and set `NetworkInterface.N.InstanceType` to `Primary`, you cannot specify `NetworkInterfaceQueueNumber`.
   * 
   * @example
   * 8
   */
  queueNumber?: number;
  /**
   * @remarks
   * The number of queue pairs (QPs) supported by the ERI.
   * 
   * If you want to attach multiple ERIs to a created instance, we recommend that you specify QueuePairNumber for each ERI based on the value of `QueuePairNumber` supported by the instance type and the number of ERIs that you want to use. Make sure that the total number of QPs of all ERIs does not exceed the maximum number of QPs supported by the instance type. For information about the maximum number of QPs supported by an instance type, see [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html).
   * 
   * >  If you do not specify QueuePairNumber for an ERI, the maximum number of QPs supported by the instance type is used as the number of QPs supported by the ERI. In this case, you cannot attach an additional ERI to the instance. However, you can attach other types of ENIs to the instance.
   * 
   * @example
   * 0
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The receive (Rx) queue depth of ENI N.
   * 
   * >  This parameter is in invitational preview and is not publicly available. To use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   * 
   * Take note of the following items:
   * 
   * *   This parameter is applicable only to 7th-generation or later ECS instance types.
   * *   This parameter is applicable to Linux images.
   * *   A larger Rx queue depth yields higher inbound throughput and reduces packet loss rates but consumes more memory.
   * 
   * @example
   * 8192
   */
  rxQueueSize?: number;
  /**
   * @remarks
   * The ID of the security group to which to assign ENI N.
   * 
   * Take note of the following items:
   * 
   * *   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you must specify this parameter. In this case, this parameter is equivalent to `SecurityGroupId` and you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupIds.N`.
   * *   If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, you do not need to specify this parameter. The default value is the ID of the security group to which to assign the instance.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of security groups to which to assign ENI N.
   * 
   * *   The value of the first N in this parameter cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation.
   * *   The second N in this parameter indicates that one or more security group IDs can be specified. The valid values of the second N vary based on the maximum number of security groups to which an instance can belong. For more information, see the [Security group limits](~~25412#SecurityGroupQuota1~~) section of the "Limits" topic.
   * 
   * Take note of the following items:
   * 
   * *   If you set `NetworkInterface.N.InstanceType` to `Primary`, you must specify this parameter or `NetworkInterface.N.SecurityGroupId`. In this case, this parameter is equivalent to `SecurityGroupIds.N`, and you cannot specify `SecurityGroupId`, `SecurityGroupIds.N`, or `NetworkInterface.N.SecurityGroupId`.
   * *   If you set `NetworkInterface.N.InstanceType` to `Secondary` or leave NetworkInterface.N.InstanceType empty, you do not need to specify this parameter. The default value is the ID of the security group to which to assign the instance.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  sourceDestCheck?: boolean;
  /**
   * @remarks
   * The Tx queue depth of ENI N.
   * 
   * >  This parameter is in invitational preview and is not publicly available. To use this parameter, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   * 
   * Take note of the following items:
   * 
   * *   This parameter is applicable only to 7th-generation or later ECS instance types.
   * *   This parameter is applicable to Linux images.
   * *   A larger Tx queue depth yields higher outbound throughput and reduces packet loss rates but consumes more memory.
   * 
   * @example
   * 8192
   */
  txQueueSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which to connect ENI N.
   * 
   * Take note of the following items:
   * 
   * *   The value of N cannot exceed the maximum number of ENIs per instance that the instance type supports. For the maximum number of ENIs per instance that an instance type supports, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you must specify this parameter. In this case, this parameter is equivalent to `VSwitchId`. You cannot specify both NetworkInterface.N.VSwitchId and `VSwitchId` in the same request.
   * *   If `NetworkInterface.N.InstanceType` is set to `Secondary` or left empty, you do not need to specify this parameter. The default value is the VSwitchId value.
   * 
   * @example
   * vsw-bp67acfmxazb4p****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      instanceType: 'InstanceType',
      ipv6Address: 'Ipv6Address',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkCardIndex: 'NetworkCardIndex',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      primaryIpAddress: 'PrimaryIpAddress',
      queueNumber: 'QueueNumber',
      queuePairNumber: 'QueuePairNumber',
      rxQueueSize: 'RxQueueSize',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      sourceDestCheck: 'SourceDestCheck',
      txQueueSize: 'TxQueueSize',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOnRelease: 'boolean',
      description: 'string',
      instanceType: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      networkCardIndex: 'number',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficMode: 'string',
      primaryIpAddress: 'string',
      queueNumber: 'number',
      queuePairNumber: 'number',
      rxQueueSize: 'number',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      sourceDestCheck: 'boolean',
      txQueueSize: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

