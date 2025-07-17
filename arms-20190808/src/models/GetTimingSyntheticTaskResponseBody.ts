// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTimingSyntheticTaskResponseBodyDataAvailableAssertions extends $dara.Model {
  /**
   * @remarks
   * The expected value.
   * 
   * @example
   * 100
   */
  expect?: string;
  /**
   * @remarks
   * The condition. gt: greater than. gte: greater than or equal to. lt: less than. lte: less than or equal to. eq: equal to. neq: not equal to. ctn: contain. nctn: does not contain. exist: exist. n_exist: does not exist. belong: belong to. n_belong: does not belong to. reg_match: regular expression.
   * 
   * @example
   * gt
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
   * @example
   * websiteTTLB
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

export class GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomHostHosts extends $dara.Model {
  /**
   * @remarks
   * The domain name.
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
   * *   1: IPv4
   * *   2: IPv6
   * 
   * @example
   * 0
   */
  ipType?: number;
  /**
   * @remarks
   * The list of IP addresses.
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

export class GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomHost extends $dara.Model {
  /**
   * @remarks
   * The list of hosts.
   */
  hosts?: GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomHostHosts[];
  /**
   * @remarks
   * The selection mode. 0: Random. 1: Polling.
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
      hosts: { 'type': 'array', 'itemType': GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomHostHosts },
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

export class GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomPrometheusSetting extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  prometheusClusterId?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * Reserved parameter
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

export class GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomVPCSetting extends $dara.Model {
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
   * Security group ID. This security group is where the dial-up client is located. The security group limits the inbound and outbound rules of the dial-up client in the VPC. You need to set the inbound rules of the security group where your VPC is located to allow the security group where the dial-up client is located to access. Otherwise, the dial-up client cannot smoothly access the resources in your VPC.
   * 
   * @example
   * sg-xxxxxxx
   */
  secureGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1i0xezblf1yrz4xxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID.
   * 
   * @example
   * vpc-2zexy5nae9q2otaxxxx
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

