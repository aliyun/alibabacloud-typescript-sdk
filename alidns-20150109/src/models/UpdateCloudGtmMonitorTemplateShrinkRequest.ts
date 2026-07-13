// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmMonitorTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request. Make sure that the token is unique for each request. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of consecutive health check failures that must occur before an application service is considered abnormal. This helps prevent false alarms caused by transient issues such as network jitter. Valid values:
   * 
   * - 1
   * 
   * - 2
   * 
   * - 3
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The extended information in a JSON string. The parameters vary based on the health check protocol.
   * 
   * - HTTP and HTTPS:
   * 
   *   host: When you perform an HTTP or HTTPS health check, this parameter specifies the Host field in the HTTP request header. It identifies the target website. The default value is the primary domain name. If the target website has specific requirements for the Host field, modify this parameter as needed.
   * 
   *   path: The path for the HTTP or HTTPS health check. The default value is /.
   * 
   *   code: When you perform an HTTP or HTTPS health check, the system uses the return code from the web server to determine its status. If the return code exceeds the specified threshold, the application service is considered abnormal.
   * 
   *   - 400: Bad Request. If an HTTP or HTTPS request contains invalid parameters, the web server returns a code greater than 400. If you set the threshold to 400, make sure that you specify the exact URL path.
   * 
   *   - 500: Server Error. If the web server encounters an error, it returns a code greater than 500. The default threshold is 500.
   * 
   *   sni: Specifies whether to enable Server Name Indication (SNI). This parameter is used only for HTTPS health checks. SNI is an extension to the Transport Layer Security (TLS) protocol. It allows a client to specify the hostname it is trying to connect to at the start of the TLS handshake. Because the TLS handshake occurs before any HTTP data is sent, SNI allows the server to know which service the client is trying to access before sending the certificate. This enables the server to present the correct certificate to the client.
   * 
   *   - true: Enable SNI.
   * 
   *   - false: Disable SNI.
   * 
   *   followRedirect: Specifies whether to follow 3xx redirections.
   * 
   *   - true: Follow the redirection if the detection point receives a 3xx status code (301, 302, 303, 307, or 308).
   * 
   *   - false: Do not follow the redirection.
   * 
   * - Ping:
   * 
   *   packetNum: The number of ICMP packets to send for each ping health check. Valid values: 20, 50, and 100.
   * 
   *   packetLossRate: The packet loss rate that triggers an alarm. For each ping health check, the system calculates the packet loss rate. Packet loss rate = (Number of lost packets / Total number of sent ICMP packets) × 100%. An alarm is triggered if the packet loss rate reaches this threshold. Valid values: 10, 30, 40, 80, 90, and 100.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The percentage of failed detection points. An endpoint is considered abnormal if the percentage of detection points that fail the health check exceeds this threshold. Valid values:
   * 
   * - 20
   * 
   * - 50
   * 
   * - 80
   * 
   * - 100
   * 
   * @example
   * 50
   */
  failureRate?: number;
  /**
   * @remarks
   * The interval between health checks in seconds. The default value is 60. The minimum interval is 15 seconds. This feature is available only for Ultimate Edition instances.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The list of detection points. Call [ListCloudGtmMonitorNodes](https://help.aliyun.com/document_detail/2797327.html) to obtain the information.
   */
  ispCityNodesShrink?: string;
  /**
   * @remarks
   * The name of the health check template. For easy identification, name the template based on its health check protocol.
   * 
   * @example
   * Ping-IPv4
   */
  name?: string;
  /**
   * @remarks
   * The unique ID of the health check template that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * mtp-89518052425100****
   */
  templateId?: string;
  /**
   * @remarks
   * The timeout period for a health check in milliseconds. If a packet is not returned within the specified timeout period, the health check fails. Valid values:
   * 
   * - 2000
   * 
   * - 3000
   * 
   * - 5000
   * 
   * - 10000
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
      ispCityNodesShrink: 'IspCityNodes',
      name: 'Name',
      templateId: 'TemplateId',
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
      ispCityNodesShrink: 'string',
      name: 'string',
      templateId: 'string',
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

