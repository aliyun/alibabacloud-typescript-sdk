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
   * The status of the shipper on the ECS instance. Valid values: **heartOk**, **heartLost**, **uninstalled**, and **failed**.
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
   * *   collectorTargetInstance
   * *   collectorDeployMachine
   * *   collectorElasticsearchForKibana
   * 
   * @example
   * collectorDeployMachine
   */
  configType?: string;
  /**
   * @remarks
   * Indicates whether monitoring is enabled. This parameter is returned if the value of **configType** is **collectorTargetInstance** and the value of **instanceType** is **elasticsearch**. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableMonitoring?: boolean;
  /**
   * @remarks
   * The ID of the machine group. This parameter is returned if the value of **configType** is **collectorDeployMachine**.
   * 
   * @example
   * default_ct-cn-5i2l75bz4776****
   */
  groupId?: string;
  /**
   * @remarks
   * The private endpoint of Kibana after you enable the Kibana dashboard. This parameter is returned if the value of **configType** is **collectorElasticsearchForKibana**.
   * 
   * @example
   * es-cn-4591jumei000u****-kibana.internal.elasticsearch.aliyuncs.com:5601
   */
  host?: string;
  hosts?: string[];
  /**
   * @remarks
   * The ID of the resource that is associated with the shipper. If the value of **configType** is **collectorTargetInstance**, the value of this parameter is the ID of the resource specified in the output configuration part of the shipper. If the value of **configType** is **collectorDeployMachine** and the value of **type** is **ACKCluster**, the value of this parameter is the ID of the ACK cluster.
   * 
   * @example
   * es-cn-n6w1o1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the cluster specified in the output configuration part of the shipper. Valid values: elasticsearch and logstash. This parameter is returned if the value of **configType** is **collectorTargetInstance**.
   * 
   * @example
   * elasticsearch
   */
  instanceType?: string;
  /**
   * @remarks
   * The public endpoint of Kibana after you enable the Kibana dashboard. This parameter is returned if the value of **configType** is **collectorElasticsearchForKibana**.
   * 
   * @example
   * https://es-cn-4591jumei000u****.kibana.elasticsearch.aliyuncs.com:5601
   */
  kibanaHost?: string;
  /**
   * @remarks
   * The information about the ECS instances on which the shipper is deployed. This parameter is returned if the value of **configType** is **collectorDeployMachine** and the value of **type** is **ECSInstanceId**.
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
   * The number of pods from which data is successfully collected in the ACK cluster. This parameter is returned if the value of **configType** is **collectorDeployMachine** and the value of **type** is **ACKCluster**.
   * 
   * @example
   * 8
   */
  successPodsCount?: string;
  /**
   * @remarks
   * The total number of pods from which data is collected in the ACK cluster. This parameter is returned if the value of **configType** is **collectorDeployMachine** and the value of **type** is **ACKCluster**.
   * 
   * @example
   * 10
   */
  totalPodsCount?: string;
  /**
   * @remarks
   * The type of the machine on which the shipper is deployed. This parameter is returned if the value of **configType** is **collectorDeployMachine**. Valid values:
   * 
   * *   ECSInstanceId
   * *   ACKCluster
   * 
   * @example
   * ECSInstanceId
   */
  type?: string;
  /**
   * @remarks
   * The username that is used to access the resource specified in the output configuration part of the shipper. The default value is elastic. This parameter is returned if the value of **configType** is **collectorTargetInstance** or **collectorElasticsearchForKibana**.
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
   * The information about the configuration file of the shipper.
   */
  configs?: UpdateCollectorNameResponseBodyResultConfigs[];
  /**
   * @remarks
   * Indicates whether a dry run is performed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended configurations of the shipper.
   */
  extendConfigs?: UpdateCollectorNameResponseBodyResultExtendConfigs[];
  /**
   * @remarks
   * The time when the shipper was created.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the shipper was updated.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The name of the shipper.
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
   * The ID of the shipper.
   * 
   * @example
   * ct-cn-77uqof2s7rg5c****
   */
  resId?: string;
  /**
   * @remarks
   * The type of the shipper. Valid values: fileBeat, metricBeat, heartBeat, and audiBeat.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The version of the shipper. The version of a shipper depends on the type of the machine on which the shipper is deployed.
   * 
   * *   Elastic Compute Service (ECS) instance: 6.8.5_with_community
   * *   Container Service for Kubernetes (ACK) cluster: 6.8.13_with_community
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The status of the shipper. Valid values: activating and active.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the shipper resides.
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

