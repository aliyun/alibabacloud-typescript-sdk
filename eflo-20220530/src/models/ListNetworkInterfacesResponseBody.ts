// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

export class ListNetworkInterfacesResponseBodyContentDataTags extends $dara.Model {
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
   * Resource group instance ID
   * 
   * @example
   * rg-1234567890
   */
  resourceGroupId?: string;
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
   * List of tags.
   */
  tags?: ListNetworkInterfacesResponseBodyContentDataTags[];
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
      resourceGroupId: 'ResourceGroupId',
      serviceMac: 'ServiceMac',
      status: 'Status',
      subnetBaseInfo: 'SubnetBaseInfo',
      tags: 'Tags',
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
      resourceGroupId: 'string',
      serviceMac: 'string',
      status: 'string',
      subnetBaseInfo: ListNetworkInterfacesResponseBodyContentDataSubnetBaseInfo,
      tags: { 'type': 'array', 'itemType': ListNetworkInterfacesResponseBodyContentDataTags },
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

