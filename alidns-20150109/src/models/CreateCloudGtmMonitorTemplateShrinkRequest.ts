// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmMonitorTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can specify a custom value for this parameter, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The extended information. The value of this parameter is a JSON string. The required parameters vary based on the health check protocol.
   * 
   * *   HTTP or HTTPS:
   * 
   *     **host**: the Host field of an HTTP or HTTPS request header during an HTTP or HTTPS health check. The parameter value indicates the HTTP website that you want to visit. By default, the value is the primary domain name. You can change the value based on your business requirements.
   * 
   *     **path**: the URL for HTTP or HTTPS health checks. Default value: /.
   * 
   *     **code**: the alert threshold. During an HTTP or HTTPS health check, the system checks whether a web server functions as expected based on the status code that is returned from the web server. If the returned status code is greater than the specified threshold, the corresponding application service address is deemed abnormal. Valid values:
   * 
   *     *   400: specifies an invalid request. If an HTTP or HTTPS request contains invalid request parameters, a web server returns a status code that is greater than 400. You must set path to an exact URL if you set code to 400.
   *     *   500: specifies a server error. If some exceptions occur on a web server, the web server returns a status code that is greater than 500. This value is used by default.
   * 
   *     **sni**: specifies whether to enable Server Name Indication (SNI). This parameter is used only when the health check protocol is HTTPS. SNI is an extension to the Transport Layer Security (TLS) protocol, which allows a client to specify the host to be connected when the client sends a TLS handshake request. TLS handshakes occur before any data of HTTP requests is sent. Therefore, SNI enables servers to identify the services that clients are attempting to access before certificates are sent. This allows the servers to present correct certificates to the clients. Valid values:
   * 
   *     *   true: enables SNI.
   *     *   false: disables SNI.
   * 
   *     **followRedirect**: specifies whether to follow 3XX redirects. Valid values:
   * 
   *     *   true: follows 3XX redirects. You are redirected to the destination address if a 3XX status code such as 301, 302, 303, 307, or 308 is returned.
   *     *   false: does not follow 3XX redirects.
   * 
   * *   ping:
   * 
   *     **packetNum**: the total number of Internet Control Message Protocol (ICMP) packets that are sent to the address for each ping-based health check. Valid values: 20, 50, and 100.
   * 
   *     **packetLossRate**: the ICMP packet loss rate for each ping-based health check. The packet loss rate in a health check can be calculated by using the following formula: Packet loss rate in a health check = (Number of lost packets/Total number of sent ICMP packets) × 100%. If the packet loss rate reaches the threshold, an alert is triggered. Valid values: 10, 30, 40, 80, 90, and 100.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50
   */
  failureRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The IP address type of health check nodes. Valid values:
   * 
   * *   IPv4: You can set IpVersion to IPv4 to perform health checks on IPv4 addresses.
   * *   IPv6: You can set IpVersion to IPv6 to perform health checks on IPv6 addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The health check nodes. You can call the [ListCloudGtmMonitorNodes](~~ListCloudGtmMonitorNodes~~) operation to obtain the health check nodes.
   * 
   * This parameter is required.
   */
  ispCityNodesShrink?: string;
  /**
   * @remarks
   * The name of the health check template. We recommend that you use a name that distinguishes the type of health check protocol used.
   * 
   * This parameter is required.
   * 
   * @example
   * Ping-IPv4
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ping
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      evaluationCount: 'EvaluationCount',
      extendInfo: 'ExtendInfo',
      failureRate: 'FailureRate',
      interval: 'Interval',
      ipVersion: 'IpVersion',
      ispCityNodesShrink: 'IspCityNodes',
      name: 'Name',
      protocol: 'Protocol',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      evaluationCount: 'number',
      extendInfo: 'string',
      failureRate: 'number',
      interval: 'number',
      ipVersion: 'string',
      ispCityNodesShrink: 'string',
      name: 'string',
      protocol: 'string',
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

