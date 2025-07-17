// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyntheticTaskDetailResponseBodyTaskDetailCommonParamAlertList extends $dara.Model {
  /**
   * @remarks
   * The low-risk alert.
   * 
   * @example
   * 1
   */
  generalAlert?: string;
  /**
   * @remarks
   * Indicates whether the condition is essential.
   * 
   * @example
   * 0
   */
  isCritical?: string;
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * alert-test
   */
  name?: string;
  /**
   * @remarks
   * The Critical-level alert.
   * 
   * @example
   * 1
   */
  seriousAlert?: string;
  /**
   * @remarks
   * Greater than or less than.
   * 
   * @example
   * 1
   */
  symbols?: string;
  static names(): { [key: string]: string } {
    return {
      generalAlert: 'GeneralAlert',
      isCritical: 'IsCritical',
      name: 'Name',
      seriousAlert: 'SeriousAlert',
      symbols: 'Symbols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generalAlert: 'string',
      isCritical: 'string',
      name: 'string',
      seriousAlert: 'string',
      symbols: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyntheticTaskDetailResponseBodyTaskDetailCommonParam extends $dara.Model {
  /**
   * @remarks
   * The identifier of the alert.
   * 
   * @example
   * 1
   */
  alarmFlag?: number;
  /**
   * @remarks
   * The list of alerts.
   */
  alertList?: GetSyntheticTaskDetailResponseBodyTaskDetailCommonParamAlertList[];
  /**
   * @remarks
   * The ID of the alert identifier.
   * 
   * @example
   * 1
   */
  alertNotifierId?: string;
  /**
   * @remarks
   * The ID of the alert policy.
   * 
   * @example
   * 1
   */
  alertPolicyId?: string;
  /**
   * @remarks
   * The monitoring samples.
   * 
   * @example
   * 1
   */
  monitorSamples?: string;
  /**
   * @remarks
   * The start time of the execution.
   * 
   * @example
   * 1664427128
   */
  startExecutionTime?: string;
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
      alarmFlag: 'number',
      alertList: { 'type': 'array', 'itemType': GetSyntheticTaskDetailResponseBodyTaskDetailCommonParamAlertList },
      alertNotifierId: 'string',
      alertPolicyId: 'string',
      monitorSamples: 'string',
      startExecutionTime: 'string',
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

export class GetSyntheticTaskDetailResponseBodyTaskDetailDownload extends $dara.Model {
  /**
   * @remarks
   * The timeout period of the file download task.
   * 
   * @example
   * 200
   */
  connectionTimeout?: number;
  /**
   * @remarks
   * The items to be ignored in a certificate error. Multiple values are concatenated with vertical bars (|).
   * 
   * @example
   * char
   */
  downloadCustomHeaderContent?: string;
  /**
   * @remarks
   * The custom host. Valid values:
   * 
   * *   1: round robin
   * *   0: random
   * 
   * @example
   * 0
   */
  downloadCustomHost?: number;
  /**
   * @remarks
   * The custom IP address of the host. Multiple IP addresses are separated with commas (,).
   * 
   * @example
   * 168.23.45.1
   */
  downloadCustomHostIp?: string;
  /**
   * @remarks
   * The kernel type. Valid values:
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
   * Indicates whether redirection is supported.
   * 
   * @example
   * 1
   */
  downloadRedirect?: number;
  /**
   * @remarks
   * The file size. Unit: KB.
   * 
   * @example
   * 20
   */
  downloadTransmissionSize?: number;
  /**
   * @remarks
   * The monitoring duration.
   * 
   * @example
   * 12
   */
  monitorTimeout?: number;
  /**
   * @remarks
   * The QUIC protocol type. Valid values:
   * 
   * *   1: HTTP/1
   * *   2: HTTP/2
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
   * test
   */
  validateKeywords?: string;
  /**
   * @remarks
   * The method that is used to verify the response content. Valid values:
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
  /**
   * @remarks
   * The whitelisted objects that are used to avoid DNS hijacking. Format: `<domain name>:<objects>`.
   * 
   * >  WAP networks do not support hijacking.
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
      downloadKernel: 'DownloadKernel',
      downloadRedirect: 'DownloadRedirect',
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
      downloadKernel: 'number',
      downloadRedirect: 'number',
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

export class GetSyntheticTaskDetailResponseBodyTaskDetailExtendInterval extends $dara.Model {
  /**
   * @remarks
   * The day on which synthetic monitoring is performed. Valid values:
   * 
   * *   \\-1: every day
   * *   0: Sunday
   * *   1: Monday
   * *   2: Tuesday
   * *   3: Wednesday
   * *   4: Thursday
   * *   5: Friday
   * *   6: Saturday
   */
  days?: number[];
  /**
   * @remarks
   * The minute at which synthetic monitoring ends.
   * 
   * @example
   * 20
   */
  endMinute?: number;
  /**
   * @remarks
   * The time when synthetic monitoring ends. Format: `yyyy-MM-dd HH`.
   * 
   * @example
   * 2022-05-03 11:40
   */
  endTime?: string;
  /**
   * @remarks
   * The hour at which synthetic monitoring ends.
   * 
   * @example
   * 12
   */
  endhour?: number;
  /**
   * @remarks
   * The hour at which synthetic monitoring starts.
   * 
   * @example
   * 9
   */
  startHour?: number;
  /**
   * @remarks
   * The minute at which synthetic monitoring starts.
   * 
   * @example
   * 20
   */
  startMinute?: number;
  /**
   * @remarks
   * The time when synthetic monitoring starts. Format: yyyy-MM-dd HH.
   * 
   * @example
   * 2022-02-26 11:40
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      endMinute: 'EndMinute',
      endTime: 'EndTime',
      endhour: 'Endhour',
      startHour: 'StartHour',
      startMinute: 'StartMinute',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'number' },
      endMinute: 'number',
      endTime: 'string',
      endhour: 'number',
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

export class GetSyntheticTaskDetailResponseBodyTaskDetailMonitorList extends $dara.Model {
  /**
   * @remarks
   * The city code.
   * 
   * @example
   * 110100
   */
  cityCode?: number;
  /**
   * @remarks
   * The type of the detection point.
   * 
   * @example
   * IDC
   */
  monitorType?: number;
  /**
   * @remarks
   * The ID of the network service.
   * 
   * @example
   * 12001
   */
  netServiceId?: number;
  /**
   * @remarks
   * The number of times that the system sends detection requests.
   * 
   * @example
   * 20
   */
  sendCount?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      monitorType: 'MonitorType',
      netServiceId: 'NetServiceId',
      sendCount: 'SendCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'number',
      monitorType: 'number',
      netServiceId: 'number',
      sendCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyntheticTaskDetailResponseBodyTaskDetailNav extends $dara.Model {
  /**
   * @remarks
   * The DNS whitelist.
   * 
   * @example
   * 119.119.53.156
   */
  dnsHijackWhitelist?: string;
  /**
   * @remarks
   * The element blacklist.
   * 
   * @example
   * test
   */
  elementBlacklist?: string;
  /**
   * @remarks
   * Indicates whether ActiveX is executed. Valid values:
   * 
   * *   3: yes
   * *   0: no
   * 
   * >  Only IE elements support this parameter.
   * 
   * @example
   * 3
   */
  executeActiveX?: number;
  /**
   * @remarks
   * Indicates whether the applet is executed. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 1
   */
  executeApplet?: number;
  /**
   * @remarks
   * Indicates whether scripts are executed. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * >  Only IE elements support this parameter.
   * 
   * @example
   * 1
   */
  executeScript?: number;
  /**
   * @remarks
   * Indicates whether invalid IP addresses are excluded. Valid values:
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
   * 12
   */
  flowHijackJumpTimes?: number;
  /**
   * @remarks
   * The tag that is used in DNS hijacking.
   * 
   * @example
   * target
   */
  flowHijackLogo?: string;
  /**
   * @remarks
   * The monitoring timeout period.
   * 
   * @example
   * 20
   */
  monitorTimeout?: number;
  /**
   * @remarks
   * Indicates whether the screen is automatically scrolled up and down to load a page. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 1
   */
  navAutomaticScrolling?: number;
  /**
   * @remarks
   * Indicates whether a custom header is created. Valid values:
   * 
   * *   0: no
   * *   1: A custom header is created for the first packet.
   * *   2: A custom header is created for all packets.
   * 
   * @example
   * 0
   */
  navCustomHeader?: string;
  /**
   * @remarks
   * The format of the custom header. Multiple fields are separated with vertical bars (|).
   * 
   * @example
   * content
   */
  navCustomHeaderContent?: string;
  /**
   * @remarks
   * The custom host mode. Valid values:
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
   * The custom IP address of the host. Multiple IP addresses are separated with commas (,).
   * 
   * @example
   * 119.119.53.156/32
   */
  navCustomHostIp?: string;
  /**
   * @remarks
   * Indicates whether caching is disabled. Valid values:
   * 
   * *   1: Caching is disabled.
   * *   0: Caching is enabled.
   * 
   * @example
   * 1
   */
  navDisableCache?: number;
  /**
   * @remarks
   * Indicates whether compression is disabled. Valid values:
   * 
   * *   0: Compression is enabled.
   * *   1: Compression is disabled.
   * 
   * @example
   * 0
   */
  navDisableCompression?: number;
  /**
   * @remarks
   * Indicates whether certificate errors are ignored during certificate verification in the SSL handshake. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * 1
   */
  navIgnoreCertificateError?: number;
  /**
   * @remarks
   * Indicates whether redirection is enabled. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 1
   */
  navRedirect?: number;
  /**
   * @remarks
   * Indicates whether the elements on the page are returned.
   * 
   * *   1: no. The basic document data is returned.
   * *   2: yes. All document data is returned.
   * 
   * @example
   * 1
   */
  navReturnElement?: number;
  /**
   * @remarks
   * The page tampering.
   * 
   * @example
   * content
   */
  pageTampering?: string;
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
   * @example
   * www.example.com
   */
  quicDomain?: string;
  /**
   * @remarks
   * The QUIC version. Default value: 0. Valid values:
   * 
   * *   35
   * *   39
   * *   43
   * *   44
   * 
   * >  Only Chrome elements support this parameter.
   * 
   * @example
   * 0
   */
  quicVersion?: number;
  /**
   * @remarks
   * Indicates whether request headers are returned. Valid values:
   * 
   * *   0: no
   * *   1: The headers of base documents are returned.
   * *   2: All headers are returned.
   * 
   * @example
   * 0
   */
  requestHeader?: number;
  /**
   * @remarks
   * The time threshold that is used to define a slow element. Unit: seconds.
   * 
   * @example
   * 30
   */
  slowElementThreshold?: number;
  /**
   * @remarks
   * The blacklist for string verification.
   * 
   * @example
   * test
   */
  verifyStringBlacklist?: string;
  /**
   * @remarks
   * The whitelist for string verification.
   * 
   * @example
   * test
   */
  verifyStringWhitelist?: string;
  /**
   * @remarks
   * The timeout period of waiting for the monitoring to complete.
   * 
   * @example
   * 20
   */
  waitCompletionTime?: number;
  static names(): { [key: string]: string } {
    return {
      dnsHijackWhitelist: 'DnsHijackWhitelist',
      elementBlacklist: 'ElementBlacklist',
      executeActiveX: 'ExecuteActiveX',
      executeApplet: 'ExecuteApplet',
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
      navRedirect: 'NavRedirect',
      navReturnElement: 'NavReturnElement',
      pageTampering: 'PageTampering',
      processName: 'ProcessName',
      quicDomain: 'QuicDomain',
      quicVersion: 'QuicVersion',
      requestHeader: 'RequestHeader',
      slowElementThreshold: 'SlowElementThreshold',
      verifyStringBlacklist: 'VerifyStringBlacklist',
      verifyStringWhitelist: 'VerifyStringWhitelist',
      waitCompletionTime: 'WaitCompletionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsHijackWhitelist: 'string',
      elementBlacklist: 'string',
      executeActiveX: 'number',
      executeApplet: 'number',
      executeScript: 'number',
      filterInvalidIP: 'number',
      flowHijackJumpTimes: 'number',
      flowHijackLogo: 'string',
      monitorTimeout: 'number',
      navAutomaticScrolling: 'number',
      navCustomHeader: 'string',
      navCustomHeaderContent: 'string',
      navCustomHost: 'number',
      navCustomHostIp: 'string',
      navDisableCache: 'number',
      navDisableCompression: 'number',
      navIgnoreCertificateError: 'number',
      navRedirect: 'number',
      navReturnElement: 'number',
      pageTampering: 'string',
      processName: 'string',
      quicDomain: 'string',
      quicVersion: 'number',
      requestHeader: 'number',
      slowElementThreshold: 'number',
      verifyStringBlacklist: 'string',
      verifyStringWhitelist: 'string',
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

export class GetSyntheticTaskDetailResponseBodyTaskDetailNet extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data is displayed in the DIG format. Valid values:
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
   * The NS server.
   * 
   * @example
   * 189.12.32.124
   */
  netDnsNs?: string;
  /**
   * @remarks
   * The DNS query method. Valid values:
   * 
   * *   1: recursive
   * *   2: iterative
   * 
   * @example
   * 1
   */
  netDnsQueryMethod?: string;
  /**
   * @remarks
   * The type of the DNS server. Valid values:
   * 
   * *   0: ipv4
   * *   1: ipv6
   * *   2: A version is automatically selected.
   * 
   * @example
   * 0
   */
  netDnsServer?: number;
  /**
   * @remarks
   * Indicates whether DNS test is enabled. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 0
   */
  netDnsSwitch?: number;
  /**
   * @remarks
   * The timeout period of DNS requests.
   * 
   * @example
   * 10
   */
  netDnsTimeout?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   0 : ICMP
   * *   1 : TCP
   * 
   * @example
   * 0
   */
  netIcmpActive?: number;
  /**
   * @remarks
   * Indicates whether packets are split. Valid values:
   * 
   * *   0: no
   * *   1: yes
   * 
   * @example
   * 0
   */
  netIcmpDataCut?: number;
  /**
   * @remarks
   * The interval at which the synthetic monitoring task is executed.
   * 
   * @example
   * 10
   */
  netIcmpInterval?: number;
  /**
   * @remarks
   * The number of packets.
   * 
   * @example
   * 10
   */
  netIcmpNum?: number;
  /**
   * @remarks
   * The packet size.
   * 
   * @example
   * 30
   */
  netIcmpSize?: number;
  /**
   * @remarks
   * Indicates whether ICMP test is enabled. Valid values:
   * 
   * *   0: no.
   * *   1: yes. If you set this parameter to 1, you must also set the Icmp parameter.
   * 
   * @example
   * 0
   */
  netIcmpSwitch?: number;
  /**
   * @remarks
   * The monitoring timeout period.
   * 
   * @example
   * 20
   */
  netIcmpTimeout?: number;
  /**
   * @remarks
   * The maximum number of active detection points.
   * 
   * @example
   * 30
   */
  netTraceRouteNum?: number;
  /**
   * @remarks
   * Indicates whether Tracert test is enabled. Valid values:
   * 
   * *   0: no
   * *   1: yes. If you set this parameter to 1, you must also set the Tracert parameter.
   * 
   * @example
   * 0
   */
  netTraceRouteSwitch?: number;
  /**
   * @remarks
   * The monitoring timeout period. Valid values: 0 to 300. Unit: seconds.
   * 
   * @example
   * 20
   */
  netTraceRouteTimeout?: number;
  /**
   * @remarks
   * The whitelisted objects that are used to avoid DNS hijacking. Format: `<domain name>:<objects>`.
   * 
   * >  WAP networks do not support hijacking.
   * 
   * @example
   * 119.119.53.156/32
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      netDigSwitch: 'NetDigSwitch',
      netDnsNs: 'NetDnsNs',
      netDnsQueryMethod: 'NetDnsQueryMethod',
      netDnsServer: 'NetDnsServer',
      netDnsSwitch: 'NetDnsSwitch',
      netDnsTimeout: 'NetDnsTimeout',
      netIcmpActive: 'NetIcmpActive',
      netIcmpDataCut: 'NetIcmpDataCut',
      netIcmpInterval: 'NetIcmpInterval',
      netIcmpNum: 'NetIcmpNum',
      netIcmpSize: 'NetIcmpSize',
      netIcmpSwitch: 'NetIcmpSwitch',
      netIcmpTimeout: 'NetIcmpTimeout',
      netTraceRouteNum: 'NetTraceRouteNum',
      netTraceRouteSwitch: 'NetTraceRouteSwitch',
      netTraceRouteTimeout: 'NetTraceRouteTimeout',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netDigSwitch: 'number',
      netDnsNs: 'string',
      netDnsQueryMethod: 'string',
      netDnsServer: 'number',
      netDnsSwitch: 'number',
      netDnsTimeout: 'string',
      netIcmpActive: 'number',
      netIcmpDataCut: 'number',
      netIcmpInterval: 'number',
      netIcmpNum: 'number',
      netIcmpSize: 'number',
      netIcmpSwitch: 'number',
      netIcmpTimeout: 'number',
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

export class GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentBodyFormdata extends $dara.Model {
  /**
   * @remarks
   * The key of the **form-data**.
   * 
   * @example
   * appId
   */
  key?: string;
  /**
   * @remarks
   * The value of the form-data.
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

export class GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentBodyUrlencoded extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * appId
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentBody extends $dara.Model {
  /**
   * @remarks
   * The data content. This parameter is returned when Mode is set to form-data.
   */
  formdata?: GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentBodyFormdata;
  /**
   * @remarks
   * The language used when Mode is set to raw. Valid values:
   * 
   * *   json
   * *   xml
   * *   javascript
   * *   html
   * *   text
   * 
   * @example
   * xml
   */
  language?: string;
  /**
   * @remarks
   * The type of the content. Valid values:
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
   * The data content. This parameter is returned when **Mode** is set to **raw**.
   * 
   * @example
   * content
   */
  raw?: string;
  /**
   * @remarks
   * The URL of the body content.
   */
  urlencoded?: GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentBodyUrlencoded;
  static names(): { [key: string]: string } {
    return {
      formdata: 'Formdata',
      language: 'Language',
      mode: 'Mode',
      raw: 'Raw',
      urlencoded: 'Urlencoded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formdata: GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentBodyFormdata,
      language: 'string',
      mode: 'string',
      raw: 'string',
      urlencoded: GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentBodyUrlencoded,
    };
  }

  validate() {
    if(this.formdata && typeof (this.formdata as any).validate === 'function') {
      (this.formdata as any).validate();
    }
    if(this.urlencoded && typeof (this.urlencoded as any).validate === 'function') {
      (this.urlencoded as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentHeader extends $dara.Model {
  /**
   * @remarks
   * The key of the header in the request parameters.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the header in the request parameters.
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

export class GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContent extends $dara.Model {
  /**
   * @remarks
   * The content of the request body.
   */
  body?: GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentBody;
  /**
   * @remarks
   * The request header.
   */
  header?: GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentHeader[];
  /**
   * @remarks
   * The request method. Valid values:
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
      body: GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentBody,
      header: { 'type': 'array', 'itemType': GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContentHeader },
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

export class GetSyntheticTaskDetailResponseBodyTaskDetailProtocol extends $dara.Model {
  /**
   * @remarks
   * The encoding format. Valid values:
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
   * The custom host. Valid values:
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
   * The custom IP address of the host. Multiple IP addresses are separated with commas (,).
   * 
   * @example
   * 119.119.53.156
   */
  customHostIp?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 20
   */
  protocolConnectionTimeout?: number;
  /**
   * @remarks
   * The timeout period of API performance monitoring. Unit: seconds.
   * 
   * @example
   * 30
   */
  protocolMonitorTimeout?: number;
  /**
   * @remarks
   * The size of the received data. This parameter is returned when **VerifyWay** is set to 2.
   * 
   * @example
   * 30
   */
  receivedDataSize?: number;
  /**
   * @remarks
   * The request content, including the header and body.
   */
  requestContent?: GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContent;
  /**
   * @remarks
   * The verification string.
   * 
   * @example
   * list
   */
  verifyContent?: string;
  /**
   * @remarks
   * The method that is used to verify the response content. Valid values:
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
      protocolConnectionTimeout: 'ProtocolConnectionTimeout',
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
      protocolConnectionTimeout: 'number',
      protocolMonitorTimeout: 'number',
      receivedDataSize: 'number',
      requestContent: GetSyntheticTaskDetailResponseBodyTaskDetailProtocolRequestContent,
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

export class GetSyntheticTaskDetailResponseBodyTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The list of common parameters.
   */
  commonParam?: GetSyntheticTaskDetailResponseBodyTaskDetailCommonParam;
  /**
   * @remarks
   * The file download task.
   */
  download?: GetSyntheticTaskDetailResponseBodyTaskDetailDownload;
  /**
   * @remarks
   * The frequency.
   */
  extendInterval?: GetSyntheticTaskDetailResponseBodyTaskDetailExtendInterval;
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
   * @example
   * 20
   */
  intervalTime?: number;
  /**
   * @remarks
   * The interval type. Valid values:
   * 
   * *   0: daily
   * *   1: custom frequency
   * 
   * @example
   * 0
   */
  intervalType?: number;
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
   * The detection points.
   */
  monitorList?: GetSyntheticTaskDetailResponseBodyTaskDetailMonitorList[];
  /**
   * @remarks
   * The detection points.
   * 
   * @example
   * 12
   */
  monitorListString?: string;
  /**
   * @remarks
   * The browser test task.
   */
  nav?: GetSyntheticTaskDetailResponseBodyTaskDetailNav;
  /**
   * @remarks
   * The network synthetic monitoring task.
   */
  net?: GetSyntheticTaskDetailResponseBodyTaskDetailNet;
  /**
   * @remarks
   * The synthetic monitoring task of the API performance type.
   */
  protocol?: GetSyntheticTaskDetailResponseBodyTaskDetailProtocol;
  /**
   * @remarks
   * The ID of the synthetic monitoring task.
   * 
   * @example
   * 19584
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * net-test
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * 1.  3: web page performance - IE
   * 2.  34: web page performance - Chrome
   * 3.  0: network quality
   * 4.  40: file download
   * 5.  7: API performance
   * 
   * @example
   * 0
   */
  taskType?: number;
  /**
   * @remarks
   * The URL for synthetic monitoring.
   * 
   * @example
   * www.example.com
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
      monitorListString: 'MonitorListString',
      nav: 'Nav',
      net: 'Net',
      protocol: 'Protocol',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonParam: GetSyntheticTaskDetailResponseBodyTaskDetailCommonParam,
      download: GetSyntheticTaskDetailResponseBodyTaskDetailDownload,
      extendInterval: GetSyntheticTaskDetailResponseBodyTaskDetailExtendInterval,
      intervalTime: 'number',
      intervalType: 'number',
      ipType: 'number',
      monitorList: { 'type': 'array', 'itemType': GetSyntheticTaskDetailResponseBodyTaskDetailMonitorList },
      monitorListString: 'string',
      nav: GetSyntheticTaskDetailResponseBodyTaskDetailNav,
      net: GetSyntheticTaskDetailResponseBodyTaskDetailNet,
      protocol: GetSyntheticTaskDetailResponseBodyTaskDetailProtocol,
      taskId: 'number',
      taskName: 'string',
      taskType: 'number',
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
    if(this.nav && typeof (this.nav as any).validate === 'function') {
      (this.nav as any).validate();
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

export class GetSyntheticTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D6C358A-A58B-4F4B-94CE-F5AAF023****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the task.
   */
  taskDetail?: GetSyntheticTaskDetailResponseBodyTaskDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskDetail: GetSyntheticTaskDetailResponseBodyTaskDetail,
    };
  }

  validate() {
    if(this.taskDetail && typeof (this.taskDetail as any).validate === 'function') {
      (this.taskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

