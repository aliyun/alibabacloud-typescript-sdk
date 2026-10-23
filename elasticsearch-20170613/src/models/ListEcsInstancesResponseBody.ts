// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsInstancesResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The number of returned records.
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
   * The content of the file.
   * 
   * @example
   * - key: log\\n title: Log file content\\n description: >\\n Contains log file lines.\\n ....
   */
  content?: string;
  /**
   * @remarks
   * The name of the file.
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
   * The status of each collector on the ECS instance. Valid values:
   * 
   * - heartOk: normal heartbeat
   * - heartLost: abnormal heartbeat
   * - uninstalled: not installed
   * - failed: installation failed
   * 
   * @example
   * heartOk
   */
  agentStatus?: string;
  /**
   * @remarks
   * The list of ECS instance IDs.
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
   * The configuration type. Valid values:
   * 
   * - collectorTargetInstance: the collector output
   * - collectorDeployMachine: the machine on which the collector is deployed
   * - collectorElasticsearchForKibana: the information about the Elasticsearch instance that supports Kibana dashboards
   * 
   * @example
   * collectorDeployMachine
   */
  configType?: string;
  /**
   * @remarks
   * Specifies whether to enable monitoring. This parameter is displayed when **configType** is set to **collectorTargetInstance** and **instanceType** is set to **elasticsearch**. Valid values:
   * 
   * - true: Enables monitoring.
   * - false: Disables monitoring.
   * 
   * @example
   * true
   */
  enableMonitoring?: boolean;
  /**
   * @remarks
   * The ID of the machine group. This parameter is displayed when **configType** is set to **collectorDeployMachine**.
   * 
   * @example
   * default_ct-cn-5i2l75bz4776****
   */
  groupId?: string;
  /**
   * @remarks
   * The list of host addresses of the collector target instance.
   */
  hosts?: string[];
  /**
   * @remarks
   * Instance ID of the instance associated with the collector. When **configType** is set to **collectorTargetInstance**, this parameter indicates instance ID of the collector output instance. When **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**, this parameter indicates instance ID of the ACK cluster.
   * 
   * @example
   * es-cn-nif1z89fz003i****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance specified by the collector output. Valid values: elasticsearch and logstash. This parameter is displayed when **configType** is set to **collectorTargetInstance**.
   * 
   * @example
   * elasticsearch
   */
  instanceType?: string;
  /**
   * @remarks
   * The list of ECS instances on which the collector is deployed. This parameter is displayed when **configType** is set to **collectorDeployMachines** and **type** is set to **ECSInstanceId**.
   */
  machines?: ListEcsInstancesResponseBodyResultCollectorsExtendConfigsMachines[];
  /**
   * @remarks
   * The transmission protocol, which must be consistent with the access protocol of the instance specified by the collector output. Valid values: HTTP and HTTPS. This parameter is displayed when **configType** is set to **collectorTargetInstance**.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The type of the machine on which the collector is deployed. This parameter is displayed when **configType** is set to **collectorDeployMachine**. Valid values:
   * 
   * - ECSInstanceId: ECS instance
   * - ACKCluster: ACK cluster
   * 
   * @example
   * ECSInstanceId
   */
  type?: string;
  /**
   * @remarks
   * The username used to access the instance specified by the collector output. Default value: elastic. This parameter is displayed when **configType** is set to **collectorTargetInstance** or **collectorElasticsearchForKibana**.
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
  /**
   * @remarks
   * The list of Filebeat collection paths.
   */
  collectorPaths?: string[];
  /**
   * @remarks
   * The configuration file information of the collector.
   */
  configs?: ListEcsInstancesResponseBodyResultCollectorsConfigs[];
  /**
   * @remarks
   * Specifies whether to verify and create the collector. Valid values:
   * 
   * - true: Verifies the collector but does not create it.
   * - false: Verifies and creates the collector.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended parameter information.
   */
  extendConfigs?: ListEcsInstancesResponseBodyResultCollectorsExtendConfigs[];
  /**
   * @remarks
   * The time when the collector was created.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the collector was updated.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The name of the collector.
   * 
   * @example
   * ct-testAbc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 16852***488*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The collector instance ID.
   * 
   * @example
   * ct-cn-0v3xj86085dvq****
   */
  resId?: string;
  /**
   * @remarks
   * The type of the collector. Valid values: fileBeat, metricBeat, heartBeat, and auditBeat.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The version of the collector. When the machine type is ECS, only **6.8.5_with_community** is supported.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The status of the collector. Valid values:
   * 
   * - activing: taking effect
   * - active: effective
   * 
   * @example
   * activing
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC where the collector resides.
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
   * The IP address.
   * 
   * @example
   * 172.16.xx.xx
   */
  host?: string;
  /**
   * @remarks
   * The type of the IP address. Valid values:
   * 
   * - public: public IP address
   * - private: private network IP address
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
   * The installation status of Cloud Assistant. Valid values:
   * 
   * - true: installed
   * - false: not installed
   * 
   * @example
   * true
   */
  cloudAssistantStatus?: string;
  /**
   * @remarks
   * The list of collectors on the ECS instance.
   */
  collectors?: ListEcsInstancesResponseBodyResultCollectors[];
  /**
   * @remarks
   * The ECS instance ID.
   * 
   * @example
   * i-bp14ncqge8wy3l3d****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * ecsTestName
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The IP address information of the ECS instance.
   */
  ipAddress?: ListEcsInstancesResponseBodyResultIpAddress[];
  /**
   * @remarks
   * The operating system type of the ECS instance. Valid values:
   * 
   * - windows: Windows operating system
   * - linux: Linux operating system
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * The status of the ECS instance. Valid values:
   * 
   * - running: running
   * - starting: starting
   * - stopping: stopping
   * - stopped: stopped
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The tag information of the ECS instance.
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
   * The response headers.
   */
  headers?: ListEcsInstancesResponseBodyHeaders;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
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

