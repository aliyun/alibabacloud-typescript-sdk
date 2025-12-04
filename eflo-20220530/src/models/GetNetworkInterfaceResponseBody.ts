// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

export class GetNetworkInterfaceResponseBodyContentTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value-test
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
   * Resource group instance ID
   * 
   * @example
   * rg-acfmzzka6bnjvbi
   */
  resourceGroupId?: string;
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
   * The details of the resource tags.
   */
  tags?: GetNetworkInterfaceResponseBodyContentTags[];
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
      privateIpAddressMacGroup: { 'type': 'array', 'itemType': GetNetworkInterfaceResponseBodyContentPrivateIpAddressMacGroup },
      quota: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceMac: 'string',
      status: 'string',
      subnetBaseInfo: GetNetworkInterfaceResponseBodyContentSubnetBaseInfo,
      tags: { 'type': 'array', 'itemType': GetNetworkInterfaceResponseBodyContentTags },
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