export class GetTimingSyntheticTaskResponseBodyDataCommonSetting extends $dara.Model {
  /**
   * @remarks
   * The custom host.
   */
  customHost?: GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomHost;
  /**
   * @remarks
   * The reserved parameters.
   */
  customPrometheusSetting?: GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomPrometheusSetting;
  /**
   * @remarks
   * User VPC information. If the dial-up is to the Alibaba Cloud intranet address, you need to configure the VPC information.
   */
  customVPCSetting?: GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomVPCSetting;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   0: A version is automatically selected.
   * *   1: IPv4
   * *   2: IPv6
   * 
   * @example
   * 0
   */
  ipType?: number;
  /**
   * @remarks
   * Whether to enable tracing.
   * 
   * @example
   * true
   */
  isOpenTrace?: boolean;
  /**
   * @remarks
   * Specifies whether to evenly distribute monitoring samples. Valid values:
   * 
   * *   0: No
   * *   1: Yes
   * 
   * @example
   * 0
   */
  monitorSamples?: number;
  /**
   * @remarks
   * Tracing client type:
   * 
   * - 0: ARMS Agent
   * - 1: Open Telemetry
   * - 2: Jaeger
   * 
   * @example
   * 1
   */
  traceClientType?: number;
  /**
   * @remarks
   * Tracing data reporting region.
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
      customHost: GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomHost,
      customPrometheusSetting: GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomPrometheusSetting,
      customVPCSetting: GetTimingSyntheticTaskResponseBodyDataCommonSettingCustomVPCSetting,
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

export class GetTimingSyntheticTaskResponseBodyDataCustomPeriod extends $dara.Model {
  /**
   * @remarks
   * The hour at which the test ends. Valid values: 0 to 24.
   * 
   * @example
   * 22
   */
  endHour?: number;
  /**
   * @remarks
   * The hour at which the test starts. Valid values: 0 to 24.
   * 
   * @example
   * 14
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

export class GetTimingSyntheticTaskResponseBodyDataMonitorConfApiHTTPRequestBody extends $dara.Model {
  /**
   * @remarks
   * The content of the request body. Format: JSON string. The parameter is required if the type parameter is set to text/plain, application/json, application/xml, or text/html. Format: JSON string.
   * 
   * @example
   * text/plain
   */
  content?: string;
  /**
   * @remarks
   * The type of the request body. Valid values: text/plain, application/json, application/x-www-form-urlencoded, multipart/form-data, application/xml, and text/html.
   * 
   * @example
   * multipart/form-data
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

export class GetTimingSyntheticTaskResponseBodyDataMonitorConfApiHTTP extends $dara.Model {
  /**
   * @remarks
   * Whether to verify the certificate. The default is no.
   * 
   * @example
   * false
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
   * The request method.
   * 
   * *   POST
   * *   GET
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The ALPN protocol version. You can configure this parameter when you perform an HTTPS synthetic test on a WAP mobile client. Valid values:
   * 
   * 0: default
   * 
   * 1: HTTP/1.1
   * 
   * 2: HTTP/2
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
  requestBody?: GetTimingSyntheticTaskResponseBodyDataMonitorConfApiHTTPRequestBody;
  /**
   * @remarks
   * The HTTP request header.
   */
  requestHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The URL for synthetic monitoring.
   * 
   * @example
   * http://127.0.0.1:8090/api/list
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
      requestBody: GetTimingSyntheticTaskResponseBodyDataMonitorConfApiHTTPRequestBody,
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

export class GetTimingSyntheticTaskResponseBodyDataMonitorConfFileDownload extends $dara.Model {
  /**
   * @remarks
   * The connection timeout period. Unit: milliseconds. Minimum value: 1000. Maximum value: 120000. Default value: 5000.
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
   * The kernel type.
   * 
   * *   1: curl
   * *   0: WinInet
   * 
   * @example
   * 0
   */
  downloadKernel?: number;
  /**
   * @remarks
   * Specifies whether to ignore CA certificate authentication errors. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 0
   */
  ignoreCertificateAuthError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate revocation errors. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 0
   */
  ignoreCertificateCanceledError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate invalidity. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 0
   */
  ignoreCertificateOutOfDateError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate status errors. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 0
   */
  ignoreCertificateStatusError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate incredibility. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 0
   */
  ignoreCertificateUntrustworthyError?: number;
  /**
   * @remarks
   * Specifies whether to ignore certificate usage errors. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 0
   */
  ignoreCertificateUsingError?: number;
  /**
   * @remarks
   * Specifies whether to ignore host invalidity. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 0
   */
  ignoreInvalidHostError?: number;
  /**
   * @remarks
   * The monitoring timeout period. Unit: milliseconds. Minimum value: 1000. Maximum value: 120000. Default value: 60000.
   * 
   * @example
   * 6000
   */
  monitorTimeout?: number;
  /**
   * @remarks
   * The QUIC protocol type.
   * 
   * *   1: http1
   * *   2: http2
   * *   3: http3
   * 
   * @example
   * 1
   */
  quickProtocol?: number;
  /**
   * @remarks
   * Specifies whether to support redirection. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 0
   */
  redirection?: number;
  /**
   * @remarks
   * The file download URL.
   * 
   * @example
   * https://********
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
   * Verify keywords.
   * 
   * @example
   * success
   */
  validateKeywords?: string;
  /**
   * @remarks
   * Verification method.
   * 
   * - 0: No verification
   * - 1: Verification string
   * - 2: MD5 verification
   * 
   * @example
   * 0
   */
  verifyWay?: number;
  /**
   * @remarks
   * DNS hijacking whitelist. Matching rules support IP, IP wildcard, subnet mask and CNAME. You can fill in multiple matching rules, and multiple matching rules are separated by vertical bars (|). For example: `www.aliyun.com:203.0.3.55|203.3.44.67`, which means that all IPs except 203.0.3.55 and 203.3.44.67 under the www.aliyun.com domain name are hijacked.
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

export class GetTimingSyntheticTaskResponseBodyDataMonitorConfNetDNS extends $dara.Model {
  /**
   * @remarks
   * The IP version of the DNS server. 0: IPv4. 1: IPv6. 2: A version is automatically selected. Default value: 0.
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
   * The DNS query. 0: recursive, 1: iterative. Default value: 0.
   * 
   * @example
   * 0
   */
  queryMethod?: number;
  /**
   * @remarks
   * The destination domain name.
   * 
   * @example
   * www.aliyun.com
   */
  targetUrl?: string;
  /**
   * @remarks
   * The timeout period for the DNS synthetic test. Unit: milliseconds. The minimum value is 1000 and the maximum value is 45000. Default value: 5000.
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

export class GetTimingSyntheticTaskResponseBodyDataMonitorConfNetICMP extends $dara.Model {
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
   * The size of each ICMP packet. Unit: bytes. Valid values: 32, 64, 128, 256, 512, 1024.
   * 
   * @example
   * 1024
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
   * The destination host IP address or domain name
   * 
   * @example
   * www.aliyun.com
   */
  targetUrl?: string;
  /**
   * @remarks
   * The timeout period for the TCP synthetic test. Unit: milliseconds. Minimum value: 1000. Maximum value: 300000. Default value: 20000.
   * 
   * @example
   * 2000
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
   * The maximum number of hops for tracert. Minimum value: 1. Maximum value: 128. Default value: 64.
   * 
   * @example
   * 64
   */
  tracertNumMax?: number;
  /**
   * @remarks
   * The timeout period of tracert. Unit: milliseconds. Minimum value: 1000. Maximum value: 300000. Default value: 60000.
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

export class GetTimingSyntheticTaskResponseBodyDataMonitorConfNetTCP extends $dara.Model {
  /**
   * @remarks
   * The number of TCP connections that are established in a test. Minimum value: 1. Maximum value: 16. Default value: 4.
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
   * The destination host IP address.
   * 
   * @example
   * 127.0.0.1:8888
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
   * The maximum number of hops for tracert. Minimum value: 1. Maximum value: 128. Default value: 20.
   * 
   * @example
   * 20
   */
  tracertNumMax?: number;
  /**
   * @remarks
   * The timeout period of tracert. Unit: milliseconds. Minimum value: 1000. Maximum value: 300000. Default value: 60000.
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

export class GetTimingSyntheticTaskResponseBodyDataMonitorConfStream extends $dara.Model {
  /**
   * @remarks
   * Custom header, JSON Map format.
   */
  customHeaderContent?: { [key: string]: string };
  /**
   * @remarks
   * Player, default is 12 if not specified.
   * 
   * - 12: VLC
   * - 2: Flash Player
   * 
   * @example
   * 12
   */
  playerType?: number;
  /**
   * @remarks
   * Resource address type:
   * 
   * - 1: Resource address.
   * - 0: Page address. If not passed, the default value is 0.
   * 
   * @example
   * 0
   */
  streamAddressType?: number;
  /**
   * @remarks
   * Monitoring duration, in seconds, supports up to 60 seconds. If not specified, the default value is 60 seconds.
   * 
   * @example
   * 30
   */
  streamMonitorTimeout?: number;
  /**
   * @remarks
   * Audio and video flag:
   * 
   * - 0: video
   * - 1: audio
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * Streaming media resource address.
   * 
   * @example
   * http://www.aliyun.com/stream/test.mp4
   */
  targetUrl?: string;
  /**
   * @remarks
   * DNS hijacking whitelist. Matching rules support IP, IP wildcard, subnet mask and CNAME. You can fill in multiple matching rules, and multiple matching rules are separated by vertical bars (|). For example: `www.aliyun.com:203.0.3.55|203.3.44.67`, which means that all IPs except 203.0.3.55 and 203.3.44.67 under the www.aliyun.com domain name are hijacked.
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

export class GetTimingSyntheticTaskResponseBodyDataMonitorConfWebsite extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically scroll up and down the screen to load a page. 0: No. 1: Yes. Default value: 0.
   * 
   * @example
   * 0
   */
  automaticScrolling?: number;
  /**
   * @remarks
   * Specifies whether to create a custom header. 0: No. 1: The first packet is modified. 2: All packets are modified. Default value: 0.
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
   * When resolving a domain name (such as www.aliyun.com), if the resolved IP address or CNAME is not in the DNS hijacking whitelist, the user will fail to access or return a non-Aliyun target IP; if the IP or CNAME in the resolution result is in the DNS whitelist, it will be deemed that no DNS hijacking has occurred.
   * 
   * Fill in the format: `domain name: matching rule`. Matching rules support IP, IP wildcard, subnet mask and CNAME. You can fill in multiple matching rules, and multiple matching rules are separated by vertical bars (|). 
   * 
   * For example: `www.aliyun.com:203.0.3.55|203.3.44.67`, which means that all IPs except 203.0.3.55 and 203.3.44.67 under the www.aliyun.com domain name are hijacked.
   * 
   * @example
   * www.aliyun.com:203.0.3.55|203.3.44.67
   */
  DNSHijackWhitelist?: string;
  /**
   * @remarks
   * Specifies whether to disable the cache. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 1
   */
  disableCache?: number;
  /**
   * @remarks
   * Specifies whether to accept compressed files based on the HTTP Accept-Encoding request header. 0: No. 1: Yes. Default value: 0.
   * 
   * @example
   * 0
   */
  disableCompression?: number;
  /**
   * @remarks
   * If an element configured in the element blacklist appears during page loading, no request will be made to load the element.
   * 
   * @example
   * www.example.com/a.jpg
   */
  elementBlacklist?: string;
  /**
   * @remarks
   * Specifies whether to exclude invalid IP addresses.
   * 
   * *   1: No
   * *   0: Yes
   * 
   * @example
   * 0
   */
  filterInvalidIP?: number;
  /**
   * @remarks
   * Identify elements: Set the total number of elements to browse the page.
   * 
   * @example
   * 0
   */
  flowHijackJumpTimes?: number;
  /**
   * @remarks
   * Hijacking flag: Set the key information for matching. Fill in the hijacking judgment keyword or key element, and asterisks (*) are allowed.
   * 
   * @example
   * aliyun
   */
  flowHijackLogo?: string;
  /**
   * @remarks
   * Specifies whether to ignore SSL certificate errors during browsing. 0: No. 1: Yes. Default value: 1.
   * 
   * @example
   * 0
   */
  ignoreCertificateError?: number;
  /**
   * @remarks
   * The monitoring timeout period. Unit: milliseconds. Default value: 20000. Minimum value: 5000. Maximum value: 300000.
   * 
   * @example
   * 20000
   */
  monitorTimeout?: number;
  /**
   * @remarks
   * If any element other than the domain name setting appears on the monitoring page, it means that the page has been tampered. Common manifestations include pop-up ads, floating ads, jumps, etc.
   * 
   * Fill in the format: `domain name: element`. Elements support wildcards, and multiple elements can be filled in. Multiple elements are separated by vertical bars (|). For example: `www.aliyun.com:|/cc/bb/a.gif|/vv/bb/cc.jpg`, which means that all elements except the basic document, /cc/bb/a.gif and /vv/bb/cc.jpg under the www.aliyun.com domain name are considered to be tampered with.
   * 
   * @example
   * www.aliyun.com:|/cc/bb/a.gif|/vv/bb/cc.jpg
   */
  pageTamper?: string;
  /**
   * @remarks
   * Specifies whether to continue browsing after redirection. 0: No, 1:Yes. Default value: 1.
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
   * The destination URL.
   * 
   * @example
   * http://www.aliyun.com
   */
  targetUrl?: string;
  /**
   * @remarks
   * The verification string is an arbitrary string in the source code of the monitoring page. If the source code returned by the client contains any string in the blacklist, an error 650 &quot;Verification string failed&quot; will be reported. Multiple strings are separated by vertical bars (|).
   * 
   * @example
   * error
   */
  verifyStringBlacklist?: string;
  /**
   * @remarks
   * The verification string is an arbitrary string in the source code of the monitoring page. The source code returned by the client must contain all the strings in the whitelist, otherwise an error 650 &quot;Verification string failed&quot; will be reported. Multiple strings are separated by a vertical bar (|).
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

export class GetTimingSyntheticTaskResponseBodyDataMonitorConf extends $dara.Model {
  /**
   * @remarks
   * The parameters of the HTTP(S) synthetic test.
   */
  apiHTTP?: GetTimingSyntheticTaskResponseBodyDataMonitorConfApiHTTP;
  /**
   * @remarks
   * The file download parameters.
   */
  fileDownload?: GetTimingSyntheticTaskResponseBodyDataMonitorConfFileDownload;
  /**
   * @remarks
   * The DNS synthetic test parameters. This parameter is required if the TaskType parameter is set to 3.
   */
  netDNS?: GetTimingSyntheticTaskResponseBodyDataMonitorConfNetDNS;
  /**
   * @remarks
   * The ICMP synthetic test parameters. This parameter is required if the TaskType parameter is set to 1.
   */
  netICMP?: GetTimingSyntheticTaskResponseBodyDataMonitorConfNetICMP;
  /**
   * @remarks
   * The TCP synthetic tests parameters. This parameter is required if the TaskType parameter is set to 2.
   */
  netTCP?: GetTimingSyntheticTaskResponseBodyDataMonitorConfNetTCP;
  /**
   * @remarks
   * Streaming media dial test configuration.
   */
  stream?: GetTimingSyntheticTaskResponseBodyDataMonitorConfStream;
  /**
   * @remarks
   * The website-speed measurement parameters.
   */
  website?: GetTimingSyntheticTaskResponseBodyDataMonitorConfWebsite;
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
      apiHTTP: GetTimingSyntheticTaskResponseBodyDataMonitorConfApiHTTP,
      fileDownload: GetTimingSyntheticTaskResponseBodyDataMonitorConfFileDownload,
      netDNS: GetTimingSyntheticTaskResponseBodyDataMonitorConfNetDNS,
      netICMP: GetTimingSyntheticTaskResponseBodyDataMonitorConfNetICMP,
      netTCP: GetTimingSyntheticTaskResponseBodyDataMonitorConfNetTCP,
      stream: GetTimingSyntheticTaskResponseBodyDataMonitorConfStream,
      website: GetTimingSyntheticTaskResponseBodyDataMonitorConfWebsite,
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

export class GetTimingSyntheticTaskResponseBodyDataMonitors extends $dara.Model {
  /**
   * @remarks
   * The city code.
   * 
   * @example
   * 110100
   */
  cityCode?: string;
  /**
   * @remarks
   * The client type of the monitoring point. Valid values: 1: data center. 2: Internet. 3: mobile device. 4: ECS instance.
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @remarks
   * The carrier code.
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

export class GetTimingSyntheticTaskResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * user1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * myweb
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

export class GetTimingSyntheticTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of assertions.
   */
  availableAssertions?: GetTimingSyntheticTaskResponseBodyDataAvailableAssertions[];
  /**
   * @remarks
   * The general settings.
   */
  commonSetting?: GetTimingSyntheticTaskResponseBodyDataCommonSetting;
  /**
   * @remarks
   * The custom cycle.
   */
  customPeriod?: GetTimingSyntheticTaskResponseBodyDataCustomPeriod;
  /**
   * @remarks
   * The detection frequency. Valid values: 1m, 5m, 10m, 15m, 20m, 30m, 1h, 2h, 3h, 4h, 6h, 8h, 12h, and 24h.
   * 
   * @example
   * 5m
   */
  frequency?: string;
  /**
   * @remarks
   * The detection point type. 1: PC. 2: mobile device.
   * 
   * @example
   * 1
   */
  monitorCategory?: number;
  /**
   * @remarks
   * The monitoring configurations.
   */
  monitorConf?: GetTimingSyntheticTaskResponseBodyDataMonitorConf;
  /**
   * @remarks
   * The list of monitoring points.
   */
  monitors?: GetTimingSyntheticTaskResponseBodyDataMonitors[];
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * AlibabaCloud DNS Task
   */
  name?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * CREATING: The task is being created. RUNNING: The task is running. PARTIAL_RUNNING: The task is partially running. STOP: The task is stopped. LIMIT_STOP: The task is stopped due to quota insufficiency. EXCEPTION: The task is abnormal. DELETE: The task is deleted. DELETE_EXCEPTION: The task failed to be deleted.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The tag.
   */
  tags?: GetTimingSyntheticTaskResponseBodyDataTags[];
  /**
   * @remarks
   * The ID of the synthetic monitoring task.
   * 
   * @example
   * 5308a2691f59422c8c3b7aeccec9cd3b
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * ICMP TCP DNS HTTP Website speed measurement File download
   * 
   * @example
   * 5
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
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAssertions: { 'type': 'array', 'itemType': GetTimingSyntheticTaskResponseBodyDataAvailableAssertions },
      commonSetting: GetTimingSyntheticTaskResponseBodyDataCommonSetting,
      customPeriod: GetTimingSyntheticTaskResponseBodyDataCustomPeriod,
      frequency: 'string',
      monitorCategory: 'number',
      monitorConf: GetTimingSyntheticTaskResponseBodyDataMonitorConf,
      monitors: { 'type': 'array', 'itemType': GetTimingSyntheticTaskResponseBodyDataMonitors },
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetTimingSyntheticTaskResponseBodyDataTags },
      taskId: 'string',
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

export class GetTimingSyntheticTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: GetTimingSyntheticTaskResponseBodyData;
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
   * E13430A6-57A9-56E9-9D8D-28FE8DEBCA40
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTimingSyntheticTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

