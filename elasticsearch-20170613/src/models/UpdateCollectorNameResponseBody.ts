// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCollectorNameResponseBodyResultConfigs extends $dara.Model {
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

export class UpdateCollectorNameResponseBodyResultExtendConfigsMachines extends $dara.Model {
  /**
   * @remarks
   * The status of each collector on the ECS instance. Valid values: **heartOk** (heartbeat normal), **heartLost** (heartbeat abnormal), **uninstalled** (not installed), and **failed** (installation failed).
   * 
   * @example
   * heartOk
   */
  agentStatus?: string;
  /**
   * @remarks
   * The IDs of the ECS instances.
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
   * - collectorTargetInstance: the output of the collector
   * - collectorDeployMachine: the machine where the collector is deployed
   * - collectorElasticsearchForKibana: the information about the Elasticsearch instance that supports Kibana Dashboard
   * 
   * @example
   * collectorDeployMachine
   */
  configType?: string;
  /**
   * @remarks
   * Specifies whether to enable monitoring. This parameter is displayed when **configType** is set to **collectorTargetInstance** and **instanceType** is set to **elasticsearch**. Valid values:
   * 
   * - true: enables monitoring.
   * - false: disables monitoring.
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
   * The internal-facing access address of Kibana on the private network after Kibana Dashboard is enabled. This parameter is displayed when **configType** is set to **collectorElasticsearchForKibana**.
   * 
   * @example
   * es-cn-4591jumei000u****-kibana.internal.elasticsearch.aliyuncs.com:5601
   */
  host?: string;
  /**
   * @remarks
   * The access endpoints of the instance specified by the collector output. This parameter is displayed when **configType** is set to **collectorTargetInstance**.
   */
  hosts?: string[];
  /**
   * @remarks
   * Instance ID of the instance associated with the collector. If **configType** is set to **collectorTargetInstance**, this parameter indicates instance ID of the instance specified by the collector output. If **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**, this parameter indicates instance ID of the ACK cluster.
   * 
   * @example
   * es-cn-n6w1o1****
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
   * The public network access address of Kibana after Kibana Dashboard is enabled. This parameter is displayed when **configType** is set to **collectorElasticsearchForKibana**.
   * 
   * @example
   * https://es-cn-4591jumei000u****.kibana.elasticsearch.aliyuncs.com:5601
   */
  kibanaHost?: string;
  /**
   * @remarks
   * The information about the ECS instances where the collector is deployed. This parameter is displayed when **configType** is set to **collectorDeployMachines** and **type** is set to **ECSInstanceId**.
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
   * The number of pods from which data is successfully collected in the ACK cluster. This parameter is displayed when **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**.
   * 
   * @example
   * 8
   */
  successPodsCount?: string;
  /**
   * @remarks
   * The total number of pods from which data is collected in the ACK cluster. This parameter is displayed when **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**.
   * 
   * @example
   * 10
   */
  totalPodsCount?: string;
  /**
   * @remarks
   * The type of the machine where the collector is deployed. This parameter is displayed when **configType** is set to **collectorDeployMachine**. Valid values:
   * 
   * - ECSInstanceId: ECS instance
   * - ACKCluster: Container Service for Kubernetes (ACK) cluster
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
  /**
   * @remarks
   * The collection path of Filebeat. This parameter is displayed when the collector is deployed on an ECS instance.
   */
  collectorPaths?: string[];
  /**
   * @remarks
   * The configuration file information of the collector.
   */
  configs?: UpdateCollectorNameResponseBodyResultConfigs[];
  /**
   * @remarks
   * Specifies whether to verify and update the collector. Valid values:
   * 
   * - true: only verifies the request without updating the collector.
   * - false: verifies and updates the collector.
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
   * The time when the collector was created. The time is in the YYYY-MM-DDTHH:mm:ss.SSS+HHMM format, where the suffix indicates the time zone offset.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the collector was updated. The time is in the YYYY-MM-DDTHH:mm:ss.SSS+HHMM format, where the suffix indicates the time zone offset.
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
   * ct-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 16852099488*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The instance ID of the collector.
   * 
   * @example
   * ct-cn-77uqof2s7rg5c****
   */
  resId?: string;
  /**
   * @remarks
   * The type of the collector. Valid values: fileBeat, metricBeat, heartBeat, and audiBeat.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The version of the collector. The supported versions vary based on the type of the machine where the collector is deployed. Valid values:
   * 
   * - ECS: 6.8.5_with_community
   * - ACK: 6.8.13_with_community
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The status of the collector. Valid values: activing (activating) and active (activated).
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the collector resides.
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
   * The ID of the request.
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

