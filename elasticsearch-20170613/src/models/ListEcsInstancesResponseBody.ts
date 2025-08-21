// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsInstancesResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * 11
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultCollectorsConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * - key: log\\n title: Log file content\\n description: >\\n Contains log file lines.\\n ....
   */
  content?: string;
  /**
   * @remarks
   * The information about the extended parameter.
   * 
   * @example
   * fields.yml
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultCollectorsExtendConfigsMachines extends $dara.Model {
  /**
   * @remarks
   * The IDs of ECS instances.
   * 
   * @example
   * heartOk
   */
  agentStatus?: string;
  /**
   * @remarks
   * The list of access addresses of the specified instance for the output of the collector. Displayed when the **configType** is **collectorTargetInstance**.
   * 
   * @example
   * i-bp13y63575oypr9d****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultCollectorsExtendConfigs extends $dara.Model {
  /**
   * @remarks
   * The instance type specified by Collector Output. Supports Elasticsearch and Logstash. Displayed when the **configType** is **collectorTargetInstance**.
   * 
   * @example
   * collectorDeployMachine
   */
  configType?: string;
  /**
   * @remarks
   * The ID of the host group. Displayed when the **configType** is **collectorDeployMachine**.
   * 
   * @example
   * true
   */
  enableMonitoring?: boolean;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * *   collectorTargetInstance: Collector Output
   * *   collectorDeployMachine: Collector Deployment Machine
   * *   Collector Elasticsearch ForKibana: Elasticsearch instance information that supports the Kibana dashboard
   * 
   * @example
   * default_ct-cn-5i2l75bz4776****
   */
  groupId?: string;
  /**
   * @remarks
   * The path in which Filebeat is collected.
   */
  hosts?: string[];
  /**
   * @remarks
   * The list of ECS instances on which the collector is deployed. Displayed when the **configType** is **collectorDeployMachines** and the **type** is **ECSInstanceId**.
   * 
   * @example
   * es-cn-nif1z89fz003i****
   */
  instanceId?: string;
  /**
   * @remarks
   * The transmission protocol, which must be the same as the access protocol of the instance specified by Output. HTTP and HTTPS. Displayed when the **configType** is **collectorTargetInstance**.
   * 
   * @example
   * elasticsearch
   */
  instanceType?: string;
  /**
   * @remarks
   * The status of each crawl on the ECS instance. Valid values:
   * 
   * *   heartOk: The heartbeat is normal.
   * *   heartLost: The heartbeat is abnormal.
   * *   uninstalled
   * *   failed: The installation failed.
   */
  machines?: ListEcsInstancesResponseBodyResultCollectorsExtendConfigsMachines[];
  /**
   * @remarks
   * The username that is used to access the instance. The default value is elastic. Displayed when the **configType** is **collectorTargetInstance** or **collectorElasticsearchForKibana**.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the instance that is associated with the crawker. If the **configType** parameter is set to **collectorTargetInstance**, the value of this parameter is the ID of the output collector. If the **configType** parameter is set to **collectorDeployMachines** and the **type** parameter is set to **ACKCluster**, the value of this parameter is the ID of the ACK cluster.
   * 
   * @example
   * ECSInstanceId
   */
  type?: string;
  /**
   * @remarks
   * The type of the machine on which the Collector is deployed. This parameter is displayed when the **configType** is **collectorDeployMachine**. Valid values:
   * 
   * *   ECSInstanceId:ECS
   * *   ACKCluster: Container Kubernetes
   * 
   * @example
   * elastic
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      enableMonitoring: 'enableMonitoring',
      groupId: 'groupId',
      hosts: 'hosts',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      machines: 'machines',
      protocol: 'protocol',
      type: 'type',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      enableMonitoring: 'boolean',
      groupId: 'string',
      hosts: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceType: 'string',
      machines: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsExtendConfigsMachines },
      protocol: 'string',
      type: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    if(Array.isArray(this.machines)) {
      $dara.Model.validateArray(this.machines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultCollectors extends $dara.Model {
  collectorPaths?: string[];
  /**
   * @remarks
   * The content of the file.
   */
  configs?: ListEcsInstancesResponseBodyResultCollectorsConfigs[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Whether Monitoring is enabled. This field is displayed when the **configType** is **collectorTargetInstance** and the **instanceType** is **Elasticsearch**. Valid values:
   * 
   * *   true
   * *   false
   */
  extendConfigs?: ListEcsInstancesResponseBodyResultCollectorsExtendConfigs[];
  /**
   * @remarks
   * The status of the collector. Valid values:
   * 
   * *   activating: The project is taking effect.
   * *   active: The instance has taken effect.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * Specifies whether to verify and create a crawer. Valid values:
   * 
   * *   true: only verifies and does not create a
   * *   false: verifies and creates a
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The configuration file information of the collector.
   * 
   * @example
   * ct-testAbc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud to which the collector belongs.
   * 
   * @example
   * 16852***488*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The time when the collector was updated.
   * 
   * @example
   * ct-cn-0v3xj86085dvq****
   */
  resId?: string;
  /**
   * @remarks
   * The version of the collector. If the machine type of the collector is ECS, only **6.8.5_with_community** is supported.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The time when the crawl collector was created.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The name of the collector.
   * 
   * @example
   * activing
   */
  status?: string;
  /**
   * @remarks
   * The type of the collector. FileBeat, metricBeat, heartBeat, and auditBeat are supported.
   * 
   * @example
   * vpc-bp16k1dvzxtm******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      name: 'name',
      ownerId: 'ownerId',
      resId: 'resId',
      resType: 'resType',
      resVersion: 'resVersion',
      status: 'status',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsExtendConfigs },
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      name: 'string',
      ownerId: 'string',
      resId: 'string',
      resType: 'string',
      resVersion: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.collectorPaths)) {
      $dara.Model.validateArray(this.collectorPaths);
    }
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultIpAddress extends $dara.Model {
  /**
   * @remarks
   * The information about the collectors on the ECS instance.
   * 
   * @example
   * 172.16.xx.xx
   */
  host?: string;
  /**
   * @remarks
   * The IP address of the endpoint.
   * 
   * @example
   * private
   */
  ipType?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      ipType: 'ipType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      ipType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * true
   */
  cloudAssistantStatus?: string;
  /**
   * @remarks
   * The ID of the collector instance.
   */
  collectors?: ListEcsInstancesResponseBodyResultCollectors[];
  /**
   * @remarks
   * The tags of the ECS instance.
   * 
   * @example
   * i-bp14ncqge8wy3l3d****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * ecsTestName
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The type of the IP address that is used by the instance. Valid values:
   * 
   * *   public: public endpoint
   * *   private: private network address
   */
  ipAddress?: ListEcsInstancesResponseBodyResultIpAddress[];
  /**
   * @remarks
   * The status of the ECS instance. Valid values:
   * 
   * *   running: The master instance is running
   * *   starting
   * *   stopping: The task is being stopped.
   * *   stopped: The node is stopped.
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * The IP address of the ECS instance.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The operating system type of the ECS instance. Valid values:
   * 
   * *   windows:Windows operating system
   * *   linux:Linux operating system
   * 
   * @example
   * [ { "tagKey": "a", "tagValue": "b" } ]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAssistantStatus: 'cloudAssistantStatus',
      collectors: 'collectors',
      ecsInstanceId: 'ecsInstanceId',
      ecsInstanceName: 'ecsInstanceName',
      ipAddress: 'ipAddress',
      osType: 'osType',
      status: 'status',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssistantStatus: 'string',
      collectors: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectors },
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      ipAddress: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultIpAddress },
      osType: 'string',
      status: 'string',
      tags: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.collectors)) {
      $dara.Model.validateArray(this.collectors);
    }
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of returned records.
   */
  headers?: ListEcsInstancesResponseBodyHeaders;
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * Cloud Assistant the installation status, support:
   * 
   * *   true: The Prometheus agent was installed.
   * *   false: The Prometheus agent was not installed.
   */
  result?: ListEcsInstancesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListEcsInstancesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

