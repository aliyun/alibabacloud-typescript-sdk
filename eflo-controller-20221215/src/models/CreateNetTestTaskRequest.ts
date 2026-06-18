// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetTestTaskRequestCommTestHosts extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 169.253.253.15
   */
  IP?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-tw-bqisacl3z6l
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i111670831721110797708
   */
  resourceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * VBw
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestCommTest extends $dara.Model {
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  GPUNum?: number;
  /**
   * @remarks
   * The hosts.
   */
  hosts?: CreateNetTestTaskRequestCommTestHosts[];
  /**
   * @remarks
   * The communication library model.
   * 
   * @example
   * intention_v4
   */
  model?: string;
  /**
   * @remarks
   * The type of communication library test. Valid values: ACCL and NCCL.
   * 
   * @example
   * ACCL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      GPUNum: 'GPUNum',
      hosts: 'Hosts',
      model: 'Model',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUNum: 'number',
      hosts: { 'type': 'array', 'itemType': CreateNetTestTaskRequestCommTestHosts },
      model: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestDelayTestHosts extends $dara.Model {
  /**
   * @remarks
   * The bonded NIC port.
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 125.210.225.48
   */
  IP?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-fou43an0a05
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-bcd3u1aee06
   */
  resourceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * NQU
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestDelayTest extends $dara.Model {
  /**
   * @remarks
   * The hosts of the test nodes.
   */
  hosts?: CreateNetTestTaskRequestDelayTestHosts[];
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': CreateNetTestTaskRequestDelayTestHosts },
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestTrafficTestClients extends $dara.Model {
  /**
   * @remarks
   * The bonded port of the network interface card (NIC).
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 192.168.1.1
   */
  IP?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-tw-w5elqg7pw18
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-20s41p6cx01
   */
  resourceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * xMv
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestTrafficTestServers extends $dara.Model {
  /**
   * @remarks
   * The bonded NIC port.
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 47.121.110.190
   */
  IP?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-tw-bqisacl3z6l
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-wwo3etaqu0b
   */
  resourceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * xMv
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequestTrafficTest extends $dara.Model {
  /**
   * @remarks
   * The client resources.
   */
  clients?: CreateNetTestTaskRequestTrafficTestClients[];
  /**
   * @remarks
   * The runtime duration of the flow task, in seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * If Protocol is set to RDMA, specify True or False. This field is empty if Protocol is set to TCP.
   * 
   * @example
   * False
   */
  GDR?: boolean;
  /**
   * @remarks
   * The network protocol. Valid values: RDMA and TCP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * If Protocol is set to TCP, specify the number of concurrent connections for the test. If Protocol is set to RDMA, specify the QP value.
   * 
   * @example
   * 1
   */
  QP?: number;
  /**
   * @remarks
   * The list of servers.
   */
  servers?: CreateNetTestTaskRequestTrafficTestServers[];
  /**
   * @remarks
   * The traffic model. Valid values: MTON and Fullmesh.
   * 
   * @example
   * Fullmesh
   */
  trafficModel?: string;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      duration: 'Duration',
      GDR: 'GDR',
      protocol: 'Protocol',
      QP: 'QP',
      servers: 'Servers',
      trafficModel: 'TrafficModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': CreateNetTestTaskRequestTrafficTestClients },
      duration: 'number',
      GDR: 'boolean',
      protocol: 'string',
      QP: 'number',
      servers: { 'type': 'array', 'itemType': CreateNetTestTaskRequestTrafficTestServers },
      trafficModel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    if(Array.isArray(this.servers)) {
      $dara.Model.validateArray(this.servers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetTestTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i119982311660892626523
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * Eflo-YJ-Test-Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Specify this parameter if NetTestType is set to CommTest.
   */
  commTest?: CreateNetTestTaskRequestCommTest;
  /**
   * @remarks
   * Specify this parameter if NetTestType is set to DelayTest.
   */
  delayTest?: CreateNetTestTaskRequestDelayTest;
  /**
   * @remarks
   * The type of network test. Valid values: DelayTest, TrafficTest, and CommTest.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * The network mode.
   * 
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @remarks
   * The test port number.
   * 
   * @example
   * 23604
   */
  port?: string;
  /**
   * @remarks
   * This field is empty if TrafficModel is set to Fullmesh.
   */
  trafficTest?: CreateNetTestTaskRequestTrafficTest;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTest: 'CommTest',
      delayTest: 'DelayTest',
      netTestType: 'NetTestType',
      networkMode: 'NetworkMode',
      port: 'Port',
      trafficTest: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTest: CreateNetTestTaskRequestCommTest,
      delayTest: CreateNetTestTaskRequestDelayTest,
      netTestType: 'string',
      networkMode: 'string',
      port: 'string',
      trafficTest: CreateNetTestTaskRequestTrafficTest,
    };
  }

  validate() {
    if(this.commTest && typeof (this.commTest as any).validate === 'function') {
      (this.commTest as any).validate();
    }
    if(this.delayTest && typeof (this.delayTest as any).validate === 'function') {
      (this.delayTest as any).validate();
    }
    if(this.trafficTest && typeof (this.trafficTest as any).validate === 'function') {
      (this.trafficTest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

