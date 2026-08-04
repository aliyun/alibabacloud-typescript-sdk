// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDnsHopsGeoData extends $dara.Model {
  /**
   * @remarks
   * The country.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * Zhejiang
   */
  prov?: string;
  /**
   * @remarks
   * The city.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The ISP.
   * 
   * @example
   * telecom
   */
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
      prov: 'Prov',
      city: 'City',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
      prov: 'string',
      city: 'string',
      isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDnsHops extends $dara.Model {
  /**
   * @remarks
   * The private access application address. The address can be 1 to 128 characters long and can be an IPv4 address, a CIDR block, a domain name, or a wildcard domain name.
   * 
   * @example
   * *******************************************
   */
  address?: string;
  /**
   * @remarks
   * The TTL.
   * 
   * @example
   * 10
   */
  TTL?: string;
  /**
   * @remarks
   * The latency.
   * 
   * @example
   * 10
   */
  latency?: string;
  /**
   * @remarks
   * The geographic location.
   */
  geoData?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDnsHopsGeoData;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      TTL: 'TTL',
      latency: 'Latency',
      geoData: 'GeoData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      TTL: 'string',
      latency: 'string',
      geoData: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDnsHopsGeoData,
    };
  }

  validate() {
    if(this.geoData && typeof (this.geoData as any).validate === 'function') {
      (this.geoData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDns extends $dara.Model {
  /**
   * @remarks
   * The DNS server.
   * 
   * @example
   * 100.100.2.136,100.100.2.138
   */
  dnsServer?: string;
  /**
   * @remarks
   * The DNS type.
   * 
   * @example
   * private-zone
   */
  dnsType?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 0
   */
  error?: string;
  /**
   * @remarks
   * The source node.
   * 
   * @example
   * 2
   */
  fromNode?: number;
  /**
   * @remarks
   * The intermediate hops.
   */
  hops?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDnsHops[][];
  /**
   * @remarks
   * The latency.
   * 
   * @example
   * 10
   */
  latency?: string;
  /**
   * @remarks
   * The DNS result.
   * 
   * @example
   * 10.0.0.1
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The destination node.
   * 
   * @example
   * 3
   */
  toNode?: number;
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
      dnsType: 'DnsType',
      error: 'Error',
      fromNode: 'FromNode',
      hops: 'Hops',
      latency: 'Latency',
      result: 'Result',
      success: 'Success',
      toNode: 'ToNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: 'string',
      dnsType: 'string',
      error: 'string',
      fromNode: 'number',
      hops: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDnsHops } },
      latency: 'string',
      result: 'string',
      success: 'boolean',
      toNode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hops)) {
      $dara.Model.validateArray(this.hops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinksHopsGeoData extends $dara.Model {
  /**
   * @remarks
   * The city.
   * 
   * @example
   * Haikou City
   */
  city?: string;
  /**
   * @remarks
   * The country.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The ISP.
   * 
   * @example
   * ChinaMobile_L2
   */
  isp?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * ZHejiang
   */
  prov?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      country: 'Country',
      isp: 'Isp',
      prov: 'Prov',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      country: 'string',
      isp: 'string',
      prov: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinksHops extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * @example
   * **********************
   */
  address?: string;
  /**
   * @remarks
   * The geographic location.
   */
  geoData?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinksHopsGeoData;
  /**
   * @remarks
   * The latency.
   * 
   * @example
   * 10
   */
  latency?: string;
  /**
   * @remarks
   * The Time to Live (TTL).
   * 
   * @example
   * 10
   */
  TTL?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      geoData: 'GeoData',
      latency: 'Latency',
      TTL: 'TTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      geoData: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinksHopsGeoData,
      latency: 'string',
      TTL: 'string',
    };
  }

  validate() {
    if(this.geoData && typeof (this.geoData as any).validate === 'function') {
      (this.geoData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinks extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 0
   */
  error?: string;
  /**
   * @remarks
   * The source node.
   * 
   * @example
   * 1
   */
  fromNode?: number;
  /**
   * @remarks
   * The intermediate hops.
   */
  hops?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinksHops[];
  /**
   * @remarks
   * The latency.
   * 
   * @example
   * 10
   */
  latency?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The destination node.
   * 
   * @example
   * 2
   */
  toNode?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      fromNode: 'FromNode',
      hops: 'Hops',
      latency: 'Latency',
      success: 'Success',
      toNode: 'ToNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      fromNode: 'number',
      hops: { 'type': 'array', 'itemType': GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinksHops },
      latency: 'string',
      success: 'boolean',
      toNode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hops)) {
      $dara.Model.validateArray(this.hops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoNodesGeoData extends $dara.Model {
  /**
   * @remarks
   * The city.
   * 
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The country.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The Internet Service Provider (ISP).
   * 
   * @example
   * ChinaTelecom_L2
   */
  isp?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * Zhejiang
   */
  prov?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      country: 'Country',
      isp: 'Isp',
      prov: 'Prov',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      country: 'string',
      isp: 'string',
      prov: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoNodes extends $dara.Model {
  /**
   * @remarks
   * The private access application address. The address can be 1 to 128 characters long and can be an IPv4 address, a CIDR block, a domain name, or a wildcard domain name.
   * 
   * @example
   * 172.27.228.132
   */
  address?: string;
  /**
   * @remarks
   * The ID of the cloud network instance.
   * 
   * @example
   * vpc-xxxxxx
   */
  cloudNetId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 1
   */
  error?: string;
  /**
   * @remarks
   * The geographic location information.
   */
  geoData?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoNodesGeoData;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1237
   */
  id?: number;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * 全局加速
   */
  name?: string;
  /**
   * @remarks
   * The English name of the node.
   * 
   * @example
   * Japan Private POP
   */
  nameEn?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * stunnel
   */
  nodeType?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * pop-xxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      cloudNetId: 'CloudNetId',
      error: 'Error',
      geoData: 'GeoData',
      id: 'Id',
      name: 'Name',
      nameEn: 'NameEn',
      nodeType: 'NodeType',
      resourceId: 'ResourceId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cloudNetId: 'string',
      error: 'string',
      geoData: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoNodesGeoData,
      id: 'number',
      name: 'string',
      nameEn: 'string',
      nodeType: 'string',
      resourceId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.geoData && typeof (this.geoData as any).validate === 'function') {
      (this.geoData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfo extends $dara.Model {
  /**
   * @remarks
   * The Domain Name System (DNS) information.
   */
  dns?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDns;
  /**
   * @remarks
   * The time to first byte.
   * 
   * @example
   * 300
   */
  FBT?: string;
  /**
   * @remarks
   * The connections between nodes.
   */
  links?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinks[];
  /**
   * @remarks
   * The forwarding nodes.
   */
  nodes?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoNodes[];
  static names(): { [key: string]: string } {
    return {
      dns: 'Dns',
      FBT: 'FBT',
      links: 'Links',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDns,
      FBT: 'string',
      links: { 'type': 'array', 'itemType': GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinks },
      nodes: { 'type': 'array', 'itemType': GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoNodes },
    };
  }

  validate() {
    if(this.dns && typeof (this.dns as any).validate === 'function') {
      (this.dns as any).validate();
    }
    if(Array.isArray(this.links)) {
      $dara.Model.validateArray(this.links);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoDeviceAttributeInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the device.
   * 
   * @example
   * E9EE1CE7-4AA0-521D-B8E1-E13E47F05E94
   */
  devTag?: string;
  /**
   * @remarks
   * The operating system of the device. Valid values:
   * 
   * - **Windows**: Windows
   * 
   * - **macOS**: macOS
   * 
   * - **Linux**: Linux
   * 
   * - **Android**: Android
   * 
   * - **iOS**: iOS
   * 
   * - **Windows_Wuying**: Cloud Desktop
   * 
   * @example
   * macos
   */
  deviceType?: string;
  /**
   * @remarks
   * The name of the file.
   */
  file?: string[];
  /**
   * @remarks
   * The firewall.
   * 
   * @example
   * [{\\"Platform\\":\\"windows\\",\\"Status\\":\\"disabled\\"},{\\"Platform\\":\\"macos\\",\\"Status\\":\\"disabled\\"},{\\"Platform\\":\\"linux\\",\\"Status\\":\\"disabled\\"}]
   */
  firewall?: string;
  /**
   * @remarks
   * The name of the device. The name can be 1 to 128 characters long and can include letters, numbers, and the following special characters: . , ; - _ / @ and spaces. To query for all devices with names containing 4-byte UTF-8 characters, enter only an underscore (_).
   * 
   * @example
   * DESKTOP-CVTB5KT.CXISHD01.CATHAY_INS.CHN
   */
  hostname?: string;
  /**
   * @remarks
   * The private IP address of the device.
   * 
   * @example
   * 10.5.208.122
   */
  innerIp?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.98.146.136
   */
  internetIp?: string;
  /**
   * @remarks
   * The MAC address of the device.
   * 
   * @example
   * `curl Rj0F9uvI.popscan.xaliyun.com`
   */
  mac?: string;
  /**
   * @remarks
   * The matched security baseline.
   * 
   * @example
   * Test
   */
  matchedSecurityBaseline?: string;
  /**
   * @remarks
   * The list of security baseline processes.
   */
  process?: string[];
  /**
   * @remarks
   * The SSID.
   * 
   * @example
   * abcd
   */
  ssid?: string;
  static names(): { [key: string]: string } {
    return {
      devTag: 'DevTag',
      deviceType: 'DeviceType',
      file: 'File',
      firewall: 'Firewall',
      hostname: 'Hostname',
      innerIp: 'InnerIp',
      internetIp: 'InternetIp',
      mac: 'Mac',
      matchedSecurityBaseline: 'MatchedSecurityBaseline',
      process: 'Process',
      ssid: 'Ssid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTag: 'string',
      deviceType: 'string',
      file: { 'type': 'array', 'itemType': 'string' },
      firewall: 'string',
      hostname: 'string',
      innerIp: 'string',
      internetIp: 'string',
      mac: 'string',
      matchedSecurityBaseline: 'string',
      process: { 'type': 'array', 'itemType': 'string' },
      ssid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.file)) {
      $dara.Model.validateArray(this.file);
    }
    if(Array.isArray(this.process)) {
      $dara.Model.validateArray(this.process);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoRouteStrategyInfo extends $dara.Model {
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * connector
   */
  routeType?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * av-rtd-091c2d6e3f24aae4
   */
  strategyId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 1
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      routeType: 'RouteType',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeType: 'string',
      strategyId: 'string',
      strategyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoUserGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 1234@xxxx.com
   */
  email?: string;
  /**
   * @remarks
   * The list of department names.
   */
  group?: string[];
  /**
   * @remarks
   * The matched user group.
   * 
   * @example
   * IT
   */
  matchedUserGroups?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 123456789
   */
  telephone?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      group: 'Group',
      matchedUserGroups: 'MatchedUserGroups',
      telephone: 'Telephone',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      group: { 'type': 'array', 'itemType': 'string' },
      matchedUserGroups: 'string',
      telephone: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.group)) {
      $dara.Model.validateArray(this.group);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoZeroTrustPolicyInfo extends $dara.Model {
  /**
   * @remarks
   * The policy action:
   * 
   * - **Allow**: allow
   * 
   * - **Block**: block
   * 
   * - **Observe**: monitor mode
   * 
   * @example
   * block
   */
  action?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * MyApp2
   */
  appName?: string;
  /**
   * @remarks
   * The block information.
   * 
   * @example
   * access denied
   */
  blockInfo?: string;
  /**
   * @remarks
   * The name of the zero-trust policy.
   * 
   * @example
   * 保密测试
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      appName: 'AppName',
      blockInfo: 'BlockInfo',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      appName: 'string',
      blockInfo: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfo extends $dara.Model {
  /**
   * @remarks
   * The device information.
   */
  deviceAttributeInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoDeviceAttributeInfo;
  /**
   * @remarks
   * The processing duration.
   * 
   * @example
   * 1000
   */
  processTime?: number;
  /**
   * @remarks
   * The name of the routing policy.
   */
  routeStrategyInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoRouteStrategyInfo;
  /**
   * @remarks
   * The user group information.
   */
  userGroupInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoUserGroupInfo;
  /**
   * @remarks
   * The zero-trust policy information.
   */
  zeroTrustPolicyInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoZeroTrustPolicyInfo;
  static names(): { [key: string]: string } {
    return {
      deviceAttributeInfo: 'DeviceAttributeInfo',
      processTime: 'ProcessTime',
      routeStrategyInfo: 'RouteStrategyInfo',
      userGroupInfo: 'UserGroupInfo',
      zeroTrustPolicyInfo: 'ZeroTrustPolicyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceAttributeInfo: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoDeviceAttributeInfo,
      processTime: 'number',
      routeStrategyInfo: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoRouteStrategyInfo,
      userGroupInfo: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoUserGroupInfo,
      zeroTrustPolicyInfo: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoZeroTrustPolicyInfo,
    };
  }

  validate() {
    if(this.deviceAttributeInfo && typeof (this.deviceAttributeInfo as any).validate === 'function') {
      (this.deviceAttributeInfo as any).validate();
    }
    if(this.routeStrategyInfo && typeof (this.routeStrategyInfo as any).validate === 'function') {
      (this.routeStrategyInfo as any).validate();
    }
    if(this.userGroupInfo && typeof (this.userGroupInfo as any).validate === 'function') {
      (this.userGroupInfo as any).validate();
    }
    if(this.zeroTrustPolicyInfo && typeof (this.zeroTrustPolicyInfo as any).validate === 'function') {
      (this.zeroTrustPolicyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResult extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * device offline
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request stream.
   * 
   * @example
   * flow-d918b12f9b974f6489fc
   */
  flowId?: string;
  /**
   * @remarks
   * The network connectivity information.
   */
  networkLinkInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfo;
  /**
   * @remarks
   * The policy information.
   */
  policyInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfo;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      flowId: 'FlowId',
      networkLinkInfo: 'NetworkLinkInfo',
      policyInfo: 'PolicyInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      flowId: 'string',
      networkLinkInfo: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfo,
      policyInfo: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.networkLinkInfo && typeof (this.networkLinkInfo as any).validate === 'function') {
      (this.networkLinkInfo as any).validate();
    }
    if(this.policyInfo && typeof (this.policyInfo as any).validate === 'function') {
      (this.policyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskUdpExtraConfigs extends $dara.Model {
  /**
   * @remarks
   * The expected response from the backend server.
   * 
   * @example
   * hello
   */
  expectedResponse?: string;
  /**
   * @remarks
   * The content of the UDP request.
   * 
   * @example
   * hello
   */
  requestContent?: string;
  static names(): { [key: string]: string } {
    return {
      expectedResponse: 'ExpectedResponse',
      requestContent: 'RequestContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedResponse: 'string',
      requestContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTaskUserGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * ug-xxxxx
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * IT
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBodyDiagnosisTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2023-08-17 09:49:03
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the device.
   * 
   * @example
   * 76C08B0F-CEFD-8F01-C1D3-0D5B493B5EAF
   */
  devTag?: string;
  /**
   * @remarks
   * The ID of the diagnostic task.
   * 
   * @example
   * diag-3e0d36d6c15a0502
   */
  diagnoseId?: string;
  /**
   * @remarks
   * The diagnostic type. Valid values:
   * 
   * - **FullLink**: full-link diagnostics
   * 
   * - **Application**: application diagnostics
   * 
   * @example
   * FullLink
   */
  diagnoseType?: string;
  /**
   * @remarks
   * The domain name to be diagnosed.
   * 
   * @example
   * mtools-admin.redotpay.com
   */
  host?: string;
  /**
   * @remarks
   * The ID of the POP.
   * 
   * @example
   * pop-2504cd067e094750
   */
  popId?: string;
  /**
   * @remarks
   * The point of presence (POP) selection mode:
   * 
   * - **AutoSelect**: automatic selection
   * 
   * - **ManualSelect**: manual selection
   * 
   * @example
   * AutoSelect
   */
  popMode?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The private access application protocol. Valid values:
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * @example
   * All
   */
  protocol?: string;
  /**
   * @remarks
   * The diagnostic result.
   */
  result?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResult;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - **Running**: The task is running.
   * 
   * - **Finished**: The task is complete.
   * 
   * - **Failed**: The task failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Additional UDP configurations.
   */
  udpExtraConfigs?: GetPADiagnosisTaskResponseBodyDiagnosisTaskUdpExtraConfigs;
  /**
   * @remarks
   * The user group.
   */
  userGroup?: GetPADiagnosisTaskResponseBodyDiagnosisTaskUserGroup;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      devTag: 'DevTag',
      diagnoseId: 'DiagnoseId',
      diagnoseType: 'DiagnoseType',
      host: 'Host',
      popId: 'PopId',
      popMode: 'PopMode',
      port: 'Port',
      protocol: 'Protocol',
      result: 'Result',
      status: 'Status',
      udpExtraConfigs: 'UdpExtraConfigs',
      userGroup: 'UserGroup',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      devTag: 'string',
      diagnoseId: 'string',
      diagnoseType: 'string',
      host: 'string',
      popId: 'string',
      popMode: 'string',
      port: 'string',
      protocol: 'string',
      result: GetPADiagnosisTaskResponseBodyDiagnosisTaskResult,
      status: 'string',
      udpExtraConfigs: GetPADiagnosisTaskResponseBodyDiagnosisTaskUdpExtraConfigs,
      userGroup: GetPADiagnosisTaskResponseBodyDiagnosisTaskUserGroup,
      username: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.udpExtraConfigs && typeof (this.udpExtraConfigs as any).validate === 'function') {
      (this.udpExtraConfigs as any).validate();
    }
    if(this.userGroup && typeof (this.userGroup as any).validate === 'function') {
      (this.userGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPADiagnosisTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostic task.
   */
  diagnosisTask?: GetPADiagnosisTaskResponseBodyDiagnosisTask;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2CABFEBB-0CE7-575E-833A-266F75D46713
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosisTask: 'DiagnosisTask',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisTask: GetPADiagnosisTaskResponseBodyDiagnosisTask,
      requestId: 'string',
    };
  }

  validate() {
    if(this.diagnosisTask && typeof (this.diagnosisTask as any).validate === 'function') {
      (this.diagnosisTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

