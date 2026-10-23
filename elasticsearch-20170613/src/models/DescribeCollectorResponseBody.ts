// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCollectorResponseBodyResultConfigs extends $dara.Model {
  /**
   * @remarks
   * The content of the file.
   * 
   * @example
   * fileBeat.inputs:xxx
   */
  content?: string;
  /**
   * @remarks
   * The name of the file.
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

export class DescribeCollectorResponseBodyResultExtendConfigsMachines extends $dara.Model {
  /**
   * @remarks
   * The status of each collector on the ECS instance. Valid values:
   * 
   * - heartOk: The heartbeat is normal.
   * - heartLost: The heartbeat is abnormal.
   * - uninstalled: The collector is not installed.
   * - failed: The installation failed.
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
   * i-bp1gyhphjaj73jsr****
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

export class DescribeCollectorResponseBodyResultExtendConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * - collectorTargetInstance: the output of the collector.
   * - collectorDeployMachine: the machine on which the collector is deployed.
   * - collectorElasticsearchForKibana: the information about the Elasticsearch instance that supports the Kibana dashboard.
   * 
   * @example
   * collectorDeployMachine
   */
  configType?: string;
  /**
   * @remarks
   * Specifies whether to enable monitoring. This parameter is displayed when **configType** is set to **collectorTargetInstance**. Valid values:
   * 
   * - true: enables monitoring.
   * 
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
   * The private endpoint of Kibana after the Kibana dashboard is enabled. This parameter is displayed when **configType** is set to **collectorElasticsearchForKibana**.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****-kibana.internal.elasticsearch.aliyuncs.com:5601
   */
  host?: string;
  /**
   * @remarks
   * The list of host addresses of the target instance for the collector.
   */
  hosts?: string[];
  /**
   * @remarks
   * Instance ID of the instance associated with the collector. If **configType** is set to **collectorTargetInstance**, this parameter indicates instance ID of the instance specified in the collector output. If **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**, this parameter indicates instance ID of the ACK cluster.
   * 
   * @example
   * es-cn-n6w1o1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance specified in the collector output. Valid values: elasticsearch and logstash. This parameter is displayed when **configType** is set to **collectorTargetInstance**.
   * 
   * @example
   * elasticsearch
   */
  instanceType?: string;
  /**
   * @remarks
   * The public network access address of Kibana after the Kibana dashboard is enabled. This parameter is displayed when **configType** is set to **collectorElasticsearchForKibana**.
   * 
   * @example
   * https://es-cn-nif1z89fz003i****.kibana.elasticsearch.aliyuncs.com:5601
   */
  kibanaHost?: string;
  /**
   * @remarks
   * The list of ECS instances on which the collector is deployed. This parameter is displayed when **configType** is set to **collectorDeployMachines** and **type** is set to **ECSInstanceId**.
   */
  machines?: DescribeCollectorResponseBodyResultExtendConfigsMachines[];
  /**
   * @remarks
   * The transmission protocol. This protocol must be consistent with the access protocol of the instance specified in the collector output. Valid values: HTTP and HTTPS. This parameter is displayed when **configType** is set to **collectorTargetInstance**.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The number of pods from which data is successfully collected in the ACK cluster.
   * 
   * @example
   * 8
   */
  successPodsCount?: string;
  /**
   * @remarks
   * The total number of pods from which data is collected in the ACK cluster.
   * 
   * @example
   * 10
   */
  totalPodsCount?: string;
  /**
   * @remarks
   * The type of the machine on which the collector is deployed. This parameter is displayed when **configType** is set to **collectorDeployMachine**. Valid values:
   * 
   * - ECSInstanceId: ECS instance.
   * - ACKCluster: ACK cluster.
   * 
   * @example
   * ECSInstanceId
   */
  type?: string;
  /**
   * @remarks
   * The username used to access the instance specified in the collector output. Default value: elastic. This parameter is displayed when **configType** is set to **collectorTargetInstance** or **collectorElasticsearchForKibana**.
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
      machines: { 'type': 'array', 'itemType': DescribeCollectorResponseBodyResultExtendConfigsMachines },
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

export class DescribeCollectorResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of Filebeat collection paths.
   */
  collectorPaths?: string[];
  /**
   * @remarks
   * The configuration file information of the collector.
   */
  configs?: DescribeCollectorResponseBodyResultConfigs[];
  /**
   * @remarks
   * Specifies whether to only validate the collector without creating it. Valid values:
   * 
   * - true: validates the configuration without creating the collector.
   * - false: validates the configuration and creates the collector.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended configurations of the collector.
   */
  extendConfigs?: DescribeCollectorResponseBodyResultExtendConfigs[];
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
   * ct-cn-4135is2tj194p****
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
   * ct-cn-rg31ahn82m0qd****
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
   * The version of the collector.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The status of the collector. Valid values:
   * 
   * - activing: activating.
   * - active: activated.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the collector is deployed.
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
      configs: { 'type': 'array', 'itemType': DescribeCollectorResponseBodyResultConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': DescribeCollectorResponseBodyResultExtendConfigs },
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

export class DescribeCollectorResponseBody extends $dara.Model {
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
  result?: DescribeCollectorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeCollectorResponseBodyResult,
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

