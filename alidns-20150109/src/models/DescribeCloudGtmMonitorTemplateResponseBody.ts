// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodesIspCityNode extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  countryCode?: string;
  countryName?: string;
  groupName?: string;
  groupType?: string;
  ispCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      groupName: 'GroupName',
      groupType: 'GroupType',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      countryName: 'string',
      groupName: 'string',
      groupType: 'string',
      ispCode: 'string',
      ispName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodes extends $dara.Model {
  ispCityNode?: DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodesIspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.ispCityNode)) {
      $dara.Model.validateArray(this.ispCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmMonitorTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the health check template was created.
   * 
   * @example
   * 2024-03-23T13:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the health check template was created.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The number of consecutive times that a health check must fail before the application service is declared abnormal. This prevents false alarms caused by transient issues such as network jitter. Valid values:
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
   * The extended information in a JSON string. The parameters vary based on the protocol.
   * 
   * - For HTTP and HTTPS:
   * 
   *   **host**: The Host field in the HTTP or HTTPS request header. This field identifies the website that you want to access. The default value is the primary domain name. If the target website has specific host requirements, modify this parameter.
   * 
   *   **path**: The URL path for HTTP or HTTPS health checks. The default value is /.
   * 
   *   **code**: The system determines whether the web server is working as expected based on the return code. If the return code is greater than the specified threshold, the application service is considered abnormal.
   * 
   *   - 400: Bad Request. If an HTTP or HTTPS request contains incorrect parameters, the web server returns a code greater than 400. If you set the threshold to 400, specify the exact URL path.
   * 
   *   - 500: Server Error. If an exception occurs on the web server, it returns a code greater than 500. The default threshold is 500.
   * 
   *   **sni**: Specifies whether to enable Server Name Indication (SNI). This parameter is used only for the HTTPS protocol. SNI is a Transport Layer Security (TLS) extension that allows a client to specify the hostname it wants to connect to at the start of the TLS handshake. This allows the server to present the correct certificate for that hostname.
   * 
   *   - true: Enable SNI.
   * 
   *   - false: Disable SNI.
   * 
   *   **followRedirect**: Specifies whether to follow 3xx redirections.
   * 
   *   - true: If the status code returned by the detection point is 3xx (301, 302, 303, 307, or 308), the system follows the redirection.
   * 
   *   - false: The system does not follow the redirection.
   * 
   * - For ping:
   * 
   *   **packetNum**: The number of ICMP packets to send for each ping health check. Valid values: 20, 50, and 100.
   * 
   *   **packetLossRate**: The packet loss rate threshold. For each ping health check, the system calculates the packet loss rate. If the packet loss rate reaches the threshold, an alert is triggered. Packet loss rate = (Number of lost packets / Total number of sent ICMP packets) × 100%. Valid values for the packet loss rate are 10, 30, 40, 80, 90, and 100.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The percentage of failed detection points. If the percentage of failed detection points exceeds this value, the endpoint is declared abnormal. Valid values:
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
   * The IP address type of the detection points:
   * 
   * - IPv4: The target address is an IPv4 address.
   * 
   * - IPv6: The target address is an IPv6 address.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  ispCityNodes?: DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodes;
  /**
   * @remarks
   * The name of the health check template. To easily identify the template, specify a name that indicates the health check protocol.
   * 
   * @example
   * Ping-IPv4
   */
  name?: string;
  /**
   * @remarks
   * The protocol used to probe the target IP address:
   * 
   * - ping
   * 
   * - tcp
   * 
   * - http
   * 
   * - https
   * 
   * @example
   * ping
   */
  protocol?: string;
  /**
   * @remarks
   * The remarks on the health check template.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 6AEC7A64-3CB1-4C49-8B35-0B901F1E26BF
   */
  requestId?: string;
  /**
   * @remarks
   * The unique ID of the health check template.
   * 
   * @example
   * mtp-89518052425100****
   */
  templateId?: string;
  /**
   * @remarks
   * The health check timeout period in milliseconds. If a packet is not returned within the specified timeout period, the health check fails. Valid values:
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
  /**
   * @remarks
   * The time when the health check template was last modified.
   * 
   * @example
   * 2024-03-29T13:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the health check template was last modified.
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      evaluationCount: 'EvaluationCount',
      extendInfo: 'ExtendInfo',
      failureRate: 'FailureRate',
      interval: 'Interval',
      ipVersion: 'IpVersion',
      ispCityNodes: 'IspCityNodes',
      name: 'Name',
      protocol: 'Protocol',
      remark: 'Remark',
      requestId: 'RequestId',
      templateId: 'TemplateId',
      timeout: 'Timeout',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      evaluationCount: 'number',
      extendInfo: 'string',
      failureRate: 'number',
      interval: 'number',
      ipVersion: 'string',
      ispCityNodes: DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodes,
      name: 'string',
      protocol: 'string',
      remark: 'string',
      requestId: 'string',
      templateId: 'string',
      timeout: 'number',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.ispCityNodes && typeof (this.ispCityNodes as any).validate === 'function') {
      (this.ispCityNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

