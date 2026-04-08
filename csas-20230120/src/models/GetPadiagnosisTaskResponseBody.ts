// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDnsHopsGeoData extends $dara.Model {
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * Zhejiang
   */
  prov?: string;
  /**
   * @example
   * hangzhou
   */
  city?: string;
  /**
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
   * @example
   * *******************************************
   */
  address?: string;
  /**
   * @remarks
   * TTL。
   * 
   * @example
   * 10
   */
  TTL?: string;
  /**
   * @example
   * 10
   */
  latency?: string;
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
   * @example
   * 100.100.2.136,100.100.2.138
   */
  dnsServer?: string;
  /**
   * @example
   * private-zone
   */
  dnsType?: string;
  /**
   * @example
   * 0
   */
  error?: string;
  /**
   * @example
   * 2
   */
  fromNode?: number;
  hops?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDnsHops[][];
  /**
   * @example
   * 10
   */
  latency?: string;
  /**
   * @example
   * 10.0.0.1
   */
  result?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
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
   * @example
   * Haikou City
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * ChinaMobile_L2
   */
  isp?: string;
  /**
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
   * @example
   * **********************
   */
  address?: string;
  geoData?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinksHopsGeoData;
  /**
   * @example
   * 10
   */
  latency?: string;
  /**
   * @remarks
   * TTL。
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
   * @example
   * 0
   */
  error?: string;
  /**
   * @example
   * 1
   */
  fromNode?: number;
  hops?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinksHops[];
  /**
   * @example
   * 10
   */
  latency?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
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
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * ChinaTelecom_L2
   */
  isp?: string;
  /**
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
   * @example
   * 172.27.228.132
   */
  address?: string;
  /**
   * @example
   * vpc-xxxxxx
   */
  cloudNetId?: string;
  /**
   * @example
   * 1
   */
  error?: string;
  geoData?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoNodesGeoData;
  /**
   * @example
   * 1237
   */
  id?: number;
  name?: string;
  /**
   * @example
   * Japan Private POP
   */
  nameEn?: string;
  /**
   * @example
   * stunnel
   */
  nodeType?: string;
  /**
   * @example
   * pop-xxxxxx
   */
  resourceId?: string;
  /**
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
  dns?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoDns;
  /**
   * @example
   * 300
   */
  FBT?: string;
  links?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfoLinks[];
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
   * @example
   * E9EE1CE7-4AA0-521D-B8E1-E13E47F05E94
   */
  devTag?: string;
  /**
   * @example
   * macos
   */
  deviceType?: string;
  file?: string[];
  /**
   * @example
   * [{\\"Platform\\":\\"windows\\",\\"Status\\":\\"disabled\\"},{\\"Platform\\":\\"macos\\",\\"Status\\":\\"disabled\\"},{\\"Platform\\":\\"linux\\",\\"Status\\":\\"disabled\\"}]
   */
  firewall?: string;
  /**
   * @example
   * DESKTOP-CVTB5KT.CXISHD01.CATHAY_INS.CHN
   */
  hostname?: string;
  /**
   * @example
   * 10.5.208.122
   */
  innerIp?: string;
  /**
   * @example
   * 47.98.146.136
   */
  internetIp?: string;
  /**
   * @example
   * `curl Rj0F9uvI.popscan.xaliyun.com`
   */
  mac?: string;
  /**
   * @example
   * Test
   */
  matchedSecurityBaseline?: string;
  process?: string[];
  /**
   * @remarks
   * SSID。
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
   * @example
   * connector
   */
  routeType?: string;
  /**
   * @example
   * av-rtd-091c2d6e3f24aae4
   */
  strategyId?: string;
  /**
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
   * @example
   * 1234@xxxx.com
   */
  email?: string;
  group?: string[];
  /**
   * @example
   * IT
   */
  matchedUserGroups?: string;
  /**
   * @example
   * 123456789
   */
  telephone?: string;
  /**
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
   * @example
   * block
   */
  action?: string;
  /**
   * @example
   * MyApp2
   */
  appName?: string;
  /**
   * @example
   * access denied
   */
  blockInfo?: string;
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
  deviceAttributeInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoDeviceAttributeInfo;
  /**
   * @example
   * 1000
   */
  processTime?: number;
  routeStrategyInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoRouteStrategyInfo;
  userGroupInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfoUserGroupInfo;
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
   * @example
   * device offline
   */
  errorMessage?: string;
  /**
   * @example
   * flow-d918b12f9b974f6489fc
   */
  flowId?: string;
  networkLinkInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultNetworkLinkInfo;
  policyInfo?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResultPolicyInfo;
  /**
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
   * @example
   * hello
   */
  expectedResponse?: string;
  /**
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
   * @example
   * ug-xxxxx
   */
  userGroupId?: string;
  /**
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
   * @example
   * 2023-08-17 09:49:03
   */
  createTime?: string;
  /**
   * @example
   * 76C08B0F-CEFD-8F01-C1D3-0D5B493B5EAF
   */
  devTag?: string;
  /**
   * @example
   * diag-3e0d36d6c15a0502
   */
  diagnoseId?: string;
  /**
   * @example
   * FullLink
   */
  diagnoseType?: string;
  /**
   * @example
   * mtools-admin.redotpay.com
   */
  host?: string;
  /**
   * @example
   * pop-2504cd067e094750
   */
  popId?: string;
  /**
   * @example
   * AutoSelect
   */
  popMode?: string;
  /**
   * @example
   * 80
   */
  port?: string;
  /**
   * @example
   * All
   */
  protocol?: string;
  result?: GetPADiagnosisTaskResponseBodyDiagnosisTaskResult;
  /**
   * @example
   * Running
   */
  status?: string;
  udpExtraConfigs?: GetPADiagnosisTaskResponseBodyDiagnosisTaskUdpExtraConfigs;
  userGroup?: GetPADiagnosisTaskResponseBodyDiagnosisTaskUserGroup;
  /**
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
  diagnosisTask?: GetPADiagnosisTaskResponseBodyDiagnosisTask;
  /**
   * @remarks
   * Id of the request
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

