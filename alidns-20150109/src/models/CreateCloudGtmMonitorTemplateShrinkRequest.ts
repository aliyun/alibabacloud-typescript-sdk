// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmMonitorTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US: English. This is the default value.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Make sure that the client token is unique for each request. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of consecutive failures that must occur before the system considers the application service unhealthy. This setting helps prevent false alarms caused by transient issues such as network jitter. Valid values:
   * 
   * - 1
   * 
   * - 2
   * 
   * - 3
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The extended information in a JSON string. The parameters vary based on the protocol.
   * 
   * - http(s):
   * 
   *   **host**: The Host field in the header of the HTTP or HTTPS request. This field identifies the website that you want to access. The default value is the primary domain name. If the destination website uses a specific host, change this value as needed.
   * 
   *   **path**: The URL path for the HTTP or HTTPS health check. The default value is "/".
   * 
   *   **code**: For an HTTP or HTTPS health check, the system determines whether the web server is working correctly based on the return code. If the return code is greater than this threshold, the system considers the application service unhealthy.
   * 
   *   - 400: Bad Request. If an HTTP or HTTPS request contains incorrect parameters, the web server returns a code greater than 400. If you set the threshold to 400, make sure that you specify the exact URL path.
   * 
   *   - 500: Server Error. If an exception occurs on the web server, it returns a code greater than 500. The default threshold is 500.
   * 
   *   **sni**: Specifies whether to enable Server Name Indication (SNI). This parameter applies only to the HTTPS protocol. SNI is a Transport Layer Security (TLS) extension that allows a client to specify the hostname to connect to at the start of the TLS handshake. This allows the server to present the correct certificate for the requested service.
   * 
   *   - true: Enable SNI.
   * 
   *   - false: Disable SNI.
   * 
   *   **followRedirect**: Specifies whether to follow 3xx redirects.
   * 
   *   - true: Follows the redirect if the detection point receives a 3xx status code, such as 301, 302, 303, 307, or 308.
   * 
   *   - false: Does not follow the redirect.
   * 
   * - ping:
   * 
   *   **packetNum**: The number of ICMP packets to send for each ping health check. Valid values: 20, 50, and 100.
   * 
   *   **packetLossRate**: The packet loss rate that triggers an alarm. For each ping health check, the system calculates the packet loss rate based on the sent ICMP packets. Packet loss rate = (Number of lost packets / Total number of sent ICMP packets) × 100%. An alarm is triggered if the packet loss rate reaches this threshold. Valid values: 10, 30, 40, 80, 90, and 100.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The failure rate threshold. An endpoint is considered unhealthy if the percentage of unhealthy detection points exceeds this value. Valid values:
   * 
   * - 20
   * 
   * - 50
   * 
   * - 80
   * 
   * - 100
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  failureRate?: number;
  /**
   * @remarks
   * The health check interval in seconds. The default value is 60. The minimum interval is 15 seconds, which is available only for Ultimate Edition instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The IP address type for health checks.
   * 
   * - IPv4: The destination address is an IPv4 address.
   * 
   * - IPv6: The destination address is an IPv6 address.
   * 
   * This parameter is required.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * A list of detection points. For more information, see [ListCloudGtmMonitorNodes](https://help.aliyun.com/document_detail/2797349.html).
   * 
   * This parameter is required.
   */
  ispCityNodesShrink?: string;
  /**
   * @remarks
   * The name of the health check template. Name the template to easily identify the health check protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * Ping-IPv4
   */
  name?: string;
  /**
   * @remarks
   * The protocol for health checks on the destination IP address.
   * 
   * - ping
   * 
   * - tcp
   * 
   * - http
   * 
   * - https
   * 
   * This parameter is required.
   * 
   * @example
   * ping
   */
  protocol?: string;
  /**
   * @remarks
   * The health check timeout in milliseconds. If a packet is not returned within the timeout period, the health check is considered to have timed out. Valid values:
   * 
   * - 2000
   * 
   * - 3000
   * 
   * - 5000
   * 
   * - 10000
   * 
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

