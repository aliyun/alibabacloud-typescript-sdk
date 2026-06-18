// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetTestResultsResponseBodyNetTestResultsCommTestHosts extends $dara.Model {
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 10.51.16.21
   */
  IP?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-wwo3ete****
   */
  resourceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * www.xinjiaoyu.com
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

export class ListNetTestResultsResponseBodyNetTestResultsCommTest extends $dara.Model {
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 4
   */
  GPUNum?: string;
  /**
   * @remarks
   * The hosts of the test nodes.
   */
  hosts?: ListNetTestResultsResponseBodyNetTestResultsCommTestHosts[];
  /**
   * @remarks
   * The communication library model.
   * 
   * @example
   * AllToAll
   */
  model?: string;
  /**
   * @remarks
   * The type of the communication library test. Valid values: ACCL or NCCL.
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
      hosts: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsCommTestHosts },
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

export class ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts extends $dara.Model {
  /**
   * @remarks
   * The bonded port of the network interface card.
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
   * pgm-bp174z988a27wre71o.pg.rds.aliyuncs.com
   */
  IP?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-wwo3ete****
   */
  resourceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * WrF
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

export class ListNetTestResultsResponseBodyNetTestResultsDelayTest extends $dara.Model {
  /**
   * @remarks
   * The list of resources.
   */
  hosts?: ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts[];
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsDelayTestHosts },
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

export class ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients extends $dara.Model {
  /**
   * @remarks
   * The bonded port of the network interface card.
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
   * 74.73.100.1
   */
  IP?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-20p36bqet39
   */
  resourceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * prod-gf-cn.juequling.com
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

export class ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers extends $dara.Model {
  /**
   * @remarks
   * The bonded port of the network interface card.
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
   * 10.1.168.183
   */
  IP?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-wwo3ete****
   */
  resourceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * prod-gf-cn.juequling.com
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

export class ListNetTestResultsResponseBodyNetTestResultsTrafficTest extends $dara.Model {
  /**
   * @remarks
   * The client.
   */
  clients?: ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients[];
  /**
   * @remarks
   * The runtime of the flow task, in seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * If the protocol is RDMA, specify True or False. If the protocol is TCP, this field is empty.
   * 
   * @example
   * True
   */
  GDR?: string;
  /**
   * @remarks
   * The network protocol. Valid values are RDMA and TCP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * If the protocol is TCP, this parameter specifies the number of concurrent connections for the test. If the protocol is RDMA, this parameter specifies the QP value.
   * 
   * @example
   * RDMA
   */
  QP?: number;
  /**
   * @remarks
   * This field is empty if \\`TrafficModel\\` is set to \\`Fullmesh\\`.
   */
  servers?: ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers[];
  /**
   * @remarks
   * The traffic model. Valid values are MTON and Fullmesh.
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
      clients: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients },
      duration: 'number',
      GDR: 'string',
      protocol: 'string',
      QP: 'number',
      servers: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers },
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

export class ListNetTestResultsResponseBodyNetTestResults extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i11066721171826501****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test
   */
  clusterName?: string;
  /**
   * @remarks
   * The details of the communication library test. This object is returned if the value of \\`NetTestType\\` is \\`CommTest\\`.
   */
  commTest?: ListNetTestResultsResponseBodyNetTestResultsCommTest;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-01-19T02:18:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The details of the delay test. This object is returned if the value of \\`NetTestType\\` is \\`DelayTest\\`.
   */
  delayTest?: ListNetTestResultsResponseBodyNetTestResultsDelayTest;
  /**
   * @remarks
   * The time when the task was completed.
   * 
   * @example
   * 2024-10-30T02:07Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The type of the network test.
   * 
   * @example
   * NetDiag
   */
  netTestType?: string;
  /**
   * @remarks
   * The network mode.
   * 
   * @example
   * 01
   */
  networkMode?: string;
  /**
   * @remarks
   * The test port.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The status of the network test task. Valid values: ● InProgress: The test is in progress. ● Finished: The test is complete. ● Failed: The test failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The test ID. It is the unique identifier of the resource test task.
   * 
   * @example
   * String	i-uf6i0tv2refv8wz*****
   */
  testId?: string;
  /**
   * @remarks
   * The details of the traffic test. This object is returned if the value of \\`NetTestType\\` is \\`TrafficTest\\`.
   */
  trafficTest?: ListNetTestResultsResponseBodyNetTestResultsTrafficTest;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      commTest: 'CommTest',
      creationTime: 'CreationTime',
      delayTest: 'DelayTest',
      finishedTime: 'FinishedTime',
      netTestType: 'NetTestType',
      networkMode: 'NetworkMode',
      port: 'Port',
      status: 'Status',
      testId: 'TestId',
      trafficTest: 'TrafficTest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      commTest: ListNetTestResultsResponseBodyNetTestResultsCommTest,
      creationTime: 'string',
      delayTest: ListNetTestResultsResponseBodyNetTestResultsDelayTest,
      finishedTime: 'string',
      netTestType: 'string',
      networkMode: 'string',
      port: 'string',
      status: 'string',
      testId: 'string',
      trafficTest: ListNetTestResultsResponseBodyNetTestResultsTrafficTest,
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

export class ListNetTestResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page. Maximum value: 100.
   * 
   * Default value:
   * 
   * - If you do not set this parameter or you set it to a value less than 20, the default value is 20.
   * - If you set the value to greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of nodes.
   */
  netTestResults?: ListNetTestResultsResponseBodyNetTestResults[];
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If this parameter is not returned, it indicates that all results have been returned.
   * 
   * @example
   * 3a6b93229825ac667104463b5679****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C683243-7915-57FB-9570-A2932C1C0F78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      netTestResults: 'NetTestResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      netTestResults: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResults },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.netTestResults)) {
      $dara.Model.validateArray(this.netTestResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

