// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSyntheticTaskRequestCommonParamAlertList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the condition must be met.
   * 
   * @example
   * true
   */
  isCritical?: number;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * For network synthetic monitoring, use the following names:
   * 
   * *   Latency: PING_SET
   * *   Packet loss rate: PING_LOST_RATE
   * *   Hijacking: HIJACKPER
   * 
   * @example
   * PING_SET
   */
  name?: string;
  /**
   * @remarks
   * Specifies how the condition is evaluated. Valid values:
   * 
   * *   1: greater than
   * *   0: less than
   * 
   * @example
   * 1
   */
  symbols?: number;
  static names(): { [key: string]: string } {
    return {
      isCritical: 'IsCritical',
      name: 'Name',
      symbols: 'Symbols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isCritical: 'number',
      name: 'string',
      symbols: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequestCommonParam extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to create an alert rule.
   * 
   * *   1: creates an alert.
   * *   0: does not create an alert.
   * 
   * @example
   * 1
   */
  alarmFlag?: string;
  /**
   * @remarks
   * The alert parameters.
   */
  alertList?: CreateSyntheticTaskRequestCommonParamAlertList[];
  /**
   * @remarks
   * The ID of the alert recipient. Separate multiple recipients with commas (,).
   * 
   * @example
   * 123
   */
  alertNotifierId?: string;
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * @example
   * 1234
   */
  alertPolicyId?: string;
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
   * The time when execution starts.
   * 
   * @example
   * 2022-07-20 10
   */
  startExecutionTime?: number;
  static names(): { [key: string]: string } {
    return {
      alarmFlag: 'AlarmFlag',
      alertList: 'AlertList',
      alertNotifierId: 'AlertNotifierId',
      alertPolicyId: 'AlertPolicyId',
      monitorSamples: 'MonitorSamples',
      startExecutionTime: 'StartExecutionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmFlag: 'string',
      alertList: { 'type': 'array', 'itemType': CreateSyntheticTaskRequestCommonParamAlertList },
      alertNotifierId: 'string',
      alertPolicyId: 'string',
      monitorSamples: 'number',
      startExecutionTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertList)) {
      $dara.Model.validateArray(this.alertList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequestDownload extends $dara.Model {
  /**
   * @remarks
   * The connection timeout period.
   * 
   * @example
   * 200
   */
  connectionTimeout?: number;
  /**
   * @remarks
   * The items to be ignored in a certificate error. Pass the values of the check boxes that are separated with vertical bars (|).
   * 
   * @example
   * Host:www.example.com|Referer:www.example.com
   */
  downloadCustomHeaderContent?: string;
  /**
   * @remarks
   * The custom host mode.
   * 
   * *   1: round robin
   * *   0: random
   * 
   * @example
   * 1
   */
  downloadCustomHost?: number;
  /**
   * @remarks
   * The custom host IP address. You can enter multiple IP addresses. Separate the IP addresses with commas (,).
   * 
   * @example
   * ipv4:192.168.2.1,192.168.2.5:img.a.com|192.168.2.1[8080]:img.a.com
   */
  downloadCustomHostIp?: string;
  /**
   * @remarks
   * The items to be ignored in a certificate error. Pass the values of the check boxes that are separated with vertical bars (|).
   * 
   * @example
   * 1|2|4
   */
  downloadIgnoreCertificateError?: string;
  /**
   * @remarks
   * The kernel type.
   * 
   * *   1: curl
   * *   0: WinInet
   * 
   * @example
   * 1
   */
  downloadKernel?: number;
  /**
   * @remarks
   * Specifies whether to support redirection.
   * 
   * @example
   * 0
   */
  downloadRedirection?: number;
  /**
   * @remarks
   * The size of the download file. Unit: KB.
   * 
   * @example
   * 10240
   */
  downloadTransmissionSize?: number;
  /**
   * @remarks
   * The monitoring duration.
   * 
   * @example
   * 30
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
  quickProtocol?: string;
  /**
   * @remarks
   * The keyword that is used in verification.
   * 
   * @example
   * keyword
   */
  validateKeywords?: string;
  /**
   * @remarks
   * The verification method.
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
   * The whitelist for DNS hijacking.
   * 
   * @example
   * [{\\"src\\":\\"211.154.166.174\\"}]
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      connectionTimeout: 'ConnectionTimeout',
      downloadCustomHeaderContent: 'DownloadCustomHeaderContent',
      downloadCustomHost: 'DownloadCustomHost',
      downloadCustomHostIp: 'DownloadCustomHostIp',
      downloadIgnoreCertificateError: 'DownloadIgnoreCertificateError',
      downloadKernel: 'DownloadKernel',
      downloadRedirection: 'DownloadRedirection',
      downloadTransmissionSize: 'DownloadTransmissionSize',
      monitorTimeout: 'MonitorTimeout',
      quickProtocol: 'QuickProtocol',
      validateKeywords: 'ValidateKeywords',
      verifyWay: 'VerifyWay',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionTimeout: 'number',
      downloadCustomHeaderContent: 'string',
      downloadCustomHost: 'number',
      downloadCustomHostIp: 'string',
      downloadIgnoreCertificateError: 'string',
      downloadKernel: 'number',
      downloadRedirection: 'number',
      downloadTransmissionSize: 'number',
      monitorTimeout: 'number',
      quickProtocol: 'string',
      validateKeywords: 'string',
      verifyWay: 'number',
      whiteList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequestExtendInterval extends $dara.Model {
  /**
   * @remarks
   * The day on which synthetic monitoring is performed.
   */
  days?: number[];
  /**
   * @remarks
   * The hour at which synthetic monitoring ends.
   * 
   * @example
   * 23
   */
  endHour?: number;
  /**
   * @remarks
   * The minute at which synthetic monitoring ends.
   * 
   * @example
   * 00
   */
  endMinute?: number;
  /**
   * @remarks
   * The time when synthetic monitoring ends. The format is `yyyy-MM-dd HH`.
   * 
   * @example
   * 2022-08-20 10
   */
  endTime?: string;
  /**
   * @remarks
   * The hour at which synthetic monitoring starts.
   * 
   * @example
   * 00
   */
  startHour?: number;
  /**
   * @remarks
   * The minute at which synthetic monitoring starts.
   * 
   * @example
   * 00
   */
  startMinute?: number;
  /**
   * @remarks
   * The time when synthetic monitoring starts. The format is `yyyy-MM-dd HH`.
   * 
   * @example
   * 2022-07-20 10
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      endHour: 'EndHour',
      endMinute: 'EndMinute',
      endTime: 'EndTime',
      startHour: 'StartHour',
      startMinute: 'StartMinute',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'number' },
      endHour: 'number',
      endMinute: 'number',
      endTime: 'string',
      startHour: 'number',
      startMinute: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.days)) {
      $dara.Model.validateArray(this.days);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequestMonitorList extends $dara.Model {
  /**
   * @remarks
   * The ID of the city to which the monitoring point belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1100101
   */
  cityCode?: number;
  /**
   * @remarks
   * The carrier type:
   * 
   * *   IDC
   * *   LastMilie
   * 
   * This parameter is required.
   * 
   * @example
   * IDC
   */
  monitorType?: number;
  /**
   * @remarks
   * The ID of the carrier.
   * 
   * This parameter is required.
   * 
   * @example
   * 18
   */
  netServiceId?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      monitorType: 'MonitorType',
      netServiceId: 'NetServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'number',
      monitorType: 'number',
      netServiceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequestNavigation extends $dara.Model {
  /**
   * @remarks
   * The whitelist for DNS hijacking.
   * 
   * @example
   * www.aliyun.com:202.0.3.55|203.3.44.67
   */
  DNSHijackWhiteList?: string;
  /**
   * @remarks
   * The element blacklist.
   * 
   * @example
   * *.a.com
   */
  elementBlacklist?: string;
  /**
   * @remarks
   * Specifies whether to execute ActiveX.
   * 
   * *   3: yes
   * *   0: no
   * 
   * >  This parameter is supported only by IE Full Elements.
   * 
   * @example
   * 3
   */
  executeActiveX?: number;
  /**
   * @remarks
   * Specifies whether to run applets.
   * 
   * *   1: yes
   * *   0: no
   * 
   * >  This parameter is supported only by IE Full Elements.
   * 
   * @example
   * 1
   */
  executeApplication?: number;
  /**
   * @remarks
   * Specifies whether to execute scripts.
   * 
   * *   1: yes
   * *   0: no
   * 
   * >  This parameter is supported only by IE Full Elements.
   * 
   * @example
   * 1
   */
  executeScript?: number;
  /**
   * @remarks
   * Specifies whether to filter invalid IP addresses.
   * 
   * *   1: no
   * *   0: yes
   * 
   * @example
   * 1
   */
  filterInvalidIP?: number;
  /**
   * @remarks
   * The element that is used in DNS hijacking.
   * 
   * @example
   * 50
   */
  flowHijackJumpTimes?: number;
  /**
   * @remarks
   * The tag that is used in DNS hijacking.
   * 
   * @example
   * test
   */
  flowHijackLogo?: string;
  /**
   * @remarks
   * The timeout period of monitoring. Unit: seconds.
   * 
   * @example
   * 20
   */
  monitorTimeout?: string;
  /**
   * @remarks
   * Specifies whether to automatically scroll up and down the screen to load a page.
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 1
   */
  navAutomaticScrolling?: string;
  /**
   * @remarks
   * The method that is used to customize the header. Valid values:
   * 
   * *   0: disables the customer header.
   * *   1: modifies the first package.
   * *   2: modifies all packages.
   * 
   * @example
   * 0
   */
  navCustomHeader?: string;
  /**
   * @remarks
   * The format of the custom header. You can specify multiple fields. Separate the fields with vertical bars (|).
   * 
   * @example
   * Host:www.example.com|Referer:www.example.com
   */
  navCustomHeaderContent?: string;
  /**
   * @remarks
   * The custom host mode.
   * 
   * *   1: round robin
   * *   0: random
   * 
   * @example
   * 1
   */
  navCustomHost?: number;
  /**
   * @remarks
   * The custom host IP address. You can enter multiple IP addresses. Separate the IP addresses with commas (,).
   * 
   * @example
   * ipv4:192.168.2.1,192.168.2.5:img.a.com|192.168.2.1[8080]:img.a.com
   */
  navCustomHostIp?: string;
  /**
   * @remarks
   * Specifies whether to disable caching.
   * 
   * *   1: disable
   * *   0: enable
   * 
   * @example
   * 1
   */
  navDisableCache?: number;
  /**
   * @remarks
   * Specifies whether to enable the feature of using the Accept-Encoding field to determine whether to accept compressed files.
   * 
   * *   1: disable
   * *   0: enable
   * 
   * @example
   * 1
   */
  navDisableCompression?: string;
  /**
   * @remarks
   * Specifies whether to ignore certificate errors during certificate verification in the SSL handshake and continue browsing.
   * 
   * *   1: ignore
   * *   0: does not ignore
   * 
   * @example
   * 1
   */
  navIgnoreCertificateError?: number;
  /**
   * @remarks
   * Specifies whether to continue browsing after a redirection occurs.
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 1
   */
  navRedirection?: number;
  /**
   * @remarks
   * Specifies whether to return the elements on the page.
   * 
   * *   1: no. Returns the basic document data.
   * *   2: yes. Returns all document data.
   * 
   * @example
   * 2
   */
  navReturnElement?: number;
  /**
   * @remarks
   * The web page defacement.
   * 
   * @example
   * www.example.com:202.0.3.55|203.3.44.67
   */
  pageTamper?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * ssh
   */
  processName?: string;
  /**
   * @remarks
   * The domain name of the QUIC request element.
   * 
   * >  This parameter is supported by all elements of only Chrome
   * 
   * @example
   * www.example.com
   */
  QUICDomain?: string;
  /**
   * @remarks
   * The Quick UDP Internet Connections (QUIC) protocol version. Default value: 0. Valid values:
   * 
   * *
   * *   35
   * *   39
   * *   43
   * *   44
   * 
   * >  This parameter is supported by all elements of only Chrome
   * 
   * @example
   * 0
   */
  QUICVersion?: number;
  /**
   * @remarks
   * Specifies whether to return the request header.
   * 
   * *   0: does not return the response header.
   * *   1: returns the basic document header.
   * *   2: returns all headers.
   * 
   * @example
   * 0
   */
  requestHeader?: number;
  /**
   * @remarks
   * The method that is used to return the response header. Valid values:
   * 
   * *   0: does not return the response header.
   * *   1: returns the basic document header.
   * *   2: returns all headers.
   * 
   * @example
   * 0
   */
  responseHeader?: number;
  /**
   * @remarks
   * The time threshold that is used to define a slow element. Unit: seconds.
   * 
   * @example
   * 5
   */
  slowElementThreshold?: number;
  /**
   * @remarks
   * The blacklist for string verification.
   * 
   * @example
   * Regex:*.example|expalme|
   */
  verifyStringBlacklist?: string;
  /**
   * @remarks
   * The whitelist for string verification.
   * 
   * @example
   * Regex:*.example|expalme|
   */
  verifyStringWhiteList?: string;
  /**
   * @remarks
   * The timeout period of waiting for the monitoring to complete.
   * 
   * @example
   * 15
   */
  waitCompletionTime?: number;
  static names(): { [key: string]: string } {
    return {
      DNSHijackWhiteList: 'DNSHijackWhiteList',
      elementBlacklist: 'ElementBlacklist',
      executeActiveX: 'ExecuteActiveX',
      executeApplication: 'ExecuteApplication',
      executeScript: 'ExecuteScript',
      filterInvalidIP: 'FilterInvalidIP',
      flowHijackJumpTimes: 'FlowHijackJumpTimes',
      flowHijackLogo: 'FlowHijackLogo',
      monitorTimeout: 'MonitorTimeout',
      navAutomaticScrolling: 'NavAutomaticScrolling',
      navCustomHeader: 'NavCustomHeader',
      navCustomHeaderContent: 'NavCustomHeaderContent',
      navCustomHost: 'NavCustomHost',
      navCustomHostIp: 'NavCustomHostIp',
      navDisableCache: 'NavDisableCache',
      navDisableCompression: 'NavDisableCompression',
      navIgnoreCertificateError: 'NavIgnoreCertificateError',
      navRedirection: 'NavRedirection',
      navReturnElement: 'NavReturnElement',
      pageTamper: 'PageTamper',
      processName: 'ProcessName',
      QUICDomain: 'QUICDomain',
      QUICVersion: 'QUICVersion',
      requestHeader: 'RequestHeader',
      responseHeader: 'ResponseHeader',
      slowElementThreshold: 'SlowElementThreshold',
      verifyStringBlacklist: 'VerifyStringBlacklist',
      verifyStringWhiteList: 'VerifyStringWhiteList',
      waitCompletionTime: 'WaitCompletionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNSHijackWhiteList: 'string',
      elementBlacklist: 'string',
      executeActiveX: 'number',
      executeApplication: 'number',
      executeScript: 'number',
      filterInvalidIP: 'number',
      flowHijackJumpTimes: 'number',
      flowHijackLogo: 'string',
      monitorTimeout: 'string',
      navAutomaticScrolling: 'string',
      navCustomHeader: 'string',
      navCustomHeaderContent: 'string',
      navCustomHost: 'number',
      navCustomHostIp: 'string',
      navDisableCache: 'number',
      navDisableCompression: 'string',
      navIgnoreCertificateError: 'number',
      navRedirection: 'number',
      navReturnElement: 'number',
      pageTamper: 'string',
      processName: 'string',
      QUICDomain: 'string',
      QUICVersion: 'number',
      requestHeader: 'number',
      responseHeader: 'number',
      slowElementThreshold: 'number',
      verifyStringBlacklist: 'string',
      verifyStringWhiteList: 'string',
      waitCompletionTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequestNet extends $dara.Model {
  /**
   * @remarks
   * The DNS server.
   * 
   * @example
   * 114.114.XX.XX
   */
  netDNSNs?: string;
  /**
   * @remarks
   * The DNS query method. Valid values:
   * 
   * *   1: recursion
   * *   2: iteration
   * 
   * @example
   * 1
   */
  netDNSQueryMethod?: number;
  /**
   * @remarks
   * The IP address type of the DNS server.
   * 
   * *   0: IPv4
   * *   1: IPv6
   * *   2: an automatic IP address
   * 
   * @example
   * 0
   */
  netDNSServer?: number;
  /**
   * @remarks
   * Specifies whether to enable domain name system (DNS) monitoring.
   * 
   * *   0: Off.
   * *   1: On. You must set DNS parameters if you want to enable DNS monitoring.
   * 
   * @example
   * 1
   */
  netDNSSwitch?: number;
  /**
   * @remarks
   * The timeout period of DNS monitoring. Default value: 5 seconds. Valid values: 0 to 45 seconds.
   * 
   * @example
   * 5
   */
  netDNSTimeout?: number;
  /**
   * @remarks
   * Specifies whether to display the data in the DIG format. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 0
   */
  netDigSwitch?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   0: ICMP
   * *   1: TCP
   * 
   * @example
   * 0
   */
  netICMPActive?: number;
  /**
   * @remarks
   * Specifies whether to split packages.
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 0
   */
  netICMPDataCut?: number;
  /**
   * @remarks
   * The interval at which the network synthetic monitoring task is executed. Unit: seconds.
   * 
   * @example
   * 1
   */
  netICMPInterval?: number;
  /**
   * @remarks
   * The number of packages.
   * 
   * @example
   * 4
   */
  netICMPNum?: number;
  /**
   * @remarks
   * The package size.
   * 
   * @example
   * 32
   */
  netICMPSize?: number;
  /**
   * @remarks
   * Specifies whether to enable ping monitoring.
   * 
   * *   0: Off.
   * *   1: On. You must set Internet control message protocol (ICMP) parameters if you want to enable ping monitoring.
   * 
   * @example
   * 1
   */
  netICMPSwitch?: number;
  /**
   * @remarks
   * The timeout period of Ping monitoring.
   * 
   * @example
   * 20
   */
  netICMPTimeout?: number;
  /**
   * @remarks
   * The maximum number of active monitoring points.
   * 
   * @example
   * 20
   */
  netTraceRouteNum?: number;
  /**
   * @remarks
   * Specifies whether to enable tracert monitoring.
   * 
   * *   0: Off.
   * *   1: On. You must set the tracert parameters if you want to enable tracert monitoring.
   * 
   * @example
   * 1
   */
  netTraceRouteSwitch?: number;
  /**
   * @remarks
   * The timeout period of tracert monitoring. Valid values: 0 to 300 seconds.
   * 
   * @example
   * 60
   */
  netTraceRouteTimeout?: number;
  /**
   * @remarks
   * The whitelist for DNS hijacking. The format is `Domain name: Matching rule`.
   * 
   * >  Wireless application protocol (WAP) networks do not support DNS hijacking.
   * 
   * @example
   * www.aliyun.com:202.0.3.55|203.3.44.67
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      netDNSNs: 'NetDNSNs',
      netDNSQueryMethod: 'NetDNSQueryMethod',
      netDNSServer: 'NetDNSServer',
      netDNSSwitch: 'NetDNSSwitch',
      netDNSTimeout: 'NetDNSTimeout',
      netDigSwitch: 'NetDigSwitch',
      netICMPActive: 'NetICMPActive',
      netICMPDataCut: 'NetICMPDataCut',
      netICMPInterval: 'NetICMPInterval',
      netICMPNum: 'NetICMPNum',
      netICMPSize: 'NetICMPSize',
      netICMPSwitch: 'NetICMPSwitch',
      netICMPTimeout: 'NetICMPTimeout',
      netTraceRouteNum: 'NetTraceRouteNum',
      netTraceRouteSwitch: 'NetTraceRouteSwitch',
      netTraceRouteTimeout: 'NetTraceRouteTimeout',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netDNSNs: 'string',
      netDNSQueryMethod: 'number',
      netDNSServer: 'number',
      netDNSSwitch: 'number',
      netDNSTimeout: 'number',
      netDigSwitch: 'number',
      netICMPActive: 'number',
      netICMPDataCut: 'number',
      netICMPInterval: 'number',
      netICMPNum: 'number',
      netICMPSize: 'number',
      netICMPSwitch: 'number',
      netICMPTimeout: 'number',
      netTraceRouteNum: 'number',
      netTraceRouteSwitch: 'number',
      netTraceRouteTimeout: 'number',
      whiteList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequestProtocolRequestContentBodyFormData extends $dara.Model {
  /**
   * @remarks
   * The key of **form-data**.
   * 
   * @example
   * appId
   */
  key?: string;
  /**
   * @remarks
   * The value of **form-data**.
   * 
   * @example
   * 3425
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

export class CreateSyntheticTaskRequestProtocolRequestContentBodyUrlEncoding extends $dara.Model {
  /**
   * @remarks
   * The key of **x-www-form-urlencoded**.
   * 
   * @example
   * appId
   */
  key?: string;
  /**
   * @remarks
   * The value of **x-www-form-urlencoded**.
   * 
   * @example
   * 11080
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

export class CreateSyntheticTaskRequestProtocolRequestContentBody extends $dara.Model {
  /**
   * @remarks
   * The data that is passed when the **Mode** parameter is set to **form-data**.
   */
  formData?: CreateSyntheticTaskRequestProtocolRequestContentBodyFormData[];
  /**
   * @remarks
   * The language that is selected when the Mode parameter is set to raw.
   * 
   * *   json
   * *   xml
   * *   javascript
   * *   html
   * *   text
   * 
   * @example
   * json
   */
  language?: string;
  /**
   * @remarks
   * The data type of the content.
   * 
   * *   form-data
   * *   x-www-form-urlencoded
   * *   raw
   * 
   * @example
   * form-data
   */
  mode?: string;
  /**
   * @remarks
   * The data that is passed when the **Mode** parameter is set to **raw**.
   * 
   * @example
   * content
   */
  raw?: string;
  /**
   * @remarks
   * The data that is passed when the **Mode** parameter is set to **x-www-form-urlencoded**.
   */
  urlEncoding?: CreateSyntheticTaskRequestProtocolRequestContentBodyUrlEncoding[];
  static names(): { [key: string]: string } {
    return {
      formData: 'FormData',
      language: 'Language',
      mode: 'Mode',
      raw: 'Raw',
      urlEncoding: 'UrlEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formData: { 'type': 'array', 'itemType': CreateSyntheticTaskRequestProtocolRequestContentBodyFormData },
      language: 'string',
      mode: 'string',
      raw: 'string',
      urlEncoding: { 'type': 'array', 'itemType': CreateSyntheticTaskRequestProtocolRequestContentBodyUrlEncoding },
    };
  }

  validate() {
    if(Array.isArray(this.formData)) {
      $dara.Model.validateArray(this.formData);
    }
    if(Array.isArray(this.urlEncoding)) {
      $dara.Model.validateArray(this.urlEncoding);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequestProtocolRequestContentHeader extends $dara.Model {
  /**
   * @remarks
   * The key of the request header.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the request header.
   * 
   * @example
   * cn-hangzhou
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

export class CreateSyntheticTaskRequestProtocolRequestContent extends $dara.Model {
  /**
   * @remarks
   * The custom body of a request to initiate an API performance synthetic monitoring task.
   */
  body?: CreateSyntheticTaskRequestProtocolRequestContentBody;
  /**
   * @remarks
   * The custom header of a request to initiate an API performance synthetic monitoring task.
   */
  header?: CreateSyntheticTaskRequestProtocolRequestContentHeader[];
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
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      header: 'Header',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateSyntheticTaskRequestProtocolRequestContentBody,
      header: { 'type': 'array', 'itemType': CreateSyntheticTaskRequestProtocolRequestContentHeader },
      method: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(Array.isArray(this.header)) {
      $dara.Model.validateArray(this.header);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequestProtocol extends $dara.Model {
  /**
   * @remarks
   * The encoding format.
   * 
   * *   0: UTF-8
   * *   1: GBK
   * *   2: GB2312
   * *   3: Unicode
   * 
   * @example
   * 0
   */
  characterEncoding?: number;
  /**
   * @remarks
   * The custom host mode.
   * 
   * *   1: round robin
   * *   0: random
   * 
   * @example
   * 1
   */
  customHost?: number;
  /**
   * @remarks
   * The custom host IP address. You can enter multiple IP addresses. Separate the IP addresses with commas (,).
   * 
   * @example
   * ipv4:192.168.2.1,192.168.2.5:img.a.com|192.168.2.1[8080]:img.a.com
   */
  customHostIp?: string;
  /**
   * @remarks
   * The connection timeout period of the protocol. Unit: seconds.
   * 
   * @example
   * 3
   */
  protocolConnectionTime?: number;
  /**
   * @remarks
   * The timeout period of API performance synthetic monitoring. Unit: seconds.
   * 
   * @example
   * 30
   */
  protocolMonitorTimeout?: string;
  /**
   * @remarks
   * The size of the received data. This parameter is required when you set the value of the VerifyWay parameter to 2.
   * 
   * @example
   * 500
   */
  receivedDataSize?: number;
  /**
   * @remarks
   * The request content, including the request header and request body.
   */
  requestContent?: CreateSyntheticTaskRequestProtocolRequestContent;
  /**
   * @remarks
   * The verification string.
   * 
   * @example
   * "code":200
   */
  verifyContent?: string;
  /**
   * @remarks
   * The method that is used to verify the response content.
   * 
   * *   0: no verification.
   * *   1: exact match with the verification string.
   * *   2: partial match with the verification string.
   * *   3: MD5 verification.
   * 
   * @example
   * 0
   */
  verifyWay?: number;
  static names(): { [key: string]: string } {
    return {
      characterEncoding: 'CharacterEncoding',
      customHost: 'CustomHost',
      customHostIp: 'CustomHostIp',
      protocolConnectionTime: 'ProtocolConnectionTime',
      protocolMonitorTimeout: 'ProtocolMonitorTimeout',
      receivedDataSize: 'ReceivedDataSize',
      requestContent: 'RequestContent',
      verifyContent: 'VerifyContent',
      verifyWay: 'VerifyWay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterEncoding: 'number',
      customHost: 'number',
      customHostIp: 'string',
      protocolConnectionTime: 'number',
      protocolMonitorTimeout: 'string',
      receivedDataSize: 'number',
      requestContent: CreateSyntheticTaskRequestProtocolRequestContent,
      verifyContent: 'string',
      verifyWay: 'number',
    };
  }

  validate() {
    if(this.requestContent && typeof (this.requestContent as any).validate === 'function') {
      (this.requestContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSyntheticTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The common parameters.
   */
  commonParam?: CreateSyntheticTaskRequestCommonParam;
  /**
   * @remarks
   * The file download task.
   */
  download?: CreateSyntheticTaskRequestDownload;
  /**
   * @remarks
   * The frequency.
   */
  extendInterval?: CreateSyntheticTaskRequestExtendInterval;
  /**
   * @remarks
   * The interval at which synthetic monitoring is performed. Unit: minutes. Valid values:
   * 
   * *   1
   * *   5
   * *   10
   * *   15
   * *   20
   * *   30
   * *   60
   * *   120
   * *   180
   * *   240
   * *   360
   * *   480
   * *   720
   * *   1440
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  intervalTime?: string;
  /**
   * @remarks
   * The interval type.
   * 
   * *   0: daily
   * *   1: custom frequency
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  intervalType?: string;
  /**
   * @remarks
   * The IP address type:
   * 
   * *   0: an automatic IP address
   * *   1: IPv4
   * *   2: IPv6
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ipType?: number;
  /**
   * @remarks
   * The list of monitoring points.
   * 
   * This parameter is required.
   */
  monitorList?: CreateSyntheticTaskRequestMonitorList[];
  /**
   * @remarks
   * The monitoring items that are associated with the browse tasks.
   */
  navigation?: CreateSyntheticTaskRequestNavigation;
  /**
   * @remarks
   * The network synthetic monitoring task.
   */
  net?: CreateSyntheticTaskRequestNet;
  /**
   * @remarks
   * The API performance synthetic monitoring task.
   */
  protocol?: CreateSyntheticTaskRequestProtocol;
  /**
   * @remarks
   * The ID of the region in which the application is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the task. To update a synthetic monitoring task, enter the task name and set the **UpdateTask** parameter to **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * Network synthetic monitoring task
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the monitoring task. Valid values:
   * 
   * 1.  3: web page performance - IE
   * 2.  34: web Page Performance - Chrome
   * 3.  0: network quality
   * 4.  40: file download
   * 5.  7:API performance
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  taskType?: number;
  /**
   * @remarks
   * Specifies whether to update existing synthetic monitoring tasks.
   * 
   * *   true: updates existing synthetic monitoring tasks.
   * *   false: creates new synthetic monitoring tasks.
   * 
   * @example
   * false
   */
  updateTask?: boolean;
  /**
   * @remarks
   * The URL for synthetic monitoring.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      commonParam: 'CommonParam',
      download: 'Download',
      extendInterval: 'ExtendInterval',
      intervalTime: 'IntervalTime',
      intervalType: 'IntervalType',
      ipType: 'IpType',
      monitorList: 'MonitorList',
      navigation: 'Navigation',
      net: 'Net',
      protocol: 'Protocol',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      updateTask: 'UpdateTask',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonParam: CreateSyntheticTaskRequestCommonParam,
      download: CreateSyntheticTaskRequestDownload,
      extendInterval: CreateSyntheticTaskRequestExtendInterval,
      intervalTime: 'string',
      intervalType: 'string',
      ipType: 'number',
      monitorList: { 'type': 'array', 'itemType': CreateSyntheticTaskRequestMonitorList },
      navigation: CreateSyntheticTaskRequestNavigation,
      net: CreateSyntheticTaskRequestNet,
      protocol: CreateSyntheticTaskRequestProtocol,
      regionId: 'string',
      taskName: 'string',
      taskType: 'number',
      updateTask: 'boolean',
      url: 'string',
    };
  }

  validate() {
    if(this.commonParam && typeof (this.commonParam as any).validate === 'function') {
      (this.commonParam as any).validate();
    }
    if(this.download && typeof (this.download as any).validate === 'function') {
      (this.download as any).validate();
    }
    if(this.extendInterval && typeof (this.extendInterval as any).validate === 'function') {
      (this.extendInterval as any).validate();
    }
    if(Array.isArray(this.monitorList)) {
      $dara.Model.validateArray(this.monitorList);
    }
    if(this.navigation && typeof (this.navigation as any).validate === 'function') {
      (this.navigation as any).validate();
    }
    if(this.net && typeof (this.net as any).validate === 'function') {
      (this.net as any).validate();
    }
    if(this.protocol && typeof (this.protocol as any).validate === 'function') {
      (this.protocol as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

