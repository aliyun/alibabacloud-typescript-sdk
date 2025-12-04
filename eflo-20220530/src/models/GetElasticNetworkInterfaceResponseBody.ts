// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

export class GetElasticNetworkInterfaceResponseBodyContentTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testkey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValue
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
   * 资源组实例ID
   * 
   * @example
   * rg-acfmzzka6bnjvbi
   */
  resourceGroupId?: string;
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
   * The details of the resource tags.
   */
  tags?: GetElasticNetworkInterfaceResponseBodyContentTags[];
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
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      tags: 'Tags',
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
      resourceGroupId: 'string',
      securityGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetElasticNetworkInterfaceResponseBodyContentTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
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

