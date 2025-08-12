// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentHostsResponseBodyHostsHost extends $dara.Model {
  /**
   * @remarks
   * The version of the CloudMonitor agent.
   * 
   * @example
   * 3.4.6
   */
  agentVersion?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 103201326074****
   */
  aliUid?: number;
  /**
   * @remarks
   * The elastic IP address (EIP) of the host.
   * 
   * @example
   * 192.168.XX.XX
   */
  eipAddress?: string;
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-bp16i16k9gcezyfrp****
   */
  eipId?: string;
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * hostIP
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-a2d5q7pm3f9yr212****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the ECS instance.
   * 
   * @example
   * ecs.n4
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The IP address of the host.
   * 
   * > Multiple IP addresses are separated with commas (,).
   * 
   * @example
   * 192.168.XX.XX
   */
  ipGroup?: string;
  /**
   * @remarks
   * The IP address of the Network Address Translation (NAT) gateway.
   * 
   * @example
   * 192.168.XX.XX
   */
  natIp?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The operating system.
   * 
   * @example
   * Linux
   */
  operatingSystem?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The serial number of the host. A host that is not provided by Alibaba Cloud has a serial number instead of an instance ID.
   * 
   * > This parameter can be used to accurately search for a monitored host.
   * 
   * @example
   * x12335-6cc8-4a22-9f21-1a00a719****
   */
  serialNumber?: string;
  /**
   * @remarks
   * Indicates whether the host is provided by Alibaba Cloud. Valid values:
   * 
   * *   true: The host is provided by Alibaba Cloud.
   * *   false: The host is not provided by Alibaba Cloud.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The information about the hosts.
   */
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

