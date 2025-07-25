// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode extends $dara.Model {
  /**
   * @example
   * 503
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 001
   */
  countryCode?: string;
  countryName?: string;
  /**
   * @example
   * BGP
   */
  groupName?: string;
  /**
   * @remarks
   * The group type of health check nodes. Valid values:
   * 
   * *   BGP: BGP node
   * *   OVERSEAS: node outside the Chinese mainland
   * *   ISP: Internet service provider (ISP) node
   * 
   * @example
   * BGP
   */
  groupType?: string;
  /**
   * @example
   * 465
   */
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

export class SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodes extends $dara.Model {
  ispCityNode?: SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode },
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

export class SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate extends $dara.Model {
  /**
   * @example
   * 2024-03-23T13:09Z
   */
  createTime?: string;
  /**
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @example
   * 2
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The extended information. The value of this parameter is a JSON string. The required parameters vary based on the health check protocol. Valid values:
   * 
   * *   **http(s)**:
   * 
   *     **host**: indicates the Host field of an HTTP or HTTPS request header during an HTTP or HTTPS health check. The parameter value indicates the HTTP website that you want to visit. By default, the value is the primary domain name. You can change the value based on your business requirements.
   * 
   *     **path**: the URL for HTTP or HTTPS health checks. Default value: /.
   * 
   *     **code**: indicates the alert threshold. During an HTTP or HTTPS health check, the system checks whether a web server functions as expected based on the status code that is returned from the web server. If the returned status code is greater than the specified threshold, the corresponding application service address is deemed abnormal. Valid values:
   * 
   *     *   400: indicates an invalid request. If an HTTP or HTTPS request contains invalid request parameters, a web server returns a status code that is greater than 400. If Verification Content is set to "The error code is greater than 400", you must specify an exact URL for the path parameter.
   *     *   500: indicates a server error. If some exceptions occur on a web server, the web server returns a status code that is greater than 500. The error code that is greater than 500 is used as the alert threshold by default.
   * 
   *     **sni**: indicates whether Server Name Indication (SNI) is enabled for HTTPS. SNI is an extension to the Transport Layer Security (TLS) protocol, which allows a client to specify the host to be connected when the client sends a TLS handshake request. TLS handshakes occur before any data of HTTP requests is sent. Therefore, SNI enables servers to identify the services that clients are attempting to access before certificates are sent. This allows the servers to present correct certificates to the clients. Valid values:
   * 
   *     *   true: SNI is enabled.
   *     *   false: SNI is disabled.
   * 
   *     **followRedirect**: indicates whether 3XX redirection is followed. Valid values:
   * 
   *     *   true: You are redirected to the destination address if a status code 3XX, such as 301, 302, 303, 307, or 308, is returned.
   *     *   false: You are not redirected to the destination address.
   * 
   * *   **ping**:
   * 
   *     **packetNum**: The total number of Internet Control Message Protocol (ICMP) packets that are sent to the address for each ping-based health check. Valid values: 20, 50, and 100.
   * 
   *     **packetLossRate**: The packet loss rate for each ping-based health check. The packet loss rate in a check can be calculated by using the following formula: Packet loss rate = (Number of lost packets/Total number of sent ICMP packets) × 100%. If the packet loss rate reaches the threshold, an alert is triggered. Valid values: 10, 30, 40, 80, 90, and 100.
   * 
   * @example
   * {\\"code\\":200,\\"path\\":\\"\\\\index.htm\\",\\"host\\":\\"aliyun.com\\"}
   */
  extendInfo?: string;
  /**
   * @example
   * 50
   */
  failureRate?: number;
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The IP address type of health check nodes. Valid values:
   * 
   * *   IPv4: applicable when the destination address of health checks is an IPv4 address
   * *   IPv6: applicable when the destination address of health checks is an IPv6 address
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The health check nodes.
   */
  ispCityNodes?: SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodes;
  /**
   * @example
   * IPv4-Ping
   */
  name?: string;
  /**
   * @example
   * ping
   */
  protocol?: string;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @example
   * mtp-89518052425100**80
   */
  templateId?: string;
  /**
   * @example
   * 5000
   */
  timeout?: number;
  /**
   * @example
   * 2024-03-29T13:20Z
   */
  updateTime?: string;
  /**
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
      ispCityNodes: SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodes,
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

export class SearchCloudGtmMonitorTemplatesResponseBodyTemplates extends $dara.Model {
  template?: SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplate },
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

export class SearchCloudGtmMonitorTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The health check templates.
   */
  templates?: SearchCloudGtmMonitorTemplatesResponseBodyTemplates;
  /**
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @example
   * 1
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
      templates: SearchCloudGtmMonitorTemplatesResponseBodyTemplates,
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

