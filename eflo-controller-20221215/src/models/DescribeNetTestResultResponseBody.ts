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
   * The service name.
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
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  GPUNum?: string;
  /**
   * @remarks
   * The resource ID.
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
   * The communication library test category. Valid values: ACCL and NCCL.
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
   * The NIC bond interface.
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * The node IP address.
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
   * The hosts of the test nodes.
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
   * The NIC bond interface.
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * The node IP address.
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
   * The NIC bond interface.
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * The node IP address.
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
   * The resource IDs.
   */
  clients?: DescribeNetTestResultResponseBodyTrafficTestClients[];
  /**
   * @remarks
   * The duration of the workflow task. Unit: seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * If Protocol is set to RDMA, specify True or False. If Protocol is set to TCP, this field is empty.
   * 
   * @example
   * False
   */
  GDR?: string;
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
   * If Protocol is set to TCP, specify the number of test Concurrent Connections. If Protocol is set to RDMA, specify the QP value.
   * 
   * @example
   * 1
   */
  QP?: number;
  /**
   * @remarks
   * The list of servers.
   */
  servers?: DescribeNetTestResultResponseBodyTrafficTestServers[];
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
   * The communication library test configuration. This field is required when the traffic test type is communication library test.
   */
  commTest?: DescribeNetTestResultResponseBodyCommTest;
  /**
   * @remarks
   * The time when the diagnostic task was created. The time is in ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2024-10-15T10:25:42+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The latency test configuration. This field is required when the network test type is latency test.
   */
  delayTest?: DescribeNetTestResultResponseBodyDelayTest;
  /**
   * @remarks
   * The time when the diagnostic task was completed. The time is in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2024-10-16T02:04Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The network test type.
   * 
   * @example
   * DelayTest
   */
  netTestType?: string;
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
   * The request ID.
   * 
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the diagnostic result. The value is returned as a JSON string.
   * 
   * @example
   * {}
   */
  resultDetial?: string;
  /**
   * @remarks
   * The status of the diagnostic task. Valid values:
   * 
   * - InProgress: The diagnostic task is in progress.
   * - Finished: The diagnostic task is complete.
   * - Failed: The diagnostic task failed.
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * The ID of the test task. This is the unique identifier of the network test task.
   * 
   * @example
   * af35ce53-7c35-4277-834a-fbf49c316a96
   */
  testId?: string;
  /**
   * @remarks
   * If TrafficModel is set to Fullmesh, this field is empty.
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

