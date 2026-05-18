// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentHostsResponseBodyHostsHost extends $dara.Model {
  agentVersion?: string;
  aliUid?: number;
  eipAddress?: string;
  eipId?: string;
  hostName?: string;
  instanceId?: string;
  instanceTypeFamily?: string;
  ipGroup?: string;
  natIp?: string;
  networkType?: string;
  operatingSystem?: string;
  region?: string;
  serialNumber?: string;
  isAliyunHost?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      aliUid: 'AliUid',
      eipAddress: 'EipAddress',
      eipId: 'EipId',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceTypeFamily: 'InstanceTypeFamily',
      ipGroup: 'IpGroup',
      natIp: 'NatIp',
      networkType: 'NetworkType',
      operatingSystem: 'OperatingSystem',
      region: 'Region',
      serialNumber: 'SerialNumber',
      isAliyunHost: 'isAliyunHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      aliUid: 'number',
      eipAddress: 'string',
      eipId: 'string',
      hostName: 'string',
      instanceId: 'string',
      instanceTypeFamily: 'string',
      ipGroup: 'string',
      natIp: 'string',
      networkType: 'string',
      operatingSystem: 'string',
      region: 'string',
      serialNumber: 'string',
      isAliyunHost: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBodyHosts extends $dara.Model {
  host?: DescribeMonitoringAgentHostsResponseBodyHostsHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': DescribeMonitoringAgentHostsResponseBodyHostsHost },
    };
  }

  validate() {
    if(Array.isArray(this.host)) {
      $dara.Model.validateArray(this.host);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  hosts?: DescribeMonitoringAgentHostsResponseBodyHosts;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 50
   */
  pageTotal?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 63EEBB2A-9E51-41E4-9E83-5DE7F3B292E0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hosts: 'Hosts',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hosts: DescribeMonitoringAgentHostsResponseBodyHosts,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageTotal: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.hosts && typeof (this.hosts as any).validate === 'function') {
      (this.hosts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

