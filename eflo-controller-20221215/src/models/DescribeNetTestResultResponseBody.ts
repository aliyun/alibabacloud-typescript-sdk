// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetTestResultResponseBodyCommTestHosts extends $dara.Model {
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
   * The resource ID.
   * 
   * @example
   * i111670831721110797708
   */
  resourceId?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * VBw
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
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

export class DescribeNetTestResultResponseBodyCommTest extends $dara.Model {
  /**
   * @remarks
   * Number of GPUs
   * 
   * @example
   * 1
   */
  GPUNum?: string;
  /**
   * @remarks
   * All hosts infomation
   */
  hosts?: DescribeNetTestResultResponseBodyCommTestHosts[];
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
      GPUNum: 'string',
      hosts: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyCommTestHosts },
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

export class DescribeNetTestResultResponseBodyDelayTestHosts extends $dara.Model {
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
   * The IP address.
   * 
   * @example
   * 125.210.225.48
   */
  IP?: string;
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
   * Service name.
   * 
   * @example
   * NQU
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
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

export class DescribeNetTestResultResponseBodyDelayTest extends $dara.Model {
  /**
   * @remarks
   * All hosts infomation
   */
  hosts?: DescribeNetTestResultResponseBodyDelayTestHosts[];
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyDelayTestHosts },
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

export class DescribeNetTestResultResponseBodyTrafficTestClients extends $dara.Model {
  /**
   * @remarks
   * Network interface bond port
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * IP address.
   * 
   * @example
   * 192.168.1.1
   */
  IP?: string;
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
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
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

export class DescribeNetTestResultResponseBodyTrafficTestServers extends $dara.Model {
  /**
   * @remarks
   * Network interface bond port
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 47.121.110.190
   */
  IP?: string;
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
   * Service name.
   * 
   * @example
   * xMv
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
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

export class DescribeNetTestResultResponseBodyTrafficTest extends $dara.Model {
  /**
   * @remarks
   * All clients information
   */
  clients?: DescribeNetTestResultResponseBodyTrafficTestClients[];
  /**
   * @remarks
   * Call duration, in seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * When the protocol is RDMA, fill in True/False,
   * when the protocol is TCP, this field is empty.
   * 
   * @example
   * False
   */
  GDR?: string;
  /**
   * @remarks
   * Network protocol, either RDMA or TCP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * When the protocol is TCP, fill in the number of concurrent connections; when the protocol is RDMA, fill in the configured QP value.
   * 
   * @example
   * 1
   */
  QP?: number;
  /**
   * @remarks
   * Servers infomation.
   */
  servers?: DescribeNetTestResultResponseBodyTrafficTestServers[];
  /**
   * @remarks
   * Traffic model, either MTON or Fullmesh.
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
      clients: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyTrafficTestClients },
      duration: 'number',
      GDR: 'string',
      protocol: 'string',
      QP: 'number',
      servers: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyTrafficTestServers },
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

export class DescribeNetTestResultResponseBody extends $dara.Model {
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
   * Standard_Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * Specify when NetTestType is CommTest.
   */
  commTest?: DescribeNetTestResultResponseBodyCommTest;
  /**
   * @remarks
   * create time
   * 
   * @example
   * 2024-10-15T10:25:42+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * Fill in when the network test type is a delay test.
   */
  delayTest?: DescribeNetTestResultResponseBodyDelayTest;
  /**
   * @remarks
   * finish time
   * 
   * @example
   * 2024-10-16T02:04Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The type of the network test.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
  /**
   * @remarks
   * Test port number.
   * 
   * @example
   * 23604
   */
  port?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  /**
   * @remarks
   * result detail
   * 
   * @example
   * {}
   */
  resultDetial?: string;
  /**
   * @remarks
   * status of session
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * The ID of the test task. The unique identifier of a network test task.
   * 
   * @example
   * af35ce53-7c35-4277-834a-fbf49c316a96
   */
  testId?: string;
  /**
   * @remarks
   * Fill in when the network test type is a traffic test.
   */
  trafficTest?: DescribeNetTestResultResponseBodyTrafficTest;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTest: 'CommTest',
      creationTime: 'CreationTime',
      delayTest: 'DelayTest',
      finishedTime: 'FinishedTime',
      netTestType: 'NetTestType',
      port: 'Port',
      requestId: 'RequestId',
      resultDetial: 'ResultDetial',
      status: 'Status',
      testId: 'TestId',
      trafficTest: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTest: DescribeNetTestResultResponseBodyCommTest,
      creationTime: 'string',
      delayTest: DescribeNetTestResultResponseBodyDelayTest,
      finishedTime: 'string',
      netTestType: 'string',
      port: 'string',
      requestId: 'string',
      resultDetial: 'string',
      status: 'string',
      testId: 'string',
      trafficTest: DescribeNetTestResultResponseBodyTrafficTest,
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

