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
   * The name of the service.
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
   * The host IDs.
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
   * The CommTest type, which can be ACCL or NCCL.
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
   * The bonding of network interface card.
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
   * The name of the service.
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
   * The hosts of the test node.
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
   * The bonding of network interface card.
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
   * The name of the service.
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
   * The bonding of network interface card.
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
   * The name of the service.
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
   * The client IDs.
   */
  clients?: CreateNetTestTaskRequestTrafficTestClients[];
  /**
   * @remarks
   * The running duration of the pipeline job. Unit: seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * If the protocol is RDMA, enter True or False. If the protocol is TCP, leave this field empty.
   * 
   * @example
   * False
   */
  GDR?: boolean;
  /**
   * @remarks
   * The network protocol, which can be RDMA or TCP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * If the protocol is TCP, enter the number of concurrent connections. If the protocol is RDMA, enter the configured QP value.
   * 
   * @example
   * 1
   */
  QP?: number;
  /**
   * @remarks
   * The services.
   */
  servers?: CreateNetTestTaskRequestTrafficTestServers[];
  /**
   * @remarks
   * The traffic model, which can be MTON or Fullmesh.
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
   * Specify when NetTestType is CommTest.
   */
  commTest?: CreateNetTestTaskRequestCommTest;
  /**
   * @remarks
   * Specify when NetTestType is DelayTest.
   */
  delayTest?: CreateNetTestTaskRequestDelayTest;
  /**
   * @remarks
   * The type of the network test. Valid values: DelayTest, TrafficTest, and CommTest.
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
   * The port number.
   * 
   * @example
   * 23604
   */
  port?: string;
  /**
   * @remarks
   * If the TrafficModel is Fullmesh, leave this parameter empty.
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

