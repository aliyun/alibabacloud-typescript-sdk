// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTimingSyntheticTaskRequestAvailableAssertions extends $dara.Model {
  /**
   * @remarks
   * The expected value.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  expect?: string;
  /**
   * @remarks
   * The condition. gt: greater than. gte: greater than or equal to. lt: less than. lte: less than or equal to. eq: equal to. neq: not equal to. ctn: contain. nctn: does not contain. exist: exist. n_exist: does not exist. belong: belong to. n_belong: does not belong to. reg_match: regular expression.
   * 
   * This parameter is required.
   * 
   * @example
   * eq
   */
  operator?: string;
  /**
   * @remarks
   * The check target. If you set the type parameter to HttpResCode, HttpResBody, or HttpResponseTime, you do not need to set the target parameter. If you set the type parameter to HttpResHead, you must specify the key in the header. If you set the type parameter to HttpResBodyJson, use jsonPath.
   * 
   * @example
   * key
   */
  target?: string;
  /**
   * @remarks
   * The assertion type. Valid values: HttpResCode, HttpResHead, HttpResBody, HttpResBodyJson, HttpResponseTime, IcmpPackLoss (packet loss rate), IcmpPackMaxLatency (maximum packet latency), IcmpPackAvgLatency (average packet latency), TraceRouteHops (number of hops), DnsARecord (A record), DnsCName (CNAME), websiteTTFB (time to first packet), websiteTTLB (time to last packet), websiteFST (first paint time), websiteFFST (first meaningful paint), websiteOnload (full loaded time). For more information, see the following description.
   * 
   * This parameter is required.
   * 
   * @example
   * DnsARecord
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      expect: 'Expect',
      operator: 'Operator',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expect: 'string',
      operator: 'string',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestCommonSettingCustomHostHosts extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   0: A version is automatically selected.
   * *   1: IPv4.
   * *   2: IPv6.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ipType?: number;
  /**
   * @remarks
   * The list of IP addresses.
   * 
   * This parameter is required.
   */
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ipType: 'IpType',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ipType: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestCommonSettingCustomHost extends $dara.Model {
  /**
   * @remarks
   * The list of hosts.
   * 
   * This parameter is required.
   */
  hosts?: CreateTimingSyntheticTaskRequestCommonSettingCustomHostHosts[];
  /**
   * @remarks
   * The selection mode. Valid values:
   * 
   * *   0: random
   * *   1: polling
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  selectType?: number;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      selectType: 'SelectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': CreateTimingSyntheticTaskRequestCommonSettingCustomHostHosts },
      selectType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestCommonSettingCustomPrometheusSetting extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  prometheusClusterId?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  prometheusClusterRegion?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  prometheusLabels?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      prometheusClusterId: 'PrometheusClusterId',
      prometheusClusterRegion: 'PrometheusClusterRegion',
      prometheusLabels: 'PrometheusLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusClusterId: 'string',
      prometheusClusterRegion: 'string',
      prometheusLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.prometheusLabels) {
      $dara.Model.validateMap(this.prometheusLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestCommonSettingCustomVPCSetting extends $dara.Model {
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
   * The ID of the security group to which the client belongs. The security group specifies the inbound and outbound rules of the client for the VPC. You need to allow the security group to which the client belongs to access the security group to which the VPC belongs. Otherwise, the client cannot access resources in the VPC.
   * 
   * @example
   * sg-bp13wzf9vuwegmpxxxxx
   */
  secureGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp14crq29vpycxp8xxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID.
   * 
   * @example
   * vpc-bp1muectbr8f90vjxxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      secureGroupId: 'SecureGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      secureGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestCommonSetting extends $dara.Model {
  /**
   * @remarks
   * The custom host settings.
   */
  customHost?: CreateTimingSyntheticTaskRequestCommonSettingCustomHost;
  /**
   * @remarks
   * The reserved parameters.
   */
  customPrometheusSetting?: CreateTimingSyntheticTaskRequestCommonSettingCustomPrometheusSetting;
  /**
   * @remarks
   * The information about the virtual private cloud (VPC). If the destination URL is an Alibaba Cloud internal endpoint, you need to configure a VPC.
   */
  customVPCSetting?: CreateTimingSyntheticTaskRequestCommonSettingCustomVPCSetting;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   0: A version is automatically selected.
   * *   1: IPv4.
   * *   2: IPv6.
   * 
   * @example
   * 0
   */
  ipType?: number;
  /**
   * @remarks
   * Specifies whether to enable tracing.
   * 
   * @example
   * true
   */
  isOpenTrace?: boolean;
  /**
   * @remarks
   * Specifies whether to evenly distribute monitoring samples. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 0
   */
  monitorSamples?: number;
  /**
   * @remarks
   * The type of the client for tracing. Valid values:
   * 
   * *   0: ARMS agent
   * *   1: OpenTelemetry
   * *   2: Jaeger
   * 
   * @example
   * 1
   */
  traceClientType?: number;
  /**
   * @remarks
   * The region to which trace data is reported.
   * 
   * @example
   * cn-hangzhou
   */
  xtraceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      customHost: 'CustomHost',
      customPrometheusSetting: 'CustomPrometheusSetting',
      customVPCSetting: 'CustomVPCSetting',
      ipType: 'IpType',
      isOpenTrace: 'IsOpenTrace',
      monitorSamples: 'MonitorSamples',
      traceClientType: 'TraceClientType',
      xtraceRegion: 'XtraceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHost: CreateTimingSyntheticTaskRequestCommonSettingCustomHost,
      customPrometheusSetting: CreateTimingSyntheticTaskRequestCommonSettingCustomPrometheusSetting,
      customVPCSetting: CreateTimingSyntheticTaskRequestCommonSettingCustomVPCSetting,
      ipType: 'number',
      isOpenTrace: 'boolean',
      monitorSamples: 'number',
      traceClientType: 'number',
      xtraceRegion: 'string',
    };
  }

  validate() {
    if(this.customHost && typeof (this.customHost as any).validate === 'function') {
      (this.customHost as any).validate();
    }
    if(this.customPrometheusSetting && typeof (this.customPrometheusSetting as any).validate === 'function') {
      (this.customPrometheusSetting as any).validate();
    }
    if(this.customVPCSetting && typeof (this.customVPCSetting as any).validate === 'function') {
      (this.customVPCSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestCustomPeriod extends $dara.Model {
  /**
   * @remarks
   * The custom host settings.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  endHour?: number;
  /**
   * @remarks
   * The list of hosts.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  startHour?: number;
  static names(): { [key: string]: string } {
    return {
      endHour: 'EndHour',
      startHour: 'StartHour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endHour: 'number',
      startHour: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitorConfApiHTTPRequestBody extends $dara.Model {
  /**
   * @remarks
   * The content of the request body. Format: JSON string. The parameter is required if the Type parameter is set to text/plain, application/json, application/xml, or text/html. Format: JSON string.
   * 
   * @example
   * {
   *   "key1": "value1",
   *   "key2": "value2"
   * }
   */
  content?: string;
  /**
   * @remarks
   * The type of the request body. Valid values: text/plain, application/json, application/x-www-form-urlencoded, multipart/form-data, application/xml, and text/html.
   * 
   * @example
   * application/json
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitorConfApiHTTP extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to verify the certificate. Default value: no.
   * 
   * @example
   * true
   */
  checkCert?: boolean;
  /**
   * @remarks
   * The connection timeout period. Unit: milliseconds. Default value: 5000. Minimum value: 1000. Maximum value: 300000.
   * 
   * @example
   * 5000
   */
  connectTimeout?: number;
  /**
   * @remarks
   * The request method. Valid values: GET and POST.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The ALPN protocol version. You can configure this parameter when you perform an HTTPS synthetic test on a WAP mobile client. Valid values:
   * 
   * 0: default
   * 
   * 1: http/1.1
   * 
   * 2: h2
   * 
   * 3: disables the ALPN protocol
   * 
   * @example
   * 1
   */
  protocolAlpnProtocol?: number;
  /**
   * @remarks
   * The HTTP request body.
   */
  requestBody?: CreateTimingSyntheticTaskRequestMonitorConfApiHTTPRequestBody;
  /**
   * @remarks
   * The HTTP request header.
   */
  requestHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The URL or request path for synthetic monitoring.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.demo.com/api/list
   */
  targetUrl?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds. Default value: 10000. Minimum value: 1000. Maximum value: 300000.
   * 
   * @example
   * 10000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      checkCert: 'CheckCert',
      connectTimeout: 'ConnectTimeout',
      method: 'Method',
      protocolAlpnProtocol: 'ProtocolAlpnProtocol',
      requestBody: 'RequestBody',
      requestHeaders: 'RequestHeaders',
      targetUrl: 'TargetUrl',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCert: 'boolean',
      connectTimeout: 'number',
      method: 'string',
      protocolAlpnProtocol: 'number',
      requestBody: CreateTimingSyntheticTaskRequestMonitorConfApiHTTPRequestBody,
      requestHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      targetUrl: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(this.requestBody && typeof (this.requestBody as any).validate === 'function') {
      (this.requestBody as any).validate();
    }
    if(this.requestHeaders) {
      $dara.Model.validateMap(this.requestHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitorConfFileDownload extends $dara.Model {
  /**
   * @remarks
   * Unit: milliseconds. Minimum value: 1000. Maximum value: 120000. Default value: 5000.
   * 
   * @example
   * 5000
   */
  connectionTimeout?: number;
  /**
   * @remarks
   * The content of the custom request header.
   */
  customHeaderContent?: { [key: string]: string };
  /**
   * @remarks
   * The kernel type. Valid values:
   * 
   * *   1: curl
   * *   0: WinInet
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  downloadKernel?: number;
  /**
   * @remarks
   * Specifies whether to ignore CA certificate authentication errors. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  ignoreCertificateAuthError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate revocation errors. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  ignoreCertificateCanceledError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate invalidity. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  ignoreCertificateOutOfDateError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate status errors. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  ignoreCertificateStatusError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate incredibility. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  ignoreCertificateUntrustworthyError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate usage errors. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  ignoreCertificateUsingError?: number;
  /**
   * @remarks
   * Specifies whether to ignore host invalidity. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  ignoreInvalidHostError?: number;
  /**
   * @remarks
   * The monitoring timeout period. Unit: milliseconds. Minimum value: 1000. Maximum value: 120000. Default value: 60000.
   * 
   * @example
   * 60000
   */
  monitorTimeout?: number;
  /**
   * @remarks
   * The QUIC protocol type. Valid values:
   * 
   * *   1: HTTP/1
   * *   2: HTTP/2
   * *   3: HTTP/3
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  quickProtocol?: number;
  /**
   * @remarks
   * Specifies whether to support redirection. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  redirection?: number;
  /**
   * @remarks
   * The URL that is used to download the file.
   * 
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/tfs/TB13DzOjXP7gK0jSZFjXXc5aXXa-212-48.png
   */
  targetUrl?: string;
  /**
   * @remarks
   * The maximum file size of a single transfer. Unit: KB. Minimum value: 1. Maximum value: 20480. Valid values: 2048.
   * 
   * @example
   * 2048
   */
  transmissionSize?: number;
  /**
   * @remarks
   * The keyword that is used in verification.
   * 
   * @example
   * aliyun
   */
  validateKeywords?: string;
  /**
   * @remarks
   * The verification method. Valid values:
   * 
   * *   0: no verification
   * *   1: string verification
   * *   2: MD5 verification
   * 
   * @example
   * 0
   */
  verifyWay?: number;
  /**
   * @remarks
   * The whitelisted objects that are used to avoid DNS hijacking. The objects can be IP addresses, wildcard mask, subnet mask, or CNAME records. Separate multiple objects with vertical bars (|). Example: www.aliyun.com:203.0.3.55|203.3.44.67. It indicates that all IP addresses that belong to the www.aliyun.com domain name except 203.0.3.55 and 203.3.44.67 are hijacked.
   * 
   * @example
   * www.aliyun.com:203.0.3.55|203.3.44.67
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      connectionTimeout: 'ConnectionTimeout',
      customHeaderContent: 'CustomHeaderContent',
      downloadKernel: 'DownloadKernel',
      ignoreCertificateAuthError: 'IgnoreCertificateAuthError',
      ignoreCertificateCanceledError: 'IgnoreCertificateCanceledError',
      ignoreCertificateOutOfDateError: 'IgnoreCertificateOutOfDateError',
      ignoreCertificateStatusError: 'IgnoreCertificateStatusError',
      ignoreCertificateUntrustworthyError: 'IgnoreCertificateUntrustworthyError',
      ignoreCertificateUsingError: 'IgnoreCertificateUsingError',
      ignoreInvalidHostError: 'IgnoreInvalidHostError',
      monitorTimeout: 'MonitorTimeout',
      quickProtocol: 'QuickProtocol',
      redirection: 'Redirection',
      targetUrl: 'TargetUrl',
      transmissionSize: 'TransmissionSize',
      validateKeywords: 'ValidateKeywords',
      verifyWay: 'VerifyWay',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionTimeout: 'number',
      customHeaderContent: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      downloadKernel: 'number',
      ignoreCertificateAuthError: 'number',
      ignoreCertificateCanceledError: 'number',
      ignoreCertificateOutOfDateError: 'number',
      ignoreCertificateStatusError: 'number',
      ignoreCertificateUntrustworthyError: 'number',
      ignoreCertificateUsingError: 'number',
      ignoreInvalidHostError: 'number',
      monitorTimeout: 'number',
      quickProtocol: 'number',
      redirection: 'number',
      targetUrl: 'string',
      transmissionSize: 'number',
      validateKeywords: 'string',
      verifyWay: 'number',
      whiteList: 'string',
    };
  }

  validate() {
    if(this.customHeaderContent) {
      $dara.Model.validateMap(this.customHeaderContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitorConfNetDNS extends $dara.Model {
  /**
   * @remarks
   * The IP version of the DNS server.
   * 
   * *   0 (default): IPv4.
   * *   1: IPv6.
   * *   2: A version is automatically selected.
   * 
   * @example
   * 0
   */
  dnsServerIpType?: number;
  /**
   * @remarks
   * The IP address of the DNS server. Default value: 114.114.114.114.
   * 
   * @example
   * 114.114.114.114
   */
  nsServer?: string;
  /**
   * @remarks
   * The DNS query method. Valid values:
   * 
   * *   0 (default): recursive
   * *   1: iterative
   * 
   * @example
   * 0
   */
  queryMethod?: number;
  /**
   * @remarks
   * The destination domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  targetUrl?: string;
  /**
   * @remarks
   * The timeout period for the DNS synthetic test. Unit: milliseconds. Minimum value: 1000. Maximum value: 45000. Default value: 5000.
   * 
   * @example
   * 5000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      dnsServerIpType: 'DnsServerIpType',
      nsServer: 'NsServer',
      queryMethod: 'QueryMethod',
      targetUrl: 'TargetUrl',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServerIpType: 'number',
      nsServer: 'string',
      queryMethod: 'number',
      targetUrl: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitorConfNetICMP extends $dara.Model {
  /**
   * @remarks
   * The interval at which ICMP packets are sent. Unit: milliseconds. Minimum value: 200. Maximum value: 2000. Default value: 200.
   * 
   * @example
   * 200
   */
  interval?: number;
  /**
   * @remarks
   * The number of ICMP packets that are sent. Minimum value: 1. Maximum value: 50. Default value: 4.
   * 
   * @example
   * 4
   */
  packageNum?: number;
  /**
   * @remarks
   * The size of each ICMP packet. Unit: bytes. Valid values: 32, 64, 128, 256, 512, 1024, 1080, and 1450.
   * 
   * @example
   * 32
   */
  packageSize?: number;
  /**
   * @remarks
   * Specifies whether to split ICMP packets. Default value: true.
   * 
   * @example
   * true
   */
  splitPackage?: boolean;
  /**
   * @remarks
   * The destination IP address or domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  targetUrl?: string;
  /**
   * @remarks
   * The timeout period for the ICMP synthetic test. Unit: milliseconds. Minimum value: 1000. Maximum value: 300000. Default value: 20000.
   * 
   * @example
   * 20000
   */
  timeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the tracert command. Default value: true.
   * 
   * @example
   * true
   */
  tracertEnable?: boolean;
  /**
   * @remarks
   * The maximum number of hops for the tracert command. Minimum value: 1. Maximum value: 128. Default value: 20.
   * 
   * @example
   * 20
   */
  tracertNumMax?: number;
  /**
   * @remarks
   * The timeout period of the tracert command. Unit: milliseconds. Minimum value: 1000. Maximum value: 300000. Default value: 60000.
   * 
   * @example
   * 60000
   */
  tracertTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      packageNum: 'PackageNum',
      packageSize: 'PackageSize',
      splitPackage: 'SplitPackage',
      targetUrl: 'TargetUrl',
      timeout: 'Timeout',
      tracertEnable: 'TracertEnable',
      tracertNumMax: 'TracertNumMax',
      tracertTimeout: 'TracertTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      packageNum: 'number',
      packageSize: 'number',
      splitPackage: 'boolean',
      targetUrl: 'string',
      timeout: 'number',
      tracertEnable: 'boolean',
      tracertNumMax: 'number',
      tracertTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitorConfNetTCP extends $dara.Model {
  /**
   * @remarks
   * The number of TCP connections that are established. Minimum value: 1. Maximum value: 16. Default value: 4.
   * 
   * @example
   * 4
   */
  connectTimes?: number;
  /**
   * @remarks
   * The interval at which TCP connections are established. Unit: milliseconds. Minimum value: 200. Maximum value: 10000. Default value: 200.
   * 
   * @example
   * 200
   */
  interval?: number;
  /**
   * @remarks
   * The IP address of the destination host.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  targetUrl?: string;
  /**
   * @remarks
   * The timeout period for the TCP synthetic test. Unit: milliseconds. Minimum value: 1000. Maximum value: 300000. Default value: 20000.
   * 
   * @example
   * 20000
   */
  timeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the tracert command. Default value: true.
   * 
   * @example
   * true
   */
  tracertEnable?: boolean;
  /**
   * @remarks
   * The maximum number of hops for the tracert command. Minimum value: 1. Maximum value: 128. Default value: 20.
   * 
   * @example
   * 20
   */
  tracertNumMax?: number;
  /**
   * @remarks
   * The timeout period of the tracert command. Unit: milliseconds. Minimum value: 1000. Maximum value: 300000. Default value: 60000.
   * 
   * @example
   * 60000
   */
  tracertTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      connectTimes: 'ConnectTimes',
      interval: 'Interval',
      targetUrl: 'TargetUrl',
      timeout: 'Timeout',
      tracertEnable: 'TracertEnable',
      tracertNumMax: 'TracertNumMax',
      tracertTimeout: 'TracertTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectTimes: 'number',
      interval: 'number',
      targetUrl: 'string',
      timeout: 'number',
      tracertEnable: 'boolean',
      tracertNumMax: 'number',
      tracertTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitorConfStream extends $dara.Model {
  /**
   * @remarks
   * The custom header. Format: JSON map.
   */
  customHeaderContent?: { [key: string]: string };
  /**
   * @remarks
   * The player. Default value: 12. Valid values:
   * 
   * *   12: VLC
   * *   2: Flash Player
   * 
   * @example
   * 12
   */
  playerType?: number;
  /**
   * @remarks
   * The address type of the resource. Valid values:
   * 
   * *   1: resource URL
   * *   0 (default): page URL
   * 
   * @example
   * 0
   */
  streamAddressType?: number;
  /**
   * @remarks
   * The monitoring duration. Unit: seconds. Maximum and default value: 60.
   * 
   * @example
   * 30
   */
  streamMonitorTimeout?: number;
  /**
   * @remarks
   * Specifies whether the resource is a video or audio. Valid values: 0: video. 1: audio.
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * The resource URL of the streaming media.
   * 
   * @example
   * http://www.aliyun.com/stream/test.mp4
   */
  targetUrl?: string;
  /**
   * @remarks
   * The whitelisted objects that are used to avoid DNS hijacking. The objects can be IP addresses, wildcard mask, subnet mask, or CNAME records. Separate multiple objects with vertical bars (|). Example: www.aliyun.com:203.0.3.55|203.3.44.67. It indicates that all IP addresses that belong to the www.aliyun.com domain name except 203.0.3.55 and 203.3.44.67 are hijacked.
   * 
   * @example
   * www.aliyun.com:203.0.3.55|203.3.44.67
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      customHeaderContent: 'CustomHeaderContent',
      playerType: 'PlayerType',
      streamAddressType: 'StreamAddressType',
      streamMonitorTimeout: 'StreamMonitorTimeout',
      streamType: 'StreamType',
      targetUrl: 'TargetUrl',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeaderContent: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      playerType: 'number',
      streamAddressType: 'number',
      streamMonitorTimeout: 'number',
      streamType: 'number',
      targetUrl: 'string',
      whiteList: 'string',
    };
  }

  validate() {
    if(this.customHeaderContent) {
      $dara.Model.validateMap(this.customHeaderContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitorConfWebsite extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically scroll up and down the screen to load a page.
   * 
   * *   0 (default): no
   * *   1: yes
   * 
   * @example
   * 0
   */
  automaticScrolling?: number;
  /**
   * @remarks
   * Specifies whether to create a custom header.
   * 
   * *   0 (default): No custom header is created.
   * *   1: A custom header is created for the first packet.
   * *   2: A custom header is created for all packets.
   * 
   * @example
   * 0
   */
  customHeader?: number;
  /**
   * @remarks
   * The custom header. Format: JSON map.
   */
  customHeaderContent?: { [key: string]: string };
  /**
   * @remarks
   * If the IP address or CNAME record resolved from a domain name is not included in the DNS whitelist, you cannot access the domain name, or an IP address that belongs to a different domain name is returned. If the IP address or CNAME record is included in the DNS whitelist, DNS hijacking does not occur.
   * 
   * Format: \\<domain name>:\\<objects>. The objects can be IP addresses, wildcard mask, subnet mask, or CNAME records. Separate multiple objects with vertical bars (|). Example: www.aliyun.com:203.0.3.55|203.3.44.67. It indicates that all IP addresses that belong to the www.aliyun.com domain name except 203.0.3.55 and 203.3.44.67 are hijacked.
   * 
   * @example
   * www.aliyun.com:203.0.3.55|203.3.44.67
   */
  DNSHijackWhitelist?: string;
  /**
   * @remarks
   * Specifies whether to disable caching.
   * 
   * *   0: no
   * *   1 (default): yes
   * 
   * @example
   * 1
   */
  disableCache?: number;
  /**
   * @remarks
   * Specifies whether to accept compressed files based on the HTTP Accept-Encoding request header. Valid values: 0: no. 1: yes. Default value: 0.
   * 
   * @example
   * 0
   */
  disableCompression?: number;
  /**
   * @remarks
   * The elements not to be loaded in the page loading process.
   * 
   * @example
   * www.example.com/a.jpg
   */
  elementBlacklist?: string;
  /**
   * @remarks
   * Specifies whether to exclude invalid IP addresses. Valid values: 0: yes. 1: no. Default value: 0.
   * 
   * @example
   * 0
   */
  filterInvalidIP?: number;
  /**
   * @remarks
   * The total number of elements on the page.
   * 
   * @example
   * 10
   */
  flowHijackJumpTimes?: number;
  /**
   * @remarks
   * The keyword that is used to identify hijacking. Asterisks (\\*) are allowed.
   * 
   * @example
   * aliyun
   */
  flowHijackLogo?: string;
  /**
   * @remarks
   * Specifies whether to ignore certificate errors during certificate verification in the SSL handshake process and continue browsing. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  ignoreCertificateError?: number;
  /**
   * @remarks
   * The monitoring timeout period. Unit: milliseconds. This parameter is optional. Default value: 20000.
   * 
   * @example
   * 20000
   */
  monitorTimeout?: number;
  /**
   * @remarks
   * Elements that are not included in the whitelist and appear on the page are tampered with. These elements can be pop-up ads, floating ads, and page redirection.
   * 
   * Format: \\<domain name>:\\<elements>. The elements can be wildcard masks. Separate multiple elements with vertical bars (|). Example: www.aliyun.com:|/cc/bb/a.gif|/vv/bb/cc.jpg. It indicates that all elements that belong to the www.aliyun.com domain name except the basic documents, /cc/bb/a.gif, and /vv/bb/cc.jpg are tampered with.
   * 
   * @example
   * www.aliyun.com:|/cc/bb/a.gif|/vv/bb/cc.jpg
   */
  pageTamper?: string;
  /**
   * @remarks
   * Specifies whether to continue browsing after redirection. Valid values: 0: no. 1: yes. Default value: 1.
   * 
   * @example
   * 1
   */
  redirection?: number;
  /**
   * @remarks
   * The time threshold that is used to define a slow element. Unit: milliseconds. Default value: 5000. Minimum value: 1. Maximum value: 300000.
   * 
   * @example
   * 5000
   */
  slowElementThreshold?: number;
  /**
   * @remarks
   * The URL of the website.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  targetUrl?: string;
  /**
   * @remarks
   * An arbitrary string in the source code of the page for verification. If the source code returned by the client contains a string that is in the blacklist, the 650 error code is reported, which indicates that the string fails to be verified. Separate multiple strings with vertical bars (|).
   * 
   * @example
   * error
   */
  verifyStringBlacklist?: string;
  /**
   * @remarks
   * An arbitrary string in the source code of the page for verification. If the source code returned by the client contains a string that is not in the whitelist, the 650 error code is reported, which indicates that the string fails to be verified. Separate multiple strings with vertical bars (|).
   * 
   * @example
   * success
   */
  verifyStringWhitelist?: string;
  /**
   * @remarks
   * The maximum waiting time. Unit: milliseconds. Default value: 5000. Minimum value: 5000. Maximum value: 300000.
   * 
   * @example
   * 5000
   */
  waitCompletionTime?: number;
  static names(): { [key: string]: string } {
    return {
      automaticScrolling: 'AutomaticScrolling',
      customHeader: 'CustomHeader',
      customHeaderContent: 'CustomHeaderContent',
      DNSHijackWhitelist: 'DNSHijackWhitelist',
      disableCache: 'DisableCache',
      disableCompression: 'DisableCompression',
      elementBlacklist: 'ElementBlacklist',
      filterInvalidIP: 'FilterInvalidIP',
      flowHijackJumpTimes: 'FlowHijackJumpTimes',
      flowHijackLogo: 'FlowHijackLogo',
      ignoreCertificateError: 'IgnoreCertificateError',
      monitorTimeout: 'MonitorTimeout',
      pageTamper: 'PageTamper',
      redirection: 'Redirection',
      slowElementThreshold: 'SlowElementThreshold',
      targetUrl: 'TargetUrl',
      verifyStringBlacklist: 'VerifyStringBlacklist',
      verifyStringWhitelist: 'VerifyStringWhitelist',
      waitCompletionTime: 'WaitCompletionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticScrolling: 'number',
      customHeader: 'number',
      customHeaderContent: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      DNSHijackWhitelist: 'string',
      disableCache: 'number',
      disableCompression: 'number',
      elementBlacklist: 'string',
      filterInvalidIP: 'number',
      flowHijackJumpTimes: 'number',
      flowHijackLogo: 'string',
      ignoreCertificateError: 'number',
      monitorTimeout: 'number',
      pageTamper: 'string',
      redirection: 'number',
      slowElementThreshold: 'number',
      targetUrl: 'string',
      verifyStringBlacklist: 'string',
      verifyStringWhitelist: 'string',
      waitCompletionTime: 'number',
    };
  }

  validate() {
    if(this.customHeaderContent) {
      $dara.Model.validateMap(this.customHeaderContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitorConf extends $dara.Model {
  /**
   * @remarks
   * The parameters of the HTTP(S) synthetic test.
   */
  apiHTTP?: CreateTimingSyntheticTaskRequestMonitorConfApiHTTP;
  /**
   * @remarks
   * The parameters of file downloading.
   */
  fileDownload?: CreateTimingSyntheticTaskRequestMonitorConfFileDownload;
  /**
   * @remarks
   * The parameters of the DNS synthetic test. This parameter is required if the TaskType parameter is set to 3.
   */
  netDNS?: CreateTimingSyntheticTaskRequestMonitorConfNetDNS;
  /**
   * @remarks
   * The parameters of the ICMP synthetic test. This parameter is required if the TaskType parameter is set to 1.
   */
  netICMP?: CreateTimingSyntheticTaskRequestMonitorConfNetICMP;
  /**
   * @remarks
   * The parameters of the TCP synthetic test. This parameter is required if the TaskType parameter is set to 2.
   */
  netTCP?: CreateTimingSyntheticTaskRequestMonitorConfNetTCP;
  /**
   * @remarks
   * The parameters of the streaming-media synthetic test.
   */
  stream?: CreateTimingSyntheticTaskRequestMonitorConfStream;
  /**
   * @remarks
   * The parameters of the website speed measurement.
   */
  website?: CreateTimingSyntheticTaskRequestMonitorConfWebsite;
  static names(): { [key: string]: string } {
    return {
      apiHTTP: 'ApiHTTP',
      fileDownload: 'FileDownload',
      netDNS: 'NetDNS',
      netICMP: 'NetICMP',
      netTCP: 'NetTCP',
      stream: 'Stream',
      website: 'Website',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHTTP: CreateTimingSyntheticTaskRequestMonitorConfApiHTTP,
      fileDownload: CreateTimingSyntheticTaskRequestMonitorConfFileDownload,
      netDNS: CreateTimingSyntheticTaskRequestMonitorConfNetDNS,
      netICMP: CreateTimingSyntheticTaskRequestMonitorConfNetICMP,
      netTCP: CreateTimingSyntheticTaskRequestMonitorConfNetTCP,
      stream: CreateTimingSyntheticTaskRequestMonitorConfStream,
      website: CreateTimingSyntheticTaskRequestMonitorConfWebsite,
    };
  }

  validate() {
    if(this.apiHTTP && typeof (this.apiHTTP as any).validate === 'function') {
      (this.apiHTTP as any).validate();
    }
    if(this.fileDownload && typeof (this.fileDownload as any).validate === 'function') {
      (this.fileDownload as any).validate();
    }
    if(this.netDNS && typeof (this.netDNS as any).validate === 'function') {
      (this.netDNS as any).validate();
    }
    if(this.netICMP && typeof (this.netICMP as any).validate === 'function') {
      (this.netICMP as any).validate();
    }
    if(this.netTCP && typeof (this.netTCP as any).validate === 'function') {
      (this.netTCP as any).validate();
    }
    if(this.stream && typeof (this.stream as any).validate === 'function') {
      (this.stream as any).validate();
    }
    if(this.website && typeof (this.website as any).validate === 'function') {
      (this.website as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestMonitors extends $dara.Model {
  /**
   * @remarks
   * The city code.
   * 
   * This parameter is required.
   * 
   * @example
   * 100023
   */
  cityCode?: string;
  /**
   * @remarks
   * The client type of the detection point. Valid values:
   * 
   * - 1: data center
   * - 2: Internet
   * - 3: mobile device
   * - 4: ECS instance
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @remarks
   * The carrier code.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  operatorCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      clientType: 'ClientType',
      operatorCode: 'OperatorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      clientType: 'number',
      operatorCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimingSyntheticTaskRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 500
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

export class CreateTimingSyntheticTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The list of assertions.
   */
  availableAssertions?: CreateTimingSyntheticTaskRequestAvailableAssertions[];
  /**
   * @remarks
   * The general settings.
   */
  commonSetting?: CreateTimingSyntheticTaskRequestCommonSetting;
  /**
   * @remarks
   * The general settings.
   */
  customPeriod?: CreateTimingSyntheticTaskRequestCustomPeriod;
  /**
   * @remarks
   * The detection frequency. Valid values: 1m, 5m, 10m, 15m, 20m, 30m, 1h, 2h, 3h, 4h, 6h, 8h, 12h, and 24h.
   * 
   * This parameter is required.
   * 
   * @example
   * 5m
   */
  frequency?: string;
  /**
   * @remarks
   * The detection point type. Valid values:
   * 
   * - 1: PC
   * - 2: mobile device
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  monitorCategory?: number;
  /**
   * @remarks
   * The monitoring configurations.
   * 
   * This parameter is required.
   */
  monitorConf?: CreateTimingSyntheticTaskRequestMonitorConf;
  /**
   * @remarks
   * The list of detection points.
   * 
   * This parameter is required.
   */
  monitors?: CreateTimingSyntheticTaskRequestMonitors[];
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * demo-test
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The parameter is optional.
   * 
   * @example
   * xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: CreateTimingSyntheticTaskRequestTags[];
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * 1: ICMP. 2: TCP. 3: DNS. 4: HTTP. 5: website speed measurement. 6: file download.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      availableAssertions: 'AvailableAssertions',
      commonSetting: 'CommonSetting',
      customPeriod: 'CustomPeriod',
      frequency: 'Frequency',
      monitorCategory: 'MonitorCategory',
      monitorConf: 'MonitorConf',
      monitors: 'Monitors',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAssertions: { 'type': 'array', 'itemType': CreateTimingSyntheticTaskRequestAvailableAssertions },
      commonSetting: CreateTimingSyntheticTaskRequestCommonSetting,
      customPeriod: CreateTimingSyntheticTaskRequestCustomPeriod,
      frequency: 'string',
      monitorCategory: 'number',
      monitorConf: CreateTimingSyntheticTaskRequestMonitorConf,
      monitors: { 'type': 'array', 'itemType': CreateTimingSyntheticTaskRequestMonitors },
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateTimingSyntheticTaskRequestTags },
      taskType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.availableAssertions)) {
      $dara.Model.validateArray(this.availableAssertions);
    }
    if(this.commonSetting && typeof (this.commonSetting as any).validate === 'function') {
      (this.commonSetting as any).validate();
    }
    if(this.customPeriod && typeof (this.customPeriod as any).validate === 'function') {
      (this.customPeriod as any).validate();
    }
    if(this.monitorConf && typeof (this.monitorConf as any).validate === 'function') {
      (this.monitorConf as any).validate();
    }
    if(Array.isArray(this.monitors)) {
      $dara.Model.validateArray(this.monitors);
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

