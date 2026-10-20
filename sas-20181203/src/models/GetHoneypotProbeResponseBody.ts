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
   * The management node ID.
   * 
   * @example
   * 37a15ff1-3475-4897-aa6c-f7fd9122****
   */
  nodeId?: string;
  /**
   * @remarks
   * The management node name.
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
   * The unique ID of the listening service.
   * 
   * @example
   * 15389
   */
  id?: number;
  /**
   * @remarks
   * The listening ports.
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
   * The unique ID of the probe.
   * 
   * @example
   * a46f5162-c70d-4e26-8ddf-7435feca****
   */
  probeId?: string;
  /**
   * @remarks
   * The list of listening IP addresses.
   */
  serviceIpList?: string[];
  /**
   * @remarks
   * The status of the listening service. Valid values:
   * - **1**: Service exception.
   * - **3**: Normal.
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
   * Specifies whether the port is bound.
   * 
   * @example
   * false
   */
  bindPort?: boolean;
  /**
   * @remarks
   * The ending listening port of the probe.
   * 
   * @example
   * 80
   */
  endPort?: number;
  /**
   * @remarks
   * The bound service port error.
   * 
   * @example
   * portmap failed
   */
  err?: string;
  /**
   * @remarks
   * Specifies whether the port is fixed.
   * 
   * @example
   * false
   */
  fixed?: boolean;
  /**
   * @remarks
   * The unique ID of the bound port record.
   * 
   * @example
   * 2512
   */
  id?: number;
  /**
   * @remarks
   * The error details of the bound service port.
   * 
   * @example
   * listen 22 tcp4 failed
   */
  msg?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The starting listening port of the probe.
   * 
   * @example
   * 22
   */
  startPort?: number;
  /**
   * @remarks
   * The status of the bound service port. Valid values:
   * - **1**: Service exception.
   * - **3**: Normal.
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
   * The unique ID of the bound service.
   * 
   * @example
   * 45378f64-d7b4-4a53-9c48-4303eb4b****
   */
  bindId?: string;
  /**
   * @remarks
   * The list of bound ports.
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
   * The list of listening IP addresses.
   */
  serviceIpList?: string[];
  /**
   * @remarks
   * The status of the bound honeypot service. Valid values:
   * - **1**: Service exception.
   * - **3**: Normal.
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
   * The ARP check item.
   * 
   * @example
   * true
   */
  arp?: boolean;
  /**
   * @remarks
   * The list of listenable IP addresses.
   */
  canListenIpList?: string[];
  /**
   * @remarks
   * The list of CIDR blocks covered by the VPC probe.
   */
  cidrList?: string[];
  /**
   * @remarks
   * The management node.
   */
  controlNode?: GetHoneypotProbeResponseBodyDataControlNode;
  /**
   * @remarks
   * The CPU usage.
   * 
   * @example
   * 0.51
   */
  cpuLoad?: number;
  /**
   * @remarks
   * The deployment time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1669363825000
   */
  deployTime?: number;
  /**
   * @remarks
   * The probe name.
   * 
   * @example
   * test-probe
   */
  displayName?: string;
  /**
   * @remarks
   * The list of honeypot listening port scanning services.
   */
  honeyPotProbeScanPort?: GetHoneypotProbeResponseBodyDataHoneyPotProbeScanPort;
  /**
   * @remarks
   * The list of honeypot services bound to the probe.
   */
  honeypotProbeBindList?: GetHoneypotProbeResponseBodyDataHoneypotProbeBindList[];
  /**
   * @remarks
   * The local address bound to the probe.
   * 
   * @example
   * 33.53.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * The list of listenable IP addresses.
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
   * The operating system type of the probe instance. Valid values:
   * - windows: Windows.
   * - linux: Linux.
   * 
   * @example
   * windows
   */
  osType?: string;
  /**
   * @remarks
   * The ping check item.
   * 
   * @example
   * false
   */
  ping?: boolean;
  /**
   * @remarks
   * The probe ID.
   * 
   * @example
   * 40f6501d-45ec-4bf0-b813-0072ceb4****
   */
  probeId?: string;
  /**
   * @remarks
   * The probe type. Valid values:
   * - **host_probe**: Host probe.
   * - **vpc_black_hole_probe**: VPC blackhole probe.
   * 
   * @example
   * host_probe
   */
  probeType?: string;
  /**
   * @remarks
   * The probe version.
   * 
   * @example
   * 18060096
   */
  probeVersion?: string;
  /**
   * @remarks
   * The proxy IP address deployed in the IDC.
   * 
   * @example
   * 47.108.XX.XX
   */
  proxyIp?: string;
  /**
   * @remarks
   * The probe status. Valid values:
   * - **installed**: Installed successfully.
   * - **install_failed**: Installation failed.
   * - **online**: Normal.
   * - **offline**: Offline.
   * - **unnormal**: Service exception.
   * - **unprobe**: Unauthorized.
   * - **uninstalling**: Uninstalling.
   * - **uninstalled**: Uninstalled successfully.
   * - **uninstall_failed**: Uninstallation failed.
   * - **not_exist**: Not installed.
   * 
   * @example
   * online
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the asset instance where the host probe is located.
   * 
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the VPC-connected instance where the VPC probe is located.
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
   * The result code. A value of **200** indicates success, whereas any other value indicates failure. You can use this field to identify the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The probe data.
   */
  data?: GetHoneypotProbeResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the response.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned by the API request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. It is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 6550E0E6-FD6C-5F39-AB5E-35B30DCA97B5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * - **true**: The API call is successful.
   * - **false**: The API call failed.
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

