// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCollectorResponseBodyResultConfigs extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * filebeat.inputs:xxx
   */
  content?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * filebeat.yml
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

export class UpdateCollectorResponseBodyResultExtendConfigsMachines extends $dara.Model {
  /**
   * @remarks
   * The status of each collector on the ECS instance. Valid values:
   * 
   * - heartOk: The heartbeat is normal.
   * - heartLost: The heartbeat is abnormal.
   * - uninstalled: Not installed.
   * - failed: Installation failed.
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

export class UpdateCollectorResponseBodyResultExtendConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * - collectorTargetInstance: the collector Output.
   * - collectorDeployMachine: the machine on which the collector is deployed.
   * - collectorElasticsearchForKibana: the Elasticsearch instance information that supports Kibana Dashboard.
   * 
   * @example
   * collectorDeployMachine
   */
  configType?: string;
  /**
   * @remarks
   * Indicates whether Monitoring is enabled. This parameter is displayed when **configType** is set to **collectorTargetInstance** and **instanceType** is set to **elasticsearch**. Valid values: true (enabled) and false (disabled).
   * 
   * @example
   * true
   */
  enableMonitoring?: boolean;
  /**
   * @remarks
   * The machine group ID. This parameter is displayed when **configType** is set to **collectorDeployMachine**.
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
   * es-cn-n6w1o1x0w001c****-kibana.internal.elasticsearch.aliyuncs.com:5601
   */
  host?: string;
  hosts?: string[];
  /**
   * @remarks
   * The ID of the instance associated with the collector. When **configType** is set to **collectorTargetInstance**, this parameter indicates the instance ID of the collector Output. When **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**, this parameter indicates the ACK (Container Kubernetes) cluster ID.
   * 
   * @example
   * es-cn-nif1z89fz003i****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of instance specified by the collector Output. Valid values: elasticsearch and logstash. This parameter is displayed when **configType** is set to **collectorTargetInstance**.
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
   * https://es-cn-nif1z89fz003i****.kibana.elasticsearch.aliyuncs.com:5601
   */
  kibanaHost?: string;
  /**
   * @remarks
   * Specific to the collectorDeployMachine type:
   * 
   * The information about the ECS instances or ACK clusters on which the collector is deployed.
   */
  machines?: UpdateCollectorResponseBodyResultExtendConfigsMachines[];
  /**
   * @remarks
   * The transport protocol, which must be consistent with the access protocol of the instance specified by the collector Output. Valid values: HTTP and HTTPS. This parameter is displayed when **configType** is set to **collectorTargetInstance**.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The number of pods that are successfully collected in the ACK cluster. This parameter is displayed when **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**.
   * 
   * @example
   * 8
   */
  successPodsCount?: string;
  /**
   * @remarks
   * The total number of pods collected in the ACK cluster. This parameter is displayed when **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**.
   * 
   * @example
   * 10
   */
  totalPodsCount?: string;
  /**
   * @remarks
   * The type of machine on which the collector is deployed. This parameter is displayed when **configType** is set to **collectorDeployMachine**. Valid values:
   * 
   * - ECSInstanceId: ECS.
   * 
   * - ACKCluster: Container Kubernetes.
   * 
   * @example
   * ECSInstanceId
   */
  type?: string;
  /**
   * @remarks
   * The username used to access the instance specified by the collector Output. Default value: elastic. This parameter is displayed when **configType** is set to **collectorTargetInstance** or **collectorElasticsearchForKibana**.
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
      machines: { 'type': 'array', 'itemType': UpdateCollectorResponseBodyResultExtendConfigsMachines },
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

export class UpdateCollectorResponseBodyResult extends $dara.Model {
  collectorPaths?: string[];
  /**
   * @remarks
   * The configuration file information of the collector.
   */
  configs?: UpdateCollectorResponseBodyResultConfigs[];
  /**
   * @remarks
   * Indicates whether the collector is validated and created. Valid values:
   * 
   * - true: Only validated, not created.
   * - false: Validated and created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended parameter information.
   */
  extendConfigs?: UpdateCollectorResponseBodyResultExtendConfigs[];
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
   * ct-cn-0v3xj86085dvq****
   */
  resId?: string;
  /**
   * @remarks
   * The collector type. Valid values: fileBeat, metricBeat, heartBeat, and auditBeat.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The collector version.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The collector status. Valid values:
   * 
   * - activing: Taking effect.
   * 
   * - active: Active.
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
      configs: { 'type': 'array', 'itemType': UpdateCollectorResponseBodyResultConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': UpdateCollectorResponseBodyResultExtendConfigs },
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

export class UpdateCollectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: UpdateCollectorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateCollectorResponseBodyResult,
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

