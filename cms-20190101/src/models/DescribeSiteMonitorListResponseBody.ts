// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertionsAssertions extends $dara.Model {
  /**
   * @remarks
   * The comparison operator of the assertion. Valid values:
   * 
   * *   contains: contains
   * *   doesNotContain: does not contain
   * *   matches: matches regular expressions
   * *   doesNotMatch: does not match regular expressions
   * *   is: equal to a numeric value or matches a character
   * *   isNot: not equal to
   * *   lessThan: less than
   * *   moreThan: greater than
   * 
   * @example
   * lessThan
   */
  operator?: string;
  /**
   * @remarks
   * The parsing path of the assertion.
   * 
   * *   If the assertion type is `body_json`, the path is `json path`.
   * *   If the assertion type is `body_xml`, the path is `xml path`.
   * 
   * @example
   * json path
   */
  property?: string;
  /**
   * @remarks
   * The numeric value or character used for matching.
   * 
   * @example
   * 1000
   */
  target?: string;
  /**
   * @remarks
   * The assertion type. Valid values:
   * 
   * *   response_time: checks whether the response time meets expectations.
   * *   status_code: checks whether the HTTP status code meets expectations.
   * *   header: checks whether the fields in the response header meet expectations.
   * *   body_text: checks whether the content in the response body meets expectations by using text matching.
   * *   body_json: checks whether the content in the response body meets expectations by using JSON parsing (JSONPath).
   * *   body_xml: checks whether the content in the response body meets expectations by using XML parsing (XPath).
   * 
   * @example
   * response_time
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'operator',
      property: 'property',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      property: 'string',
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

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertions extends $dara.Model {
  assertions?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertionsAssertions[];
  static names(): { [key: string]: string } {
    return {
      assertions: 'assertions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertions: { 'type': 'array', 'itemType': DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertionsAssertions },
    };
  }

  validate() {
    if(Array.isArray(this.assertions)) {
      $dara.Model.validateArray(this.assertions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson extends $dara.Model {
  /**
   * @remarks
   * The acceptable status code.
   * 
   * >  We recommend that you configure assertions.
   * 
   * @example
   * 400
   */
  acceptableResponseCode?: string;
  /**
   * @remarks
   * The assertions.
   */
  assertions?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertions;
  /**
   * @remarks
   * The number of retries after a DNS failure occurred.
   * 
   * @example
   * 3
   */
  attempts?: number;
  /**
   * @remarks
   * Indicates whether the security authentication feature is enabled. Valid values:
   * 
   * *   0: The feature is enabled.
   * *   1: The feature is disabled.
   * 
   * @example
   * 1
   */
  authentication?: number;
  /**
   * @remarks
   * Indicates whether the certificate is verified. Valid values:
   * 
   * *   false (default): The certificate is not verified.
   * *   true: The certificate is verified.
   * 
   * @example
   * false
   */
  certVerify?: boolean;
  /**
   * @remarks
   * The cookie of the HTTP request.
   * 
   * @example
   * lang=en
   */
  cookie?: string;
  /**
   * @remarks
   * Indicates whether MTR is automatically used to diagnose network issues if a task fails. Valid values:
   * 
   * *   false (default): MTR is not automatically used to diagnose network issues if a task fails.
   * *   true: MTR is automatically used to diagnose network issues if a task fails.
   * 
   * @example
   * false
   */
  diagnosisMtr?: boolean;
  /**
   * @remarks
   * Indicates whether ping requests are automatically sent to detect network latency if a detection task fails. Valid values:
   * 
   * *   false (default): Ping requests are not automatically sent to detect network latency if a detection task fails.
   * *   true: Ping requests are automatically sent to detect network latency if a detection task fails.
   * 
   * @example
   * false
   */
  diagnosisPing?: boolean;
  /**
   * @remarks
   * The relationship between the list of expected aliases or IP addresses and the list of DNS results. Valid values:
   * 
   * *   IN_DNS: The list of expected values is a subset of the list of DNS results.
   * *   DNS_IN: The list of DNS results is a subset of the list of expected values.
   * *   EQUAL: The list of DNS results is the same as the list of expected values.
   * *   ANY: The list of DNS results intersects with the list of expected values.
   * 
   * @example
   * IN_DNS
   */
  dnsMatchRule?: string;
  /**
   * @remarks
   * The domain name or IP address of the DNS server.
   * 
   * @example
   * 192.168.XX.XX
   */
  dnsServer?: string;
  /**
   * @remarks
   * The type of the DNS record. This parameter is returned only if the TaskType parameter is set to DNS. Valid values:
   * 
   * *   A (default): a record that specifies an IP address related to the specified host name or domain name.
   * *   CNAME: a record that maps multiple domain names to a domain name.
   * *   NS: a record that specifies a DNS server used to parse domain names.
   * *   MX: a record that links domain names to the address of a mail server.
   * *   TXT: a record that stores the text information of host name or domain names. The text must be 1 to 512 bytes in length. The TXT record serves as a Sender Policy Framework (SPF) record to fight against spam.
   * *   AAAA: a record that maps a domain name to the relevant IPv6 address.
   * 
   * @example
   * A
   */
  dnsType?: string;
  /**
   * @remarks
   * Indicates whether the DNS server of the carrier is used.
   * 
   * *   true (default): The DNS server of the carrier is used.
   * *   false: The DNS server of the carrier is not used. The default DNS server or the specified DNS server is used.
   * 
   * @example
   * true
   */
  enableOperatorDns?: boolean;
  /**
   * @remarks
   * The packet loss rate.
   * 
   * >  This parameter is returned only if the TaskType parameter is set to PING.
   * 
   * @example
   * 0.5
   */
  failureRate?: number;
  /**
   * @remarks
   * The header of the HTTP request. An HTTP header is a key-value pair in which the key and the value are separated by a colon (:). The format is `key1:value1`. Each HTTP header occupies a line.
   * 
   * @example
   * testKey:testValue
   */
  header?: string;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * *   get
   * *   post
   * *   head
   * 
   * @example
   * get
   */
  httpMethod?: string;
  /**
   * @remarks
   * Indicates whether the password is decoded by using the Base64 algorithm. Valid values:
   * 
   * *   true: The password is decoded by using the Base64 algorithm.
   * *   false (default): The password is not decoded by using the Base64 algorithm.
   * 
   * @example
   * false
   */
  isBase64Encode?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is included. Valid values:
   * 
   * *   0: The alert rule is included.
   * *   1: The alert rule is not included.
   * 
   * @example
   * 0
   */
  matchRule?: number;
  /**
   * @remarks
   * The password of the SMTP, POP3, or FTP protocol.
   * 
   * @example
   * 123****
   */
  password?: string;
  /**
   * @remarks
   * The number of hops for the PING protocol.
   * 
   * @example
   * 20
   */
  pingNum?: number;
  /**
   * @remarks
   * The port number of the TCP, UDP, SMTP, or POP3 protocol.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of DNS detection. Valid values:
   * 
   * *   udp (default)
   * *   tcp
   * *   tcp-tls
   * 
   * @example
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * Indicates whether the PROXY protocol is enabled. Valid values:
   * 
   * *   false (default): The PROXY protocol is disabled.
   * *   true: The PROXY protocol is enabled.
   * 
   * @example
   * false
   */
  proxyProtocol?: boolean;
  /**
   * @remarks
   * The content of the HTTP request.
   * 
   * @example
   * cf0f85
   */
  requestContent?: string;
  /**
   * @remarks
   * The format of the HTTP request. Valid values:
   * 
   * *   hex: hexadecimal
   * *   txt: text
   * 
   * @example
   * hex
   */
  requestFormat?: string;
  /**
   * @remarks
   * The response to the HTTP request.
   * 
   * *   Hexadecimal format: If the request content is a byte string and cannot be represented in printable characters, you can convert the byte string to printable characters in the hexadecimal format. If you convert the byte string to printable characters in the hexadecimal format, one byte is converted to two hexadecimal characters. For example, (byte)1 is converted to `01` and (byte)27 is converted to `1B`. If the request content is a binary array in the Java format, for example, `{(byte)1, (byte)27}`, you can convert the binary array to `011b` or `011B`. Hexadecimal characters are not case-sensitive in site monitoring tasks. You can enter `011B` in the request content and set the request_format parameter to hex.
   * *   Text format: Common text refers to strings that consist of printable characters.
   * 
   * @example
   * cf0f85
   */
  responseContent?: string;
  /**
   * @remarks
   * The format of the HTTP response. Valid values:
   * 
   * *   hex: hexadecimal
   * *   txt: text
   * 
   * @example
   * hex
   */
  responseFormat?: string;
  /**
   * @remarks
   * The number of times a failed detection request is retried.
   * 
   * @example
   * 1
   */
  retryDelay?: number;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  timeOut?: number;
  /**
   * @remarks
   * Indicates whether redirects are followed if the status code 301 or 302 is returned. Valid values:
   * 
   * *   true: Redirects are not followed.
   * *   false (default): Redirects are followed.
   * 
   * @example
   * false
   */
  unfollowRedirect?: boolean;
  /**
   * @remarks
   * The username of the FTP, SMTP, or POP3 protocol.
   * 
   * @example
   * testUser
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      acceptableResponseCode: 'acceptable_response_code',
      assertions: 'assertions',
      attempts: 'attempts',
      authentication: 'authentication',
      certVerify: 'cert_verify',
      cookie: 'cookie',
      diagnosisMtr: 'diagnosis_mtr',
      diagnosisPing: 'diagnosis_ping',
      dnsMatchRule: 'dns_match_rule',
      dnsServer: 'dns_server',
      dnsType: 'dns_type',
      enableOperatorDns: 'enable_operator_dns',
      failureRate: 'failure_rate',
      header: 'header',
      httpMethod: 'http_method',
      isBase64Encode: 'isBase64Encode',
      matchRule: 'match_rule',
      password: 'password',
      pingNum: 'ping_num',
      port: 'port',
      protocol: 'protocol',
      proxyProtocol: 'proxy_protocol',
      requestContent: 'request_content',
      requestFormat: 'request_format',
      responseContent: 'response_content',
      responseFormat: 'response_format',
      retryDelay: 'retry_delay',
      timeOut: 'time_out',
      unfollowRedirect: 'unfollow_redirect',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptableResponseCode: 'string',
      assertions: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertions,
      attempts: 'number',
      authentication: 'number',
      certVerify: 'boolean',
      cookie: 'string',
      diagnosisMtr: 'boolean',
      diagnosisPing: 'boolean',
      dnsMatchRule: 'string',
      dnsServer: 'string',
      dnsType: 'string',
      enableOperatorDns: 'boolean',
      failureRate: 'number',
      header: 'string',
      httpMethod: 'string',
      isBase64Encode: 'string',
      matchRule: 'number',
      password: 'string',
      pingNum: 'number',
      port: 'number',
      protocol: 'string',
      proxyProtocol: 'boolean',
      requestContent: 'string',
      requestFormat: 'string',
      responseContent: 'string',
      responseFormat: 'string',
      retryDelay: 'number',
      timeOut: 'number',
      unfollowRedirect: 'boolean',
      username: 'string',
    };
  }

  validate() {
    if(this.assertions && typeof (this.assertions as any).validate === 'function') {
      (this.assertions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address that is monitored by the site monitoring task.
   * 
   * @example
   * https://aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The detection point type. Valid values:
   * 
   * *   PC
   * *   MOBILE
   * 
   * @example
   * PC
   */
  agentGroup?: string;
  /**
   * @remarks
   * The time when the site monitoring task was created.
   * 
   * @example
   * 2021-11-01 11:05:18
   */
  createTime?: string;
  /**
   * @remarks
   * The interval at which detection requests are sent. Unit: minutes.
   * 
   * @example
   * 1
   */
  interval?: string;
  /**
   * @remarks
   * The extended options of the site monitoring task. The options vary based on the specified protocol. For more information, see [CreateSiteMonitor](https://help.aliyun.com/document_detail/115048.html).
   */
  optionsJson?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson;
  /**
   * @remarks
   * The ID of the site monitoring task.
   * 
   * @example
   * f5783760-1b39-4b6b-80e8-453d962a****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the site monitoring task.
   */
  taskName?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   1: The task is enabled.
   * *   2: The task is disabled.
   * 
   * @example
   * 1
   */
  taskState?: string;
  /**
   * @remarks
   * The protocol that is used by the site monitoring task. Valid values: HTTP, PING, TCP, UDP, DNS, SMTP, POP3, and FTP.
   * 
   * @example
   * TCP
   */
  taskType?: string;
  /**
   * @remarks
   * The time when the site monitoring task was updated.
   * 
   * @example
   * 2022-03-08 17:14:31
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agentGroup: 'AgentGroup',
      createTime: 'CreateTime',
      interval: 'Interval',
      optionsJson: 'OptionsJson',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      agentGroup: 'string',
      createTime: 'string',
      interval: 'string',
      optionsJson: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson,
      taskId: 'string',
      taskName: 'string',
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.optionsJson && typeof (this.optionsJson as any).validate === 'function') {
      (this.optionsJson as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitors extends $dara.Model {
  siteMonitor?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor[];
  static names(): { [key: string]: string } {
    return {
      siteMonitor: 'SiteMonitor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteMonitor: { 'type': 'array', 'itemType': DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor },
    };
  }

  validate() {
    if(Array.isArray(this.siteMonitor)) {
      $dara.Model.validateArray(this.siteMonitor);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A80DB41C-AF6C-50E1-ADB5-66DCBA3D266B
   */
  requestId?: string;
  /**
   * @remarks
   * The site monitoring tasks that are returned.
   */
  siteMonitors?: DescribeSiteMonitorListResponseBodySiteMonitors;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      siteMonitors: 'SiteMonitors',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      siteMonitors: DescribeSiteMonitorListResponseBodySiteMonitors,
      success: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.siteMonitors && typeof (this.siteMonitors as any).validate === 'function') {
      (this.siteMonitors as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

