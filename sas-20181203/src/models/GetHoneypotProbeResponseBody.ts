// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotProbeResponseBodyDataControlNode extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the management node.
   * 
   * @example
   * i-bp19ijepxytwtzrk****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * 37a15ff1-3475-4897-aa6c-f7fd9122****
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the management node.
   * 
   * @example
   * online-honeypot
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      nodeId: 'string',
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotProbeResponseBodyDataHoneyPotProbeScanPort extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the service that is monitored.
   * 
   * @example
   * 15389
   */
  id?: number;
  /**
   * @remarks
   * The ports that are monitored.
   * 
   * @example
   * {
   *     "tcp": "1-65535",
   *     "udp": "1-65535"
   * }
   */
  ports?: string;
  /**
   * @remarks
   * The ID of the probe.
   * 
   * @example
   * a46f5162-c70d-4e26-8ddf-7435feca****
   */
  probeId?: string;
  /**
   * @remarks
   * The IP addresses that are monitored.
   */
  serviceIpList?: string[];
  /**
   * @remarks
   * The monitoring status. Valid values:
   * 
   * *   **1**: abnormal
   * *   **3**: normal
   * 
   * @example
   * 3
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ports: 'Ports',
      probeId: 'ProbeId',
      serviceIpList: 'ServiceIpList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ports: 'string',
      probeId: 'string',
      serviceIpList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceIpList)) {
      $dara.Model.validateArray(this.serviceIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotProbeResponseBodyDataHoneypotProbeBindListBindPortList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the port is bound.
   * 
   * @example
   * false
   */
  bindPort?: boolean;
  /**
   * @remarks
   * The end port on which the probe monitors.
   * 
   * @example
   * 80
   */
  endPort?: number;
  /**
   * @remarks
   * The error that is returned if an error occurred in the port of the honeypot that is bound to the probe.
   * 
   * @example
   * portmap failed
   */
  err?: string;
  /**
   * @remarks
   * Indicates whether the port is a fixed port.
   * 
   * @example
   * false
   */
  fixed?: boolean;
  /**
   * @remarks
   * The unique ID of the port binding record.
   * 
   * @example
   * 2512
   */
  id?: number;
  /**
   * @remarks
   * The error message that is returned if an error occurred in the port of the honeypot that is bound to the probe.
   * 
   * @example
   * listen 22 tcp4 failed
   */
  msg?: string;
  /**
   * @remarks
   * The type of the protocol.
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The start port on which the probe monitors.
   * 
   * @example
   * 22
   */
  startPort?: number;
  /**
   * @remarks
   * The status of the port of the honeypot that is bound to the probe. Valid values:
   * 
   * *   **1**: abnormal
   * *   **3**: normal
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      bindPort: 'BindPort',
      endPort: 'EndPort',
      err: 'Err',
      fixed: 'Fixed',
      id: 'Id',
      msg: 'Msg',
      proto: 'Proto',
      startPort: 'StartPort',
      status: 'Status',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindPort: 'boolean',
      endPort: 'number',
      err: 'string',
      fixed: 'boolean',
      id: 'number',
      msg: 'string',
      proto: 'string',
      startPort: 'number',
      status: 'number',
      targetPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotProbeResponseBodyDataHoneypotProbeBindList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the honeypot that is bound to the probe.
   * 
   * @example
   * 45378f64-d7b4-4a53-9c48-4303eb4b****
   */
  bindId?: string;
  /**
   * @remarks
   * The ports that are bound to the probe.
   */
  bindPortList?: GetHoneypotProbeResponseBodyDataHoneypotProbeBindListBindPortList[];
  /**
   * @remarks
   * The honeypot ID.
   * 
   * @example
   * 913347774a3b3c378c6a50f66de23dfa097765214ec3f0526b01c67bf59c****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The IP addresses that are monitored.
   */
  serviceIpList?: string[];
  /**
   * @remarks
   * The status of the honeypot that is bound to the probe. Valid values:
   * 
   * *   **1**: abnormal
   * *   **3**: normal
   * 
   * @example
   * 3
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bindId: 'BindId',
      bindPortList: 'BindPortList',
      honeypotId: 'HoneypotId',
      serviceIpList: 'ServiceIpList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindId: 'string',
      bindPortList: { 'type': 'array', 'itemType': GetHoneypotProbeResponseBodyDataHoneypotProbeBindListBindPortList },
      honeypotId: 'string',
      serviceIpList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bindPortList)) {
      $dara.Model.validateArray(this.bindPortList);
    }
    if(Array.isArray(this.serviceIpList)) {
      $dara.Model.validateArray(this.serviceIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotProbeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether address resolution protocol (ARP) is enabled for the check type.
   * 
   * @example
   * true
   */
  arp?: boolean;
  /**
   * @remarks
   * An array consisting of the IP addresses that can be monitored.
   */
  canListenIpList?: string[];
  /**
   * @remarks
   * The CIDR blocks of the probe deployed in a virtual private cloud (VPC).
   */
  cidrList?: string[];
  /**
   * @remarks
   * The information about the management node.
   */
  controlNode?: GetHoneypotProbeResponseBodyDataControlNode;
  /**
   * @remarks
   * The CPU utilization.
   * 
   * @example
   * 0.51
   */
  cpuLoad?: number;
  /**
   * @remarks
   * The time when the probe was deployed.
   * 
   * @example
   * 1669363825000
   */
  deployTime?: number;
  /**
   * @remarks
   * The name of the probe.
   * 
   * @example
   * test-probe
   */
  displayName?: string;
  /**
   * @remarks
   * The ports that the honeypot monitors.
   */
  honeyPotProbeScanPort?: GetHoneypotProbeResponseBodyDataHoneyPotProbeScanPort;
  /**
   * @remarks
   * The honeypots that are bound to the probe.
   */
  honeypotProbeBindList?: GetHoneypotProbeResponseBodyDataHoneypotProbeBindList[];
  /**
   * @remarks
   * The IP address of the server on which the probe is deployed.
   * 
   * @example
   * 33.53.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * An array consisting of the IP addresses that can be monitored.
   */
  listenIpList?: string[];
  /**
   * @remarks
   * The memory usage.
   * 
   * @example
   * 1.94
   */
  memoryLoad?: number;
  /**
   * @remarks
   * The operating system of the server on which the probe is deployed. Valid values:
   * 
   * *   windows
   * *   linux
   * 
   * @example
   * windows
   */
  osType?: string;
  /**
   * @remarks
   * Indicates whether ping is enabled for the check type.
   * 
   * @example
   * false
   */
  ping?: boolean;
  /**
   * @remarks
   * The ID of the probe.
   * 
   * @example
   * 40f6501d-45ec-4bf0-b813-0072ceb4****
   */
  probeId?: string;
  /**
   * @remarks
   * The type of the probe. Valid values:
   * 
   * *   **host_probe**: host probe
   * *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe
   * 
   * @example
   * host_probe
   */
  probeType?: string;
  /**
   * @remarks
   * The version of the probe.
   * 
   * @example
   * 18060096
   */
  probeVersion?: string;
  /**
   * @remarks
   * The IP address of the proxy server.
   * 
   * @example
   * 47.108.XX.XX
   */
  proxyIp?: string;
  /**
   * @remarks
   * The status of the probe. Valid values:
   * 
   * *   **installed**: installed
   * *   **install_failed**: installation failed
   * *   **online**: online
   * *   **offline**: offline
   * *   **unnormal**: abnormal
   * *   **unprobe**: unauthorized
   * *   **uninstalling**: being uninstalled
   * *   **uninstalled**: uninstalled
   * *   **uninstall_failed**: uninstallation failed
   * *   **not_exist**: not installed
   * 
   * @example
   * online
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the asset on which the host probe is deployed.
   * 
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the VPC in which the probe is deployed.
   * 
   * @example
   * vpc-2vchkxmf2j9yjt3x2****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arp: 'Arp',
      canListenIpList: 'CanListenIpList',
      cidrList: 'CidrList',
      controlNode: 'ControlNode',
      cpuLoad: 'CpuLoad',
      deployTime: 'DeployTime',
      displayName: 'DisplayName',
      honeyPotProbeScanPort: 'HoneyPotProbeScanPort',
      honeypotProbeBindList: 'HoneypotProbeBindList',
      hostIp: 'HostIp',
      listenIpList: 'ListenIpList',
      memoryLoad: 'MemoryLoad',
      osType: 'OsType',
      ping: 'Ping',
      probeId: 'ProbeId',
      probeType: 'ProbeType',
      probeVersion: 'ProbeVersion',
      proxyIp: 'ProxyIp',
      status: 'Status',
      uuid: 'Uuid',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arp: 'boolean',
      canListenIpList: { 'type': 'array', 'itemType': 'string' },
      cidrList: { 'type': 'array', 'itemType': 'string' },
      controlNode: GetHoneypotProbeResponseBodyDataControlNode,
      cpuLoad: 'number',
      deployTime: 'number',
      displayName: 'string',
      honeyPotProbeScanPort: GetHoneypotProbeResponseBodyDataHoneyPotProbeScanPort,
      honeypotProbeBindList: { 'type': 'array', 'itemType': GetHoneypotProbeResponseBodyDataHoneypotProbeBindList },
      hostIp: 'string',
      listenIpList: { 'type': 'array', 'itemType': 'string' },
      memoryLoad: 'number',
      osType: 'string',
      ping: 'boolean',
      probeId: 'string',
      probeType: 'string',
      probeVersion: 'string',
      proxyIp: 'string',
      status: 'number',
      uuid: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.canListenIpList)) {
      $dara.Model.validateArray(this.canListenIpList);
    }
    if(Array.isArray(this.cidrList)) {
      $dara.Model.validateArray(this.cidrList);
    }
    if(this.controlNode && typeof (this.controlNode as any).validate === 'function') {
      (this.controlNode as any).validate();
    }
    if(this.honeyPotProbeScanPort && typeof (this.honeyPotProbeScanPort as any).validate === 'function') {
      (this.honeyPotProbeScanPort as any).validate();
    }
    if(Array.isArray(this.honeypotProbeBindList)) {
      $dara.Model.validateArray(this.honeypotProbeBindList);
    }
    if(Array.isArray(this.listenIpList)) {
      $dara.Model.validateArray(this.listenIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotProbeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the probe.
   */
  data?: GetHoneypotProbeResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6550E0E6-FD6C-5F39-AB5E-35B30DCA97B5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHoneypotProbeResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

