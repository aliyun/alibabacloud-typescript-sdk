// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AssignLeniPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * @example
   * sip-lzwx****
   */
  ipName?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      ipName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The unique IP identifier.
   * 
   * @example
   * sip-8exxqa2r
   */
  ipName?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipName: 'string',
      networkInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVpdCidrBlockResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticNetworkInterfaceResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1fejojjo****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the Lingjun node.
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErAttachmentResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the network connection instance.
   * 
   * @example
   * er-attachment-ggjbfhqv
   */
  erAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      erAttachmentId: 'ErAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErRouteMapResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * routing policy ID
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  static names(): { [key: string]: string } {
    return {
      erRouteMapId: 'ErRouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erRouteMapId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubnetRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-subnet
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the VPN connection.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * subnet-tag-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubnetResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun subnet instance ID
   * 
   * @example
   * subnet-yuvn29bn
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateVccRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vcc
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the VPN connection.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * vcc-group-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccGrantRuleResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Authorized resource primary key ID
   * 
   * @example
   * grant-rule-8rgvqazb
   */
  grantRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      grantRuleId: 'GrantRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccRouteEntryResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * vcc-rte-5cey1sap
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vccRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdRequestSubnets extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * @example
   * 10.1.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun subnet instance name
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **Generic type is not specified**.
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * OOB
   */
  type?: string;
  /**
   * @remarks
   * The zone ID of the disk.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      regionId: 'RegionId',
      subnetName: 'SubnetName',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      regionId: 'string',
      subnetName: 'string',
      type: 'string',
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

export class CreateVpdRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * vpd-wulanchabu
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the VPN connection.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each tag key corresponds to a tag value. You can enter a maximum of 20 tag values at a time.
   * 
   * @example
   * wulanchabu-a
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun subnet ID list
   */
  subnetIds?: string[];
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetIds: 'SubnetIds',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subnetIds: { 'type': 'array', 'itemType': 'string' },
      vpdId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subnetIds)) {
      $dara.Model.validateArray(this.subnetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdGrantRuleResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Authorized resource primary key ID
   * 
   * @example
   * grant-rule-hnevjkmw
   */
  grantRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      grantRuleId: 'GrantRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticNetworkInterfaceResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Node ID
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlrResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Whether the role exists
   * 
   * @example
   * true
   */
  hasRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      hasRole: 'HasRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRole: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDestinationCidrBlockResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * List of destination CIDR block information for the current network instance
   */
  destinationCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationCidrBlock)) {
      $dara.Model.validateArray(this.destinationCidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElasticNetworkInterfaceResponseBodyContentIpv6Addresses extends $dara.Model {
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1585816811000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1549012834000
   */
  gmtModified?: string;
  /**
   * @remarks
   * IPV6 unique identifier
   * 
   * @example
   * sip-sg3xabeq
   */
  ipName?: string;
  /**
   * @remarks
   * IPV6 address
   * 
   * @example
   * 2408:4005:3aa:1000:470d:66fb:56a5:****
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ipName: 'IpName',
      ipv6Address: 'Ipv6Address',
      message: 'Message',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ipName: 'string',
      ipv6Address: 'string',
      message: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElasticNetworkInterfaceResponseBodyContentPrivateIpAddresses extends $dara.Model {
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1672971789000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1672971789000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface Secondary Private IP Unique Identifier
   * 
   * @example
   * sip-ywz****
   */
  ipName?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP address
   * 
   * @example
   * 172.16.****
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
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ipName: 'IpName',
      message: 'Message',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ipName: 'string',
      message: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElasticNetworkInterfaceResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 2022-01-13 12:51:41
   */
  createTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * terraform-example
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Whether to enable the jumboFrame capability
   * 
   * @example
   * True
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * vswitch gateway address
   * 
   * @example
   * 172.16.****
   */
  gateway?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 2022-01-13 12:51:41
   */
  gmtModified?: string;
  /**
   * @remarks
   * Elastic Network Interface IP
   * 
   * @example
   * 203.107.****
   */
  ip?: string;
  /**
   * @remarks
   * IPV6 address
   */
  ipv6Addresses?: GetElasticNetworkInterfaceResponseBodyContentIpv6Addresses[];
  /**
   * @remarks
   * mac address
   * 
   * @example
   * 00:22:6D:97:**:**
   */
  mac?: string;
  /**
   * @remarks
   * vswitch mask bits
   * 
   * @example
   * 24
   */
  mask?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Lingjun Node ID
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  /**
   * @remarks
   * Secondary private IP address
   */
  privateIpAddresses?: GetElasticNetworkInterfaceResponseBodyContentPrivateIpAddresses[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-0jl5s4p4laalruk7****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The state of the private gateway.
   * 
   * Valid value:
   * 
   * *   Create Failed: the creation failure.
   * *   Delete Failed: the that failed to be deleted.
   * *   Executing
   * *   Available
   * *   Deleting
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * NIC Type
   * 
   * Valid value:
   * 
   * *   CUSTOM: custom type.
   * *   DEFAULT: system type.
   * 
   * @example
   * DEFAULT
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-uf6u8473r84e9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-j6ctp4n75306****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      enableJumboFrame: 'EnableJumboFrame',
      gateway: 'Gateway',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      ipv6Addresses: 'Ipv6Addresses',
      mac: 'Mac',
      mask: 'Mask',
      message: 'Message',
      nodeId: 'NodeId',
      privateIpAddresses: 'PrivateIpAddresses',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      enableJumboFrame: 'boolean',
      gateway: 'string',
      gmtModified: 'string',
      ip: 'string',
      ipv6Addresses: { 'type': 'array', 'itemType': GetElasticNetworkInterfaceResponseBodyContentIpv6Addresses },
      mac: 'string',
      mask: 'string',
      message: 'string',
      nodeId: 'string',
      privateIpAddresses: { 'type': 'array', 'itemType': GetElasticNetworkInterfaceResponseBodyContentPrivateIpAddresses },
      regionId: 'string',
      securityGroupId: 'string',
      status: 'string',
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Addresses)) {
      $dara.Model.validateArray(this.ipv6Addresses);
    }
    if(Array.isArray(this.privateIpAddresses)) {
      $dara.Model.validateArray(this.privateIpAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErResponseBodyContentErAttachments extends $dara.Model {
  /**
   * @remarks
   * Cross-account
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * Receive all routes automatically
   * 
   * @example
   * true
   */
  autoReceiveAllRoute?: boolean;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1644283112720
   */
  createTime?: string;
  /**
   * @remarks
   * The connection ID of the Lingjun HUB network instance.
   * 
   * @example
   * er-attachment-f32hxfsu
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * Network Instance Name
   * 
   * @example
   * fudan-egpu
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1649303733000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * vpd-kkopgtne
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * zhijiao
   */
  instanceName?: string;
  /**
   * @remarks
   * Instance type: VPD and VCC
   * 
   * Valid value:
   * 
   * *   VCC: Lingjun Connection.
   * *   VPD: Lingjun network segment.
   * 
   * @example
   * VPD
   */
  instanceType?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The synchronized region where the ECS instances are deployed.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzzka6bnjvbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * xxxxxxxx
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166277
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      autoReceiveAllRoute: 'AutoReceiveAllRoute',
      createTime: 'CreateTime',
      erAttachmentId: 'ErAttachmentId',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      across: 'boolean',
      autoReceiveAllRoute: 'boolean',
      createTime: 'string',
      erAttachmentId: 'string',
      erAttachmentName: 'string',
      erId: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErResponseBodyContentErRouteEntrys extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 10.0.0.0/9
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * er-rte-xnmsd2kl
   */
  erRouteEntryId?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1623317089000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-xxkmggkw
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmyoj5mg3w54y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1620939556166277
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * System
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166277
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteEntryId: 'ErRouteEntryId',
      gmtModified: 'GmtModified',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteEntryId: 'string',
      gmtModified: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErResponseBodyContentErRouteMaps extends $dara.Model {
  /**
   * @remarks
   * Policy behavior
   * 
   * Valid value:
   * 
   * *   deny: rejects the.
   * *   permit: The allows.
   * 
   * @example
   * permit
   */
  action?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1645766599809
   */
  createTime?: string;
  /**
   * @remarks
   * Policy description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 10.0.0.0/8
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * routing policy ID
   * 
   * @example
   * er-rmap-xkslnmsr
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * The name of the routing policy.
   * 
   * @example
   * route-map-name
   */
  erRouteMapName?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1623899444000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * vpd-sdkd2gkx
   */
  receptionInstanceId?: string;
  /**
   * @remarks
   * The name of the destination instance.
   * 
   * @example
   * Reception-name
   */
  receptionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the destination instance belongs.
   * 
   * @example
   * 1620939556166277
   */
  receptionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the destination instance.
   * 
   * @example
   * VPD
   */
  receptionInstanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzaq3ypaqkdy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Policy sequence number (1001-2000)
   * 
   * @example
   * 1001
   */
  routeMapNum?: number;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * XXQGPROD-zh_CN
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * vpd-xmglsymg
   */
  transmissionInstanceId?: string;
  /**
   * @remarks
   * Source instance name
   * 
   * @example
   * test-transmission
   */
  transmissionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the source instance belongs.
   * 
   * @example
   * 1620939556166277
   */
  transmissionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the source instance.
   * 
   * @example
   * VPD
   */
  transmissionInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      createTime: 'CreateTime',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      erRouteMapName: 'ErRouteMapName',
      gmtModified: 'GmtModified',
      message: 'Message',
      receptionInstanceId: 'ReceptionInstanceId',
      receptionInstanceName: 'ReceptionInstanceName',
      receptionInstanceOwner: 'ReceptionInstanceOwner',
      receptionInstanceType: 'ReceptionInstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeMapNum: 'RouteMapNum',
      status: 'Status',
      tenantId: 'TenantId',
      transmissionInstanceId: 'TransmissionInstanceId',
      transmissionInstanceName: 'TransmissionInstanceName',
      transmissionInstanceOwner: 'TransmissionInstanceOwner',
      transmissionInstanceType: 'TransmissionInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteMapId: 'string',
      erRouteMapName: 'string',
      gmtModified: 'string',
      message: 'string',
      receptionInstanceId: 'string',
      receptionInstanceName: 'string',
      receptionInstanceOwner: 'string',
      receptionInstanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeMapNum: 'number',
      status: 'string',
      tenantId: 'string',
      transmissionInstanceId: 'string',
      transmissionInstanceName: 'string',
      transmissionInstanceOwner: 'string',
      transmissionInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1644283112720
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Network instance information list
   */
  erAttachments?: GetErResponseBodyContentErAttachments[];
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * Lingjun HUB Instance Name
   * 
   * @example
   * er-heyuan-main
   */
  erName?: string;
  /**
   * @remarks
   * The list of route entry information.
   */
  erRouteEntrys?: GetErResponseBodyContentErRouteEntrys[];
  /**
   * @remarks
   * routing policy information list
   */
  erRouteMaps?: GetErResponseBodyContentErRouteMaps[];
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1627545952000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary Zone
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzlki4ehfse4y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166277
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      erAttachments: 'ErAttachments',
      erId: 'ErId',
      erName: 'ErName',
      erRouteEntrys: 'ErRouteEntrys',
      erRouteMaps: 'ErRouteMaps',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      erAttachments: { 'type': 'array', 'itemType': GetErResponseBodyContentErAttachments },
      erId: 'string',
      erName: 'string',
      erRouteEntrys: { 'type': 'array', 'itemType': GetErResponseBodyContentErRouteEntrys },
      erRouteMaps: { 'type': 'array', 'itemType': GetErResponseBodyContentErRouteMaps },
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.erAttachments)) {
      $dara.Model.validateArray(this.erAttachments);
    }
    if(Array.isArray(this.erRouteEntrys)) {
      $dara.Model.validateArray(this.erRouteEntrys);
    }
    if(Array.isArray(this.erRouteMaps)) {
      $dara.Model.validateArray(this.erRouteMaps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErAttachmentResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Whether cross-account. Valid values:
   * 
   * *   **true**: The network instance is a cross-account resource.
   * *   **false**: The current network instance is a resource of the current account.
   * 
   * @example
   * fasle
   */
  across?: boolean;
  /**
   * @remarks
   * Indicates whether to automatically receive all routes from all instances under the Lingjun HUB. Valid values:
   * 
   * *   **true**: received automatically.
   * *   **false**: Not received.
   * 
   * @example
   * true
   */
  autoReceiveAllRoute?: boolean;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1648085472000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB network instance.
   * 
   * @example
   * er-attachment-i1ioibyf
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * The name of the Lingjun HUB network instance.
   * 
   * @example
   * vpd-lxnsj2cx
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB instance.
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1648085472000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the network instance. Valid values: **VPD** and **VCC**.
   * 
   * For more information, see [What is Lingjun?](https://help.aliyun.com/document_detail/444430.html)
   * 
   * You can query **Lingjun CIDR blocks** and **Lingjun connections** by [ListVpds](https://help.aliyun.com/document_detail/2331077.html) and [ListVccs](https://help.aliyun.com/document_detail/2399526.html?) respectively.
   * 
   * @example
   * vpd-lxnsj2cx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * vpd-wulanchabu-main
   */
  instanceName?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * *   **VPD**: indicates the Lingjun CIDR block.
   * *   **VCC**: indicates a Lingjun connection.
   * 
   * @example
   * VPD
   */
  instanceType?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzb3n5lgk2ieq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1620939556166277
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **Available**: Normal.
   * *   **Not Available**: Not available.
   * *   **Executing**: The task is being executed.
   * *   **Deleting**: The account is being deleted
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      autoReceiveAllRoute: 'AutoReceiveAllRoute',
      createTime: 'CreateTime',
      erAttachmentId: 'ErAttachmentId',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      across: 'boolean',
      autoReceiveAllRoute: 'boolean',
      createTime: 'string',
      erAttachmentId: 'string',
      erAttachmentName: 'string',
      erId: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErRouteEntryResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 11.0.0.0/16
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * er-rte-4q0jbylz
   */
  erRouteEntryId?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1666677783000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-cn-209300qha01
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzb3n5lgk2ieq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * System
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteEntryId: 'ErRouteEntryId',
      gmtModified: 'GmtModified',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteEntryId: 'string',
      gmtModified: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErRouteMapResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Policy behavior; optional values:
   * 
   * *   **permit**: Allow
   * *   **deny**: Rejected
   * 
   * @example
   * permit
   */
  action?: string;
  /**
   * @remarks
   * Policy description
   * 
   * @example
   * ssss
   */
  description?: string;
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Lingjun HUB routing policy ID
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * Lingjun HUB routing policy Name
   * 
   * @example
   * er-rmap-wulanchabu
   */
  erRouteMapName?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1648085472000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1648085472000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Receive Instance ID
   * 
   * @example
   * vpd-x25vxrb2
   */
  receptionInstanceId?: string;
  /**
   * @remarks
   * Receive Instance Name
   * 
   * @example
   * vpd-receprion
   */
  receptionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the receiving instance belongs
   * 
   * @example
   * 1620939556166277
   */
  receptionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the received instance. Optional values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * @example
   * VPD
   */
  receptionInstanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzlki4ehfse4y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * A smaller sequence number indicates a lower priority. When a route is matched, a policy with a higher priority is preferentially matched.
   * 
   * **Valid values: 1001 to 2000**
   * 
   * @example
   * 1001
   */
  routeMapNum?: number;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **Available**
   * *   **Not Available**: Unavailable
   * *   **Executing**: Executing
   * *   **Deleting**: The node is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Release Instance ID
   * 
   * @example
   * vpd-xgkb2kl
   */
  transmissionInstanceId?: string;
  /**
   * @remarks
   * Release Instance Name
   * 
   * @example
   * vpd-transimit
   */
  transmissionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the published instance belongs
   * 
   * @example
   * 1620939556166277
   */
  transmissionInstanceOwner?: string;
  /**
   * @remarks
   * Publish instance type; optional values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * @example
   * VPD
   */
  transmissionInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      erRouteMapName: 'ErRouteMapName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      message: 'Message',
      receptionInstanceId: 'ReceptionInstanceId',
      receptionInstanceName: 'ReceptionInstanceName',
      receptionInstanceOwner: 'ReceptionInstanceOwner',
      receptionInstanceType: 'ReceptionInstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeMapNum: 'RouteMapNum',
      status: 'Status',
      tenantId: 'TenantId',
      transmissionInstanceId: 'TransmissionInstanceId',
      transmissionInstanceName: 'TransmissionInstanceName',
      transmissionInstanceOwner: 'TransmissionInstanceOwner',
      transmissionInstanceType: 'TransmissionInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteMapId: 'string',
      erRouteMapName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      message: 'string',
      receptionInstanceId: 'string',
      receptionInstanceName: 'string',
      receptionInstanceOwner: 'string',
      receptionInstanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeMapNum: 'number',
      status: 'string',
      tenantId: 'string',
      transmissionInstanceId: 'string',
      transmissionInstanceName: 'string',
      transmissionInstanceOwner: 'string',
      transmissionInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFabricTopologyResponseBodyContentTopoInfo extends $dara.Model {
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * core-1
   */
  layerName?: string;
  /**
   * @remarks
   * Hierarchical resource types
   * 
   * Valid value:
   * 
   * *   core: core layer.
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * *   spine: backbone layer.
   * *   leaf: access layer
   * 
   * @example
   * core
   */
  layerType?: string;
  /**
   * @remarks
   * Next Level
   */
  nextLayer?: any[];
  static names(): { [key: string]: string } {
    return {
      layerName: 'LayerName',
      layerType: 'LayerType',
      nextLayer: 'NextLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layerName: 'string',
      layerType: 'string',
      nextLayer: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.nextLayer)) {
      $dara.Model.validateArray(this.nextLayer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFabricTopologyResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster-****
   */
  clusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * network interface controller Topology Information
   */
  topoInfo?: GetFabricTopologyResponseBodyContentTopoInfo[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-j6ctp4n75306****
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun CIDR block ID
   * 
   * @example
   * vpd-fuli****
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      topoInfo: 'TopoInfo',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      topoInfo: { 'type': 'array', 'itemType': GetFabricTopologyResponseBodyContentTopoInfo },
      vpcId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.topoInfo)) {
      $dara.Model.validateArray(this.topoInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeniPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * zhenyuan wdl workflow
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1663722356000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the certificate was updated.
   * 
   * @example
   * 1635231890000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * @example
   * sip-8ylg****
   */
  ipName?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP address.
   * 
   * @example
   * 10.42.****
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
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ipName: 'IpName',
      message: 'Message',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ipName: 'string',
      message: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetNetworkInterfaceResponseBodyContentPrivateIpAddressMacGroup extends $dara.Model {
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
   * Secondary private MAC address
   * 
   * @example
   * 01-00-5e-00-00-16
   */
  ipAddressMac?: string;
  /**
   * @remarks
   * IP unique identifier
   * 
   * @example
   * sip-xxxx
   */
  ipName?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Secondary private IP address
   * 
   * @example
   * 172.23.161.57
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The state of the rule.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipAddressMac: 'IpAddressMac',
      ipName: 'IpName',
      message: 'Message',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipAddressMac: 'string',
      ipName: 'string',
      message: 'string',
      privateIpAddress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkInterfaceResponseBodyContentSubnetBaseInfo extends $dara.Model {
  /**
   * @remarks
   * Network address segment
   * 
   * @example
   * 116.233.21.57/32
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Subnet instance.
   * 
   * @example
   * subnet-urb01blo
   */
  subnetId?: string;
  /**
   * @remarks
   * The name of the Subnet instance.
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      subnetId: 'string',
      subnetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkInterfaceResponseBodyContentVpdBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The network segment of the Lingjun subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * For more information about CIDR blocks, see the [What is CIDR?](https://www.alibabacloud.com/help/doc-detail/40637.htm#title-gu4-uzk-12r) section in the "Network FAQ" topic.
   * 
   * This parameter is left empty by default.
   * 
   * @example
   * 172.18.0.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-ppdunxzc
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the VPD instance.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkInterfaceResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Port
   */
  ethernet?: string[];
  /**
   * @remarks
   * Gateway
   * 
   * @example
   * 172.24.20.254
   */
  gateway?: string;
  /**
   * @remarks
   * The IP address of the BE cluster.
   * 
   * @example
   * 203.107.60.69
   */
  ip?: string;
  /**
   * @remarks
   * NC Type
   * 
   * Valid value:
   * 
   * *   CUSTOM_LNI_INTEGRATION: two-network one-in-one architecture Lingjun hosting network interface controller.
   * *   CPU: CPU machine.
   * *   ELASTIC_6.2: Machine
   * *   GPU: GPU machine.
   * *   DEFAULT: the old CPU machine.
   * *   CUSTOM_LNI: two network separation architecture Lingjun hosting network interface controller.
   * 
   * @example
   * DEFAULT
   */
  ncType?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-f8z4scmfh0u4ewv6vdd8
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * ENI Name
   * 
   * @example
   * bond0
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * masterintranett2fdth5fkoocg
   */
  nodeId?: string;
  /**
   * @remarks
   * Secondary Private IP\\&MAC Address Collection
   */
  privateIpAddressMacGroup?: GetNetworkInterfaceResponseBodyContentPrivateIpAddressMacGroup[];
  /**
   * @remarks
   * network interface controller private secondary IP limit
   * 
   * @example
   * 0
   */
  quota?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Service network interface controller address
   * 
   * @example
   * 01-00-5e-00-00-16
   */
  serviceMac?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun subnet (Subnet) basic information
   */
  subnetBaseInfo?: GetNetworkInterfaceResponseBodyContentSubnetBaseInfo;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Basic information of Lingjun network segment (VPD)
   */
  vpdBaseInfo?: GetNetworkInterfaceResponseBodyContentVpdBaseInfo;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ethernet: 'Ethernet',
      gateway: 'Gateway',
      ip: 'Ip',
      ncType: 'NcType',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      nodeId: 'NodeId',
      privateIpAddressMacGroup: 'PrivateIpAddressMacGroup',
      quota: 'Quota',
      regionId: 'RegionId',
      serviceMac: 'ServiceMac',
      status: 'Status',
      subnetBaseInfo: 'SubnetBaseInfo',
      tenantId: 'TenantId',
      vpdBaseInfo: 'VpdBaseInfo',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ethernet: { 'type': 'array', 'itemType': 'string' },
      gateway: 'string',
      ip: 'string',
      ncType: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      nodeId: 'string',
      privateIpAddressMacGroup: { 'type': 'array', 'itemType': GetNetworkInterfaceResponseBodyContentPrivateIpAddressMacGroup },
      quota: 'number',
      regionId: 'string',
      serviceMac: 'string',
      status: 'string',
      subnetBaseInfo: GetNetworkInterfaceResponseBodyContentSubnetBaseInfo,
      tenantId: 'string',
      vpdBaseInfo: GetNetworkInterfaceResponseBodyContentVpdBaseInfo,
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ethernet)) {
      $dara.Model.validateArray(this.ethernet);
    }
    if(Array.isArray(this.privateIpAddressMacGroup)) {
      $dara.Model.validateArray(this.privateIpAddressMacGroup);
    }
    if(this.subnetBaseInfo && typeof (this.subnetBaseInfo as any).validate === 'function') {
      (this.subnetBaseInfo as any).validate();
    }
    if(this.vpdBaseInfo && typeof (this.vpdBaseInfo as any).validate === 'function') {
      (this.vpdBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInfoForPodResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster-****
   */
  clusterId?: string;
  /**
   * @remarks
   * Lingjun Gaomi network interface controller quota
   * 
   * @example
   * 10
   */
  hdeniQuota?: number;
  /**
   * @remarks
   * Lingjun Elastic Network Interface quota, including system type
   * 
   * @example
   * 10
   */
  leniQuota?: number;
  /**
   * @remarks
   * Lingjun Elastic Network Interface Secondary Private IP Quota
   * 
   * @example
   * 10
   */
  leniSipQuota?: number;
  /**
   * @remarks
   * Lingjun network interface controller Secondary Private IP Quota
   * 
   * @example
   * 10
   */
  lniSipQuota?: number;
  /**
   * @remarks
   * The ID of the node for this operation.
   * 
   * @example
   * node-be70****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * List of VSwitches that can apply for IP addresses on this node
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The ID of the Virtual Private Cloud to which the current node belongs.
   * 
   * @example
   * vpc-j6ctp4n75306****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hdeniQuota: 'HdeniQuota',
      leniQuota: 'LeniQuota',
      leniSipQuota: 'LeniSipQuota',
      lniSipQuota: 'LniSipQuota',
      nodeId: 'NodeId',
      regionId: 'RegionId',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hdeniQuota: 'number',
      leniQuota: 'number',
      leniSipQuota: 'number',
      lniSipQuota: 'number',
      nodeId: 'string',
      regionId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetResponseBodyContentTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-subnet
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * subnet-group-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetResponseBodyContentVpdBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPD.
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
   * 
   * @example
   * 10.0.0.0/8
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-iv2zm1qf
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the Lingjun CIDR block.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The number of available IP addresses.
   * 
   * @example
   * 1024
   */
  availableIps?: number;
  /**
   * @remarks
   * The CIDR block of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * @example
   * 10.10.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1648085472000
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of SLB.
   * 
   * @example
   * 0
   */
  lbCount?: number;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * test example
   */
  message?: string;
  /**
   * @remarks
   * The number of NCs.
   * 
   * @example
   * 16
   */
  ncCount?: number;
  /**
   * @remarks
   * Number of Lingjun network interface controller
   * 
   * @example
   * 4
   */
  networkInterfaceCount?: number;
  /**
   * @remarks
   * The total number of secondary private IP addresses.
   * 
   * @example
   * 20
   */
  privateIpCount?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the cache reserve instance.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Lingjun subnet instance.
   * 
   * @example
   * subnet-aj93mko8
   */
  subnetId?: string;
  /**
   * @remarks
   * The name of the Lingjun subnet instance.
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: GetSubnetResponseBodyContentTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **Empty for common data types**
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * OOB
   */
  type?: string;
  /**
   * @remarks
   * The information about the network segment of Lingjun.
   */
  vpdBaseInfo?: GetSubnetResponseBodyContentVpdBaseInfo;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-ze3na0wf
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIps: 'AvailableIps',
      cidr: 'Cidr',
      createTime: 'CreateTime',
      gmtModified: 'GmtModified',
      lbCount: 'LbCount',
      message: 'Message',
      ncCount: 'NcCount',
      networkInterfaceCount: 'NetworkInterfaceCount',
      privateIpCount: 'PrivateIpCount',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
      tags: 'Tags',
      tenantId: 'TenantId',
      type: 'Type',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIps: 'number',
      cidr: 'string',
      createTime: 'string',
      gmtModified: 'string',
      lbCount: 'number',
      message: 'string',
      ncCount: 'number',
      networkInterfaceCount: 'number',
      privateIpCount: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      subnetId: 'string',
      subnetName: 'string',
      tags: { 'type': 'array', 'itemType': GetSubnetResponseBodyContentTags },
      tenantId: 'string',
      type: 'string',
      vpdBaseInfo: GetSubnetResponseBodyContentVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vpdBaseInfo && typeof (this.vpdBaseInfo as any).validate === 'function') {
      (this.vpdBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentAliyunRouterInfo extends $dara.Model {
  /**
   * @remarks
   * IPv4 address of Alibaba Cloud-side interconnection
   * 
   * @example
   * 169.254.248.30
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * Masking
   * 
   * @example
   * 255.255.255.248
   */
  mask?: string;
  /**
   * @remarks
   * Express Connect circuit ID
   * 
   * @example
   * pc-0jlof4bphlsnxbdztkvad
   */
  pcId?: string;
  /**
   * @remarks
   * Lingjun Side Interconnection IPv4 Address
   * 
   * @example
   * 169.254.248.28
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * @example
   * vbr-2ze4i85p6vb9nwcan5xt0
   */
  vbrId?: string;
  /**
   * @remarks
   * VLAN ID of the VBR
   * 
   * @example
   * 1042
   */
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      localGatewayIp: 'LocalGatewayIp',
      mask: 'Mask',
      pcId: 'PcId',
      peerGatewayIp: 'PeerGatewayIp',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localGatewayIp: 'string',
      mask: 'string',
      pcId: 'string',
      peerGatewayIp: 'string',
      vbrId: 'string',
      vlanId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentCisRouterInfoCcInfos extends $dara.Model {
  /**
   * @remarks
   * Leased Line ID
   * 
   * @example
   * cc-73aeex5o
   */
  ccId?: string;
  /**
   * @remarks
   * Lingjun Side Interconnection IPv4 Address
   * 
   * @example
   * 169.254.248.26
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * Lingjun Side Interconnection IPv4 Address
   * 
   * @example
   * 169.254.248.30
   */
  remoteGatewayIp?: string;
  /**
   * @remarks
   * The state of the rule.
   * 
   * @example
   * Established
   */
  status?: string;
  /**
   * @remarks
   * Subnet mask
   * 
   * @example
   * 255.255.255.248
   */
  subnetMask?: string;
  /**
   * @remarks
   * Vlan ID of the leased line
   * 
   * @example
   * Ethernet1042
   */
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      ccId: 'CcId',
      localGatewayIp: 'LocalGatewayIp',
      remoteGatewayIp: 'RemoteGatewayIp',
      status: 'Status',
      subnetMask: 'SubnetMask',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccId: 'string',
      localGatewayIp: 'string',
      remoteGatewayIp: 'string',
      status: 'string',
      subnetMask: 'string',
      vlanId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentCisRouterInfo extends $dara.Model {
  /**
   * @remarks
   * Leased Line Information List
   */
  ccInfos?: GetVccResponseBodyContentCisRouterInfoCcInfos[];
  /**
   * @remarks
   * The ID of the on-cloud router instance.
   * 
   * @example
   * ccr-1ms84am0
   */
  ccrId?: string;
  static names(): { [key: string]: string } {
    return {
      ccInfos: 'CcInfos',
      ccrId: 'CcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccInfos: { 'type': 'array', 'itemType': GetVccResponseBodyContentCisRouterInfoCcInfos },
      ccrId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ccInfos)) {
      $dara.Model.validateArray(this.ccInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentErInfos extends $dara.Model {
  /**
   * @remarks
   * Connections
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678379917000
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * this is test.
   */
  description?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-p68b0jwn
   */
  erId?: string;
  /**
   * @remarks
   * Lingjun HUB Instance Name
   * 
   * @example
   * er-1
   */
  erName?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1678379917000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary Zone
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * test message
   */
  message?: string;
  /**
   * @remarks
   * Lingjun HUB Region Information
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Number of routing policy
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166277
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      routeMaps: 'RouteMaps',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      createTime: 'string',
      description: 'string',
      erId: 'string',
      erName: 'string',
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      routeMaps: 'number',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vcc
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * vcc-group-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentVbrInfosVbrBgpPeers extends $dara.Model {
  /**
   * @remarks
   * BGP Group ID
   * 
   * @example
   * bgpg-2ze2sit2vakrkapvy****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * BGP peer ID
   * 
   * @example
   * bgp-uf6heugif9enu48rj****
   */
  bgpPeerId?: string;
  /**
   * @remarks
   * Peer AS No.
   * 
   * @example
   * 98765****
   */
  peerAsn?: string;
  /**
   * @remarks
   * BGP peer IP address
   * 
   * @example
   * 169.254.****
   */
  peerIpAddress?: string;
  /**
   * @remarks
   * The status of the BGP peer. Valid values:
   * 
   * *   Pending: pending
   * *   Available: The route is available.
   * *   Modifying: being modified
   * *   Deleting: The IPv4 gateway is being deleted.
   * *   Deleted
   * *   Not Available
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bgpGroupId: 'BgpGroupId',
      bgpPeerId: 'BgpPeerId',
      peerAsn: 'PeerAsn',
      peerIpAddress: 'PeerIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpGroupId: 'string',
      bgpPeerId: 'string',
      peerAsn: 'string',
      peerIpAddress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentVbrInfos extends $dara.Model {
  /**
   * @remarks
   * CEN ID
   * 
   * @example
   * cen-cx0qua8q6cm4z9****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1683250981000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1673578603000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The status of the VBR. Valid values:
   * 
   * *   unconfirmed
   * *   active: The VPN gateway is in a normal state.
   * *   terminating: The connection is being terminated.
   * *   terminated: The connection is terminated.
   * *   recovering: The task is being recovered.
   * *   deleting: The GDN is being deleted.
   * *   Available: The service is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * BGP neighbor information list
   */
  vbrBgpPeers?: GetVccResponseBodyContentVbrInfosVbrBgpPeers[];
  /**
   * @remarks
   * The ID of the border router.
   * 
   * @example
   * vbr-wz96agu9h3d50z****
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      status: 'Status',
      vbrBgpPeers: 'VbrBgpPeers',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      status: 'string',
      vbrBgpPeers: { 'type': 'array', 'itemType': GetVccResponseBodyContentVbrInfosVbrBgpPeers },
      vbrId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vbrBgpPeers)) {
      $dara.Model.validateArray(this.vbrBgpPeers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContentVpdBaseInfo extends $dara.Model {
  /**
   * @remarks
   * Network address segment
   * 
   * @example
   * 172.18.0.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678379917000
   */
  createTime?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-ppdunxzc
   */
  vpdId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance name
   * 
   * @example
   * yzp-rg-test3
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Express Connect circuit access point ID:
   * 
   * *   **ap-cn-wulanchabu-jn-ts-A**: Ulanqab-Jining-A
   * *   **ap-cn-heyuan-yc-ts-SA127**: Heyuan-Yuancheng-A
   * 
   * @example
   * ap-cn-wulanchabu-jn-ts-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * Alibaba Cloud route information list
   */
  aliyunRouterInfo?: GetVccResponseBodyContentAliyunRouterInfo[];
  /**
   * @remarks
   * Whether Lingjun HUB has been bound to a network instance
   * 
   * *   **true**: Bound
   * *   **false**: unbound
   * 
   * @example
   * true
   */
  attachErStatus?: boolean;
  /**
   * @remarks
   * bandwidth
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth of the port.
   * 
   * @example
   * 1G
   */
  bandwidthStr?: string;
  /**
   * @remarks
   * BGP AS number
   * 
   * @example
   * 45644
   */
  bgpAsn?: string;
  /**
   * @remarks
   * BGP CIDR block
   * 
   * @example
   * 10.4.0.0/24
   */
  bgpCidr?: string;
  /**
   * @remarks
   * The ID of the CEN instance; [What is the CEN?](https://help.aliyun.com/document_detail/181681.html)
   * 
   * You can call the [DescribeCens](https://help.aliyun.com/document_detail/468215.htm) to query the information of CEN instances under the current Alibaba Cloud account.
   * 
   * @example
   * cen-m2iskbojlvda5w65fp
   */
  cenId?: string;
  /**
   * @remarks
   * Account to which the CEN belongs
   * 
   * @example
   * 1620939556166279
   */
  cenOwnerId?: string;
  /**
   * @remarks
   * Lingjun Network Routing Information List
   */
  cisRouterInfo?: GetVccResponseBodyContentCisRouterInfo[];
  /**
   * @remarks
   * Commodity code
   * 
   * @example
   * bccluster_cloudconnectionpre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The connection mode. Valid values:
   * 
   * *   **VPC**
   * *   **CENTR**
   * 
   * @example
   * CENTR
   */
  connectionType?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1648085472000
   */
  createTime?: string;
  /**
   * @remarks
   * Current Node
   * 
   * @example
   * task-xxx-node-x
   */
  currentNode?: string;
  /**
   * @remarks
   * Cycle
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * List of bound Lingjun HUB information
   */
  erInfos?: GetVccResponseBodyContentErInfos[];
  /**
   * @remarks
   * The time when the application expired.
   * 
   * @example
   * 1678379917000
   */
  expirationDate?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1648085472000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The billing method for network usage.
   * 
   * *   **PayByTraffic**: pay-by-traffic
   * *   **PayByBandwidth**: pay-by-bandwidth
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The connectivity provider of the Express Connect circuit. Valid values:
   * 
   * *   **CO**: other connectivity providers in the Chinese mainland
   * 
   * @example
   * CO
   */
  lineOperator?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:GetVcc, arn=acs:eflo:cn-heyuan:1263399219805497:vcc/vcc-cn-fhh3yxjwe01, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PREPAY**: subscription
   * *   **POSTPAY**: pay-as-you-go
   * 
   * @example
   * PrePay
   */
  payType?: string;
  /**
   * @remarks
   * The port type of the Express Connect circuit. Valid values:
   * 
   * *   **100GBase-LR**: 100,000 megabytes of single-mode optical port (10 km)
   * 
   * @example
   * 100GBase-LR
   */
  portType?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * *   **Month**: Billed on a monthly basis
   * *   **Year**: Billed on an annual basis
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specification; value:
   * 
   * *   **Large**: Large
   * 
   * @example
   * Large
   */
  spec?: string;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **Available**: Normal.
   * *   **Not Available**: Not available.
   * *   **Executing**: The task is being executed.
   * *   **Deleting**: The account is being deleted
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: GetVccResponseBodyContentTags[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the vSwitch. [Virtual Private Cloud VSwitch](https://help.aliyun.com/document_detail/100380.html).
   * 
   * You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query created vSwitches.
   * 
   * @example
   * vsw-uf6u8473r84e6n1n19he5
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Information list of border routers
   */
  vbrInfos?: GetVccResponseBodyContentVbrInfos[];
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-cqf2xh40101
   */
  vccId?: string;
  /**
   * @remarks
   * The name of the Lingjun connection instance.
   * 
   * @example
   * vcc-heyuan-backup
   */
  vccName?: string;
  /**
   * @remarks
   * Virtual Private Cloud IDs; [What is Virtual Private Cloud](https://help.aliyun.com/document_detail/34217.html)
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0) operation to query the specified VPC.
   * 
   * @example
   * vpc-j6ctp4n75306phv5tmpsm
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun network segment information (applicable to the scene where the old version of Lingjun connection is directly bound to Lingjun network segment)
   */
  vpdBaseInfo?: GetVccResponseBodyContentVpdBaseInfo;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-d3isyds4
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      aliyunRouterInfo: 'AliyunRouterInfo',
      attachErStatus: 'AttachErStatus',
      bandwidth: 'Bandwidth',
      bandwidthStr: 'BandwidthStr',
      bgpAsn: 'BgpAsn',
      bgpCidr: 'BgpCidr',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cisRouterInfo: 'CisRouterInfo',
      commodityCode: 'CommodityCode',
      connectionType: 'ConnectionType',
      createTime: 'CreateTime',
      currentNode: 'CurrentNode',
      duration: 'Duration',
      erInfos: 'ErInfos',
      expirationDate: 'ExpirationDate',
      gmtModified: 'GmtModified',
      internetChargeType: 'InternetChargeType',
      lineOperator: 'LineOperator',
      message: 'Message',
      payType: 'PayType',
      portType: 'PortType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      tenantId: 'TenantId',
      vSwitchId: 'VSwitchId',
      vbrInfos: 'VbrInfos',
      vccId: 'VccId',
      vccName: 'VccName',
      vpcId: 'VpcId',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      aliyunRouterInfo: { 'type': 'array', 'itemType': GetVccResponseBodyContentAliyunRouterInfo },
      attachErStatus: 'boolean',
      bandwidth: 'number',
      bandwidthStr: 'string',
      bgpAsn: 'string',
      bgpCidr: 'string',
      cenId: 'string',
      cenOwnerId: 'string',
      cisRouterInfo: { 'type': 'array', 'itemType': GetVccResponseBodyContentCisRouterInfo },
      commodityCode: 'string',
      connectionType: 'string',
      createTime: 'string',
      currentNode: 'string',
      duration: 'string',
      erInfos: { 'type': 'array', 'itemType': GetVccResponseBodyContentErInfos },
      expirationDate: 'string',
      gmtModified: 'string',
      internetChargeType: 'string',
      lineOperator: 'string',
      message: 'string',
      payType: 'string',
      portType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetVccResponseBodyContentTags },
      tenantId: 'string',
      vSwitchId: 'string',
      vbrInfos: { 'type': 'array', 'itemType': GetVccResponseBodyContentVbrInfos },
      vccId: 'string',
      vccName: 'string',
      vpcId: 'string',
      vpdBaseInfo: GetVccResponseBodyContentVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunRouterInfo)) {
      $dara.Model.validateArray(this.aliyunRouterInfo);
    }
    if(Array.isArray(this.cisRouterInfo)) {
      $dara.Model.validateArray(this.cisRouterInfo);
    }
    if(Array.isArray(this.erInfos)) {
      $dara.Model.validateArray(this.erInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vbrInfos)) {
      $dara.Model.validateArray(this.vbrInfos);
    }
    if(this.vpdBaseInfo && typeof (this.vpdBaseInfo as any).validate === 'function') {
      (this.vpdBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccGrantRuleResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1648085472000
   */
  createTime?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Resource ID
   * 
   * @example
   * grant-rule-jaj34d75h01
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1620939556166277
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vcc-cn-jaj34d75h01
   */
  instanceId?: string;
  /**
   * @remarks
   * Network Instance Name
   * 
   * @example
   * vcc-1
   */
  instanceName?: string;
  /**
   * @remarks
   * Network Product Code:
   * 
   * *   **VPD**: Lingjun CIDR block
   * *   **VCC**: Lingjun Connection
   * 
   * @example
   * VCC
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * Whether the current authorization information has been used; optional values:
   * 
   * *   **true**: Used
   * *   **false**: Not used
   * 
   * @example
   * false
   */
  used?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      product: 'Product',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tenantId: 'TenantId',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      erId: 'string',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      product: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tenantId: 'string',
      used: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccRouteEntryResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1648085472000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * local
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7u***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * System
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * vcc-rte-31ocvdhq
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      gmtModified: 'GmtModified',
      message: 'Message',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
      vccId: 'VccId',
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      gmtModified: 'string',
      message: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
      vccId: 'string',
      vccRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdResponseBodyContentErInfos extends $dara.Model {
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * Restore verifying
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Elastic Router (ER) instance.
   * 
   * @example
   * er-a7rqv1rq
   */
  erId?: string;
  /**
   * @remarks
   * Elastic Router (ER) Instance Name
   * 
   * @example
   * er-1
   */
  erName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the region to which the Elastic Router (ER) belongs.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The number of routing policy.
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * t464p4fql1bog
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      routeMaps: 'RouteMaps',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      createTime: 'string',
      description: 'string',
      erId: 'string',
      erName: 'string',
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      routeMaps: 'number',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdResponseBodyContentTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-subent-region
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * cn-wulanchabu
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Whether the Lingjun HUB(ER) has been bound.
   * 
   * *   **true**: ER is bound.
   * *   **false**: No ER is bound.
   * 
   * @example
   * true
   */
  attachErStatus?: boolean;
  /**
   * @remarks
   * The CIDR block.
   * 
   * @example
   * 10.0.0.0/8
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * The information of the bound Lingjun HUB(ER).
   */
  erInfos?: GetVpdResponseBodyContentErInfos[];
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 2023-10-25 15:57:16
   */
  gmtModified?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The number of NCs.
   * 
   * @example
   * 16
   */
  ncCount?: number;
  /**
   * @remarks
   * Number of Lingjun network interface controller.
   * 
   * @example
   * 1
   */
  networkInterfaceCount?: number;
  /**
   * @remarks
   * The total number of secondary private IP addresses.
   * 
   * @example
   * 10
   */
  privateIpCount?: number;
  /**
   * @remarks
   * The total quota information.
   * 
   * @example
   * 10
   */
  quota?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of additional CIDR blocks.
   */
  secondaryCidrBlocks?: string[];
  /**
   * @remarks
   * Internal Service CIDR block.
   * 
   * @example
   * 169.254.252.0/23
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The current state of the instance.
   * 
   * Valid value:
   * 
   * *   Not Available: Not Available.
   * *   Available: Normal: Available: Normal.
   * *   Deleting: Deleting: Deleting: Deleting.
   * *   Executing: executing: Executing: executing.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The number of subnets.
   * 
   * @example
   * 1
   */
  subnetCount?: number;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: GetVpdResponseBodyContentTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-fuliephf
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the Lingjun CIDR block.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      attachErStatus: 'AttachErStatus',
      cidr: 'Cidr',
      createTime: 'CreateTime',
      erInfos: 'ErInfos',
      gmtModified: 'GmtModified',
      message: 'Message',
      ncCount: 'NcCount',
      networkInterfaceCount: 'NetworkInterfaceCount',
      privateIpCount: 'PrivateIpCount',
      quota: 'Quota',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
      serviceCidr: 'ServiceCidr',
      status: 'Status',
      subnetCount: 'SubnetCount',
      tags: 'Tags',
      tenantId: 'TenantId',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachErStatus: 'boolean',
      cidr: 'string',
      createTime: 'string',
      erInfos: { 'type': 'array', 'itemType': GetVpdResponseBodyContentErInfos },
      gmtModified: 'string',
      message: 'string',
      ncCount: 'number',
      networkInterfaceCount: 'number',
      privateIpCount: 'number',
      quota: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      serviceCidr: 'string',
      status: 'string',
      subnetCount: 'number',
      tags: { 'type': 'array', 'itemType': GetVpdResponseBodyContentTags },
      tenantId: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.erInfos)) {
      $dara.Model.validateArray(this.erInfos);
    }
    if(Array.isArray(this.secondaryCidrBlocks)) {
      $dara.Model.validateArray(this.secondaryCidrBlocks);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdGrantRuleResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1648085472000
   */
  createTime?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Resource ID
   * 
   * @example
   * grant-rule-xxxxxx
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1620939556166277
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vpd-xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Network Instance Name
   * 
   * @example
   * vpd-lingjun
   */
  instanceName?: string;
  /**
   * @remarks
   * Network Product Code:
   * 
   * *   **VPD**: Lingjun CIDR block
   * *   **VCC**: Lingjun Connection
   * 
   * @example
   * VPD
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7u***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Whether the current authorization information has been used; default is false
   * 
   * @example
   * 0
   */
  used?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      product: 'Product',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tenantId: 'TenantId',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      erId: 'string',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      product: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tenantId: 'string',
      used: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdRouteEntryResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * er-bmlqiym1
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * ER
   */
  nextHopType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmv7mcq63uyhq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * BGP
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-ze3na0wf
   */
  vpdId?: string;
  /**
   * @remarks
   * Lingjun CIDR block route entry ID
   * 
   * @example
   * vpd-rte-toekyqel
   */
  vpdRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      gmtModified: 'GmtModified',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
      vpdId: 'VpdId',
      vpdRouteEntryId: 'VpdRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      gmtModified: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
      vpdId: 'string',
      vpdRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeVccResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E30DA7CB-03D0-51EB-8F18-856B99987E18
   */
  requestId?: string;
  /**
   * @remarks
   * Linked Role of Lingjun Connection Instance (AliyunServiceRoleForEfloVcc)
   * 
   * @example
   * CloudConnectionOperationRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListElasticNetworkInterfacesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1601176751000
   */
  createTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * vswitch gateway address
   * 
   * @example
   * 172.16.****
   */
  gateway?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1640187007000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The IP address of the BE cluster.
   * 
   * @example
   * 10.0.0.13
   */
  ip?: string;
  /**
   * @remarks
   * mac address
   * 
   * @example
   * E0:01:A6:4A:6A:D0
   */
  mac?: string;
  /**
   * @remarks
   * vswitch mask bits
   * 
   * @example
   * 24
   */
  mask?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * e01-cn-uax37m1****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-f8z4wr1b41x3qsc9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * network interface controller type, the default type DEFAULT cannot be manually released
   * 
   * Valid value:
   * 
   * *   CUSTOM: custom type.
   * *   DEFAULT: system type.
   * 
   * @example
   * DEFAULT
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-uf6u8473r84e9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-f8ziirfl9k25h2qn7****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      gateway: 'Gateway',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      mac: 'Mac',
      mask: 'Mask',
      message: 'Message',
      nodeId: 'NodeId',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      gateway: 'string',
      gmtModified: 'string',
      ip: 'string',
      mac: 'string',
      mask: 'string',
      message: 'string',
      nodeId: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      status: 'string',
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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

export class ListElasticNetworkInterfacesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * lingjun Elastic Network Interface information list
   */
  data?: ListElasticNetworkInterfacesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListElasticNetworkInterfacesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErAttachmentsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * Whether to cross accounts. Valid values:
   * 
   * *   **true**: The network instance is a cross-account resource.
   * *   **false**: The current network instance is a resource of the current account.
   * 
   * @example
   * false
   */
  across?: boolean;
  /**
   * @remarks
   * Whether to automatically receive all routes from all instances under this Lingjun HUB. Valid values:
   * 
   * *   **true**: received automatically.
   * *   **false**: Not received.
   * 
   * @example
   * true
   */
  autoReceiveAllRoute?: boolean;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1669734207000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB network instance.
   * 
   * @example
   * er-attachment-i1ioibyf
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * The name of the Lingjun HUB network instance.
   * 
   * @example
   * vcc-cn-209300qha01
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB instance.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1640187007000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the network instance. Valid values: **VPD** and **VCC**.
   * 
   * For more information, see [What is Lingjun?](https://help.aliyun.com/document_detail/444430.html)
   * 
   * You can query **Lingjun CIDR blocks** and **Lingjun connections** by [ListVpds](https://help.aliyun.com/document_detail/2331077.html) and [ListVccs](https://help.aliyun.com/document_detail/2399526.html) respectively.
   * 
   * @example
   * vcc-cn-209300qha02
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * vcc-wulanchabu-main
   */
  instanceName?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * *   **VPD**: indicates the Lingjun CIDR block.
   * *   **VCC**: indicates a Lingjun connection.
   * 
   * @example
   * VCC
   */
  instanceType?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * Lingjun HUB region information.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzlki4ehfse4y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1111156667137893
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **Available**: Normal.
   * *   **Not Available**: Not available.
   * *   **Executing**: The task is being executed.
   * *   **Deleting**: The account is being deleted
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      across: 'Across',
      autoReceiveAllRoute: 'AutoReceiveAllRoute',
      createTime: 'CreateTime',
      erAttachmentId: 'ErAttachmentId',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      across: 'boolean',
      autoReceiveAllRoute: 'boolean',
      createTime: 'string',
      erAttachmentId: 'string',
      erAttachmentName: 'string',
      erId: 'string',
      gmtModified: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErAttachmentsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The list of Lingjun HUB network instances.
   */
  data?: ListErAttachmentsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListErAttachmentsResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteEntriesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 100.64.1.100/32
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * er-rte-maysfadg
   */
  erRouteEntryId?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1640930901000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-cn-209300qha01
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzb3n5lgk2ieq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1111156667137893
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * VCC
   */
  routeType?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Synchronizing
   * *   Available
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1111156667137893
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteEntryId: 'ErRouteEntryId',
      gmtModified: 'GmtModified',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteEntryId: 'string',
      gmtModified: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteEntriesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB Route Entry Information List
   */
  data?: ListErRouteEntriesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListErRouteEntriesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteMapsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * Policy behavior; optional values:
   * 
   * *   **permit**: Allow
   * *   **deny**: Prohibited
   * 
   * @example
   * permit
   */
  action?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1601176751000
   */
  createTime?: string;
  /**
   * @remarks
   * Policy description
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * routing policy ID
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1601176751000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Receive Instance ID
   * 
   * @example
   * vpd-9rgxqazc
   */
  receptionInstanceId?: string;
  /**
   * @remarks
   * Receive Instance Name
   * 
   * @example
   * vpd-reception
   */
  receptionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the receiving instance belongs
   * 
   * @example
   * 1620939556166277
   */
  receptionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the received instance. Possible values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * @example
   * VPD
   */
  receptionInstanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * A smaller sequence number indicates a lower priority. When a route is matched, a policy with a higher priority is preferentially matched.
   * 
   * **Valid values: 1001 to 2000**
   * 
   * @example
   * 1001
   */
  routeMapNum?: number;
  /**
   * @remarks
   * Status The status of the instance. Valid values:
   * 
   * *   **Available**
   * *   **Not Available**: Unavailable
   * *   **Executing**: Executing
   * *   **Deleting**: The node is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Release Instance ID
   * 
   * @example
   * vpd-8rgvqazb
   */
  transmissionInstanceId?: string;
  /**
   * @remarks
   * Release Instance Name
   * 
   * @example
   * vpd-transmit
   */
  transmissionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the published instance belongs
   * 
   * @example
   * 1620939556166277
   */
  transmissionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the published instance. Possible values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * @example
   * VPD
   */
  transmissionInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      createTime: 'CreateTime',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      gmtModified: 'GmtModified',
      message: 'Message',
      receptionInstanceId: 'ReceptionInstanceId',
      receptionInstanceName: 'ReceptionInstanceName',
      receptionInstanceOwner: 'ReceptionInstanceOwner',
      receptionInstanceType: 'ReceptionInstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeMapNum: 'RouteMapNum',
      status: 'Status',
      tenantId: 'TenantId',
      transmissionInstanceId: 'TransmissionInstanceId',
      transmissionInstanceName: 'TransmissionInstanceName',
      transmissionInstanceOwner: 'TransmissionInstanceOwner',
      transmissionInstanceType: 'TransmissionInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteMapId: 'string',
      gmtModified: 'string',
      message: 'string',
      receptionInstanceId: 'string',
      receptionInstanceName: 'string',
      receptionInstanceOwner: 'string',
      receptionInstanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeMapNum: 'number',
      status: 'string',
      tenantId: 'string',
      transmissionInstanceId: 'string',
      transmissionInstanceName: 'string',
      transmissionInstanceOwner: 'string',
      transmissionInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteMapsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * routing policy information list
   */
  data?: ListErRouteMapsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListErRouteMapsResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The number of connections to the Lingjun HUB network instance.
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1640930671000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB instance.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The name of the Lingjun HUB instance.
   * 
   * @example
   * er-wulanchabu-main
   */
  erName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1640930671000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmv2m2w43japa
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Number of Lingjun HUB routing policy.
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeMaps: 'RouteMaps',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      createTime: 'string',
      description: 'string',
      erId: 'string',
      erName: 'string',
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeMaps: 'number',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * lingjun hub information list.
   */
  data?: ListErsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListErsResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesByNcdResponseBodyContentInstanceInfos extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * lni-1235****
   */
  instanceId?: string;
  /**
   * @remarks
   * network communication distance
   * 
   * @example
   * 2
   */
  ncd?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ncd: 'Ncd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ncd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesByNcdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * A collection of instances whose network communication distance from the source instance ID does not exceed maxNcd
   */
  instanceInfos?: ListInstancesByNcdResponseBodyContentInstanceInfos[];
  /**
   * @remarks
   * Instance Type
   * 
   * Valid value:
   * 
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * 
   * @example
   * lni
   */
  instanceType?: string;
  /**
   * @remarks
   * Maximum communication distance between nodes
   * 
   * @example
   * 3
   */
  maxNcd?: number;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * lni-1234****
   */
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInfos: 'InstanceInfos',
      instanceType: 'InstanceType',
      maxNcd: 'MaxNcd',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfos: { 'type': 'array', 'itemType': ListInstancesByNcdResponseBodyContentInstanceInfos },
      instanceType: 'string',
      maxNcd: 'number',
      sourceInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfos)) {
      $dara.Model.validateArray(this.instanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLeniPrivateIpAddressesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test_vpn1_pbr_route_54
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1675929918000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the certificate was updated.
   * 
   * @example
   * 1675929918000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * @example
   * sip-8ylg****
   */
  ipName?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP address.
   * 
   * @example
   * 10.0.****
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
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ipName: 'IpName',
      message: 'Message',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ipName: 'string',
      message: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLeniPrivateIpAddressesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListLeniPrivateIpAddressesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListLeniPrivateIpAddressesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLniPrivateIpAddressResponseBodyContentData extends $dara.Model {
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
   * 1651734291000
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
   * sip-1hq1ql7vz
   */
  ipName?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-bp11hq1ql7vza3k4xz7q
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * Secondary private IP address of Lingjun network interface controller
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
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
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
      status: 'Status',
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
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLniPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ListLniPrivateIpAddressResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListLniPrivateIpAddressResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkInterfacesResponseBodyContentDataPrivateIpAddressMacGroup extends $dara.Model {
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
   * Secondary private MAC address.
   * 
   * @example
   * 00:25:9d:00:20:20
   */
  ipAddressMac?: string;
  /**
   * @remarks
   * The unique IP identifier.
   * 
   * @example
   * sip-1asjd3xg
   */
  ipName?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The secondary private IP address.
   * 
   * @example
   * 10.0.0.14
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The status of the cache reserve instance.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipAddressMac: 'IpAddressMac',
      ipName: 'IpName',
      message: 'Message',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipAddressMac: 'string',
      ipName: 'string',
      message: 'string',
      privateIpAddress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkInterfacesResponseBodyContentDataSubnetBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The network segment of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * For more information about CIDR blocks, see the [What is CIDR?](https://www.alibabacloud.com/help/doc-detail/40637.htm#title-gu4-uzk-12r) section in the "Network FAQ" topic.
   * 
   * This parameter is left empty by default.
   * 
   * @example
   * 10.0.0.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1623656472000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Subnet instance.
   * 
   * @example
   * subnet-yjnqn5ef
   */
  subnetId?: string;
  /**
   * @remarks
   * The name of the Subnet instance.
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      subnetId: 'string',
      subnetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkInterfacesResponseBodyContentDataVpdBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The network segment of Lingjun network segment (VPD).
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD. This parameter is left empty by default.
   * 
   * @example
   * 10.0.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1668158213000
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-d3isyds4
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the VPD instance.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkInterfacesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1669734207000
   */
  createTime?: string;
  /**
   * @remarks
   * The port number of the AD server.
   */
  ethernet?: string[];
  /**
   * @remarks
   * The gateway.
   * 
   * @example
   * 10.0.0.253
   */
  gateway?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.0.0.13
   */
  ip?: string;
  /**
   * @remarks
   * The NC type.
   * 
   * Valid value:
   * 
   * *   CUSTOM_LNI_INTEGRATION: two-network one-in-one architecture Lingjun hosting network interface controller.
   * *   CPU: CPU machine.
   * *   ELASTIC_6.2: Machine
   * *   GPU: GPU machine.
   * *   DEFAULT: the old CPU machine.
   * *   CUSTOM_LNI: two network separation architecture Lingjun hosting network interface controller.
   * 
   * @example
   * GPU
   */
  ncType?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID.
   * 
   * @example
   * lni-2ze50voovmtswn328ogm
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * bond0
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The ID of the machine to which the instance belongs.
   * 
   * @example
   * 2d53f5c204e7476dae69177e7fa6f19c
   */
  nodeId?: string;
  /**
   * @remarks
   * Secondary Private IP\\&MAC Address Collection
   */
  privateIpAddressMacGroup?: ListNetworkInterfacesResponseBodyContentDataPrivateIpAddressMacGroup[];
  /**
   * @remarks
   * network interface controller private secondary IP quota.
   * 
   * @example
   * 6
   */
  quota?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The address of the service network interface controller.
   * 
   * @example
   * 00-ff-84-15-ba-67
   */
  serviceMac?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun subnet (Subnet) basic information.
   */
  subnetBaseInfo?: ListNetworkInterfacesResponseBodyContentDataSubnetBaseInfo;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * Lingjun network segment (VPD) basic information.
   */
  vpdBaseInfo?: ListNetworkInterfacesResponseBodyContentDataVpdBaseInfo;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ethernet: 'Ethernet',
      gateway: 'Gateway',
      ip: 'Ip',
      ncType: 'NcType',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      nodeId: 'NodeId',
      privateIpAddressMacGroup: 'PrivateIpAddressMacGroup',
      quota: 'Quota',
      regionId: 'RegionId',
      serviceMac: 'ServiceMac',
      status: 'Status',
      subnetBaseInfo: 'SubnetBaseInfo',
      tenantId: 'TenantId',
      vpdBaseInfo: 'VpdBaseInfo',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ethernet: { 'type': 'array', 'itemType': 'string' },
      gateway: 'string',
      ip: 'string',
      ncType: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      nodeId: 'string',
      privateIpAddressMacGroup: { 'type': 'array', 'itemType': ListNetworkInterfacesResponseBodyContentDataPrivateIpAddressMacGroup },
      quota: 'number',
      regionId: 'string',
      serviceMac: 'string',
      status: 'string',
      subnetBaseInfo: ListNetworkInterfacesResponseBodyContentDataSubnetBaseInfo,
      tenantId: 'string',
      vpdBaseInfo: ListNetworkInterfacesResponseBodyContentDataVpdBaseInfo,
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ethernet)) {
      $dara.Model.validateArray(this.ethernet);
    }
    if(Array.isArray(this.privateIpAddressMacGroup)) {
      $dara.Model.validateArray(this.privateIpAddressMacGroup);
    }
    if(this.subnetBaseInfo && typeof (this.subnetBaseInfo as any).validate === 'function') {
      (this.subnetBaseInfo as any).validate();
    }
    if(this.vpdBaseInfo && typeof (this.vpdBaseInfo as any).validate === 'function') {
      (this.vpdBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkInterfacesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListNetworkInterfacesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNetworkInterfacesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInfosForPodResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster-****
   */
  clusterId?: string;
  /**
   * @remarks
   * Lingjun Gaomi network interface controller quota
   * 
   * @example
   * 10
   */
  hdeniQuota?: number;
  /**
   * @remarks
   * Lingjun Elastic Network Interface quota, excluding system type
   * 
   * @example
   * 10
   */
  leniQuota?: number;
  /**
   * @remarks
   * Lingjun Elastic Network Interface Secondary Private IP Quota
   * 
   * @example
   * 10
   */
  leniSipQuota?: number;
  /**
   * @remarks
   * Lingjun network interface controller Secondary Private IP Quota
   * 
   * @example
   * 10
   */
  lniSipQuota?: number;
  /**
   * @remarks
   * The ID of the node for this operation.
   * 
   * @example
   * node-be70****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * List of VSwitches to which IP addresses can be applied for this node
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The ID of the Virtual Private Cloud to which the current node belongs.
   * 
   * @example
   * vpc-j6ctp4n75306****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hdeniQuota: 'HdeniQuota',
      leniQuota: 'LeniQuota',
      leniSipQuota: 'LeniSipQuota',
      lniSipQuota: 'LniSipQuota',
      nodeId: 'NodeId',
      regionId: 'RegionId',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hdeniQuota: 'number',
      leniQuota: 'number',
      leniSipQuota: 'number',
      lniSipQuota: 'number',
      nodeId: 'string',
      regionId: 'string',
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * rg-subnet
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the VPN connection.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * subnet-group-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponseBodyContentDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-subnet
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * subnet-group-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponseBodyContentDataVpdBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPD.
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
   * 
   * @example
   * 10.0.0.0/8
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-d3isyds4
   */
  vpdId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance name
   * 
   * @example
   * yzp-rg-test3
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * @example
   * 172.18.0.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Number of NCs
   * 
   * @example
   * 16
   */
  ncCount?: number;
  /**
   * @remarks
   * Number of Lingjun network interface controller
   * 
   * @example
   * 1
   */
  networkInterfaceCount?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **Available**: Normal
   * *   **Not Available**: Unavailable
   * *   **Executing**: Executing
   * *   **Deleting**: The node is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun subnet instance ID
   * 
   * @example
   * subnet-c6wci55i
   */
  subnetId?: string;
  /**
   * @remarks
   * Lingjun subnet instance name
   * 
   * @example
   * yzp-rg-test3
   */
  subnetName?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: ListSubnetsResponseBodyContentDataTags[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **If you do not set this field for a common type**
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * OOB
   */
  type?: string;
  /**
   * @remarks
   * vpd basic information
   */
  vpdBaseInfo?: ListSubnetsResponseBodyContentDataVpdBaseInfo;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-ze3na0wf
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      gmtModified: 'GmtModified',
      message: 'Message',
      ncCount: 'NcCount',
      networkInterfaceCount: 'NetworkInterfaceCount',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
      tags: 'Tags',
      tenantId: 'TenantId',
      type: 'Type',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      gmtModified: 'string',
      message: 'string',
      ncCount: 'number',
      networkInterfaceCount: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      subnetId: 'string',
      subnetName: 'string',
      tags: { 'type': 'array', 'itemType': ListSubnetsResponseBodyContentDataTags },
      tenantId: 'string',
      type: 'string',
      vpdBaseInfo: ListSubnetsResponseBodyContentDataVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vpdBaseInfo && typeof (this.vpdBaseInfo as any).validate === 'function') {
      (this.vpdBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun subnet information list
   */
  data?: ListSubnetsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSubnetsResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccFlowInfosResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The direction.
   * 
   * @example
   * OUT
   */
  direction?: string;
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * @example
   * passBytesRate
   */
  metricName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Time
   * 
   * @example
   * 1689749749000
   */
  timestamp?: number;
  /**
   * @remarks
   * Value
   * 
   * @example
   * 123
   */
  value?: number;
  /**
   * @remarks
   * Lingjun Connection ID
   * 
   * @example
   * vcc-cn-zvp2w******
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      metricName: 'MetricName',
      regionId: 'RegionId',
      timestamp: 'Timestamp',
      value: 'Value',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      metricName: 'string',
      regionId: 'string',
      timestamp: 'number',
      value: 'number',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccFlowInfosResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Connection Traffic Information
   */
  data?: ListVccFlowInfosResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVccFlowInfosResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccGrantRulesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Cross-account authorization information Instance ID
   * 
   * @example
   * grant-rule-jpumgwvp
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1013666993027780
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vcc-cn-jaj33d1kb05
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * vcc-1
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the authorized product. Valid values:
   * 
   * *   **VPD**: indicates a VPD instance of the Lingjun network segment.
   * *   **VCC**: indicates that Lingjun connects to the VCC instance.
   * 
   * @example
   * VCC
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Whether the current cross-account resource has been bound to the cross-account Lingjun HUB. Valid values:
   * 
   * *   **true**: Used
   * *   **false**: Not used
   * 
   * @example
   * true
   */
  used?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      product: 'Product',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tenantId: 'TenantId',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      erId: 'string',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      product: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tenantId: 'string',
      used: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccGrantRulesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * List of cross-account authorization information of Lingjun connection
   */
  data?: ListVccGrantRulesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVccGrantRulesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccRouteEntriesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 10.192.32.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1642745758000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1655449505171
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * BGP
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * vcc-rte-maysfadg
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      gmtModified: 'GmtModified',
      message: 'Message',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
      vccId: 'VccId',
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      gmtModified: 'string',
      message: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
      vccId: 'string',
      vccRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccRouteEntriesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * List of Lingjun Connection Route Entries
   */
  data?: ListVccRouteEntriesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVccRouteEntriesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vcc
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the VPN connection.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * vcc-group-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContentDataErInfos extends $dara.Model {
  /**
   * @remarks
   * Connections
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test_api_coverage
   */
  description?: string;
  /**
   * @remarks
   * Elastic Router ID
   * 
   * @example
   * er-a7rqv1rq
   */
  erId?: string;
  /**
   * @remarks
   * ER instance name
   * 
   * @example
   * er-1
   */
  erName?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Primary Zone
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ER region information
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Number of routing policy
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166277
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      routeMaps: 'RouteMaps',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      createTime: 'string',
      description: 'string',
      erId: 'string',
      erName: 'string',
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      routeMaps: 'number',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContentDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vcc
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * vcc-group-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContentDataVpdBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPD.
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
   * 
   * @example
   * 10.0.0.0/13
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1668158213000
   */
  createTime?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-9n7ioqrp
   */
  vpdId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance name
   * 
   * @example
   * yzp-rg-test3
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * Express Connect circuit access point ID:
   * 
   * *   **ap-cn-wulanchabu-jn-ts-A**: Ulanqab-Jining-A
   * *   **ap-cn-heyuan-yc-ts-SA127**: Heyuan-Yuancheng-A
   * 
   * @example
   * ap-cn-wulanchabu-jn-ts-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * The bandwidth of the port.
   * 
   * @example
   * 1000
   */
  bandwidthStr?: string;
  /**
   * @remarks
   * bgp as number
   * 
   * @example
   * bgpAsn
   */
  bgpAsn?: string;
  /**
   * @remarks
   * bgp network segment
   * 
   * @example
   * 172.16.128.0/24
   */
  bgpCidr?: string;
  /**
   * @remarks
   * The ID of the CEN instance; [What is the CEN?](https://help.aliyun.com/document_detail/181681.html)
   * 
   * You can call the [DescribeCens](https://help.aliyun.com/document_detail/468215.htm) to query the information of CEN instances under the current Alibaba Cloud account.
   * 
   * @example
   * cen-w15qot0pfvs83pkckj
   */
  cenId?: string;
  /**
   * @remarks
   * Account to which cen belongs
   * 
   * @example
   * 1238685214107736
   */
  cenOwnerId?: string;
  /**
   * @remarks
   * Commodity code
   * 
   * @example
   * bccluster_cloudconnectionpre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The connection mode. Valid values:
   * 
   * *   **VPC**
   * *   **CENTR**
   * 
   * @example
   * CENTR
   */
  connectionType?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Current process node
   * 
   * @example
   * test-xxxx-node-x
   */
  currentNode?: string;
  /**
   * @remarks
   * List of bound Lingjun HUB information
   */
  erInfos?: ListVccsResponseBodyContentDataErInfos[];
  /**
   * @remarks
   * The time when the application expired.
   * 
   * @example
   * 1678273219000
   */
  expirationDate?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The connectivity provider of the Express Connect circuit. Valid values:
   * 
   * *   **CO**: other connectivity providers in the Chinese mainland
   * 
   * @example
   * CO
   */
  lineOperator?: string;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * some message
   */
  message?: string;
  /**
   * @remarks
   * The port type of the Express Connect circuit. Valid values:
   * 
   * *   **100GBase-LR**: 100,000 megabytes of single-mode optical port (10 km)
   * 
   * @example
   * 100GBase-LR
   */
  portType?: string;
  /**
   * @remarks
   * Process progress; value returns 0 to 1; not started is null
   * 
   * @example
   * 1
   */
  rate?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The compute specification.
   * 
   * @example
   * Large
   */
  spec?: string;
  /**
   * @remarks
   * The state of the rule.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: ListVccsResponseBodyContentDataTags[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * task-cd544092-ed0a-49e9-83eb-e8c94770dccf
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1620939556166279
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The name of the Lingjun connection instance.
   * 
   * @example
   * vcc-heyuan-backup
   */
  vccName?: string;
  /**
   * @remarks
   * Virtual Private Cloud IDs; [What is Virtual Private Cloud](https://help.aliyun.com/document_detail/34217.html)
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0) operation to query the specified VPC.
   * 
   * @example
   * vpc-f8ziirfl9k25h2qn7y4f8
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun network segment information (applicable to the scene where the old version of Lingjun connection is directly bound to Lingjun network segment)
   */
  vpdBaseInfo?: ListVccsResponseBodyContentDataVpdBaseInfo;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      bandwidthStr: 'BandwidthStr',
      bgpAsn: 'BgpAsn',
      bgpCidr: 'BgpCidr',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      commodityCode: 'CommodityCode',
      connectionType: 'ConnectionType',
      createTime: 'CreateTime',
      currentNode: 'CurrentNode',
      erInfos: 'ErInfos',
      expirationDate: 'ExpirationDate',
      gmtModified: 'GmtModified',
      lineOperator: 'LineOperator',
      message: 'Message',
      portType: 'PortType',
      rate: 'Rate',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      vccId: 'VccId',
      vccName: 'VccName',
      vpcId: 'VpcId',
      vpdBaseInfo: 'VpdBaseInfo',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      bandwidthStr: 'string',
      bgpAsn: 'string',
      bgpCidr: 'string',
      cenId: 'string',
      cenOwnerId: 'string',
      commodityCode: 'string',
      connectionType: 'string',
      createTime: 'string',
      currentNode: 'string',
      erInfos: { 'type': 'array', 'itemType': ListVccsResponseBodyContentDataErInfos },
      expirationDate: 'string',
      gmtModified: 'string',
      lineOperator: 'string',
      message: 'string',
      portType: 'string',
      rate: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListVccsResponseBodyContentDataTags },
      taskId: 'string',
      tenantId: 'string',
      vccId: 'string',
      vccName: 'string',
      vpcId: 'string',
      vpdBaseInfo: ListVccsResponseBodyContentDataVpdBaseInfo,
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.erInfos)) {
      $dara.Model.validateArray(this.erInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vpdBaseInfo && typeof (this.vpdBaseInfo as any).validate === 'function') {
      (this.vpdBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Connection Information List
   */
  data?: ListVccsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVccsResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdGrantRulesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1643013506000
   */
  createTime?: string;
  /**
   * @remarks
   * The current network sample is authorized to the specified Lingjun HUB sample ID.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorization Entry ID
   * 
   * @example
   * grant-rule-8rgvqazb
   */
  grantRuleId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the current instance is authorized.
   * 
   * @example
   * 1672372231790
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-8rgvqazb
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * vpd-1
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the authorized product. Valid values:
   * 
   * *   **VPD**: indicates a VPD instance of the Lingjun network segment.
   * *   **VCC**: indicates that Lingjun connects to the VCC instance.
   * 
   * The caller does not need to specify.
   * 
   * @example
   * VPD
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Whether the current authorized instance has been bound
   * 
   * @example
   * true
   */
  used?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      product: 'Product',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tenantId: 'TenantId',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      erId: 'string',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      product: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tenantId: 'string',
      used: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdGrantRulesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun CIDR block authorization information list
   */
  data?: ListVpdGrantRulesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVpdGrantRulesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdRouteEntriesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * er-bmlqiym1
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * ER
   */
  nextHopType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmxhucx5ewuwy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1655449505171
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * BGP
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * vpd-rte-toekyqel
   */
  vpdRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      gmtModified: 'GmtModified',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
      vpdId: 'VpdId',
      vpdRouteEntryId: 'VpdRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      gmtModified: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
      vpdId: 'string',
      vpdRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdRouteEntriesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun CIDR block route entry list
   */
  data?: ListVpdRouteEntriesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVpdRouteEntriesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the VPN attachment.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vpd-region
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the VPN connection.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * wulanchabu
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponseBodyContentDataErInfos extends $dara.Model {
  /**
   * @remarks
   * The number of connections.
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 2023-12-26 20:16:36
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Elastic Router (ER) instance.
   * 
   * @example
   * er-63vzm0fw
   */
  erId?: string;
  /**
   * @remarks
   * The name of the Lingjun HUB(ER) instance.
   * 
   * @example
   * er-1
   */
  erName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 2023-12-26 20:16:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The supported region.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The number of routing policy.
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1620939556166277
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      routeMaps: 'RouteMaps',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      createTime: 'string',
      description: 'string',
      erId: 'string',
      erName: 'string',
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      routeMaps: 'number',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponseBodyContentDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * You cannot specify an empty string as a tag key. It can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag-vpd-region
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each key-value pair must be unique. You can specify values for at most 20 tag keys in each call.
   * 
   * @example
   * cn-wulanchabu
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPD.
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
   * 
   * @example
   * 10.0.0.0/8
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1678273219000
   */
  createTime?: string;
  /**
   * @remarks
   * Dependencies.
   */
  dependence?: { [key: string]: any };
  /**
   * @remarks
   * The information list of the bound Lingjun HUB(ER).
   */
  erInfos?: ListVpdsResponseBodyContentDataErInfos[];
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * nc quantity.
   * 
   * @example
   * 16
   */
  ncCount?: number;
  /**
   * @remarks
   * Number of Lingjun network interface controller
   * 
   * @example
   * 1
   */
  networkInterfaceCount?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of your Alibaba Cloud resource group.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of additional CIDR blocks.
   */
  secondaryCidrBlocks?: string[];
  /**
   * @remarks
   * The Service CIDR block.
   * 
   * @example
   * 169.254.252.0/23
   */
  serviceCidr?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The number of subnets.
   * 
   * @example
   * 1
   */
  subnetCount?: number;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tags?: ListVpdsResponseBodyContentDataTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-lg4dppgi
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the VPD.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      dependence: 'Dependence',
      erInfos: 'ErInfos',
      gmtModified: 'GmtModified',
      message: 'Message',
      ncCount: 'NcCount',
      networkInterfaceCount: 'NetworkInterfaceCount',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
      serviceCidr: 'ServiceCidr',
      status: 'Status',
      subnetCount: 'SubnetCount',
      tags: 'Tags',
      tenantId: 'TenantId',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      dependence: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      erInfos: { 'type': 'array', 'itemType': ListVpdsResponseBodyContentDataErInfos },
      gmtModified: 'string',
      message: 'string',
      ncCount: 'number',
      networkInterfaceCount: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      serviceCidr: 'string',
      status: 'string',
      subnetCount: 'number',
      tags: { 'type': 'array', 'itemType': ListVpdsResponseBodyContentDataTags },
      tenantId: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    if(this.dependence) {
      $dara.Model.validateMap(this.dependence);
    }
    if(Array.isArray(this.erInfos)) {
      $dara.Model.validateArray(this.erInfos);
    }
    if(Array.isArray(this.secondaryCidrBlocks)) {
      $dara.Model.validateArray(this.secondaryCidrBlocks);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListVpdsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVpdsResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceNcdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Instance 1ID
   * 
   * @example
   * lni-1235****
   */
  instanceId1?: string;
  /**
   * @remarks
   * Instance 2ID
   * 
   * @example
   * lni-1234****
   */
  instanceId2?: string;
  /**
   * @remarks
   * Instance Type
   * 
   * Valid value:
   * 
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * 
   * @example
   * lni
   */
  instanceType?: string;
  /**
   * @remarks
   * network communication distance between instances
   * 
   * @example
   * 1
   */
  ncd?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId1: 'InstanceId1',
      instanceId2: 'InstanceId2',
      instanceType: 'InstanceType',
      ncd: 'Ncd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId1: 'string',
      instanceId2: 'string',
      instanceType: 'string',
      ncd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssignPrivateIpAddressResponseBodyContent extends $dara.Model {
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
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-bp164jwjpdq4lnsy83s5
   */
  networkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipName: 'string',
      networkInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssociateVpdCidrBlockResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-ze3na0wf
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignLeniPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * @example
   * sip-dqvs****
   */
  ipName?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      ipName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateElasticNetworkInterfaceResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Node ID
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLeniPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * @example
   * sip-8ylg****
   */
  ipName?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      ipName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubnetResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The subnet instance ID.
   * 
   * @example
   * subnet-yuvn29bn
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateVccResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-2r42v22cn03
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpdResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-lg4dppgi
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignLeniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotent identifier.
   * 
   * @example
   * 3fd79d62-ab1d-11ec-9a53-0242ac110004
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the response code.
   * 
   * @example
   * wuhuaiyu
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private network IP (automatically assigned by default).
   * 
   * @example
   * 10.0.****
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignLeniPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * >  This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: AssignLeniPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: AssignLeniPrivateIpAddressResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignLeniPrivateIpAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssignLeniPrivateIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssignLeniPrivateIpAddressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to assign a mac address.
   * 
   * @example
   * true
   */
  assignMac?: boolean;
  /**
   * @remarks
   * By default, popApi is not ignored and idempotent
   * 
   * @example
   * 3fd79d62-ab1d-11ec-9a53-0242ac110004
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the network interface controller.
   * 
   * This parameter is required.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The secondary private IP address.
   * 
   * @example
   * 10.0.6.194
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The default value is false. If you set the value to true, the secondary private IP address application process can be accelerated.
   * 
   * >  For more information, submit a ticket.
   * 
   * @example
   * false
   */
  skipConfig?: boolean;
  /**
   * @remarks
   * It belongs to the Lingjun subnet.
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      assignMac: 'AssignMac',
      clientToken: 'ClientToken',
      description: 'Description',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      skipConfig: 'SkipConfig',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignMac: 'boolean',
      clientToken: 'string',
      description: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      skipConfig: 'boolean',
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

export class AssignPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: AssignPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: AssignPrivateIpAddressResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssignPrivateIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssignPrivateIpAddressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVpdCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The additional CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/12
   */
  secondaryCidrBlock?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-omqutbff
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      secondaryCidrBlock: 'SecondaryCidrBlock',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      secondaryCidrBlock: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVpdCidrBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: AssociateVpdCidrBlockResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: AssociateVpdCidrBlockResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVpdCidrBlockResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateVpdCidrBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateVpdCidrBlockResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachElasticNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      nodeId: 'NodeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      nodeId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachElasticNetworkInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response body
   * 
   * @example
   * []
   */
  content?: any;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 039C3C3A-3C37-5672-80D5-D8CD48C676D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachElasticNetworkInterfaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachElasticNetworkInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachElasticNetworkInterfaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The POP API is not ignored by default and is used for idempotence.
   * 
   * @example
   * 3fd79d62-ab1d-11ec-9a53-0242ac110004
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the response code.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Whether to enable the jumbo frame capability
   * 
   * @example
   * True
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * The ID of the Lingjun node.
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-wz9fj2s3o21nw2****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-t4nahb0pxck****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * >  If the NodeId parameter is empty, the VpcId parameter is required. If the NodeId parameter is not empty, the VpcId parameter is optional.
   * 
   * @example
   * vpc-uf6aa4ddo97fr****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      enableJumboFrame: 'EnableJumboFrame',
      nodeId: 'NodeId',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      enableJumboFrame: 'boolean',
      nodeId: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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

export class CreateElasticNetworkInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: CreateElasticNetworkInterfaceResponseBodyContent;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateElasticNetworkInterfaceResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticNetworkInterfaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateElasticNetworkInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateElasticNetworkInterfaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Lingjun HUB Name
   * 
   * This parameter is required.
   * 
   * @example
   * er-wulanchabu-main
   */
  erName?: string;
  /**
   * @remarks
   * Primary Zone
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmyuzlx2iihcy
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      erName: 'ErName',
      masterZoneId: 'MasterZoneId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      erName: 'string',
      masterZoneId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: CreateErResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateErResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateErResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateErResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to automatically receive all routes from all instances under the Lingjun HUB. Valid values:
   * 
   * *   **true**: received automatically.
   * *   **false**: Not received.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoReceiveAllRoute?: boolean;
  /**
   * @remarks
   * The name of the network instance connection.
   * 
   * This parameter is required.
   * 
   * @example
   * er-attachemnt-vpd-xksd2obl
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * Lingjun HUB ID.
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the network instance. Valid values: **VPD** and **VCC**.
   * 
   * For more information, see [What is Lingjun?](https://help.aliyun.com/document_detail/444430.html)
   * 
   * You can query **Lingjun CIDR Block** and **Lingjun Connection** by [ListVpds](https://help.aliyun.com/document_detail/2331077.html) and [ListVccs](https://help.aliyun.com/document_detail/2399526.html?) respectively.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-xksd2obl
   */
  instanceId?: string;
  /**
   * @remarks
   * The category of the instance. Valid values:
   * 
   * *   **VPD**: indicates the Lingjun CIDR block.
   * *   **VCC**: indicates a Lingjun connection.
   * 
   * This parameter is required.
   * 
   * @example
   * VPD
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the resource belongs. This parameter is required for cross-account resources.
   * 
   * @example
   * 1620939556166277
   */
  resourceTenantId?: string;
  static names(): { [key: string]: string } {
    return {
      autoReceiveAllRoute: 'AutoReceiveAllRoute',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      resourceTenantId: 'ResourceTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReceiveAllRoute: 'boolean',
      erAttachmentName: 'string',
      erId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      resourceTenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: CreateErAttachmentResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is displayed.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DBAD15D6-3F47-5B36-8A92-57C2919D13D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateErAttachmentResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErAttachmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateErAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateErAttachmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * Policy description
   * 
   * @example
   * terraform-example
   */
  description?: string;
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-xlhsvdvt
   */
  receptionInstanceId?: string;
  /**
   * @remarks
   * The tenant to which the route receiving instance belongs.
   * 
   * @example
   * 1620939556166277
   */
  receptionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the destination instance. Valid values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * This parameter is required.
   * 
   * @example
   * VPD
   */
  receptionInstanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Policy behavior; optional values:
   * 
   * *   **permit**: Allow
   * *   **deny**: Rejected
   * 
   * This parameter is required.
   * 
   * @example
   * permit
   */
  routeMapAction?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * A smaller sequence number indicates a lower priority. When a route is matched, a policy with a higher priority is preferentially matched.
   * 
   * **Valid values: 1001 to 2000**
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  routeMapNum?: number;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-xlsjsdvt
   */
  transmissionInstanceId?: string;
  /**
   * @remarks
   * The tenant to which the route publish instance belongs
   * 
   * @example
   * 1620939556166277
   */
  transmissionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * This parameter is required.
   * 
   * @example
   * VPD
   */
  transmissionInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      receptionInstanceId: 'ReceptionInstanceId',
      receptionInstanceOwner: 'ReceptionInstanceOwner',
      receptionInstanceType: 'ReceptionInstanceType',
      regionId: 'RegionId',
      routeMapAction: 'RouteMapAction',
      routeMapNum: 'RouteMapNum',
      transmissionInstanceId: 'TransmissionInstanceId',
      transmissionInstanceOwner: 'TransmissionInstanceOwner',
      transmissionInstanceType: 'TransmissionInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      erId: 'string',
      receptionInstanceId: 'string',
      receptionInstanceOwner: 'string',
      receptionInstanceType: 'string',
      regionId: 'string',
      routeMapAction: 'string',
      routeMapNum: 'number',
      transmissionInstanceId: 'string',
      transmissionInstanceOwner: 'string',
      transmissionInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErRouteMapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if Resource Access Management (RAM) authentication failed.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: CreateErRouteMapResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 039C3C3A-3C37-5672-80D5-D8CD48C676D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateErRouteMapResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateErRouteMapResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateErRouteMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateErRouteMapResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the Subnet.
   * 
   * *   The network segment of the subnet must be a proper subset of the network segment of Lingjun to which it belongs, and the mask must be between 16 bits and 29 bits, which can provide 8 to 65536 addresses. For example, the CIDR block of the Lingjun CIDR block is 192.168.0.0/16, and the CIDR blocks of the subnets under the Lingjun CIDR block are 192.168.0.0/17 to 192.168.0.0/29.
   * *   The first and last three IP addresses of each subnet segment are reserved by the system. For example, the CIDR blocks of the subnet are 192.168.1.0/24,192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun subnet instance name
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: CreateSubnetRequestTag[];
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **If you do not set this field for a common type**
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * OOB
   */
  type?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-xcuhjyrj
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      regionId: 'RegionId',
      subnetName: 'SubnetName',
      tag: 'Tag',
      type: 'Type',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      regionId: 'string',
      subnetName: 'string',
      tag: { 'type': 'array', 'itemType': CreateSubnetRequestTag },
      type: 'string',
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubnetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: CreateSubnetResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateSubnetResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubnetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSubnetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSubnetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccRequest extends $dara.Model {
  /**
   * @remarks
   * Enabled access to cloud services. Optional values:
   * 
   * *   **true**: Enable access to cloud services
   * *   **false**: Do not enable access to cloud services
   * 
   * @example
   * true
   */
  accessCouldService?: boolean;
  /**
   * @remarks
   * The bandwidth. Unit: Mbit /s. The minimum value is 1000, representing 1Gbps bandwidth; the maximum value is 400000, representing 400Gbps bandwidth.
   * 
   * >  1Gbps = 1000Mbps
   * 
   * @example
   * 1000
   */
  bandwidth?: number;
  /**
   * @remarks
   * bgp as number
   * 
   * @example
   * bgpAsn
   */
  bgpAsn?: number;
  /**
   * @remarks
   * Internet segment, on-premises input, off-premises default
   * 
   * @example
   * 10.0.0.0/24
   */
  bgpCidr?: string;
  /**
   * @remarks
   * CEN Instance ID
   * 
   * @example
   * cen-bkiw0x1347roekr7f2
   */
  cenId?: string;
  /**
   * @remarks
   * Account to which cen belongs
   * 
   * @example
   * 1511928242963727
   */
  cenOwnerId?: string;
  /**
   * @remarks
   * The connection mode. Valid values:
   * 
   * *   **VPC**
   * *   **CEN (CENTR)**
   * 
   * @example
   * CENTR
   */
  connectionType?: string;
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aeky5f3qx6ceapq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: CreateVccRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch. [Virtual Private Cloud VSwitch](https://help.aliyun.com/document_detail/100380.html).
   * 
   * You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query created vSwitches.
   * 
   * @example
   * vsw-t4nahb0pxckgktx1kot8q
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * Lingjun Connection Name
   * 
   * @example
   * test
   */
  vccName?: string;
  /**
   * @remarks
   * Virtual Private Cloud IDs; [What is Virtual Private Cloud](https://help.aliyun.com/document_detail/34217.html)
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0) operation to query the specified VPC.
   * 
   * @example
   * vpc-uf6aa4ddo97frj22tgp52
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-t2jseldp
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID of the disk.
   * 
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessCouldService: 'AccessCouldService',
      bandwidth: 'Bandwidth',
      bgpAsn: 'BgpAsn',
      bgpCidr: 'BgpCidr',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      connectionType: 'ConnectionType',
      description: 'Description',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vccId: 'VccId',
      vccName: 'VccName',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCouldService: 'boolean',
      bandwidth: 'number',
      bgpAsn: 'number',
      bgpCidr: 'string',
      cenId: 'string',
      cenOwnerId: 'string',
      connectionType: 'string',
      description: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateVccRequestTag },
      vSwitchId: 'string',
      vccId: 'string',
      vccName: 'string',
      vpcId: 'string',
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  content?: CreateVccResponseBodyContent;
  /**
   * @remarks
   * response message, if the success request is
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 039C3C3A-3C37-5672-80D5-D8CD48C676D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateVccResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVccResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccGrantRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1620939556166277
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-8rgvqazb
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccGrantRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * {}
   */
  content?: CreateVccGrantRuleResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateVccGrantRuleResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccGrantRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVccGrantRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVccGrantRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 192.168.98.112/28
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      regionId: 'RegionId',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      regionId: 'string',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  content?: CreateVccRouteEntryResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 039C3C3A-3C37-5672-80D5-D8CD48C676D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateVccRouteEntryResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVccRouteEntryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVccRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVccRouteEntryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VPD.
   * 
   * *   We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other.
   * *   You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/8
   */
  cidr?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Lingjun subnet information list
   */
  subnets?: CreateVpdRequestSubnets[];
  /**
   * @remarks
   * A tag.
   */
  tag?: CreateVpdRequestTag[];
  /**
   * @remarks
   * Lingjun CIDR block instance name
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subnets: 'Subnets',
      tag: 'Tag',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subnets: { 'type': 'array', 'itemType': CreateVpdRequestSubnets },
      tag: { 'type': 'array', 'itemType': CreateVpdRequestTag },
      vpdName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subnets)) {
      $dara.Model.validateArray(this.subnets);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: CreateVpdResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DBAD15D6-3F47-5B36-8A92-57C2919D13D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateVpdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVpdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdGrantRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1013666993027780
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-8rgvqazb
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdGrantRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * {}
   */
  content?: CreateVpdGrantRuleResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * DBAD15D6-3F47-5B36-8A92-57C2919D13D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: CreateVpdGrantRuleResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpdGrantRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVpdGrantRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVpdGrantRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * By default, popApi is not ignored and idempotent
   * 
   * @example
   * 141cccd6-dfbd-11ec-b8e8-0242ac110003
   */
  clientToken?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      elasticNetworkInterfaceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticNetworkInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: DeleteElasticNetworkInterfaceResponseBodyContent;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-645C88B9009C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: DeleteElasticNetworkInterfaceResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticNetworkInterfaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteElasticNetworkInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteElasticNetworkInterfaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteErRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteErResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response body
   * 
   * @example
   * {}
   */
  content?: any;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteErResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteErResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteErResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteErAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * er-attachment-5n3nsmvl
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * Lingjun HUB Id
   * 
   * This parameter is required.
   * 
   * @example
   * er-opy1wrfv
   */
  erId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erAttachmentId: 'ErAttachmentId',
      erId: 'ErId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAttachmentId: 'string',
      erId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteErAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * 访问被拒绝的详细原因。
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response content. If a resource has dependent resources, the existing dependent resources are returned.
   * 
   * @example
   * {
   *     "ER_RMAP": [
   *         {
   *             "erId": "er-opy1wrfv",
   *             "destinationCidrBlock": "0.0.0.0/0",
   *             "regionId": "cn-wulanchabu",
   *             "routeMapNum": 3000,
   *             "erRouteMapId": "er-rmap-v5lfhmvm",
   *             "action": "permit",
   *             "status": "Available"
   *         },
   *         {
   *             "erId": "er-opy1wrfv",
   *             "destinationCidrBlock": "0.0.0.0/0",
   *             "regionId": "cn-wulanchabu",
   *             "routeMapNum": 3000,
   *             "erRouteMapId": "er-rmap-of3r0ndh",
   *             "action": "permit",
   *             "status": "Available"
   *         }
   *     ]
   * }
   */
  content?: any;
  /**
   * @remarks
   * response message, if the success request is
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteErAttachmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteErAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteErAttachmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteErRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * routing policy Instance ID List
   * 
   * This parameter is required.
   */
  erRouteMapIds?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      erRouteMapIds: 'ErRouteMapIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      erRouteMapIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.erRouteMapIds)) {
      $dara.Model.validateArray(this.erRouteMapIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteErRouteMapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response body
   * 
   * @example
   * {}
   */
  content?: any;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteErRouteMapResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteErRouteMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteErRouteMapResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun subnet ID
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  /**
   * @remarks
   * Lingjun CIDR block ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-iv2zm1qf
   */
  vpdId?: string;
  /**
   * @remarks
   * Zone
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subnetId: 'string',
      vpdId: 'string',
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

export class DeleteSubnetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response content (if the resource has dependent resources, the existing dependent resources will be returned)
   * 
   * @example
   * {
   *       "nc": [
   *             {}
   *       ]
   * }
   */
  content?: any;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A56F7D3C-8850-5AF4-A342-2D71C9A9D1CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubnetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSubnetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSubnetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVccGrantRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorization Entry ID
   * 
   * This parameter is required.
   * 
   * @example
   * grant-rule-jaj34d75h01
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vcc-cn-jaj34d75h01
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      grantRuleId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVccGrantRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * >  This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response body
   * 
   * @example
   * {}
   */
  content?: any;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-645C88B9009C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVccGrantRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVccGrantRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVccGrantRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVccRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 172.16.199.128/25
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * vcc-rte-5cey1sap
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      regionId: 'RegionId',
      vccId: 'VccId',
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      regionId: 'string',
      vccId: 'string',
      vccRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVccRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response body
   * 
   * @example
   * {}
   */
  content?: any;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 0901F411-28FA-5B9C-BAEE-7776463FF0DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVccRouteEntryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVccRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVccRouteEntryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-zr0farea
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters. (If a dependent resource exists, the existing dependent resource is returned.)
   * 
   * @example
   * {
   *       "subnet": [
   *             {
   *                   "tenantId": "1620939556166277",
   *                   "regionId": "cn-wulanchabu",
   *                   "zoneId": "cn",
   *                   "type": null,
   *                   "subnetId": "subnet-zqebaxa0",
   *                   "name": "lql_testVPD"
   *             }
   *       ],
   *       "nc": [
   *             {}
   *       ]
   * }
   */
  content?: any;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-645C88B9009C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVpdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpdGrantRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorization Entry ID
   * 
   * This parameter is required.
   * 
   * @example
   * grant-rule-9rgxqazb
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1013666993027780
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vpd-8rgvqazb
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpdGrantRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response body
   * 
   * @example
   * {}
   */
  content?: any;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 0901F411-28FA-5B9C-BAEE-7776463FF0DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpdGrantRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVpdGrantRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVpdGrantRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlrRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which the RAM instance belongs.
   * 
   * @example
   * rg-aeky5f3qx6ceapq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  content?: DescribeSlrResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: DescribeSlrResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachElasticNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * e01-cn-zxu2zp3****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      nodeId: 'NodeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      nodeId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachElasticNetworkInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response
   * 
   * @example
   * You don\\"t have the permission to do this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachElasticNetworkInterfaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachElasticNetworkInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachElasticNetworkInterfaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDestinationCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-xxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDestinationCidrBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response content
   */
  content?: GetDestinationCidrBlockResponseBodyContent;
  /**
   * @remarks
   * Error message. (Indicates the reason for the anomaly when the instance status is abnormal.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of this request
   * 
   * @example
   * D349EE86-AF3F-5F6C-87E2-2A08D3618350
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetDestinationCidrBlockResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDestinationCidrBlockResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDestinationCidrBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDestinationCidrBlockResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElasticNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElasticNetworkInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetElasticNetworkInterfaceResponseBodyContent;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0901F411-28FA-5B9C-BAEE-7776463FF0DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetElasticNetworkInterfaceResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElasticNetworkInterfaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetElasticNetworkInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetElasticNetworkInterfaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetErResponseBodyContent;
  /**
   * @remarks
   * Information returned when the call fails
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 308DE9D2-03A6-5B44-A369-67B75D1EE091
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetErResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetErResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetErResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun HUB network connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * er-attachment-i1ioibyf
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * Lingjun HUB ID.
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erAttachmentId: 'ErAttachmentId',
      erId: 'ErId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAttachmentId: 'string',
      erId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: GetErAttachmentResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is displayed.)
   * 
   * @example
   * You don\\"t have the permission to do this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F0D9440-1F97-5613-87CD-D3047172A93C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetErAttachmentResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErAttachmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetErAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetErAttachmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * er-rte-4q0jbylz
   */
  erRouteEntryId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      erRouteEntryId: 'ErRouteEntryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      erRouteEntryId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  content?: GetErRouteEntryResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * code: 400, Request was denied due to request throttling. request id: 7D177459-C1CF-5690-BB23-321D208B37D5
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 1F38A2E6-CB47-5369-95D2-96D0C287B4A5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetErRouteEntryResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErRouteEntryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetErRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetErRouteEntryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * routing policy ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      erRouteMapId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErRouteMapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  content?: GetErRouteMapResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetErRouteMapResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErRouteMapResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetErRouteMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetErRouteMapResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFabricTopologyRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i-169263721924****
   */
  clusterId?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID List
   */
  lniIds?: string[];
  /**
   * @remarks
   * Node ID list
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-k8i0g9fk68t7u0u2w****
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun CIDR block ID
   * 
   * @example
   * vpd-aof7****
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      lniIds: 'LniIds',
      nodeIds: 'NodeIds',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      lniIds: { 'type': 'array', 'itemType': 'string' },
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      vpcId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lniIds)) {
      $dara.Model.validateArray(this.lniIds);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFabricTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetFabricTopologyResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetFabricTopologyResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFabricTopologyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFabricTopologyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFabricTopologyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * sip-8ylg****
   */
  ipName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      ipName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeniPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: GetLeniPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetLeniPrivateIpAddressResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLeniPrivateIpAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLeniPrivateIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLeniPrivateIpAddressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * IP unique identifier
   * 
   * This parameter is required.
   * 
   * @example
   * sip-xxxxx
   */
  ipName?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * This parameter is required.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipName: 'string',
      networkInterfaceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLniPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetLniPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:GetLniPrivateIpAddress, arn=acs:eflo:cn-wulanchabu:1382782317087063:networkinterface/00
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * DBAD15D6-3F47-5B36-8A92-57C2919D13D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetLniPrivateIpAddressResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLniPrivateIpAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLniPrivateIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLniPrivateIpAddressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * This parameter is required.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Subnet of Lingjun
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      regionId: 'RegionId',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      regionId: 'string',
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

export class GetNetworkInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data. (If a resource has dependent resources, the existing dependent resources are returned.)
   */
  content?: GetNetworkInterfaceResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetNetworkInterfaceResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkInterfaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNetworkInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNetworkInterfaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInfoForPodRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node for this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * node-be70****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInfoForPodResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the failed permission verification.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetNodeInfoForPodResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:GetNodeInfoForPod, arn=acs:eflo:cn-wulanchabu:1111156667137893:networkinterface/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetNodeInfoForPodResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInfoForPodResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNodeInfoForPodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNodeInfoForPodResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the data center.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun subnet instance.
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-2avf0itf
   */
  subnetId?: string;
  /**
   * @remarks
   * The ID of the CIDR block to which Lingjun belongs.
   * 
   * @example
   * vpd-cxcmdk1m
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subnetId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: GetSubnetResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0901F411-28FA-5B9C-BAEE-7776463FF0DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetSubnetResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubnetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubnetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSubnetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccRequest extends $dara.Model {
  /**
   * @remarks
   * By default, popApi is not ignored and idempotent
   * 
   * @example
   * c5e3130a-d02f-11ec-a7d3-0242ac110005
   */
  clientToken?: string;
  /**
   * @remarks
   * Paging Parameters: The current parameters are obsolete.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Paging Parameters: The current parameters are obsolete.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Paging Parameters: The current parameters are obsolete.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enablePage: 'EnablePage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enablePage: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetVccResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * CAD09E47-B651-5206-B2DC-3AB78C8EB446
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetVccResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVccResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccGrantRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Resource Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * grant-rule-jaj34d75h01
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1620939556166277
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Authorized Instance ID
   * 
   * @example
   * vcc-cn-jaj34d75h01
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccGrantRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  content?: GetVccGrantRuleResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 0901F411-28FA-5B9C-BAEE-7776463FF0DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetVccGrantRuleResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccGrantRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVccGrantRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVccGrantRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun Connection ID
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-rte-31ocvdhq
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vccId: 'VccId',
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vccId: 'string',
      vccRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetVccRouteEntryResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-645C88B9009C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetVccRouteEntryResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVccRouteEntryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVccRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVccRouteEntryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-ze3na0wf
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  content?: GetVpdResponseBodyContent;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetVpdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVpdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVpdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdGrantRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB Instance Id
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Authorized Resource Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * grant-rule-xrgvqazb
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1620939556166277
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Authorized Instance ID
   * 
   * @example
   * vpd-xxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erId: 'ErId',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erId: 'string',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdGrantRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetVpdGrantRuleResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetVpdGrantRuleResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdGrantRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVpdGrantRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVpdGrantRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-iv2zm1qf
   */
  vpdId?: string;
  /**
   * @remarks
   * The ID of the route entry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-rte-toekyqel
   */
  vpdRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpdId: 'VpdId',
      vpdRouteEntryId: 'VpdRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpdId: 'string',
      vpdRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetVpdRouteEntryResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetVpdRouteEntryResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpdRouteEntryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVpdRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVpdRouteEntryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeVccRequest extends $dara.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-acfmxhucx5ewuwy
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeVccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: InitializeVccResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E30DA7CB-03D0-51EB-8F18-856B99987E18
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: InitializeVccResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeVccResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitializeVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitializeVccResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListElasticNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The IP address of the BE cluster.
   * 
   * @example
   * 10.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The network type.
   * 
   * Valid value:
   * 
   * *   Tenant: Tenant.
   * *   VPC
   * 
   * @example
   * tenant
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * Valid value:
   * 
   * *   Create Failed: the creation failure.
   * *   Delete Failed: the that failed to be deleted.
   * *   Executing
   * *   Available: The template is available.
   * *   Deleting
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The type of the variable.
   * 
   * Valid value:
   * 
   * *   CUSTOM: custom type.
   * *   DEFAULT: system type.
   * 
   * @example
   * DEFAULT
   */
  type?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6u8473r84e9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-uf6aa4ddo97fr****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ip: 'Ip',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      ip: 'string',
      networkType: 'string',
      nodeId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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

export class ListElasticNetworkInterfacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListElasticNetworkInterfacesResponseBodyContent;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListElasticNetworkInterfacesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListElasticNetworkInterfacesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListElasticNetworkInterfacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListElasticNetworkInterfacesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErAttachmentsRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to automatically receive all routes from all instances under this Lingjun HUB. Valid values:
   * 
   * *   **true**: received automatically.
   * *   **false**: Not received.
   * 
   * @example
   * true
   */
  autoReceiveAllRoute?: boolean;
  /**
   * @remarks
   * Specifies whether to enable paged query. Valid values:
   * 
   * *   **true**: enables paged query.
   * *   **false**: Paged query is not enabled.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * The ID of the network instance connection
   * 
   * @example
   * er-attachment-i1ioibyf
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * The name of the network instance connection.
   * 
   * @example
   * vcc-cn-209300qha01
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the network instance. Valid values: **VPD** and **VCC**.
   * 
   * For more information, see [What is Lingjun?](https://help.aliyun.com/document_detail/444430.html)
   * 
   * You can query **Lingjun CIDR blocks** and **Lingjun connections** by [ListVpds](https://help.aliyun.com/document_detail/2331077.html) and [ListVccs](https://help.aliyun.com/document_detail/2399526.html?) respectively.
   * 
   * @example
   * vcc-cn-209300qha01
   */
  instanceId?: string;
  /**
   * @remarks
   * The mitigation plan of the instance. Valid values:
   * 
   * *   **VPD**: indicates the Lingjun CIDR block.
   * *   **VCC**: indicates a Lingjun connection.
   * 
   * @example
   * VCC
   */
  instanceType?: string;
  /**
   * @remarks
   * The page number to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzb3n5lgk2ieq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the instance belongs.
   * 
   * @example
   * 1111156667137893
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **Available**: Normal.
   * *   **Not Available**: Not available.
   * *   **Executing**: The task is being executed.
   * *   **Deleting**: The account is being deleted
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoReceiveAllRoute: 'AutoReceiveAllRoute',
      enablePage: 'EnablePage',
      erAttachmentId: 'ErAttachmentId',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReceiveAllRoute: 'boolean',
      enablePage: 'boolean',
      erAttachmentId: 'string',
      erAttachmentName: 'string',
      erId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErAttachmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  content?: ListErAttachmentsResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is displayed.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D9D6E7B-365B-5200-BFA6-9B79E269058C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListErAttachmentsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErAttachmentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListErAttachmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListErAttachmentsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to enable pagination query.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Filter 32 detailed CIDR blocks. Default value: true
   * 
   * @example
   * true
   */
  ignoreDetailedRouteEntry?: boolean;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vcc-cn-209300qha01
   */
  instanceId?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-cn-209300qha01
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmyuzlx2iihcy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * VCC
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      enablePage: 'EnablePage',
      erId: 'ErId',
      ignoreDetailedRouteEntry: 'IgnoreDetailedRouteEntry',
      instanceId: 'InstanceId',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      enablePage: 'boolean',
      erId: 'string',
      ignoreDetailedRouteEntry: 'boolean',
      instanceId: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListErRouteEntriesResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListErRouteEntriesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteEntriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListErRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListErRouteEntriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteMapsRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to enable paged query.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Elastic Router ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * routing policy ID
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * Policy number (default for automatic creation is 3000; The value range of the policy number manually created by the user is 1001-2000)
   * 
   * @example
   * 1001
   */
  erRouteMapNum?: number;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Receive Instance ID
   * 
   * @example
   * vpd-x2lohgpv
   */
  receptionInstanceId?: string;
  /**
   * @remarks
   * Receive Instance Name
   * 
   * @example
   * vpd2
   */
  receptionInstanceName?: string;
  /**
   * @remarks
   * The type of the received instance. Optional values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * @example
   * VPD
   */
  receptionInstanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzaq3ypaqkdy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Policy behavior; optional values:
   * 
   * *   **permit**: Allow
   * *   **deny**: Rejected
   * 
   * @example
   * deny
   */
  routeMapAction?: string;
  /**
   * @remarks
   * Release Instance ID
   * 
   * @example
   * vpd-xsdlg2xb
   */
  transmissionInstanceId?: string;
  /**
   * @remarks
   * Release Instance Name
   * 
   * @example
   * vpd1
   */
  transmissionInstanceName?: string;
  /**
   * @remarks
   * The type of the published instance. Optional values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * @example
   * VPD
   */
  transmissionInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      enablePage: 'EnablePage',
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      erRouteMapNum: 'ErRouteMapNum',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      receptionInstanceId: 'ReceptionInstanceId',
      receptionInstanceName: 'ReceptionInstanceName',
      receptionInstanceType: 'ReceptionInstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeMapAction: 'RouteMapAction',
      transmissionInstanceId: 'TransmissionInstanceId',
      transmissionInstanceName: 'TransmissionInstanceName',
      transmissionInstanceType: 'TransmissionInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      enablePage: 'boolean',
      erId: 'string',
      erRouteMapId: 'string',
      erRouteMapNum: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      receptionInstanceId: 'string',
      receptionInstanceName: 'string',
      receptionInstanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeMapAction: 'string',
      transmissionInstanceId: 'string',
      transmissionInstanceName: 'string',
      transmissionInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteMapsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListErRouteMapsResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0901F411-28FA-5B9C-BAEE-7776463FF0DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListErRouteMapsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErRouteMapsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListErRouteMapsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListErRouteMapsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable paged query. Valid values:
   * 
   * *   true: enables paged query.
   * *   false: Paged query is disabled.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * The ID of the Lingjun HUB instance.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Lingjun HUB name.
   * 
   * @example
   * er-heyuan-main
   */
  erName?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vcc-cn-209300qha01
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the attached network instance. Valid values:
   * 
   * *   **VPD**
   * *   **VCC**
   * 
   * @example
   * VCC
   */
  instanceType?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The page number to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmwfm33rlt6zi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      erId: 'ErId',
      erName: 'ErName',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      masterZoneId: 'MasterZoneId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      erId: 'string',
      erName: 'string',
      instanceId: 'string',
      instanceType: 'string',
      masterZoneId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: ListErsResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is displayed.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListErsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListErsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListErsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesByNcdRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lni-1234****
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter that specifies the instance type.
   * 
   * Valid value:
   * 
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * 
   * This parameter is required.
   * 
   * @example
   * lni
   */
  instanceType?: string;
  /**
   * @remarks
   * Maximum network communication distance
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  maxNcd?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      maxNcd: 'MaxNcd',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      maxNcd: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesByNcdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListInstancesByNcdResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:ListInstancesByNcd, arn=acs:eflo:cn-heyuan:1263399219805497:networkinterface/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListInstancesByNcdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesByNcdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesByNcdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesByNcdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLeniPrivateIpAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * @example
   * sip-8ylg****
   */
  ipName?: string;
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP.
   * 
   * @example
   * 10.0.****
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the image build command risk.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      ipName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateIpAddress: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLeniPrivateIpAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: ListLeniPrivateIpAddressesResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListLeniPrivateIpAddressesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLeniPrivateIpAddressesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLeniPrivateIpAddressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLeniPrivateIpAddressesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Whether pagination is required
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * network interface controller IP address
   * 
   * @example
   * 10.0.98.10
   */
  ip?: string;
  /**
   * @remarks
   * IP unique identifier
   * 
   * @example
   * sip-tynhdh2s
   */
  ipName?: string;
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Obtain the index number of the current mouse click for an animation
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enablePage: 'EnablePage',
      ip: 'Ip',
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enablePage: 'boolean',
      ip: 'string',
      ipName: 'string',
      networkInterfaceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLniPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListLniPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission to do this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListLniPrivateIpAddressResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLniPrivateIpAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLniPrivateIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLniPrivateIpAddressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether pagination is required.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * network interface controller the IP address.
   * 
   * @example
   * 203.107.46.227
   */
  ip?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the machine to which the instance belongs.
   * 
   * @example
   * r-2ze121o4uhr4np3r5t-db-5
   */
  nodeId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The current number of pages.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance to which the Lingjun subnet belongs.
   * 
   * @example
   * subnet-anhtskts
   */
  subnetId?: string;
  /**
   * @remarks
   * The ID of the VPD.
   * 
   * @example
   * vpd-iv2zm1qf
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      ip: 'Ip',
      networkInterfaceId: 'NetworkInterfaceId',
      nodeId: 'NodeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      ip: 'string',
      networkInterfaceId: 'string',
      nodeId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      subnetId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkInterfacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: ListNetworkInterfacesResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 039C3C3A-3C37-5672-80D5-D8CD48C676D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListNetworkInterfacesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkInterfacesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkInterfacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNetworkInterfacesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInfosForPodRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster-***
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the node for this operation.
   * 
   * @example
   * node-be70****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeId: 'NodeId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeId: 'string',
      regionId: 'string',
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

export class ListNodeInfosForPodResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response body
   */
  content?: ListNodeInfosForPodResponseBodyContent[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * You don\\"t have the permission of this operation.
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 0901F411-28FA-5B9C-BAEE-7776463FF0DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: { 'type': 'array', 'itemType': ListNodeInfosForPodResponseBodyContent },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeInfosForPodResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodeInfosForPodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodeInfosForPodResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query by page. Optional values:
   * 
   * *   **true**: Enable pagination query
   * *   **false**: Pagination query is disabled
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * The number of the page to return. The value must be greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aeky5f3qx6ceapq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **Available**: Normal
   * *   **Not Available**: Unavailable
   * *   **Executing**: Executing
   * *   **Deleting**: The node is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun subnet instance ID
   * 
   * @example
   * subnet-anhtskts
   */
  subnetId?: string;
  /**
   * @remarks
   * Lingjun subnet instance name
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: ListSubnetsRequestTag[];
  /**
   * @remarks
   * Lingjun Subnet Usage Type; optional; optional. Valid values:
   * 
   * *   **If you do not set this field for a common type**
   * *   **OOB** :OOB type
   * *   **LB**: LB type
   * 
   * @example
   * Null
   */
  type?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-fuliephf
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID of the disk.
   * 
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
      tag: 'Tag',
      type: 'Type',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      subnetId: 'string',
      subnetName: 'string',
      tag: { 'type': 'array', 'itemType': ListSubnetsRequestTag },
      type: 'string',
      vpdId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListSubnetsResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 7F9082CC-3D94-560F-A575-8E8EF6CE2CB8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListSubnetsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubnetsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubnetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSubnetsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccFlowInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Direction
   * 
   * Valid value:
   * 
   * *   IN: inbound.
   * *   OUT: the outbound.
   * 
   * @example
   * OUT
   */
  direction?: string;
  /**
   * @remarks
   * The start time. The default value is 5 minutes ago.
   * 
   * @example
   * 1667727514000
   */
  from?: number;
  /**
   * @remarks
   * Metric
   * 
   * Valid value:
   * 
   * *   totalPacketsRate: Total Packet Rate.
   * *   dropBytesRate: the of the stream drop rate.
   * *   dropPacketsRate: Dropped Packet Rate.
   * *   totalBytesRate: the total streaming rate.
   * *   passBytesRate: by stream rate.
   * *   passPacketsRate: by packet rate.
   * 
   * @example
   * passBytesRate
   */
  metricName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The end time. The default time is the current time.
   * 
   * @example
   * 1689749749000
   */
  to?: number;
  /**
   * @remarks
   * Lingjun Connection ID
   * 
   * @example
   * vcc-cn-zvp2******
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      from: 'From',
      metricName: 'MetricName',
      regionId: 'RegionId',
      to: 'To',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      from: 'number',
      metricName: 'string',
      regionId: 'string',
      to: 'number',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccFlowInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * 访问被拒绝的详细原因。
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  content?: ListVccFlowInfosResponseBodyContent;
  /**
   * @remarks
   * Response
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVccFlowInfosResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccFlowInfosResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVccFlowInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVccFlowInfosResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccGrantRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable paged query. Optional values:
   * 
   * *   **true**: Enable pagination query
   * *   **false**: Pagination query is disabled
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Use the drop-down box
   * 
   * @example
   * true
   */
  forSelect?: boolean;
  /**
   * @remarks
   * Authorization Entry ID
   * 
   * @example
   * grant-rule-jaj33d1b804
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1620939556166277
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vcc-cn-jaj33d1b804
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name
   * 
   * @example
   * vcc-1
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzb3n5lgk2ieq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      erId: 'ErId',
      forSelect: 'ForSelect',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      erId: 'string',
      forSelect: 'boolean',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccGrantRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListVccGrantRulesResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * A56F7D3C-8850-5AF4-A342-2D71C9A9D1CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVccGrantRulesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccGrantRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVccGrantRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVccGrantRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to enable pagination query.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Filter 32 detailed CIDR blocks. Default value: true
   * 
   * @example
   * true
   */
  ignoreDetailedRouteEntry?: boolean;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-cn-jaj34d75h01
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * BGP
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * Lingjun CIDR block route entry instance ID
   * 
   * @example
   * vpd-rte-toekyqel
   */
  vpdRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      enablePage: 'EnablePage',
      ignoreDetailedRouteEntry: 'IgnoreDetailedRouteEntry',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
      vccId: 'VccId',
      vpdRouteEntryId: 'VpdRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      enablePage: 'boolean',
      ignoreDetailedRouteEntry: 'boolean',
      nextHopId: 'string',
      nextHopType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
      vccId: 'string',
      vpdRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListVccRouteEntriesResponseBodyContent;
  /**
   * @remarks
   * response message, if the success request is
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVccRouteEntriesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccRouteEntriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVccRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVccRouteEntriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsRequest extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the Lingjun connection instance. Unit: Mbit/s. Valid values: 1000 to 400000
   * 
   * @example
   * 5000
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the CEN instance; [What is the CEN?](https://help.aliyun.com/document_detail/181681.html)
   * 
   * You can call the [DescribeCens](https://help.aliyun.com/document_detail/468215.htm) to query the information of CEN instances under the current Alibaba Cloud account.
   * 
   * @example
   * cen-95iwtpyvj3kk1v0ao0
   */
  cenId?: string;
  /**
   * @remarks
   * Specifies whether to enable paged query. Optional values:
   * 
   * *   **true**: Enable pagination query
   * *   **false**: Pagination query is disabled
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Excludes all data in the specified status. If the status parameter exists, ExStatus does not take effect.
   * 
   * @example
   * Prepaid
   */
  exStatus?: string;
  /**
   * @remarks
   * Filter queries by Lingjun HUB instance ID
   * 
   * @example
   * er-a7rqv1rq
   */
  filterErId?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aeky5f3qx6ceapq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: ListVccsRequestTag[];
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * Virtual Private Cloud IDs; [What is Virtual Private Cloud](https://help.aliyun.com/document_detail/34217.html)
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0) operation to query the specified VPC.
   * 
   * @example
   * vpc-bp1nrtkmamy329u6a1z0i
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-omqutbff
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      enablePage: 'EnablePage',
      exStatus: 'ExStatus',
      filterErId: 'FilterErId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      vccId: 'VccId',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cenId: 'string',
      enablePage: 'boolean',
      exStatus: 'string',
      filterErId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListVccsRequestTag },
      vccId: 'string',
      vpcId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListVccsResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 28451248-7038-5184-B5D3-80F104654BE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVccsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVccsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVccsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVccsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdGrantRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable pagination query.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Use the drop-down box
   * 
   * @example
   * true
   */
  forSelect?: boolean;
  /**
   * @remarks
   * Authorization Entry ID
   * 
   * @example
   * grant-rule-8rgvqazb
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1620939556166279
   */
  grantTenantId?: string;
  /**
   * @remarks
   * The ID of the network instance that you want to query.
   * 
   * @example
   * vpd-8rgvqazb
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name
   * 
   * @example
   * vpd-1
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aek2l4sq6l7unhi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      erId: 'ErId',
      forSelect: 'ForSelect',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      erId: 'string',
      forSelect: 'boolean',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdGrantRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListVpdGrantRulesResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * A56F7D3C-8850-5AF4-A342-2D71C9A9D1CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVpdGrantRulesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdGrantRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpdGrantRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpdGrantRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to enable paged query. Optional values:
   * 
   * *   **true**: Enable pagination query
   * *   **false**: Pagination query is disabled
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Filter 32 detailed CIDR blocks. Default value: true
   * 
   * @example
   * true
   */
  ignoreDetailedRouteEntry?: boolean;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-cn-209300qha01
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfm4mlwqjalz7a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * BGP
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-fuliephf
   */
  vpdId?: string;
  /**
   * @remarks
   * Lingjun CIDR block route entry instance ID
   * 
   * @example
   * vpd-rte-4r1zbhoh
   */
  vpdRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      enablePage: 'EnablePage',
      ignoreDetailedRouteEntry: 'IgnoreDetailedRouteEntry',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
      vpdId: 'VpdId',
      vpdRouteEntryId: 'VpdRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      enablePage: 'boolean',
      ignoreDetailedRouteEntry: 'boolean',
      nextHopId: 'string',
      nextHopType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
      vpdId: 'string',
      vpdRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: ListVpdRouteEntriesResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 039C3C3A-3C37-5672-80D5-D8CD48C676D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVpdRouteEntriesResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdRouteEntriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpdRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpdRouteEntriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable paged query.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Queries the network segments of Lingjun that are not bound to a specified Lingjun HUB.
   * 
   * @example
   * er-kkopgtne
   */
  filterErId?: string;
  /**
   * @remarks
   * If you select a drop-down list, only the basic information (including the instance ID and instance name) is returned. Possible values:
   * 
   * *   **true**: Select Query Use from the drop-down list.
   * *   **false**: Normal queries are used.
   * 
   * @example
   * true
   */
  forSelect?: boolean;
  /**
   * @remarks
   * The page number of the page to return. Start value: 1 Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aeky5f3qx6ceapq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the CLB instance. Valid values:
   * 
   * *   **Available**: Normal.
   * *   **Not Available**: Not available.
   * *   **Executing**: The task is being executed.
   * *   **Deleting**: The account is being deleted
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: ListVpdsRequestTag[];
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * @example
   * vpd-fuliephf
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the VPD instance.
   * 
   * @example
   * vpd-1
   */
  vpdName?: string;
  /**
   * @remarks
   * Specifies whether to include the dependent resource information. We recommend that you do not query the dependent resource information when you query by page. You can query the dependent resource information separately when you delete it. Possible values:
   * 
   * *   **true**: with dependency information.
   * *   **false**: does not include dependency information.
   * 
   * @example
   * false
   */
  withDependence?: boolean;
  /**
   * @remarks
   * Queries the information about a Lingjun CIDR block that is not bound to a Lingjun connection. Possible values:
   * 
   * *   **true**: filters out VPDs that have been bound to VCC
   * *   **false**: does not filter VPD that has been bound to VCC
   * 
   * @example
   * true
   */
  withoutVcc?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      filterErId: 'FilterErId',
      forSelect: 'ForSelect',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
      withDependence: 'WithDependence',
      withoutVcc: 'WithoutVcc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      filterErId: 'string',
      forSelect: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListVpdsRequestTag },
      vpdId: 'string',
      vpdName: 'string',
      withDependence: 'boolean',
      withoutVcc: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: ListVpdsResponseBodyContent;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListVpdsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVpdsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceNcdRequest extends $dara.Model {
  /**
   * @remarks
   * Instance 1ID
   * 
   * This parameter is required.
   * 
   * @example
   * lni-1235****
   */
  instanceId1?: string;
  /**
   * @remarks
   * Instance 2ID
   * 
   * This parameter is required.
   * 
   * @example
   * lni-1234****
   */
  instanceId2?: string;
  /**
   * @remarks
   * The parameter that specifies the instance type.
   * 
   * Valid value:
   * 
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * 
   * This parameter is required.
   * 
   * @example
   * lni
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId1: 'InstanceId1',
      instanceId2: 'InstanceId2',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId1: 'string',
      instanceId2: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceNcdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: QueryInstanceNcdResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * You don\\"t have the permission of this operation, action=eflo:QueryInstanceNcd, arn=acs:eflo:cn-shenzhen:1263399219805497:networkinterface/*, resourceGroup=null
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-645C88B9009C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: QueryInstanceNcdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceNcdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInstanceNcdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryInstanceNcdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundVccRequest extends $dara.Model {
  /**
   * @remarks
   * Region
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun Connection ID
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundVccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * >  This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response content
   * 
   * @example
   * {}
   */
  content?: any;
  /**
   * @remarks
   * Response message, which is \\"success\\" if the request succeeds
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundVccResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefundVccResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryVccRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun Connection ID
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryVccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  content?: any;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 7F9082CC-3D94-560F-A575-8E8EF6CE2CB8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryVccResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetryVccResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssignPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * By default, popApi is not ignored and idempotent
   * 
   * @example
   * 141cccd6-dfbd-11ec-b8e8-0242ac110003
   */
  clientToken?: string;
  /**
   * @remarks
   * IP unique identifier
   * 
   * This parameter is required.
   * 
   * @example
   * sip-xxxx
   */
  ipName?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * This parameter is required.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 10.209.75.242
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Region
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Subnet
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ipName: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
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

export class UnAssignPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: UnAssignPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * You don\\"t have the permission to do this operation.
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: UnAssignPrivateIpAddressResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssignPrivateIpAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnAssignPrivateIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnAssignPrivateIpAddressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssociateVpdCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The additional CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/16
   */
  secondaryCidrBlock?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-aof7dat1
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      secondaryCidrBlock: 'SecondaryCidrBlock',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      secondaryCidrBlock: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssociateVpdCidrBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * 访问被拒绝详细信息。
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: UnAssociateVpdCidrBlockResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 9C50C9CD-E799-54DA-BA7A-1FAF3DF80857
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: UnAssociateVpdCidrBlockResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAssociateVpdCidrBlockResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnAssociateVpdCidrBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnAssociateVpdCidrBlockResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignLeniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotent identifier.
   * 
   * @example
   * 967e77a2-b61d-11ec-a147-0242c0a80504
   */
  clientToken?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * sip-8ylg****
   */
  ipName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      elasticNetworkInterfaceId: 'string',
      ipName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignLeniPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * {}
   */
  content?: UnassignLeniPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: UnassignLeniPrivateIpAddressResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignLeniPrivateIpAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnassignLeniPrivateIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnassignLeniPrivateIpAddressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateElasticNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 3fd79d62-ab1d-11ec-9a53-0242ac110004
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * LHICDOSEExternaluserinquiryP
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-wz9fj2s3o21nw2****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      regionId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateElasticNetworkInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: UpdateElasticNetworkInterfaceResponseBodyContent;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: UpdateElasticNetworkInterfaceResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateElasticNetworkInterfaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateElasticNetworkInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateElasticNetworkInterfaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Parameter
   * 
   * @example
   * er-wulanchabu-main
   */
  erName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      erId: 'string',
      erName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 3D9D6E7B-365B-5200-BFA6-9B79E269058C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateErResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateErResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The connection ID of the Lingjun HUB network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * er-attachment-i1ioibyf
   */
  erAttachmentId?: string;
  /**
   * @remarks
   * Lingjun HUB Network Instance Connection Name
   * 
   * @example
   * er-attachment-wulanchabu-main
   */
  erAttachmentName?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      erAttachmentId: 'ErAttachmentId',
      erAttachmentName: 'ErAttachmentName',
      erId: 'ErId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erAttachmentId: 'string',
      erAttachmentName: 'string',
      erId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * {}
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 7F9082CC-3D94-560F-A575-8E8EF6CE2CB8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErAttachmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateErAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateErAttachmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * test-example
   */
  description?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * routing policy ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      erId: 'string',
      erRouteMapId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErRouteMapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * {}
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-645C88B9009C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateErRouteMapResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateErRouteMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateErRouteMapResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLeniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the ECS instances.
   * 
   * This parameter is required.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * sip-8ylg****
   */
  ipName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticNetworkInterfaceId: 'string',
      ipName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLeniPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: UpdateLeniPrivateIpAddressResponseBodyContent;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A88DFED5-24B7-5A3E-87DE-380BF06F3C90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: UpdateLeniPrivateIpAddressResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLeniPrivateIpAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLeniPrivateIpAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLeniPrivateIpAddressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The subnet instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  /**
   * @remarks
   * The new name for the subnet instance.
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  /**
   * @remarks
   * The ID of the VPD to which the subnet belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-aof7dat1
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subnetId: 'string',
      subnetName: 'string',
      vpdId: 'string',
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

export class UpdateSubnetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response content.
   */
  content?: UpdateSubnetResponseBodyContent;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D9D6E7B-365B-5200-BFA6-9B79E269058C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: UpdateSubnetResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubnetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSubnetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSubnetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVccRequest extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the Lingjun connection instance. Unit: Mbit/s. Valid values: 1000 to 400000
   * 
   * @example
   * 1000
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the order placed on the instance.
   * 
   * @example
   * 20006627643
   */
  orderId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The name of the Lingjun connection instance.
   * 
   * @example
   * vcc-heyuan-backup
   */
  vccName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      orderId: 'OrderId',
      regionId: 'RegionId',
      vccId: 'VccId',
      vccName: 'VccName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      orderId: 'string',
      regionId: 'string',
      vccId: 'string',
      vccName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: UpdateVccResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F906C4D3-7444-58E2-9819-E3D8563571A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: UpdateVccResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVccResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVccResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVccResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpdRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-omqutbff
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the VPD instance.
   * 
   * @example
   * vpd-lingjun
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: UpdateVpdResponseBodyContent;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: UpdateVpdResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVpdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVpdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eflo", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Apply for a secondary private IP address for the current Lingjun Elastic Network Interface. You can automatically assign a secondary private IP address.
   * 
   * @remarks
   * Apply for a secondary private IP address for the specified Lingjun Elastic Network Interface.
   * *   If the PrivateIp field is empty, a secondary private IP address is automatically assigned and the unique identifier of the IP address is returned.
   * *   You can use the GetLeniPrivateIpAddress or ListLeniPrivateIpAddresses interface to check whether the secondary private IP address is assigned.
   * 
   * @param request - AssignLeniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignLeniPrivateIpAddressResponse
   */
  async assignLeniPrivateIpAddressWithOptions(request: AssignLeniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<AssignLeniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignLeniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AssignLeniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new AssignLeniPrivateIpAddressResponse({}));
    } else {
      return $dara.cast<AssignLeniPrivateIpAddressResponse>(await this.execute(params, req, runtime), new AssignLeniPrivateIpAddressResponse({}));
    }

  }

  /**
   * Apply for a secondary private IP address for the current Lingjun Elastic Network Interface. You can automatically assign a secondary private IP address.
   * 
   * @remarks
   * Apply for a secondary private IP address for the specified Lingjun Elastic Network Interface.
   * *   If the PrivateIp field is empty, a secondary private IP address is automatically assigned and the unique identifier of the IP address is returned.
   * *   You can use the GetLeniPrivateIpAddress or ListLeniPrivateIpAddresses interface to check whether the secondary private IP address is assigned.
   * 
   * @param request - AssignLeniPrivateIpAddressRequest
   * @returns AssignLeniPrivateIpAddressResponse
   */
  async assignLeniPrivateIpAddress(request: AssignLeniPrivateIpAddressRequest): Promise<AssignLeniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignLeniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Applies for a private secondary IP address for the current LNI. You can also call this operation to assign a secondary MAC address to the current LNI.
   * 
   * @remarks
   * >  Apply for secondary private IP addresses
   * *   By default, each network interface controller can apply for three secondary private IP addresses. If the quota is exceeded, contact the administrator.
   * *   The secondary private IP address is allocated from the Lingjun subnet to which the current network interface controller belongs. The first address and the last two addresses belong to reserved addresses and do not participate in the allocation.
   * 
   * @param request - AssignPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignPrivateIpAddressResponse
   */
  async assignPrivateIpAddressWithOptions(request: AssignPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<AssignPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assignMac)) {
      body["AssignMac"] = request.assignMac;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.skipConfig)) {
      body["SkipConfig"] = request.skipConfig;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AssignPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new AssignPrivateIpAddressResponse({}));
    } else {
      return $dara.cast<AssignPrivateIpAddressResponse>(await this.execute(params, req, runtime), new AssignPrivateIpAddressResponse({}));
    }

  }

  /**
   * Applies for a private secondary IP address for the current LNI. You can also call this operation to assign a secondary MAC address to the current LNI.
   * 
   * @remarks
   * >  Apply for secondary private IP addresses
   * *   By default, each network interface controller can apply for three secondary private IP addresses. If the quota is exceeded, contact the administrator.
   * *   The secondary private IP address is allocated from the Lingjun subnet to which the current network interface controller belongs. The first address and the last two addresses belong to reserved addresses and do not participate in the allocation.
   * 
   * @param request - AssignPrivateIpAddressRequest
   * @returns AssignPrivateIpAddressResponse
   */
  async assignPrivateIpAddress(request: AssignPrivateIpAddressRequest): Promise<AssignPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * When the VPD primary network segment address is not enough to allocate, you can choose to create an additional network segment as the additional network segment of the VPD primary network segment.
   * 
   * @remarks
   * >  **Add a CIDR block**
   * *   The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
   * *   The secondary IPv4 CIDR block must not overlap with the primary IPv4 CIDR block of the Lingjun CIDR block and the added secondary IPv4 CIDR block.
   * *   You cannot use 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 as the CIDR block of Lingjun. Example: In the Lingjun CIDR block whose primary IPv4 CIDR block is 192.168.0.0/16, you cannot add the following CIDR blocks as additional IPv4 CIDR blocks. The CIDR block that is in the same range as 192.168.0.0/16. A CIDR block that is larger than 192.168.0.0/16. Example: 192.168.0.0/8. A CIDR block that is smaller than 192.168.0.0/16. Example: 192.168.0.0/24.
   * *   By default, each tenant can create three additional CIDR blocks in each region.
   * 
   * @param request - AssociateVpdCidrBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateVpdCidrBlockResponse
   */
  async associateVpdCidrBlockWithOptions(request: AssociateVpdCidrBlockRequest, runtime: $dara.RuntimeOptions): Promise<AssociateVpdCidrBlockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secondaryCidrBlock)) {
      body["SecondaryCidrBlock"] = request.secondaryCidrBlock;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateVpdCidrBlock",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AssociateVpdCidrBlockResponse>(await this.callApi(params, req, runtime), new AssociateVpdCidrBlockResponse({}));
    } else {
      return $dara.cast<AssociateVpdCidrBlockResponse>(await this.execute(params, req, runtime), new AssociateVpdCidrBlockResponse({}));
    }

  }

  /**
   * When the VPD primary network segment address is not enough to allocate, you can choose to create an additional network segment as the additional network segment of the VPD primary network segment.
   * 
   * @remarks
   * >  **Add a CIDR block**
   * *   The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
   * *   The secondary IPv4 CIDR block must not overlap with the primary IPv4 CIDR block of the Lingjun CIDR block and the added secondary IPv4 CIDR block.
   * *   You cannot use 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 as the CIDR block of Lingjun. Example: In the Lingjun CIDR block whose primary IPv4 CIDR block is 192.168.0.0/16, you cannot add the following CIDR blocks as additional IPv4 CIDR blocks. The CIDR block that is in the same range as 192.168.0.0/16. A CIDR block that is larger than 192.168.0.0/16. Example: 192.168.0.0/8. A CIDR block that is smaller than 192.168.0.0/16. Example: 192.168.0.0/24.
   * *   By default, each tenant can create three additional CIDR blocks in each region.
   * 
   * @param request - AssociateVpdCidrBlockRequest
   * @returns AssociateVpdCidrBlockResponse
   */
  async associateVpdCidrBlock(request: AssociateVpdCidrBlockRequest): Promise<AssociateVpdCidrBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateVpdCidrBlockWithOptions(request, runtime);
  }

  /**
   * Lingjun ENI is bound to NC.
   * 
   * @remarks
   * This interface is an asynchronous interface. You need to use the query interface to wait for the Lingjun Elastic Network Interface to reach the available state.
   * 
   * @param request - AttachElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachElasticNetworkInterfaceResponse
   */
  async attachElasticNetworkInterfaceWithOptions(request: AttachElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<AttachElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new AttachElasticNetworkInterfaceResponse({}));
    } else {
      return $dara.cast<AttachElasticNetworkInterfaceResponse>(await this.execute(params, req, runtime), new AttachElasticNetworkInterfaceResponse({}));
    }

  }

  /**
   * Lingjun ENI is bound to NC.
   * 
   * @remarks
   * This interface is an asynchronous interface. You need to use the query interface to wait for the Lingjun Elastic Network Interface to reach the available state.
   * 
   * @param request - AttachElasticNetworkInterfaceRequest
   * @returns AttachElasticNetworkInterfaceResponse
   */
  async attachElasticNetworkInterface(request: AttachElasticNetworkInterfaceRequest): Promise<AttachElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Creates an LENI.
   * 
   * @param request - CreateElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateElasticNetworkInterfaceResponse
   */
  async createElasticNetworkInterfaceWithOptions(request: CreateElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<CreateElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableJumboFrame)) {
      body["EnableJumboFrame"] = request.enableJumboFrame;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new CreateElasticNetworkInterfaceResponse({}));
    } else {
      return $dara.cast<CreateElasticNetworkInterfaceResponse>(await this.execute(params, req, runtime), new CreateElasticNetworkInterfaceResponse({}));
    }

  }

  /**
   * Creates an LENI.
   * 
   * @param request - CreateElasticNetworkInterfaceRequest
   * @returns CreateElasticNetworkInterfaceResponse
   */
  async createElasticNetworkInterface(request: CreateElasticNetworkInterfaceRequest): Promise<CreateElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Create a Lingjun HUB.
   * 
   * @remarks
   * When you call this operation to create a Lingjun HUB, note that:
   * *   Make sure that you have sufficient Lingjun HUB quota.
   * *   This interface is an asynchronous interface. After this interface is called, the system will return the ID of a Lingjun HUB. At this time, the Lingjun HUB instance may not be created yet, and the system background creation task is still in progress. You can call the ListErs or GetEr operation to query the status of the Lingjun HUB.
   *     *   If the status of the Lingjun HUB is Executing, it indicates that it is being created.
   *     *   If the status of the Lingjun HUB is Available, the creation is successful.
   * 
   * @param request - CreateErRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateErResponse
   */
  async createErWithOptions(request: CreateErRequest, runtime: $dara.RuntimeOptions): Promise<CreateErResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.erName)) {
      body["ErName"] = request.erName;
    }

    if (!$dara.isNull(request.masterZoneId)) {
      body["MasterZoneId"] = request.masterZoneId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateErResponse>(await this.callApi(params, req, runtime), new CreateErResponse({}));
    } else {
      return $dara.cast<CreateErResponse>(await this.execute(params, req, runtime), new CreateErResponse({}));
    }

  }

  /**
   * Create a Lingjun HUB.
   * 
   * @remarks
   * When you call this operation to create a Lingjun HUB, note that:
   * *   Make sure that you have sufficient Lingjun HUB quota.
   * *   This interface is an asynchronous interface. After this interface is called, the system will return the ID of a Lingjun HUB. At this time, the Lingjun HUB instance may not be created yet, and the system background creation task is still in progress. You can call the ListErs or GetEr operation to query the status of the Lingjun HUB.
   *     *   If the status of the Lingjun HUB is Executing, it indicates that it is being created.
   *     *   If the status of the Lingjun HUB is Available, the creation is successful.
   * 
   * @param request - CreateErRequest
   * @returns CreateErResponse
   */
  async createEr(request: CreateErRequest): Promise<CreateErResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createErWithOptions(request, runtime);
  }

  /**
   * Create a network instance connection.
   * 
   * @remarks
   * When you call this operation to create a network instance connection, note that:
   * *   Make sure that you have created a Lingjun HUB instance.
   * *   Make sure that you have sufficient quota for network instance connections.
   * *   This operation is an asynchronous operation. After you call this operation, the system returns the ID of the network instance connection. In this case, the network instance connection may not be created yet, and the system is still creating the network instance in the background. You can query the connection status of a network instance by ListErAttachments or GetErAttachment:
   *     *   If the connection status of the network instance is Executing, the network instance is being created.
   *     *   If the connection status of the network instance is Available, the network instance is created.
   * 
   * @param request - CreateErAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateErAttachmentResponse
   */
  async createErAttachmentWithOptions(request: CreateErAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<CreateErAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoReceiveAllRoute)) {
      body["AutoReceiveAllRoute"] = request.autoReceiveAllRoute;
    }

    if (!$dara.isNull(request.erAttachmentName)) {
      body["ErAttachmentName"] = request.erAttachmentName;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceTenantId)) {
      body["ResourceTenantId"] = request.resourceTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateErAttachment",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateErAttachmentResponse>(await this.callApi(params, req, runtime), new CreateErAttachmentResponse({}));
    } else {
      return $dara.cast<CreateErAttachmentResponse>(await this.execute(params, req, runtime), new CreateErAttachmentResponse({}));
    }

  }

  /**
   * Create a network instance connection.
   * 
   * @remarks
   * When you call this operation to create a network instance connection, note that:
   * *   Make sure that you have created a Lingjun HUB instance.
   * *   Make sure that you have sufficient quota for network instance connections.
   * *   This operation is an asynchronous operation. After you call this operation, the system returns the ID of the network instance connection. In this case, the network instance connection may not be created yet, and the system is still creating the network instance in the background. You can query the connection status of a network instance by ListErAttachments or GetErAttachment:
   *     *   If the connection status of the network instance is Executing, the network instance is being created.
   *     *   If the connection status of the network instance is Available, the network instance is created.
   * 
   * @param request - CreateErAttachmentRequest
   * @returns CreateErAttachmentResponse
   */
  async createErAttachment(request: CreateErAttachmentRequest): Promise<CreateErAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createErAttachmentWithOptions(request, runtime);
  }

  /**
   * Users can use this API to create routing policy by specifying the network instance connection under Lingjun HUB.
   * 
   * @remarks
   * When you call this operation to create a routing policy, note that:
   * *   Make sure that you have created a Lingjun HUB instance.
   * *   Make sure that you have created a network instance connection.
   * *   This operation is an asynchronous operation. After you call this operation, the system returns the ID of the routing policy. In this case, the routing policy instance may not be created yet, and the system background creation task is still in progress. You can use ListErRouteMaps or GetErRouteMap to query the status of a routing policy.
   *     *   If the status of the routing policy is Execute, the system is creating the instance.
   *     *   If the status of the routing policy is Available, the creation is successful.
   * 
   * @param request - CreateErRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateErRouteMapResponse
   */
  async createErRouteMapWithOptions(request: CreateErRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<CreateErRouteMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.receptionInstanceId)) {
      body["ReceptionInstanceId"] = request.receptionInstanceId;
    }

    if (!$dara.isNull(request.receptionInstanceOwner)) {
      body["ReceptionInstanceOwner"] = request.receptionInstanceOwner;
    }

    if (!$dara.isNull(request.receptionInstanceType)) {
      body["ReceptionInstanceType"] = request.receptionInstanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.routeMapAction)) {
      body["RouteMapAction"] = request.routeMapAction;
    }

    if (!$dara.isNull(request.routeMapNum)) {
      body["RouteMapNum"] = request.routeMapNum;
    }

    if (!$dara.isNull(request.transmissionInstanceId)) {
      body["TransmissionInstanceId"] = request.transmissionInstanceId;
    }

    if (!$dara.isNull(request.transmissionInstanceOwner)) {
      body["TransmissionInstanceOwner"] = request.transmissionInstanceOwner;
    }

    if (!$dara.isNull(request.transmissionInstanceType)) {
      body["TransmissionInstanceType"] = request.transmissionInstanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateErRouteMap",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateErRouteMapResponse>(await this.callApi(params, req, runtime), new CreateErRouteMapResponse({}));
    } else {
      return $dara.cast<CreateErRouteMapResponse>(await this.execute(params, req, runtime), new CreateErRouteMapResponse({}));
    }

  }

  /**
   * Users can use this API to create routing policy by specifying the network instance connection under Lingjun HUB.
   * 
   * @remarks
   * When you call this operation to create a routing policy, note that:
   * *   Make sure that you have created a Lingjun HUB instance.
   * *   Make sure that you have created a network instance connection.
   * *   This operation is an asynchronous operation. After you call this operation, the system returns the ID of the routing policy. In this case, the routing policy instance may not be created yet, and the system background creation task is still in progress. You can use ListErRouteMaps or GetErRouteMap to query the status of a routing policy.
   *     *   If the status of the routing policy is Execute, the system is creating the instance.
   *     *   If the status of the routing policy is Available, the creation is successful.
   * 
   * @param request - CreateErRouteMapRequest
   * @returns CreateErRouteMapResponse
   */
  async createErRouteMap(request: CreateErRouteMapRequest): Promise<CreateErRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createErRouteMapWithOptions(request, runtime);
  }

  /**
   * Users can use this API to create a Lingjun subnet under the Lingjun network segment.
   * 
   * @remarks
   * When you call this operation to create a Lingjun subnet, note that:
   * *   You have created a Lingjun CIDR block.
   * *   Only one network segment can be specified for a Lingjun subnet.
   * *   The network segment cannot be modified after the Lingjun subnet is created.
   * *   Make sure that you have sufficient Lingjun subnet quota.
   * *   This interface is an asynchronous interface. After calling this interface, the system will return the ID of a Lingjun subnet. At this time, the Lingjun network segment may not be created yet, and the system background creation task is still in progress. You can call the ListSubnets or GetSubnet operation to query the status of the CIDR block of Lingjun.
   *     *   If the status of the Lingjun subnet is Executed, it indicates that it is being created.
   *     *   If the status of the Lingjun subnet is Available, the creation is successful.
   * 
   * @param request - CreateSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSubnetResponse
   */
  async createSubnetWithOptions(request: CreateSubnetRequest, runtime: $dara.RuntimeOptions): Promise<CreateSubnetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cidr)) {
      body["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetName)) {
      body["SubnetName"] = request.subnetName;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSubnetResponse>(await this.callApi(params, req, runtime), new CreateSubnetResponse({}));
    } else {
      return $dara.cast<CreateSubnetResponse>(await this.execute(params, req, runtime), new CreateSubnetResponse({}));
    }

  }

  /**
   * Users can use this API to create a Lingjun subnet under the Lingjun network segment.
   * 
   * @remarks
   * When you call this operation to create a Lingjun subnet, note that:
   * *   You have created a Lingjun CIDR block.
   * *   Only one network segment can be specified for a Lingjun subnet.
   * *   The network segment cannot be modified after the Lingjun subnet is created.
   * *   Make sure that you have sufficient Lingjun subnet quota.
   * *   This interface is an asynchronous interface. After calling this interface, the system will return the ID of a Lingjun subnet. At this time, the Lingjun network segment may not be created yet, and the system background creation task is still in progress. You can call the ListSubnets or GetSubnet operation to query the status of the CIDR block of Lingjun.
   *     *   If the status of the Lingjun subnet is Executed, it indicates that it is being created.
   *     *   If the status of the Lingjun subnet is Available, the creation is successful.
   * 
   * @param request - CreateSubnetRequest
   * @returns CreateSubnetResponse
   */
  async createSubnet(request: CreateSubnetRequest): Promise<CreateSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSubnetWithOptions(request, runtime);
  }

  /**
   * You can create a Lingjun connection to connect Lingjun network environment and Alibaba Cloud network environment.
   * 
   * @remarks
   * When you call this operation to create a Lingjun connection, note that:
   * *   When you specify the vccId parameter, the system will configure the purchased Lingjun connection for you. When the default vccId parameter is set, the system will automatically place an order and configure the Lingjun connection for you.
   * *   Make sure that you have called the InitializeVcc operation to grant permissions.
   * *   This interface is an asynchronous interface. After this interface is called, the system will return the Lingjun connection ID, but the Lingjun connection instance may not be created yet, and the system background creation task is still in progress. You can call the ListVccs or GetVcc operation to query the status of the Lingjun connection.
   *     *   If the status of the Lingjun connection is Executed, the Lingjun connection is being created.
   *     *   If the status of the Lingjun connection is Available, the Lingjun connection is created.
   * 
   * @param request - CreateVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVccResponse
   */
  async createVccWithOptions(request: CreateVccRequest, runtime: $dara.RuntimeOptions): Promise<CreateVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessCouldService)) {
      body["AccessCouldService"] = request.accessCouldService;
    }

    if (!$dara.isNull(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.bgpAsn)) {
      body["BgpAsn"] = request.bgpAsn;
    }

    if (!$dara.isNull(request.bgpCidr)) {
      body["BgpCidr"] = request.bgpCidr;
    }

    if (!$dara.isNull(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cenOwnerId)) {
      body["CenOwnerId"] = request.cenOwnerId;
    }

    if (!$dara.isNull(request.connectionType)) {
      body["ConnectionType"] = request.connectionType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vccName)) {
      body["VccName"] = request.vccName;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVccResponse>(await this.callApi(params, req, runtime), new CreateVccResponse({}));
    } else {
      return $dara.cast<CreateVccResponse>(await this.execute(params, req, runtime), new CreateVccResponse({}));
    }

  }

  /**
   * You can create a Lingjun connection to connect Lingjun network environment and Alibaba Cloud network environment.
   * 
   * @remarks
   * When you call this operation to create a Lingjun connection, note that:
   * *   When you specify the vccId parameter, the system will configure the purchased Lingjun connection for you. When the default vccId parameter is set, the system will automatically place an order and configure the Lingjun connection for you.
   * *   Make sure that you have called the InitializeVcc operation to grant permissions.
   * *   This interface is an asynchronous interface. After this interface is called, the system will return the Lingjun connection ID, but the Lingjun connection instance may not be created yet, and the system background creation task is still in progress. You can call the ListVccs or GetVcc operation to query the status of the Lingjun connection.
   *     *   If the status of the Lingjun connection is Executed, the Lingjun connection is being created.
   *     *   If the status of the Lingjun connection is Available, the Lingjun connection is created.
   * 
   * @param request - CreateVccRequest
   * @returns CreateVccResponse
   */
  async createVcc(request: CreateVccRequest): Promise<CreateVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVccWithOptions(request, runtime);
  }

  /**
   * Users can use this API to connect Lingjun instance to the Lingjun HUB instance of the target account. After authorization, the target account can be associated with your Lingjun connection by using the authorized Lingjun HUB instance.
   * 
   * @remarks
   * When you call this operation to create cross-account authorization for Lingjun HUB, note that:
   * *   Make sure that the Alibaba Cloud ID and Lingjun HUB instance that you want to authorize are correct.
   * *   If you authorize the account of the other party, the account of the other party can load your local network instance to its Lingjun HUB, and the other party\\"s network will be connected to your network. Please proceed with caution.
   * 
   * @param request - CreateVccGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVccGrantRuleResponse
   */
  async createVccGrantRuleWithOptions(request: CreateVccGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateVccGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVccGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVccGrantRuleResponse>(await this.callApi(params, req, runtime), new CreateVccGrantRuleResponse({}));
    } else {
      return $dara.cast<CreateVccGrantRuleResponse>(await this.execute(params, req, runtime), new CreateVccGrantRuleResponse({}));
    }

  }

  /**
   * Users can use this API to connect Lingjun instance to the Lingjun HUB instance of the target account. After authorization, the target account can be associated with your Lingjun connection by using the authorized Lingjun HUB instance.
   * 
   * @remarks
   * When you call this operation to create cross-account authorization for Lingjun HUB, note that:
   * *   Make sure that the Alibaba Cloud ID and Lingjun HUB instance that you want to authorize are correct.
   * *   If you authorize the account of the other party, the account of the other party can load your local network instance to its Lingjun HUB, and the other party\\"s network will be connected to your network. Please proceed with caution.
   * 
   * @param request - CreateVccGrantRuleRequest
   * @returns CreateVccGrantRuleResponse
   */
  async createVccGrantRule(request: CreateVccGrantRuleRequest): Promise<CreateVccGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVccGrantRuleWithOptions(request, runtime);
  }

  /**
   * Create a Lingjun connection route entry.
   * 
   * @remarks
   * When you call this operation to create a VBR route entry, take note of the following items:
   * *   After you call this operation, static route entries and BGP network announcements are created on the VBR to which the Lingjun connection belongs.
   * *   This operation is an asynchronous operation. After you call this operation, the VBR static route entry may not be created yet, and the system still creates the static route entry in the background. You can query the status of VBR static route entries by ListVccRouteEntries or GetVccRouteEntry:
   *     *   If the VBR static route entry is in the Executing state, it indicates that it is being created.
   *     *   If the status of the VBR static route entry is Available, the VBR is created.
   * 
   * @param request - CreateVccRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVccRouteEntryResponse
   */
  async createVccRouteEntryWithOptions(request: CreateVccRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<CreateVccRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVccRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVccRouteEntryResponse>(await this.callApi(params, req, runtime), new CreateVccRouteEntryResponse({}));
    } else {
      return $dara.cast<CreateVccRouteEntryResponse>(await this.execute(params, req, runtime), new CreateVccRouteEntryResponse({}));
    }

  }

  /**
   * Create a Lingjun connection route entry.
   * 
   * @remarks
   * When you call this operation to create a VBR route entry, take note of the following items:
   * *   After you call this operation, static route entries and BGP network announcements are created on the VBR to which the Lingjun connection belongs.
   * *   This operation is an asynchronous operation. After you call this operation, the VBR static route entry may not be created yet, and the system still creates the static route entry in the background. You can query the status of VBR static route entries by ListVccRouteEntries or GetVccRouteEntry:
   *     *   If the VBR static route entry is in the Executing state, it indicates that it is being created.
   *     *   If the status of the VBR static route entry is Available, the VBR is created.
   * 
   * @param request - CreateVccRouteEntryRequest
   * @returns CreateVccRouteEntryResponse
   */
  async createVccRouteEntry(request: CreateVccRouteEntryRequest): Promise<CreateVccRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVccRouteEntryWithOptions(request, runtime);
  }

  /**
   * Create a private Lingjun CIDR block. This CIDR block has an independent network environment.
   * 
   * @remarks
   * When you call this operation to create a CIDR block for Lingjun, take note of the following:
   * *   A Lingjun network segment can specify an additional network segment in addition to a main network segment.
   * *   After the Lingjun network segment is created, the network segment cannot be modified.
   * *   Make sure that you have a sufficient quota of Lingjun CIDR blocks.
   * *   This interface is an asynchronous interface. After calling this interface, the system will return the ID of a Lingjun network segment. At this time, the Lingjun network segment may not be created yet, and the system background creation task is still in progress. You can call the ListVpds or GetVpd operation to query the status of the CIDR block of Lingjun.
   *     *   If the status of the Lingjun CIDR block is Executed, the CIDR block is being created.
   *     *   If the status of the Lingjun CIDR block is Available, the creation is successful.
   * 
   * @param request - CreateVpdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpdResponse
   */
  async createVpdWithOptions(request: CreateVpdRequest, runtime: $dara.RuntimeOptions): Promise<CreateVpdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cidr)) {
      body["Cidr"] = request.cidr;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subnets)) {
      body["Subnets"] = request.subnets;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpdName)) {
      body["VpdName"] = request.vpdName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVpdResponse>(await this.callApi(params, req, runtime), new CreateVpdResponse({}));
    } else {
      return $dara.cast<CreateVpdResponse>(await this.execute(params, req, runtime), new CreateVpdResponse({}));
    }

  }

  /**
   * Create a private Lingjun CIDR block. This CIDR block has an independent network environment.
   * 
   * @remarks
   * When you call this operation to create a CIDR block for Lingjun, take note of the following:
   * *   A Lingjun network segment can specify an additional network segment in addition to a main network segment.
   * *   After the Lingjun network segment is created, the network segment cannot be modified.
   * *   Make sure that you have a sufficient quota of Lingjun CIDR blocks.
   * *   This interface is an asynchronous interface. After calling this interface, the system will return the ID of a Lingjun network segment. At this time, the Lingjun network segment may not be created yet, and the system background creation task is still in progress. You can call the ListVpds or GetVpd operation to query the status of the CIDR block of Lingjun.
   *     *   If the status of the Lingjun CIDR block is Executed, the CIDR block is being created.
   *     *   If the status of the Lingjun CIDR block is Available, the creation is successful.
   * 
   * @param request - CreateVpdRequest
   * @returns CreateVpdResponse
   */
  async createVpd(request: CreateVpdRequest): Promise<CreateVpdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpdWithOptions(request, runtime);
  }

  /**
   * Users can use this API to authorize Lingjun HUB instances of the target account. After authorization, the target account can be associated with your Lingjun CIDR block by using the authorized Lingjun HUB instance.
   * 
   * @remarks
   * When you call this operation to create cross-account authorization for Lingjun HUB, note that:
   * *   Make sure that the Alibaba Cloud ID and Lingjun HUB instance that you want to authorize are correct.
   * *   If you authorize the account of the other party, the account of the other party can load your local network instance to its Lingjun HUB, and the other party\\"s network will be connected to your network. Please proceed with caution.
   * 
   * @param request - CreateVpdGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpdGrantRuleResponse
   */
  async createVpdGrantRuleWithOptions(request: CreateVpdGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateVpdGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpdGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVpdGrantRuleResponse>(await this.callApi(params, req, runtime), new CreateVpdGrantRuleResponse({}));
    } else {
      return $dara.cast<CreateVpdGrantRuleResponse>(await this.execute(params, req, runtime), new CreateVpdGrantRuleResponse({}));
    }

  }

  /**
   * Users can use this API to authorize Lingjun HUB instances of the target account. After authorization, the target account can be associated with your Lingjun CIDR block by using the authorized Lingjun HUB instance.
   * 
   * @remarks
   * When you call this operation to create cross-account authorization for Lingjun HUB, note that:
   * *   Make sure that the Alibaba Cloud ID and Lingjun HUB instance that you want to authorize are correct.
   * *   If you authorize the account of the other party, the account of the other party can load your local network instance to its Lingjun HUB, and the other party\\"s network will be connected to your network. Please proceed with caution.
   * 
   * @param request - CreateVpdGrantRuleRequest
   * @returns CreateVpdGrantRuleResponse
   */
  async createVpdGrantRule(request: CreateVpdGrantRuleRequest): Promise<CreateVpdGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVpdGrantRuleWithOptions(request, runtime);
  }

  /**
   * Delete Lingjun Elastic Network Interface. After deletion, all relevant data will be lost and cannot be recovered. Please operate with caution.
   * 
   * @param request - DeleteElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteElasticNetworkInterfaceResponse
   */
  async deleteElasticNetworkInterfaceWithOptions(request: DeleteElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new DeleteElasticNetworkInterfaceResponse({}));
    } else {
      return $dara.cast<DeleteElasticNetworkInterfaceResponse>(await this.execute(params, req, runtime), new DeleteElasticNetworkInterfaceResponse({}));
    }

  }

  /**
   * Delete Lingjun Elastic Network Interface. After deletion, all relevant data will be lost and cannot be recovered. Please operate with caution.
   * 
   * @param request - DeleteElasticNetworkInterfaceRequest
   * @returns DeleteElasticNetworkInterfaceResponse
   */
  async deleteElasticNetworkInterface(request: DeleteElasticNetworkInterfaceRequest): Promise<DeleteElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * After you delete a Lingjun HUB instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete the Lingjun HUB, note that:
   * *   Before you delete the instance, make sure that no network instance is connected to the Lingjun HUB instance.
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun HUB instance may not be deleted, and the system background deletion task is still in progress. You can call the ListErs or GetEr operation to query the deletion status of the Lingjun HUB.
   *     *   If the status of the Lingjun HUB is Deleting, the Lingjun HUB instance is being deleted.
   *     *   If no Lingjun HUB instance is recorded, the Lingjun HUB instance has been deleted.
   * 
   * @param request - DeleteErRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteErResponse
   */
  async deleteErWithOptions(request: DeleteErRequest, runtime: $dara.RuntimeOptions): Promise<DeleteErResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteErResponse>(await this.callApi(params, req, runtime), new DeleteErResponse({}));
    } else {
      return $dara.cast<DeleteErResponse>(await this.execute(params, req, runtime), new DeleteErResponse({}));
    }

  }

  /**
   * After you delete a Lingjun HUB instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete the Lingjun HUB, note that:
   * *   Before you delete the instance, make sure that no network instance is connected to the Lingjun HUB instance.
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun HUB instance may not be deleted, and the system background deletion task is still in progress. You can call the ListErs or GetEr operation to query the deletion status of the Lingjun HUB.
   *     *   If the status of the Lingjun HUB is Deleting, the Lingjun HUB instance is being deleted.
   *     *   If no Lingjun HUB instance is recorded, the Lingjun HUB instance has been deleted.
   * 
   * @param request - DeleteErRequest
   * @returns DeleteErResponse
   */
  async deleteEr(request: DeleteErRequest): Promise<DeleteErResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteErWithOptions(request, runtime);
  }

  /**
   * If you delete a network instance that is connected to an instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a network instance connection, take note of the following:
   * *   Before you delete the instance, make sure that no routing policy exists under the network instance connection instance.
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This operation is an asynchronous operation. After you call this operation, the network instance that is connected to the instance may not be deleted. The system still deletes the instance in the background. You can call the ListErAttachments or GetErAttachment to query the deletion status of network instance connections:
   *     *   If the status of the network instance connection is Deleting, the network instance connection is being deleted.
   *     *   If there is no connection record for the network instance, the connection to the network instance has been deleted.
   * 
   * @param request - DeleteErAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteErAttachmentResponse
   */
  async deleteErAttachmentWithOptions(request: DeleteErAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<DeleteErAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erAttachmentId)) {
      body["ErAttachmentId"] = request.erAttachmentId;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteErAttachment",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteErAttachmentResponse>(await this.callApi(params, req, runtime), new DeleteErAttachmentResponse({}));
    } else {
      return $dara.cast<DeleteErAttachmentResponse>(await this.execute(params, req, runtime), new DeleteErAttachmentResponse({}));
    }

  }

  /**
   * If you delete a network instance that is connected to an instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a network instance connection, take note of the following:
   * *   Before you delete the instance, make sure that no routing policy exists under the network instance connection instance.
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This operation is an asynchronous operation. After you call this operation, the network instance that is connected to the instance may not be deleted. The system still deletes the instance in the background. You can call the ListErAttachments or GetErAttachment to query the deletion status of network instance connections:
   *     *   If the status of the network instance connection is Deleting, the network instance connection is being deleted.
   *     *   If there is no connection record for the network instance, the connection to the network instance has been deleted.
   * 
   * @param request - DeleteErAttachmentRequest
   * @returns DeleteErAttachmentResponse
   */
  async deleteErAttachment(request: DeleteErAttachmentRequest): Promise<DeleteErAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteErAttachmentWithOptions(request, runtime);
  }

  /**
   * If you delete a routing policy instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a routing policy, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the routing policy instance may not be deleted yet, and the system background deletion task is still in progress. You can call the ListErRouteMaps or GetErRouteMap operation to query the deletion status of a routing policy.
   *     *   If the routing policy is in the Deleting state, the routing policy instance is being deleted.
   *     *   If no routing policy instance is recorded, the routing policy instance has been deleted.
   * 
   * @param request - DeleteErRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteErRouteMapResponse
   */
  async deleteErRouteMapWithOptions(request: DeleteErRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<DeleteErRouteMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteMapIds)) {
      body["ErRouteMapIds"] = request.erRouteMapIds;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteErRouteMap",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteErRouteMapResponse>(await this.callApi(params, req, runtime), new DeleteErRouteMapResponse({}));
    } else {
      return $dara.cast<DeleteErRouteMapResponse>(await this.execute(params, req, runtime), new DeleteErRouteMapResponse({}));
    }

  }

  /**
   * If you delete a routing policy instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a routing policy, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the routing policy instance may not be deleted yet, and the system background deletion task is still in progress. You can call the ListErRouteMaps or GetErRouteMap operation to query the deletion status of a routing policy.
   *     *   If the routing policy is in the Deleting state, the routing policy instance is being deleted.
   *     *   If no routing policy instance is recorded, the routing policy instance has been deleted.
   * 
   * @param request - DeleteErRouteMapRequest
   * @returns DeleteErRouteMapResponse
   */
  async deleteErRouteMap(request: DeleteErRouteMapRequest): Promise<DeleteErRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteErRouteMapWithOptions(request, runtime);
  }

  /**
   * If you delete a Lingjun subnet instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a Lingjun subnet, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun subnet instance may not be deleted, and the system background deletion task is still in progress. You can call the ListSubnets or GetSubnet operation to query the deletion status of the subnet.
   *     *   If the status of the Lingjun subnet is Deleting, the Lingjun subnet instance is being deleted.
   *     *   If there is no record of the Lingjun subnet instance, the Lingjun subnet instance has been deleted.
   * 
   * @param request - DeleteSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSubnetResponse
   */
  async deleteSubnetWithOptions(request: DeleteSubnetRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSubnetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSubnetResponse>(await this.callApi(params, req, runtime), new DeleteSubnetResponse({}));
    } else {
      return $dara.cast<DeleteSubnetResponse>(await this.execute(params, req, runtime), new DeleteSubnetResponse({}));
    }

  }

  /**
   * If you delete a Lingjun subnet instance, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a Lingjun subnet, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun subnet instance may not be deleted, and the system background deletion task is still in progress. You can call the ListSubnets or GetSubnet operation to query the deletion status of the subnet.
   *     *   If the status of the Lingjun subnet is Deleting, the Lingjun subnet instance is being deleted.
   *     *   If there is no record of the Lingjun subnet instance, the Lingjun subnet instance has been deleted.
   * 
   * @param request - DeleteSubnetRequest
   * @returns DeleteSubnetResponse
   */
  async deleteSubnet(request: DeleteSubnetRequest): Promise<DeleteSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSubnetWithOptions(request, runtime);
  }

  /**
   * If you delete a Lingjun HUB cross-account authorization that is connected to Lingjun, the related data is lost and cannot be recovered.
   * 
   * @param request - DeleteVccGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVccGrantRuleResponse
   */
  async deleteVccGrantRuleWithOptions(request: DeleteVccGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVccGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVccGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVccGrantRuleResponse>(await this.callApi(params, req, runtime), new DeleteVccGrantRuleResponse({}));
    } else {
      return $dara.cast<DeleteVccGrantRuleResponse>(await this.execute(params, req, runtime), new DeleteVccGrantRuleResponse({}));
    }

  }

  /**
   * If you delete a Lingjun HUB cross-account authorization that is connected to Lingjun, the related data is lost and cannot be recovered.
   * 
   * @param request - DeleteVccGrantRuleRequest
   * @returns DeleteVccGrantRuleResponse
   */
  async deleteVccGrantRule(request: DeleteVccGrantRuleRequest): Promise<DeleteVccGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVccGrantRuleWithOptions(request, runtime);
  }

  /**
   * Delete a Lingjun connection route entry.
   * 
   * @remarks
   * When you call this operation to delete a VBR static route entry, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This operation is an asynchronous operation. After you call this operation, the VBR static route entries may not be deleted. The system still deletes the VBR static route entries in the background. You can call the ListVccRouteEntries or GetVccRouteEntry to query the deletion status of VBR static route entries:
   *     *   If the VBR static route entry is in the Deleting state, the VBR static route entry is being deleted.
   *     *   If no VBR static route entry instance is recorded, the VBR static route entry instance has been deleted.
   * 
   * @param request - DeleteVccRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVccRouteEntryResponse
   */
  async deleteVccRouteEntryWithOptions(request: DeleteVccRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVccRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vccRouteEntryId)) {
      body["VccRouteEntryId"] = request.vccRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVccRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVccRouteEntryResponse>(await this.callApi(params, req, runtime), new DeleteVccRouteEntryResponse({}));
    } else {
      return $dara.cast<DeleteVccRouteEntryResponse>(await this.execute(params, req, runtime), new DeleteVccRouteEntryResponse({}));
    }

  }

  /**
   * Delete a Lingjun connection route entry.
   * 
   * @remarks
   * When you call this operation to delete a VBR static route entry, note that:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   This operation is an asynchronous operation. After you call this operation, the VBR static route entries may not be deleted. The system still deletes the VBR static route entries in the background. You can call the ListVccRouteEntries or GetVccRouteEntry to query the deletion status of VBR static route entries:
   *     *   If the VBR static route entry is in the Deleting state, the VBR static route entry is being deleted.
   *     *   If no VBR static route entry instance is recorded, the VBR static route entry instance has been deleted.
   * 
   * @param request - DeleteVccRouteEntryRequest
   * @returns DeleteVccRouteEntryResponse
   */
  async deleteVccRouteEntry(request: DeleteVccRouteEntryRequest): Promise<DeleteVccRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVccRouteEntryWithOptions(request, runtime);
  }

  /**
   * After you delete a Lingjun CIDR block, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a Lingjun CIDR block, take note of the following items:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   Before deleting, make sure that all Lingjun subnet instances under the Lingjun CIDR block have been deleted.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun network segment instance may not be deleted, and the system background deletion task is still in progress. You can call the ListVpds or GetVpd operation to query the deletion status of the CIDR block.
   *     *   If the status of the Lingjun CIDR block is Deleting, the Lingjun CIDR block is being deleted.
   *     *   If there is no record of the Lingjun CIDR block instance, the Lingjun CIDR block instance has been deleted.
   * 
   * @param request - DeleteVpdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpdResponse
   */
  async deleteVpdWithOptions(request: DeleteVpdRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVpdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVpdResponse>(await this.callApi(params, req, runtime), new DeleteVpdResponse({}));
    } else {
      return $dara.cast<DeleteVpdResponse>(await this.execute(params, req, runtime), new DeleteVpdResponse({}));
    }

  }

  /**
   * After you delete a Lingjun CIDR block, the related data is lost and cannot be recovered.
   * 
   * @remarks
   * When you call this operation to delete a Lingjun CIDR block, take note of the following items:
   * *   After deletion, all related data is lost and cannot be recovered. Exercise caution when performing this operation.
   * *   Before deleting, make sure that all Lingjun subnet instances under the Lingjun CIDR block have been deleted.
   * *   This interface is an asynchronous interface. After this interface is called, the Lingjun network segment instance may not be deleted, and the system background deletion task is still in progress. You can call the ListVpds or GetVpd operation to query the deletion status of the CIDR block.
   *     *   If the status of the Lingjun CIDR block is Deleting, the Lingjun CIDR block is being deleted.
   *     *   If there is no record of the Lingjun CIDR block instance, the Lingjun CIDR block instance has been deleted.
   * 
   * @param request - DeleteVpdRequest
   * @returns DeleteVpdResponse
   */
  async deleteVpd(request: DeleteVpdRequest): Promise<DeleteVpdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpdWithOptions(request, runtime);
  }

  /**
   * Delete the Lingjun HUB cross-account authorization for a Lingjun CIDR block. After the deletion, the related data is lost and cannot be recovered.
   * 
   * @param request - DeleteVpdGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpdGrantRuleResponse
   */
  async deleteVpdGrantRuleWithOptions(request: DeleteVpdGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVpdGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpdGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVpdGrantRuleResponse>(await this.callApi(params, req, runtime), new DeleteVpdGrantRuleResponse({}));
    } else {
      return $dara.cast<DeleteVpdGrantRuleResponse>(await this.execute(params, req, runtime), new DeleteVpdGrantRuleResponse({}));
    }

  }

  /**
   * Delete the Lingjun HUB cross-account authorization for a Lingjun CIDR block. After the deletion, the related data is lost and cannot be recovered.
   * 
   * @param request - DeleteVpdGrantRuleRequest
   * @returns DeleteVpdGrantRuleResponse
   */
  async deleteVpdGrantRule(request: DeleteVpdGrantRuleRequest): Promise<DeleteVpdGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVpdGrantRuleWithOptions(request, runtime);
  }

  /**
   * Query whether the user has the SLR role-AliyunServiceRoleForEfloVcc required for Lingjun connection.
   * 
   * @remarks
   * You can call this operation to query whether a user account has a **AliyunServiceRoleForEfloVcc** role.
   * >  If you do not have a **AliyunServiceRoleForEfloVcc** role, you need to use the initializeVcc interface to complete authorization, otherwise users will not be able to use Lingjun to connect to the product.
   * 
   * @param request - DescribeSlrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlrResponse
   */
  async describeSlrWithOptions(request: DescribeSlrRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSlrResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSlrResponse>(await this.callApi(params, req, runtime), new DescribeSlrResponse({}));
    } else {
      return $dara.cast<DescribeSlrResponse>(await this.execute(params, req, runtime), new DescribeSlrResponse({}));
    }

  }

  /**
   * Query whether the user has the SLR role-AliyunServiceRoleForEfloVcc required for Lingjun connection.
   * 
   * @remarks
   * You can call this operation to query whether a user account has a **AliyunServiceRoleForEfloVcc** role.
   * >  If you do not have a **AliyunServiceRoleForEfloVcc** role, you need to use the initializeVcc interface to complete authorization, otherwise users will not be able to use Lingjun to connect to the product.
   * 
   * @param request - DescribeSlrRequest
   * @returns DescribeSlrResponse
   */
  async describeSlr(request: DescribeSlrRequest): Promise<DescribeSlrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlrWithOptions(request, runtime);
  }

  /**
   * Unbind Lingjun ENI from NC.
   * 
   * @remarks
   * This interface is an asynchronous interface, and you need to use the query interface to wait for the Lingjun Elastic Network Interface to reach the unbound state.
   * 
   * @param request - DetachElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachElasticNetworkInterfaceResponse
   */
  async detachElasticNetworkInterfaceWithOptions(request: DetachElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<DetachElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new DetachElasticNetworkInterfaceResponse({}));
    } else {
      return $dara.cast<DetachElasticNetworkInterfaceResponse>(await this.execute(params, req, runtime), new DetachElasticNetworkInterfaceResponse({}));
    }

  }

  /**
   * Unbind Lingjun ENI from NC.
   * 
   * @remarks
   * This interface is an asynchronous interface, and you need to use the query interface to wait for the Lingjun Elastic Network Interface to reach the unbound state.
   * 
   * @param request - DetachElasticNetworkInterfaceRequest
   * @returns DetachElasticNetworkInterfaceResponse
   */
  async detachElasticNetworkInterface(request: DetachElasticNetworkInterfaceRequest): Promise<DetachElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Users can use this API to query the destination CIDR block of the source policy instance when creating a routing strategy.
   * 
   * @param request - GetDestinationCidrBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDestinationCidrBlockResponse
   */
  async getDestinationCidrBlockWithOptions(request: GetDestinationCidrBlockRequest, runtime: $dara.RuntimeOptions): Promise<GetDestinationCidrBlockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDestinationCidrBlock",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDestinationCidrBlockResponse>(await this.callApi(params, req, runtime), new GetDestinationCidrBlockResponse({}));
    } else {
      return $dara.cast<GetDestinationCidrBlockResponse>(await this.execute(params, req, runtime), new GetDestinationCidrBlockResponse({}));
    }

  }

  /**
   * Users can use this API to query the destination CIDR block of the source policy instance when creating a routing strategy.
   * 
   * @param request - GetDestinationCidrBlockRequest
   * @returns GetDestinationCidrBlockResponse
   */
  async getDestinationCidrBlock(request: GetDestinationCidrBlockRequest): Promise<GetDestinationCidrBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDestinationCidrBlockWithOptions(request, runtime);
  }

  /**
   * Queries the details of an LENI.
   * 
   * @param request - GetElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetElasticNetworkInterfaceResponse
   */
  async getElasticNetworkInterfaceWithOptions(request: GetElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<GetElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new GetElasticNetworkInterfaceResponse({}));
    } else {
      return $dara.cast<GetElasticNetworkInterfaceResponse>(await this.execute(params, req, runtime), new GetElasticNetworkInterfaceResponse({}));
    }

  }

  /**
   * Queries the details of an LENI.
   * 
   * @param request - GetElasticNetworkInterfaceRequest
   * @returns GetElasticNetworkInterfaceResponse
   */
  async getElasticNetworkInterface(request: GetElasticNetworkInterfaceRequest): Promise<GetElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Queries the Lingjun HUB.
   * 
   * @param request - GetErRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErResponse
   */
  async getErWithOptions(request: GetErRequest, runtime: $dara.RuntimeOptions): Promise<GetErResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetErResponse>(await this.callApi(params, req, runtime), new GetErResponse({}));
    } else {
      return $dara.cast<GetErResponse>(await this.execute(params, req, runtime), new GetErResponse({}));
    }

  }

  /**
   * Queries the Lingjun HUB.
   * 
   * @param request - GetErRequest
   * @returns GetErResponse
   */
  async getEr(request: GetErRequest): Promise<GetErResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErWithOptions(request, runtime);
  }

  /**
   * Queries network instance connections.
   * 
   * @param request - GetErAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErAttachmentResponse
   */
  async getErAttachmentWithOptions(request: GetErAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<GetErAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erAttachmentId)) {
      body["ErAttachmentId"] = request.erAttachmentId;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErAttachment",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetErAttachmentResponse>(await this.callApi(params, req, runtime), new GetErAttachmentResponse({}));
    } else {
      return $dara.cast<GetErAttachmentResponse>(await this.execute(params, req, runtime), new GetErAttachmentResponse({}));
    }

  }

  /**
   * Queries network instance connections.
   * 
   * @param request - GetErAttachmentRequest
   * @returns GetErAttachmentResponse
   */
  async getErAttachment(request: GetErAttachmentRequest): Promise<GetErAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErAttachmentWithOptions(request, runtime);
  }

  /**
   * Queries the details of Lingjun HUB route entries.
   * 
   * @param request - GetErRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErRouteEntryResponse
   */
  async getErRouteEntryWithOptions(request: GetErRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<GetErRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteEntryId)) {
      body["ErRouteEntryId"] = request.erRouteEntryId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetErRouteEntryResponse>(await this.callApi(params, req, runtime), new GetErRouteEntryResponse({}));
    } else {
      return $dara.cast<GetErRouteEntryResponse>(await this.execute(params, req, runtime), new GetErRouteEntryResponse({}));
    }

  }

  /**
   * Queries the details of Lingjun HUB route entries.
   * 
   * @param request - GetErRouteEntryRequest
   * @returns GetErRouteEntryResponse
   */
  async getErRouteEntry(request: GetErRouteEntryRequest): Promise<GetErRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErRouteEntryWithOptions(request, runtime);
  }

  /**
   * query lingjun hub routing policy details.
   * 
   * @param request - GetErRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErRouteMapResponse
   */
  async getErRouteMapWithOptions(request: GetErRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<GetErRouteMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteMapId)) {
      body["ErRouteMapId"] = request.erRouteMapId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErRouteMap",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetErRouteMapResponse>(await this.callApi(params, req, runtime), new GetErRouteMapResponse({}));
    } else {
      return $dara.cast<GetErRouteMapResponse>(await this.execute(params, req, runtime), new GetErRouteMapResponse({}));
    }

  }

  /**
   * query lingjun hub routing policy details.
   * 
   * @param request - GetErRouteMapRequest
   * @returns GetErRouteMapResponse
   */
  async getErRouteMap(request: GetErRouteMapRequest): Promise<GetErRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErRouteMapWithOptions(request, runtime);
  }

  /**
   * Query the physical topology information of Lingjun network interface controller and Lingjun nodes under VPD.
   * 
   * @param request - GetFabricTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFabricTopologyResponse
   */
  async getFabricTopologyWithOptions(request: GetFabricTopologyRequest, runtime: $dara.RuntimeOptions): Promise<GetFabricTopologyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.lniIds)) {
      body["LniIds"] = request.lniIds;
    }

    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFabricTopology",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFabricTopologyResponse>(await this.callApi(params, req, runtime), new GetFabricTopologyResponse({}));
    } else {
      return $dara.cast<GetFabricTopologyResponse>(await this.execute(params, req, runtime), new GetFabricTopologyResponse({}));
    }

  }

  /**
   * Query the physical topology information of Lingjun network interface controller and Lingjun nodes under VPD.
   * 
   * @param request - GetFabricTopologyRequest
   * @returns GetFabricTopologyResponse
   */
  async getFabricTopology(request: GetFabricTopologyRequest): Promise<GetFabricTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFabricTopologyWithOptions(request, runtime);
  }

  /**
   * Obtains the details of the secondary private IP address of a specified Lingjun Elastic Network Interface.
   * 
   * @param request - GetLeniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLeniPrivateIpAddressResponse
   */
  async getLeniPrivateIpAddressWithOptions(request: GetLeniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<GetLeniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLeniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLeniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new GetLeniPrivateIpAddressResponse({}));
    } else {
      return $dara.cast<GetLeniPrivateIpAddressResponse>(await this.execute(params, req, runtime), new GetLeniPrivateIpAddressResponse({}));
    }

  }

  /**
   * Obtains the details of the secondary private IP address of a specified Lingjun Elastic Network Interface.
   * 
   * @param request - GetLeniPrivateIpAddressRequest
   * @returns GetLeniPrivateIpAddressResponse
   */
  async getLeniPrivateIpAddress(request: GetLeniPrivateIpAddressRequest): Promise<GetLeniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLeniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Obtains the details about the secondary private IP address.
   * 
   * @param request - GetLniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLniPrivateIpAddressResponse
   */
  async getLniPrivateIpAddressWithOptions(request: GetLniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<GetLniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new GetLniPrivateIpAddressResponse({}));
    } else {
      return $dara.cast<GetLniPrivateIpAddressResponse>(await this.execute(params, req, runtime), new GetLniPrivateIpAddressResponse({}));
    }

  }

  /**
   * Obtains the details about the secondary private IP address.
   * 
   * @param request - GetLniPrivateIpAddressRequest
   * @returns GetLniPrivateIpAddressResponse
   */
  async getLniPrivateIpAddress(request: GetLniPrivateIpAddressRequest): Promise<GetLniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Queries information about an LNI.
   * 
   * @param request - GetNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkInterfaceResponse
   */
  async getNetworkInterfaceWithOptions(request: GetNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<GetNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new GetNetworkInterfaceResponse({}));
    } else {
      return $dara.cast<GetNetworkInterfaceResponse>(await this.execute(params, req, runtime), new GetNetworkInterfaceResponse({}));
    }

  }

  /**
   * Queries information about an LNI.
   * 
   * @param request - GetNetworkInterfaceRequest
   * @returns GetNetworkInterfaceResponse
   */
  async getNetworkInterface(request: GetNetworkInterfaceRequest): Promise<GetNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Queries the network information of a node.
   * 
   * @param request - GetNodeInfoForPodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeInfoForPodResponse
   */
  async getNodeInfoForPodWithOptions(request: GetNodeInfoForPodRequest, runtime: $dara.RuntimeOptions): Promise<GetNodeInfoForPodResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeInfoForPod",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetNodeInfoForPodResponse>(await this.callApi(params, req, runtime), new GetNodeInfoForPodResponse({}));
    } else {
      return $dara.cast<GetNodeInfoForPodResponse>(await this.execute(params, req, runtime), new GetNodeInfoForPodResponse({}));
    }

  }

  /**
   * Queries the network information of a node.
   * 
   * @param request - GetNodeInfoForPodRequest
   * @returns GetNodeInfoForPodResponse
   */
  async getNodeInfoForPod(request: GetNodeInfoForPodRequest): Promise<GetNodeInfoForPodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeInfoForPodWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Lingjun subnet, including the type, CIDR block, instance ID, instance status, and number of NCs.
   * 
   * @param request - GetSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubnetResponse
   */
  async getSubnetWithOptions(request: GetSubnetRequest, runtime: $dara.RuntimeOptions): Promise<GetSubnetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSubnetResponse>(await this.callApi(params, req, runtime), new GetSubnetResponse({}));
    } else {
      return $dara.cast<GetSubnetResponse>(await this.execute(params, req, runtime), new GetSubnetResponse({}));
    }

  }

  /**
   * Queries the details of a Lingjun subnet, including the type, CIDR block, instance ID, instance status, and number of NCs.
   * 
   * @param request - GetSubnetRequest
   * @returns GetSubnetResponse
   */
  async getSubnet(request: GetSubnetRequest): Promise<GetSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubnetWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Lingjun connection, including the specification, Express Connect circuit access port type, instance status, bandwidth, and BGP CIDR block.
   * 
   * @param request - GetVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVccResponse
   */
  async getVccWithOptions(request: GetVccRequest, runtime: $dara.RuntimeOptions): Promise<GetVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetVccResponse>(await this.callApi(params, req, runtime), new GetVccResponse({}));
    } else {
      return $dara.cast<GetVccResponse>(await this.execute(params, req, runtime), new GetVccResponse({}));
    }

  }

  /**
   * Queries the details of a Lingjun connection, including the specification, Express Connect circuit access port type, instance status, bandwidth, and BGP CIDR block.
   * 
   * @param request - GetVccRequest
   * @returns GetVccResponse
   */
  async getVcc(request: GetVccRequest): Promise<GetVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVccWithOptions(request, runtime);
  }

  /**
   * Queries the details of cross-account resource authorization for a Lingjun connection, including the authorized tenant ID, Lingjun HUB instance ID, and network instance ID.
   * 
   * @param request - GetVccGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVccGrantRuleResponse
   */
  async getVccGrantRuleWithOptions(request: GetVccGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<GetVccGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVccGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetVccGrantRuleResponse>(await this.callApi(params, req, runtime), new GetVccGrantRuleResponse({}));
    } else {
      return $dara.cast<GetVccGrantRuleResponse>(await this.execute(params, req, runtime), new GetVccGrantRuleResponse({}));
    }

  }

  /**
   * Queries the details of cross-account resource authorization for a Lingjun connection, including the authorized tenant ID, Lingjun HUB instance ID, and network instance ID.
   * 
   * @param request - GetVccGrantRuleRequest
   * @returns GetVccGrantRuleResponse
   */
  async getVccGrantRule(request: GetVccGrantRuleRequest): Promise<GetVccGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVccGrantRuleWithOptions(request, runtime);
  }

  /**
   * Queries route entries.
   * 
   * @param request - GetVccRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVccRouteEntryResponse
   */
  async getVccRouteEntryWithOptions(request: GetVccRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<GetVccRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vccRouteEntryId)) {
      body["VccRouteEntryId"] = request.vccRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVccRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetVccRouteEntryResponse>(await this.callApi(params, req, runtime), new GetVccRouteEntryResponse({}));
    } else {
      return $dara.cast<GetVccRouteEntryResponse>(await this.execute(params, req, runtime), new GetVccRouteEntryResponse({}));
    }

  }

  /**
   * Queries route entries.
   * 
   * @param request - GetVccRouteEntryRequest
   * @returns GetVccRouteEntryResponse
   */
  async getVccRouteEntry(request: GetVccRouteEntryRequest): Promise<GetVccRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVccRouteEntryWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Lingjun CIDR block, including the status of the Lingjun CIDR block, the CIDR block, the number of subnets and NCs.
   * 
   * @param request - GetVpdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpdResponse
   */
  async getVpdWithOptions(request: GetVpdRequest, runtime: $dara.RuntimeOptions): Promise<GetVpdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetVpdResponse>(await this.callApi(params, req, runtime), new GetVpdResponse({}));
    } else {
      return $dara.cast<GetVpdResponse>(await this.execute(params, req, runtime), new GetVpdResponse({}));
    }

  }

  /**
   * Queries the details of a Lingjun CIDR block, including the status of the Lingjun CIDR block, the CIDR block, the number of subnets and NCs.
   * 
   * @param request - GetVpdRequest
   * @returns GetVpdResponse
   */
  async getVpd(request: GetVpdRequest): Promise<GetVpdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpdWithOptions(request, runtime);
  }

  /**
   * Queries the details of cross-account resource authorization for a Lingjun CIDR block, including the authorized tenant ID, Lingjun HUB instance ID, and network instance ID.
   * 
   * @param request - GetVpdGrantRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpdGrantRuleResponse
   */
  async getVpdGrantRuleWithOptions(request: GetVpdGrantRuleRequest, runtime: $dara.RuntimeOptions): Promise<GetVpdGrantRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpdGrantRule",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetVpdGrantRuleResponse>(await this.callApi(params, req, runtime), new GetVpdGrantRuleResponse({}));
    } else {
      return $dara.cast<GetVpdGrantRuleResponse>(await this.execute(params, req, runtime), new GetVpdGrantRuleResponse({}));
    }

  }

  /**
   * Queries the details of cross-account resource authorization for a Lingjun CIDR block, including the authorized tenant ID, Lingjun HUB instance ID, and network instance ID.
   * 
   * @param request - GetVpdGrantRuleRequest
   * @returns GetVpdGrantRuleResponse
   */
  async getVpdGrantRule(request: GetVpdGrantRuleRequest): Promise<GetVpdGrantRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpdGrantRuleWithOptions(request, runtime);
  }

  /**
   * Queries route entries.
   * 
   * @param request - GetVpdRouteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVpdRouteEntryResponse
   */
  async getVpdRouteEntryWithOptions(request: GetVpdRouteEntryRequest, runtime: $dara.RuntimeOptions): Promise<GetVpdRouteEntryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.vpdRouteEntryId)) {
      body["VpdRouteEntryId"] = request.vpdRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVpdRouteEntry",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetVpdRouteEntryResponse>(await this.callApi(params, req, runtime), new GetVpdRouteEntryResponse({}));
    } else {
      return $dara.cast<GetVpdRouteEntryResponse>(await this.execute(params, req, runtime), new GetVpdRouteEntryResponse({}));
    }

  }

  /**
   * Queries route entries.
   * 
   * @param request - GetVpdRouteEntryRequest
   * @returns GetVpdRouteEntryResponse
   */
  async getVpdRouteEntry(request: GetVpdRouteEntryRequest): Promise<GetVpdRouteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVpdRouteEntryWithOptions(request, runtime);
  }

  /**
   * Initialize the Lingjun connection and authorize Intelligent Computing Lingjun to create an SLR in your account.
   * 
   * @param request - InitializeVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeVccResponse
   */
  async initializeVccWithOptions(request: InitializeVccRequest, runtime: $dara.RuntimeOptions): Promise<InitializeVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitializeVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InitializeVccResponse>(await this.callApi(params, req, runtime), new InitializeVccResponse({}));
    } else {
      return $dara.cast<InitializeVccResponse>(await this.execute(params, req, runtime), new InitializeVccResponse({}));
    }

  }

  /**
   * Initialize the Lingjun connection and authorize Intelligent Computing Lingjun to create an SLR in your account.
   * 
   * @param request - InitializeVccRequest
   * @returns InitializeVccResponse
   */
  async initializeVcc(request: InitializeVccRequest): Promise<InitializeVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeVccWithOptions(request, runtime);
  }

  /**
   * Queries the LENIs that are associated with a Lingjun node.
   * 
   * @param request - ListElasticNetworkInterfacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListElasticNetworkInterfacesResponse
   */
  async listElasticNetworkInterfacesWithOptions(request: ListElasticNetworkInterfacesRequest, runtime: $dara.RuntimeOptions): Promise<ListElasticNetworkInterfacesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListElasticNetworkInterfaces",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListElasticNetworkInterfacesResponse>(await this.callApi(params, req, runtime), new ListElasticNetworkInterfacesResponse({}));
    } else {
      return $dara.cast<ListElasticNetworkInterfacesResponse>(await this.execute(params, req, runtime), new ListElasticNetworkInterfacesResponse({}));
    }

  }

  /**
   * Queries the LENIs that are associated with a Lingjun node.
   * 
   * @param request - ListElasticNetworkInterfacesRequest
   * @returns ListElasticNetworkInterfacesResponse
   */
  async listElasticNetworkInterfaces(request: ListElasticNetworkInterfacesRequest): Promise<ListElasticNetworkInterfacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listElasticNetworkInterfacesWithOptions(request, runtime);
  }

  /**
   * Queries network instance connections.
   * 
   * @param request - ListErAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListErAttachmentsResponse
   */
  async listErAttachmentsWithOptions(request: ListErAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<ListErAttachmentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoReceiveAllRoute)) {
      body["AutoReceiveAllRoute"] = request.autoReceiveAllRoute;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erAttachmentId)) {
      body["ErAttachmentId"] = request.erAttachmentId;
    }

    if (!$dara.isNull(request.erAttachmentName)) {
      body["ErAttachmentName"] = request.erAttachmentName;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceTenantId)) {
      body["ResourceTenantId"] = request.resourceTenantId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListErAttachments",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListErAttachmentsResponse>(await this.callApi(params, req, runtime), new ListErAttachmentsResponse({}));
    } else {
      return $dara.cast<ListErAttachmentsResponse>(await this.execute(params, req, runtime), new ListErAttachmentsResponse({}));
    }

  }

  /**
   * Queries network instance connections.
   * 
   * @param request - ListErAttachmentsRequest
   * @returns ListErAttachmentsResponse
   */
  async listErAttachments(request: ListErAttachmentsRequest): Promise<ListErAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listErAttachmentsWithOptions(request, runtime);
  }

  /**
   * Queries the route entries of the Lingjun HUB.
   * 
   * @param request - ListErRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListErRouteEntriesResponse
   */
  async listErRouteEntriesWithOptions(request: ListErRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<ListErRouteEntriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.ignoreDetailedRouteEntry)) {
      body["IgnoreDetailedRouteEntry"] = request.ignoreDetailedRouteEntry;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nextHopId)) {
      body["NextHopId"] = request.nextHopId;
    }

    if (!$dara.isNull(request.nextHopType)) {
      body["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.routeType)) {
      body["RouteType"] = request.routeType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListErRouteEntries",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListErRouteEntriesResponse>(await this.callApi(params, req, runtime), new ListErRouteEntriesResponse({}));
    } else {
      return $dara.cast<ListErRouteEntriesResponse>(await this.execute(params, req, runtime), new ListErRouteEntriesResponse({}));
    }

  }

  /**
   * Queries the route entries of the Lingjun HUB.
   * 
   * @param request - ListErRouteEntriesRequest
   * @returns ListErRouteEntriesResponse
   */
  async listErRouteEntries(request: ListErRouteEntriesRequest): Promise<ListErRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listErRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Routing policies are queried.
   * 
   * @param request - ListErRouteMapsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListErRouteMapsResponse
   */
  async listErRouteMapsWithOptions(request: ListErRouteMapsRequest, runtime: $dara.RuntimeOptions): Promise<ListErRouteMapsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteMapId)) {
      body["ErRouteMapId"] = request.erRouteMapId;
    }

    if (!$dara.isNull(request.erRouteMapNum)) {
      body["ErRouteMapNum"] = request.erRouteMapNum;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.receptionInstanceId)) {
      body["ReceptionInstanceId"] = request.receptionInstanceId;
    }

    if (!$dara.isNull(request.receptionInstanceName)) {
      body["ReceptionInstanceName"] = request.receptionInstanceName;
    }

    if (!$dara.isNull(request.receptionInstanceType)) {
      body["ReceptionInstanceType"] = request.receptionInstanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.routeMapAction)) {
      body["RouteMapAction"] = request.routeMapAction;
    }

    if (!$dara.isNull(request.transmissionInstanceId)) {
      body["TransmissionInstanceId"] = request.transmissionInstanceId;
    }

    if (!$dara.isNull(request.transmissionInstanceName)) {
      body["TransmissionInstanceName"] = request.transmissionInstanceName;
    }

    if (!$dara.isNull(request.transmissionInstanceType)) {
      body["TransmissionInstanceType"] = request.transmissionInstanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListErRouteMaps",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListErRouteMapsResponse>(await this.callApi(params, req, runtime), new ListErRouteMapsResponse({}));
    } else {
      return $dara.cast<ListErRouteMapsResponse>(await this.execute(params, req, runtime), new ListErRouteMapsResponse({}));
    }

  }

  /**
   * Routing policies are queried.
   * 
   * @param request - ListErRouteMapsRequest
   * @returns ListErRouteMapsResponse
   */
  async listErRouteMaps(request: ListErRouteMapsRequest): Promise<ListErRouteMapsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listErRouteMapsWithOptions(request, runtime);
  }

  /**
   * Queries the Lingjun HUB.
   * 
   * @param request - ListErsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListErsResponse
   */
  async listErsWithOptions(request: ListErsRequest, runtime: $dara.RuntimeOptions): Promise<ListErsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erName)) {
      body["ErName"] = request.erName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.masterZoneId)) {
      body["MasterZoneId"] = request.masterZoneId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListErs",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListErsResponse>(await this.callApi(params, req, runtime), new ListErsResponse({}));
    } else {
      return $dara.cast<ListErsResponse>(await this.execute(params, req, runtime), new ListErsResponse({}));
    }

  }

  /**
   * Queries the Lingjun HUB.
   * 
   * @param request - ListErsRequest
   * @returns ListErsResponse
   */
  async listErs(request: ListErsRequest): Promise<ListErsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listErsWithOptions(request, runtime);
  }

  /**
   * Queries the GPU node list of a specified GPU node whose communication distance does not exceed the specified NCD.
   * 
   * @param request - ListInstancesByNcdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesByNcdResponse
   */
  async listInstancesByNcdWithOptions(request: ListInstancesByNcdRequest, runtime: $dara.RuntimeOptions): Promise<ListInstancesByNcdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.maxNcd)) {
      body["MaxNcd"] = request.maxNcd;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesByNcd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesByNcdResponse>(await this.callApi(params, req, runtime), new ListInstancesByNcdResponse({}));
    } else {
      return $dara.cast<ListInstancesByNcdResponse>(await this.execute(params, req, runtime), new ListInstancesByNcdResponse({}));
    }

  }

  /**
   * Queries the GPU node list of a specified GPU node whose communication distance does not exceed the specified NCD.
   * 
   * @param request - ListInstancesByNcdRequest
   * @returns ListInstancesByNcdResponse
   */
  async listInstancesByNcd(request: ListInstancesByNcdRequest): Promise<ListInstancesByNcdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesByNcdWithOptions(request, runtime);
  }

  /**
   * Queries the list of secondary private IP addresses of Lingjun Elastic Network Interface.
   * 
   * @param request - ListLeniPrivateIpAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLeniPrivateIpAddressesResponse
   */
  async listLeniPrivateIpAddressesWithOptions(request: ListLeniPrivateIpAddressesRequest, runtime: $dara.RuntimeOptions): Promise<ListLeniPrivateIpAddressesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLeniPrivateIpAddresses",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLeniPrivateIpAddressesResponse>(await this.callApi(params, req, runtime), new ListLeniPrivateIpAddressesResponse({}));
    } else {
      return $dara.cast<ListLeniPrivateIpAddressesResponse>(await this.execute(params, req, runtime), new ListLeniPrivateIpAddressesResponse({}));
    }

  }

  /**
   * Queries the list of secondary private IP addresses of Lingjun Elastic Network Interface.
   * 
   * @param request - ListLeniPrivateIpAddressesRequest
   * @returns ListLeniPrivateIpAddressesResponse
   */
  async listLeniPrivateIpAddresses(request: ListLeniPrivateIpAddressesRequest): Promise<ListLeniPrivateIpAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLeniPrivateIpAddressesWithOptions(request, runtime);
  }

  /**
   * Queries the list of secondary private IP addresses of Lingjun network interface controller.
   * 
   * @param request - ListLniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLniPrivateIpAddressResponse
   */
  async listLniPrivateIpAddressWithOptions(request: ListLniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<ListLniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new ListLniPrivateIpAddressResponse({}));
    } else {
      return $dara.cast<ListLniPrivateIpAddressResponse>(await this.execute(params, req, runtime), new ListLniPrivateIpAddressResponse({}));
    }

  }

  /**
   * Queries the list of secondary private IP addresses of Lingjun network interface controller.
   * 
   * @param request - ListLniPrivateIpAddressRequest
   * @returns ListLniPrivateIpAddressResponse
   */
  async listLniPrivateIpAddress(request: ListLniPrivateIpAddressRequest): Promise<ListLniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Queries Lingjun network interfaces (LNIs).
   * 
   * @param request - ListNetworkInterfacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkInterfacesResponse
   */
  async listNetworkInterfacesWithOptions(request: ListNetworkInterfacesRequest, runtime: $dara.RuntimeOptions): Promise<ListNetworkInterfacesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkInterfaces",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListNetworkInterfacesResponse>(await this.callApi(params, req, runtime), new ListNetworkInterfacesResponse({}));
    } else {
      return $dara.cast<ListNetworkInterfacesResponse>(await this.execute(params, req, runtime), new ListNetworkInterfacesResponse({}));
    }

  }

  /**
   * Queries Lingjun network interfaces (LNIs).
   * 
   * @param request - ListNetworkInterfacesRequest
   * @returns ListNetworkInterfacesResponse
   */
  async listNetworkInterfaces(request: ListNetworkInterfacesRequest): Promise<ListNetworkInterfacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkInterfacesWithOptions(request, runtime);
  }

  /**
   * Queries node network information.
   * 
   * @param request - ListNodeInfosForPodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeInfosForPodResponse
   */
  async listNodeInfosForPodWithOptions(request: ListNodeInfosForPodRequest, runtime: $dara.RuntimeOptions): Promise<ListNodeInfosForPodResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeInfosForPod",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListNodeInfosForPodResponse>(await this.callApi(params, req, runtime), new ListNodeInfosForPodResponse({}));
    } else {
      return $dara.cast<ListNodeInfosForPodResponse>(await this.execute(params, req, runtime), new ListNodeInfosForPodResponse({}));
    }

  }

  /**
   * Queries node network information.
   * 
   * @param request - ListNodeInfosForPodRequest
   * @returns ListNodeInfosForPodResponse
   */
  async listNodeInfosForPod(request: ListNodeInfosForPodRequest): Promise<ListNodeInfosForPodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeInfosForPodWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the details of one or more Lingjun subnets, including the Lingjun subnet type, network address segment, and instance ID of the Lingjun CIDR block.
   * 
   * @param request - ListSubnetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubnetsResponse
   */
  async listSubnetsWithOptions(request: ListSubnetsRequest, runtime: $dara.RuntimeOptions): Promise<ListSubnetsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.subnetName)) {
      body["SubnetName"] = request.subnetName;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubnets",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSubnetsResponse>(await this.callApi(params, req, runtime), new ListSubnetsResponse({}));
    } else {
      return $dara.cast<ListSubnetsResponse>(await this.execute(params, req, runtime), new ListSubnetsResponse({}));
    }

  }

  /**
   * You can call this operation to query the details of one or more Lingjun subnets, including the Lingjun subnet type, network address segment, and instance ID of the Lingjun CIDR block.
   * 
   * @param request - ListSubnetsRequest
   * @returns ListSubnetsResponse
   */
  async listSubnets(request: ListSubnetsRequest): Promise<ListSubnetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSubnetsWithOptions(request, runtime);
  }

  /**
   * Queries the traffic rate of a Lingjun connection.
   * 
   * @param request - ListVccFlowInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVccFlowInfosResponse
   */
  async listVccFlowInfosWithOptions(request: ListVccFlowInfosRequest, runtime: $dara.RuntimeOptions): Promise<ListVccFlowInfosResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.direction)) {
      body["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.from)) {
      body["From"] = request.from;
    }

    if (!$dara.isNull(request.metricName)) {
      body["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.to)) {
      body["To"] = request.to;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVccFlowInfos",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVccFlowInfosResponse>(await this.callApi(params, req, runtime), new ListVccFlowInfosResponse({}));
    } else {
      return $dara.cast<ListVccFlowInfosResponse>(await this.execute(params, req, runtime), new ListVccFlowInfosResponse({}));
    }

  }

  /**
   * Queries the traffic rate of a Lingjun connection.
   * 
   * @param request - ListVccFlowInfosRequest
   * @returns ListVccFlowInfosResponse
   */
  async listVccFlowInfos(request: ListVccFlowInfosRequest): Promise<ListVccFlowInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVccFlowInfosWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Lingjun connection authorization, including the authorized tenant ID, region, and Lingjun HUB instance information.
   * 
   * @param request - ListVccGrantRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVccGrantRulesResponse
   */
  async listVccGrantRulesWithOptions(request: ListVccGrantRulesRequest, runtime: $dara.RuntimeOptions): Promise<ListVccGrantRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.forSelect)) {
      body["ForSelect"] = request.forSelect;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVccGrantRules",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVccGrantRulesResponse>(await this.callApi(params, req, runtime), new ListVccGrantRulesResponse({}));
    } else {
      return $dara.cast<ListVccGrantRulesResponse>(await this.execute(params, req, runtime), new ListVccGrantRulesResponse({}));
    }

  }

  /**
   * Queries the details of a Lingjun connection authorization, including the authorized tenant ID, region, and Lingjun HUB instance information.
   * 
   * @param request - ListVccGrantRulesRequest
   * @returns ListVccGrantRulesResponse
   */
  async listVccGrantRules(request: ListVccGrantRulesRequest): Promise<ListVccGrantRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVccGrantRulesWithOptions(request, runtime);
  }

  /**
   * Queries Lingjun connection route entries.
   * 
   * @param request - ListVccRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVccRouteEntriesResponse
   */
  async listVccRouteEntriesWithOptions(request: ListVccRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<ListVccRouteEntriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.ignoreDetailedRouteEntry)) {
      body["IgnoreDetailedRouteEntry"] = request.ignoreDetailedRouteEntry;
    }

    if (!$dara.isNull(request.nextHopId)) {
      body["NextHopId"] = request.nextHopId;
    }

    if (!$dara.isNull(request.nextHopType)) {
      body["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.routeType)) {
      body["RouteType"] = request.routeType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vpdRouteEntryId)) {
      body["VpdRouteEntryId"] = request.vpdRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVccRouteEntries",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVccRouteEntriesResponse>(await this.callApi(params, req, runtime), new ListVccRouteEntriesResponse({}));
    } else {
      return $dara.cast<ListVccRouteEntriesResponse>(await this.execute(params, req, runtime), new ListVccRouteEntriesResponse({}));
    }

  }

  /**
   * Queries Lingjun connection route entries.
   * 
   * @param request - ListVccRouteEntriesRequest
   * @returns ListVccRouteEntriesResponse
   */
  async listVccRouteEntries(request: ListVccRouteEntriesRequest): Promise<ListVccRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVccRouteEntriesWithOptions(request, runtime);
  }

  /**
   * query the details of one or more lingjun connections, including the specification, Express Connect circuit access port type, instance status, bandwidth, and bgp network segment.
   * 
   * @param request - ListVccsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVccsResponse
   */
  async listVccsWithOptions(request: ListVccsRequest, runtime: $dara.RuntimeOptions): Promise<ListVccsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.exStatus)) {
      body["ExStatus"] = request.exStatus;
    }

    if (!$dara.isNull(request.filterErId)) {
      body["FilterErId"] = request.filterErId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVccs",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVccsResponse>(await this.callApi(params, req, runtime), new ListVccsResponse({}));
    } else {
      return $dara.cast<ListVccsResponse>(await this.execute(params, req, runtime), new ListVccsResponse({}));
    }

  }

  /**
   * query the details of one or more lingjun connections, including the specification, Express Connect circuit access port type, instance status, bandwidth, and bgp network segment.
   * 
   * @param request - ListVccsRequest
   * @returns ListVccsResponse
   */
  async listVccs(request: ListVccsRequest): Promise<ListVccsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVccsWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more route entries in the CIDR block of Lingjun, including the route type, route entry status, destination CIDR block, and instance information of the next route entry.
   * 
   * @param request - ListVpdGrantRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpdGrantRulesResponse
   */
  async listVpdGrantRulesWithOptions(request: ListVpdGrantRulesRequest, runtime: $dara.RuntimeOptions): Promise<ListVpdGrantRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.forSelect)) {
      body["ForSelect"] = request.forSelect;
    }

    if (!$dara.isNull(request.grantRuleId)) {
      body["GrantRuleId"] = request.grantRuleId;
    }

    if (!$dara.isNull(request.grantTenantId)) {
      body["GrantTenantId"] = request.grantTenantId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpdGrantRules",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpdGrantRulesResponse>(await this.callApi(params, req, runtime), new ListVpdGrantRulesResponse({}));
    } else {
      return $dara.cast<ListVpdGrantRulesResponse>(await this.execute(params, req, runtime), new ListVpdGrantRulesResponse({}));
    }

  }

  /**
   * Queries the details of one or more route entries in the CIDR block of Lingjun, including the route type, route entry status, destination CIDR block, and instance information of the next route entry.
   * 
   * @param request - ListVpdGrantRulesRequest
   * @returns ListVpdGrantRulesResponse
   */
  async listVpdGrantRules(request: ListVpdGrantRulesRequest): Promise<ListVpdGrantRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpdGrantRulesWithOptions(request, runtime);
  }

  /**
   * Queries the route entries of the Lingjun CIDR block.
   * 
   * @param request - ListVpdRouteEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpdRouteEntriesResponse
   */
  async listVpdRouteEntriesWithOptions(request: ListVpdRouteEntriesRequest, runtime: $dara.RuntimeOptions): Promise<ListVpdRouteEntriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.ignoreDetailedRouteEntry)) {
      body["IgnoreDetailedRouteEntry"] = request.ignoreDetailedRouteEntry;
    }

    if (!$dara.isNull(request.nextHopId)) {
      body["NextHopId"] = request.nextHopId;
    }

    if (!$dara.isNull(request.nextHopType)) {
      body["NextHopType"] = request.nextHopType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.routeType)) {
      body["RouteType"] = request.routeType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.vpdRouteEntryId)) {
      body["VpdRouteEntryId"] = request.vpdRouteEntryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpdRouteEntries",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpdRouteEntriesResponse>(await this.callApi(params, req, runtime), new ListVpdRouteEntriesResponse({}));
    } else {
      return $dara.cast<ListVpdRouteEntriesResponse>(await this.execute(params, req, runtime), new ListVpdRouteEntriesResponse({}));
    }

  }

  /**
   * Queries the route entries of the Lingjun CIDR block.
   * 
   * @param request - ListVpdRouteEntriesRequest
   * @returns ListVpdRouteEntriesResponse
   */
  async listVpdRouteEntries(request: ListVpdRouteEntriesRequest): Promise<ListVpdRouteEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpdRouteEntriesWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more Lingjun CIDR blocks, including the status of Lingjun CIDR blocks, Cidr addresses, service CIDR blocks, and Subnet.
   * 
   * @param request - ListVpdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpdsResponse
   */
  async listVpdsWithOptions(request: ListVpdsRequest, runtime: $dara.RuntimeOptions): Promise<ListVpdsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePage)) {
      body["EnablePage"] = request.enablePage;
    }

    if (!$dara.isNull(request.filterErId)) {
      body["FilterErId"] = request.filterErId;
    }

    if (!$dara.isNull(request.forSelect)) {
      body["ForSelect"] = request.forSelect;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.vpdName)) {
      body["VpdName"] = request.vpdName;
    }

    if (!$dara.isNull(request.withDependence)) {
      body["WithDependence"] = request.withDependence;
    }

    if (!$dara.isNull(request.withoutVcc)) {
      body["WithoutVcc"] = request.withoutVcc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpds",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpdsResponse>(await this.callApi(params, req, runtime), new ListVpdsResponse({}));
    } else {
      return $dara.cast<ListVpdsResponse>(await this.execute(params, req, runtime), new ListVpdsResponse({}));
    }

  }

  /**
   * Queries the details of one or more Lingjun CIDR blocks, including the status of Lingjun CIDR blocks, Cidr addresses, service CIDR blocks, and Subnet.
   * 
   * @param request - ListVpdsRequest
   * @returns ListVpdsResponse
   */
  async listVpds(request: ListVpdsRequest): Promise<ListVpdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVpdsWithOptions(request, runtime);
  }

  /**
   * Query the network communication distance (Network Communication Distance,NCD) between instances (Lingjun node, Lingjun network interface controller).
   * 
   * @param request - QueryInstanceNcdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceNcdResponse
   */
  async queryInstanceNcdWithOptions(request: QueryInstanceNcdRequest, runtime: $dara.RuntimeOptions): Promise<QueryInstanceNcdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId1)) {
      body["InstanceId1"] = request.instanceId1;
    }

    if (!$dara.isNull(request.instanceId2)) {
      body["InstanceId2"] = request.instanceId2;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInstanceNcd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryInstanceNcdResponse>(await this.callApi(params, req, runtime), new QueryInstanceNcdResponse({}));
    } else {
      return $dara.cast<QueryInstanceNcdResponse>(await this.execute(params, req, runtime), new QueryInstanceNcdResponse({}));
    }

  }

  /**
   * Query the network communication distance (Network Communication Distance,NCD) between instances (Lingjun node, Lingjun network interface controller).
   * 
   * @param request - QueryInstanceNcdRequest
   * @returns QueryInstanceNcdResponse
   */
  async queryInstanceNcd(request: QueryInstanceNcdRequest): Promise<QueryInstanceNcdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstanceNcdWithOptions(request, runtime);
  }

  /**
   * Unsubscribe inactive Lingjun connection
   * 
   * @remarks
   * Only unsubscribable for Lingjun connections in the prepayment status.
   * 
   * @param request - RefundVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundVccResponse
   */
  async refundVccWithOptions(request: RefundVccRequest, runtime: $dara.RuntimeOptions): Promise<RefundVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RefundVccResponse>(await this.callApi(params, req, runtime), new RefundVccResponse({}));
    } else {
      return $dara.cast<RefundVccResponse>(await this.execute(params, req, runtime), new RefundVccResponse({}));
    }

  }

  /**
   * Unsubscribe inactive Lingjun connection
   * 
   * @remarks
   * Only unsubscribable for Lingjun connections in the prepayment status.
   * 
   * @param request - RefundVccRequest
   * @returns RefundVccResponse
   */
  async refundVcc(request: RefundVccRequest): Promise<RefundVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refundVccWithOptions(request, runtime);
  }

  /**
   * Retry trying to create /delete a Lingjun connection.
   * 
   * @remarks
   * This operation allows the user to retry the operation if the Lingjun connection creation and deletion processes fail. Only the Lingjun connection in the creation failure and deletion failure state can be retried
   * 
   * @param request - RetryVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryVccResponse
   */
  async retryVccWithOptions(request: RetryVccRequest, runtime: $dara.RuntimeOptions): Promise<RetryVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RetryVccResponse>(await this.callApi(params, req, runtime), new RetryVccResponse({}));
    } else {
      return $dara.cast<RetryVccResponse>(await this.execute(params, req, runtime), new RetryVccResponse({}));
    }

  }

  /**
   * Retry trying to create /delete a Lingjun connection.
   * 
   * @remarks
   * This operation allows the user to retry the operation if the Lingjun connection creation and deletion processes fail. Only the Lingjun connection in the creation failure and deletion failure state can be retried
   * 
   * @param request - RetryVccRequest
   * @returns RetryVccResponse
   */
  async retryVcc(request: RetryVccRequest): Promise<RetryVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryVccWithOptions(request, runtime);
  }

  /**
   * Deletes an assigned secondary private IP address.
   * 
   * @param request - UnAssignPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnAssignPrivateIpAddressResponse
   */
  async unAssignPrivateIpAddressWithOptions(request: UnAssignPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<UnAssignPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.networkInterfaceId)) {
      body["NetworkInterfaceId"] = request.networkInterfaceId;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnAssignPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnAssignPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new UnAssignPrivateIpAddressResponse({}));
    } else {
      return $dara.cast<UnAssignPrivateIpAddressResponse>(await this.execute(params, req, runtime), new UnAssignPrivateIpAddressResponse({}));
    }

  }

  /**
   * Deletes an assigned secondary private IP address.
   * 
   * @param request - UnAssignPrivateIpAddressRequest
   * @returns UnAssignPrivateIpAddressResponse
   */
  async unAssignPrivateIpAddress(request: UnAssignPrivateIpAddressRequest): Promise<UnAssignPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unAssignPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * This function can be used to delete the additional network segment of VPD.
   * 
   * @remarks
   * *
   * **Warning** If the attached CIDR block has Lingjun subnet resources, you must delete the dependent resources before you can delete the attached CIDR block.
   * 
   * @param request - UnAssociateVpdCidrBlockRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnAssociateVpdCidrBlockResponse
   */
  async unAssociateVpdCidrBlockWithOptions(request: UnAssociateVpdCidrBlockRequest, runtime: $dara.RuntimeOptions): Promise<UnAssociateVpdCidrBlockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secondaryCidrBlock)) {
      body["SecondaryCidrBlock"] = request.secondaryCidrBlock;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnAssociateVpdCidrBlock",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnAssociateVpdCidrBlockResponse>(await this.callApi(params, req, runtime), new UnAssociateVpdCidrBlockResponse({}));
    } else {
      return $dara.cast<UnAssociateVpdCidrBlockResponse>(await this.execute(params, req, runtime), new UnAssociateVpdCidrBlockResponse({}));
    }

  }

  /**
   * This function can be used to delete the additional network segment of VPD.
   * 
   * @remarks
   * *
   * **Warning** If the attached CIDR block has Lingjun subnet resources, you must delete the dependent resources before you can delete the attached CIDR block.
   * 
   * @param request - UnAssociateVpdCidrBlockRequest
   * @returns UnAssociateVpdCidrBlockResponse
   */
  async unAssociateVpdCidrBlock(request: UnAssociateVpdCidrBlockRequest): Promise<UnAssociateVpdCidrBlockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unAssociateVpdCidrBlockWithOptions(request, runtime);
  }

  /**
   * Delete the assigned secondary private IP address of Lingjun Elastic Network Interface.
   * 
   * @param request - UnassignLeniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassignLeniPrivateIpAddressResponse
   */
  async unassignLeniPrivateIpAddressWithOptions(request: UnassignLeniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<UnassignLeniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnassignLeniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnassignLeniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new UnassignLeniPrivateIpAddressResponse({}));
    } else {
      return $dara.cast<UnassignLeniPrivateIpAddressResponse>(await this.execute(params, req, runtime), new UnassignLeniPrivateIpAddressResponse({}));
    }

  }

  /**
   * Delete the assigned secondary private IP address of Lingjun Elastic Network Interface.
   * 
   * @param request - UnassignLeniPrivateIpAddressRequest
   * @returns UnassignLeniPrivateIpAddressResponse
   */
  async unassignLeniPrivateIpAddress(request: UnassignLeniPrivateIpAddressRequest): Promise<UnassignLeniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassignLeniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Update Lingjun Elastic Network Interface information.
   * 
   * @param request - UpdateElasticNetworkInterfaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateElasticNetworkInterfaceResponse
   */
  async updateElasticNetworkInterfaceWithOptions(request: UpdateElasticNetworkInterfaceRequest, runtime: $dara.RuntimeOptions): Promise<UpdateElasticNetworkInterfaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateElasticNetworkInterface",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateElasticNetworkInterfaceResponse>(await this.callApi(params, req, runtime), new UpdateElasticNetworkInterfaceResponse({}));
    } else {
      return $dara.cast<UpdateElasticNetworkInterfaceResponse>(await this.execute(params, req, runtime), new UpdateElasticNetworkInterfaceResponse({}));
    }

  }

  /**
   * Update Lingjun Elastic Network Interface information.
   * 
   * @param request - UpdateElasticNetworkInterfaceRequest
   * @returns UpdateElasticNetworkInterfaceResponse
   */
  async updateElasticNetworkInterface(request: UpdateElasticNetworkInterfaceRequest): Promise<UpdateElasticNetworkInterfaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateElasticNetworkInterfaceWithOptions(request, runtime);
  }

  /**
   * Updated Lingjun HUB.
   * 
   * @param request - UpdateErRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateErResponse
   */
  async updateErWithOptions(request: UpdateErRequest, runtime: $dara.RuntimeOptions): Promise<UpdateErResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erName)) {
      body["ErName"] = request.erName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEr",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateErResponse>(await this.callApi(params, req, runtime), new UpdateErResponse({}));
    } else {
      return $dara.cast<UpdateErResponse>(await this.execute(params, req, runtime), new UpdateErResponse({}));
    }

  }

  /**
   * Updated Lingjun HUB.
   * 
   * @param request - UpdateErRequest
   * @returns UpdateErResponse
   */
  async updateEr(request: UpdateErRequest): Promise<UpdateErResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateErWithOptions(request, runtime);
  }

  /**
   * Updates a network instance connection.
   * 
   * @param request - UpdateErAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateErAttachmentResponse
   */
  async updateErAttachmentWithOptions(request: UpdateErAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<UpdateErAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.erAttachmentId)) {
      body["ErAttachmentId"] = request.erAttachmentId;
    }

    if (!$dara.isNull(request.erAttachmentName)) {
      body["ErAttachmentName"] = request.erAttachmentName;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateErAttachment",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateErAttachmentResponse>(await this.callApi(params, req, runtime), new UpdateErAttachmentResponse({}));
    } else {
      return $dara.cast<UpdateErAttachmentResponse>(await this.execute(params, req, runtime), new UpdateErAttachmentResponse({}));
    }

  }

  /**
   * Updates a network instance connection.
   * 
   * @param request - UpdateErAttachmentRequest
   * @returns UpdateErAttachmentResponse
   */
  async updateErAttachment(request: UpdateErAttachmentRequest): Promise<UpdateErAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateErAttachmentWithOptions(request, runtime);
  }

  /**
   * Update some information about the routing policy, including the description and name of the routing policy.
   * 
   * @param request - UpdateErRouteMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateErRouteMapResponse
   */
  async updateErRouteMapWithOptions(request: UpdateErRouteMapRequest, runtime: $dara.RuntimeOptions): Promise<UpdateErRouteMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.erId)) {
      body["ErId"] = request.erId;
    }

    if (!$dara.isNull(request.erRouteMapId)) {
      body["ErRouteMapId"] = request.erRouteMapId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateErRouteMap",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateErRouteMapResponse>(await this.callApi(params, req, runtime), new UpdateErRouteMapResponse({}));
    } else {
      return $dara.cast<UpdateErRouteMapResponse>(await this.execute(params, req, runtime), new UpdateErRouteMapResponse({}));
    }

  }

  /**
   * Update some information about the routing policy, including the description and name of the routing policy.
   * 
   * @param request - UpdateErRouteMapRequest
   * @returns UpdateErRouteMapResponse
   */
  async updateErRouteMap(request: UpdateErRouteMapRequest): Promise<UpdateErRouteMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateErRouteMapWithOptions(request, runtime);
  }

  /**
   * Updated the description of the secondary private network assigned by the Lingjun Elastic Network Interface.
   * 
   * @param request - UpdateLeniPrivateIpAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLeniPrivateIpAddressResponse
   */
  async updateLeniPrivateIpAddressWithOptions(request: UpdateLeniPrivateIpAddressRequest, runtime: $dara.RuntimeOptions): Promise<UpdateLeniPrivateIpAddressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.elasticNetworkInterfaceId)) {
      body["ElasticNetworkInterfaceId"] = request.elasticNetworkInterfaceId;
    }

    if (!$dara.isNull(request.ipName)) {
      body["IpName"] = request.ipName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLeniPrivateIpAddress",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateLeniPrivateIpAddressResponse>(await this.callApi(params, req, runtime), new UpdateLeniPrivateIpAddressResponse({}));
    } else {
      return $dara.cast<UpdateLeniPrivateIpAddressResponse>(await this.execute(params, req, runtime), new UpdateLeniPrivateIpAddressResponse({}));
    }

  }

  /**
   * Updated the description of the secondary private network assigned by the Lingjun Elastic Network Interface.
   * 
   * @param request - UpdateLeniPrivateIpAddressRequest
   * @returns UpdateLeniPrivateIpAddressResponse
   */
  async updateLeniPrivateIpAddress(request: UpdateLeniPrivateIpAddressRequest): Promise<UpdateLeniPrivateIpAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLeniPrivateIpAddressWithOptions(request, runtime);
  }

  /**
   * Updates some information about a specified subnet instance, including the name of the subnet instance.
   * 
   * @param request - UpdateSubnetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubnetResponse
   */
  async updateSubnetWithOptions(request: UpdateSubnetRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSubnetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subnetId)) {
      body["SubnetId"] = request.subnetId;
    }

    if (!$dara.isNull(request.subnetName)) {
      body["SubnetName"] = request.subnetName;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubnet",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateSubnetResponse>(await this.callApi(params, req, runtime), new UpdateSubnetResponse({}));
    } else {
      return $dara.cast<UpdateSubnetResponse>(await this.execute(params, req, runtime), new UpdateSubnetResponse({}));
    }

  }

  /**
   * Updates some information about a specified subnet instance, including the name of the subnet instance.
   * 
   * @param request - UpdateSubnetRequest
   * @returns UpdateSubnetResponse
   */
  async updateSubnet(request: UpdateSubnetRequest): Promise<UpdateSubnetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubnetWithOptions(request, runtime);
  }

  /**
   * Updates the information about a Lingjun connection instance, including the peak bandwidth and name of the Lingjun connection instance.
   * 
   * @param request - UpdateVccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVccResponse
   */
  async updateVccWithOptions(request: UpdateVccRequest, runtime: $dara.RuntimeOptions): Promise<UpdateVccResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vccId)) {
      body["VccId"] = request.vccId;
    }

    if (!$dara.isNull(request.vccName)) {
      body["VccName"] = request.vccName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVcc",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVccResponse>(await this.callApi(params, req, runtime), new UpdateVccResponse({}));
    } else {
      return $dara.cast<UpdateVccResponse>(await this.execute(params, req, runtime), new UpdateVccResponse({}));
    }

  }

  /**
   * Updates the information about a Lingjun connection instance, including the peak bandwidth and name of the Lingjun connection instance.
   * 
   * @param request - UpdateVccRequest
   * @returns UpdateVccResponse
   */
  async updateVcc(request: UpdateVccRequest): Promise<UpdateVccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVccWithOptions(request, runtime);
  }

  /**
   * Updates the information about the Lingjun CIDR block, including the name of the Lingjun CIDR block.
   * 
   * @param request - UpdateVpdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVpdResponse
   */
  async updateVpdWithOptions(request: UpdateVpdRequest, runtime: $dara.RuntimeOptions): Promise<UpdateVpdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpdId)) {
      body["VpdId"] = request.vpdId;
    }

    if (!$dara.isNull(request.vpdName)) {
      body["VpdName"] = request.vpdName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVpd",
      version: "2022-05-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVpdResponse>(await this.callApi(params, req, runtime), new UpdateVpdResponse({}));
    } else {
      return $dara.cast<UpdateVpdResponse>(await this.execute(params, req, runtime), new UpdateVpdResponse({}));
    }

  }

  /**
   * Updates the information about the Lingjun CIDR block, including the name of the Lingjun CIDR block.
   * 
   * @param request - UpdateVpdRequest
   * @returns UpdateVpdResponse
   */
  async updateVpd(request: UpdateVpdRequest): Promise<UpdateVpdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVpdWithOptions(request, runtime);
  }

}
