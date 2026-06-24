// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCollectorNameResponseBodyResultConfigs extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * - key: log\\n title: Log file content\\n description: >\\n Contains log file lines.\\n ....
   */
  content?: string;
  /**
   * @remarks
   * The file name.
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

export class UpdateCollectorNameResponseBodyResultExtendConfigsMachines extends $dara.Model {
  /**
   * @remarks
   * The status of the collector on the ECS instance. Valid values: **heartOk** (normal heartbeat), **heartLost** (abnormal heartbeat), **uninstalled** (not installed), and **failed** (installation failed).
   * 
   * @example
   * heartOk
   */
  agentStatus?: string;
  /**
   * @remarks
   * The list of ECS machine IDs.
   * 
   * @example
   * c1b9fde5172b84f82b9928e825a7b8988
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

export class UpdateCollectorNameResponseBodyResultExtendConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * - collectorTargetInstance: the collector Output.
   * - collectorDeployMachine: the machine on which the collector is deployed.
   * - collectorElasticsearchForKibana: the Elasticsearch instance that supports Kibana Dashboard.
   * 
   * @example
   * collectorDeployMachine
   */
  configType?: string;
  /**
   * @remarks
   * Indicates whether Monitoring is enabled. Displayed when **configType** is **collectorTargetInstance** and **instanceType** is **elasticsearch**. Valid values:
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enableMonitoring?: boolean;
  /**
   * @remarks
   * The machine group ID. Displayed when **configType** is **collectorDeployMachine**.
   * 
   * @example
   * default_ct-cn-5i2l75bz4776****
   */
  groupId?: string;
  /**
   * @remarks
   * The internal-facing access address of Kibana on the private network after Kibana Dashboard is enabled. Displayed when **configType** is **collectorElasticsearchForKibana**.
   * 
   * @example
   * es-cn-4591jumei000u****-kibana.internal.elasticsearch.aliyuncs.com:5601
   */
  host?: string;
  hosts?: string[];
  /**
   * @remarks
   * The ID of the instance associated with the collector. When **configType** is **collectorTargetInstance**, this is the instance ID of the collector Output. When **configType** is **collectorDeployMachines** and **type** is **ACKCluster**, this is the ACK cluster ID.
   * 
   * @example
   * es-cn-n6w1o1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of instance specified in the collector Output. Valid values: elasticsearch and logstash. Displayed when **configType** is **collectorTargetInstance**.
   * 
   * @example
   * elasticsearch
   */
  instanceType?: string;
  /**
   * @remarks
   * The public network access address of Kibana after Kibana Dashboard is enabled. Displayed when **configType** is **collectorElasticsearchForKibana**.
   * 
   * @example
   * https://es-cn-4591jumei000u****.kibana.elasticsearch.aliyuncs.com:5601
   */
  kibanaHost?: string;
  /**
   * @remarks
   * The list of ECS machines on which the collector is deployed. Displayed when **configType** is **collectorDeployMachines** and **type** is **ECSInstanceId**.
   */
  machines?: UpdateCollectorNameResponseBodyResultExtendConfigsMachines[];
  /**
   * @remarks
   * The transmission protocol. Valid values: **HTTP** and **HTTPS**.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The number of pods that are successfully collected in the ACK cluster. Displayed when **configType** is **collectorDeployMachines** and **type** is **ACKCluster**.
   * 
   * @example
   * 8
   */
  successPodsCount?: string;
  /**
   * @remarks
   * The total number of pods collected in the ACK cluster. Displayed when **configType** is **collectorDeployMachines** and **type** is **ACKCluster**.
   * 
   * @example
   * 10
   */
  totalPodsCount?: string;
  /**
   * @remarks
   * The type of machine on which the collector is deployed. Displayed when **configType** is **collectorDeployMachine**. Valid values:
   * 
   * - ECSInstanceId: ECS instance.
   * - ACKCluster: Container Kubernetes cluster.
   * 
   * @example
   * ECSInstanceId
   */
  type?: string;
  /**
   * @remarks
   * The username used to access the instance specified in the collector Output. Default value: elastic. Displayed when **configType** is **collectorTargetInstance** or **collectorElasticsearchForKibana**.
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
      host: 'host',
      hosts: 'hosts',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      kibanaHost: 'kibanaHost',
      machines: 'machines',
      protocol: 'protocol',
      successPodsCount: 'successPodsCount',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      enableMonitoring: 'boolean',
      groupId: 'string',
      host: 'string',
      hosts: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceType: 'string',
      kibanaHost: 'string',
      machines: { 'type': 'array', 'itemType': UpdateCollectorNameResponseBodyResultExtendConfigsMachines },
      protocol: 'string',
      successPodsCount: 'string',
      totalPodsCount: 'string',
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

export class UpdateCollectorNameResponseBodyResult extends $dara.Model {
  collectorPaths?: string[];
  /**
   * @remarks
   * The configuration file information of the collector.
   */
  configs?: UpdateCollectorNameResponseBodyResultConfigs[];
  /**
   * @remarks
   * Indicates whether the collector is validated only without being created. Valid values:
   * 
   * - true: Only validates without updating.
   * - false: Validates and updates.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended configurations of the collector.
   */
  extendConfigs?: UpdateCollectorNameResponseBodyResultExtendConfigs[];
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
   * The time when the collector was last updated.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The collector name.
   * 
   * @example
   * ct-test
   */
  name?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 16852099488*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The collector instance ID.
   * 
   * @example
   * ct-cn-77uqof2s7rg5c****
   */
  resId?: string;
  /**
   * @remarks
   * The collector type. Valid values: fileBeat, metricBeat, heartBeat, and audiBeat.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The collector version. The supported versions depend on the type of machine on which the collector is deployed:
   * 
   * - ECS: 6.8.5_with_community
   * - ACK: 6.8.13_with_community.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The collector status. Valid values: activing (taking effect) and active (active).
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC where the collector resides.
   * 
   * @example
   * vpc-bp16k1dvzxtma*****
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
      configs: { 'type': 'array', 'itemType': UpdateCollectorNameResponseBodyResultConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': UpdateCollectorNameResponseBodyResultExtendConfigs },
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

export class UpdateCollectorNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: UpdateCollectorNameResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateCollectorNameResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

