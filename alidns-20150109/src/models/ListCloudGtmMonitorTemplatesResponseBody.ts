// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode extends $dara.Model {
  /**
   * @remarks
   * City code.
   * 
   * @example
   * 738
   */
  cityCode?: string;
  /**
   * @remarks
   * City name.
   * 
   * @example
   * Beijing
   */
  cityName?: string;
  /**
   * @remarks
   * Country code.
   * 
   * @example
   * 629
   */
  countryCode?: string;
  /**
   * @remarks
   * Country name.
   * 
   * @example
   * China
   */
  countryName?: string;
  /**
   * @remarks
   * Probe node group name.
   * 
   * @example
   * BGP Nodes
   */
  groupName?: string;
  /**
   * @remarks
   * Probe node group types:
   * - BGP: BGP nodes
   * - OVERSEAS: International nodes
   * - ISP: Carrier nodes
   * 
   * @example
   * BGP
   */
  groupType?: string;
  /**
   * @remarks
   * Operator code.
   * 
   * @example
   * 465
   */
  ispCode?: string;
  /**
   * @remarks
   * Operator name.
   * 
   * @example
   * Alibaba
   */
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

export class ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodes extends $dara.Model {
  ispCityNode?: ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode },
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

export class ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate extends $dara.Model {
  /**
   * @remarks
   * Health check template creation time.
   * 
   * @example
   * 2024-03-23T13:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * Health check template creation time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The number of retries. The system will only judge the application service as abnormal after consecutive monitoring failures to prevent inaccurate monitoring results due to momentary network fluctuations or other reasons. Available retry options are:
   * - 1 - 2 - 3
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
   *     *   400: indicates an invalid request. If an HTTP or HTTPS request contains invalid request parameters, a web server returns a status code that is greater than 400. You must specify an exact URL for path if you set code to 400.
   *     *   500: indicates a server error. If some exceptions occur on a web server, the web server returns a status code that is greater than 500. This value is used by default.
   * 
   *     **sni**: indicates whether Server Name Indication (SNI) is enabled. This parameter is used only when the health check protocol is HTTPS. SNI is an extension to the Transport Layer Security (TLS) protocol, which allows a client to specify the host to be connected when the client sends a TLS handshake request. TLS handshakes occur before any data of HTTP requests is sent. Therefore, SNI enables servers to identify the services that clients are attempting to access before certificates are sent. This allows the servers to present correct certificates to the clients. Valid values:
   * 
   *     *   true: SNI is enabled.
   *     *   false: SNI is disabled.
   * 
   *     **followRedirect**: indicates whether 3XX redirects are followed. Valid values:
   * 
   *     *   true: 3XX redirects are followed. You are redirected to the destination address if a 3XX status code such as 301, 302, 303, 307, or 308 is returned.
   *     *   false: 3XX redirects are not followed.
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
   * Percentage of selected node probe failures (%), that is, the percentage of unhealthy check points among total probe points. When the failure ratio exceeds the set threshold, the service address is judged as abnormal. The available failure ratio thresholds are:
   * - 20
   * - 50
   * - 80
   * - 100
   * 
   * @example
   * 50
   */
  failureRate?: number;
  /**
   * @remarks
   * The time interval between each check (in seconds), with a default of probing once every minute. The minimum supported health check interval is 15 seconds, available for flagship edition instances.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The IP address type of health check nodes. Valid values:
   * 
   * *   IPv4: applicable when health checks are performed on IPv4 addresses.
   * *   IPv6: applicable when health checks are performed on IPv6 addresses.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The health check nodes. You can call the [ListCloudGtmMonitorNodes](~~ListCloudGtmMonitorNodes~~) operation to obtain the health check nodes.
   */
  ispCityNodes?: ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodes;
  /**
   * @remarks
   * The name of the health check probe template, generally for the convenience of configuration personnel to distinguish and remember.
   * 
   * @example
   * IPv4-Ping
   */
  name?: string;
  /**
   * @remarks
   * Protocol types for initiating probes to the target IP address:
   * - ping
   * - tcp
   * - http
   * - https
   * 
   * @example
   * ping
   */
  protocol?: string;
  /**
   * @remarks
   * Remarks for the health check template.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the health check template. This ID uniquely identifies the health check template.
   * 
   * @example
   * mtp-89518052425100**80
   */
  templateId?: string;
  /**
   * @remarks
   * Probe timeout (in milliseconds), data packets not returned within the timeout period are deemed as health check timeouts:
   * - 2000
   * - 3000
   * - 5000
   * - 10000
   * 
   * @example
   * 5000
   */
  timeout?: number;
  /**
   * @remarks
   * Last modification time of the health check template.
   * 
   * @example
   * 2024-03-29T13:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Health check template configuration modification time (timestamp).
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
      ispCityNodes: ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodes,
      name: 'string',
      protocol: 'string',
      remark: 'string',
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

export class ListCloudGtmMonitorTemplatesResponseBodyTemplates extends $dara.Model {
  template?: ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': ListCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmMonitorTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number, starting from 1, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  /**
   * @remarks
   * The health check templates.
   */
  templates?: ListCloudGtmMonitorTemplatesResponseBodyTemplates;
  /**
   * @remarks
   * Total number of health check template entries retrieved.
   * 
   * @example
   * 30
   */
  totalItems?: number;
  /**
   * @remarks
   * Total number of pages after data pagination.
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: ListCloudGtmMonitorTemplatesResponseBodyTemplates,
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.templates && typeof (this.templates as any).validate === 'function') {
      (this.templates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

