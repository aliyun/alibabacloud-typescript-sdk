// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

