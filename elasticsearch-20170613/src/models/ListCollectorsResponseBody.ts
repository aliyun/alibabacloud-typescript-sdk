// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectorsResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The number of returned records.
   * 
   * @example
   * 5
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

export class ListCollectorsResponseBodyResultConfigs extends $dara.Model {
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

export class ListCollectorsResponseBodyResultExtendConfigsMachines extends $dara.Model {
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

export class ListCollectorsResponseBodyResultExtendConfigs extends $dara.Model {
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
   * Specifies whether to enable Monitoring. This parameter is displayed when **configType** is set to **collectorTargetInstance** and **instanceType** is set to **elasticsearch**. Valid values:
   * 
   * - true: enabled
   * 
   * - false: disabled
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
   * The private network access address of Kibana after Kibana Dashboard is enabled. This parameter is displayed when **configType** is set to **collectorElasticsearchForKibana**.
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
   * Instance ID of the instance associated with the collector. When **configType** is set to **collectorTargetInstance**, this parameter indicates instance ID of the instance in the collector output. When **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**, this parameter indicates the ACK cluster ID.
   * 
   * @example
   * es-cn-nif1z89fz003i****
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
   * The public network access address of Kibana after Kibana Dashboard is enabled. This parameter is displayed when **configType** is set to **collectorElasticsearchForKibana**.
   * 
   * @example
   * https://es-cn-nif1z89fz003i****.kibana.elasticsearch.aliyuncs.com:5601
   */
  kibanaHost?: string;
  /**
   * @remarks
   * The list of ECS instances on which the collector is deployed. This parameter is displayed when **configType** is set to **collectorDeployMachines** and **type** is set to **ECSInstanceId**.
   */
  machines?: ListCollectorsResponseBodyResultExtendConfigsMachines[];
  /**
   * @remarks
   * The transmission protocol, which must be consistent with the access protocol of the instance specified in the collector output. Valid values: HTTP and HTTPS. This parameter is displayed when **configType** is set to **collectorTargetInstance**.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The number of pods successfully collected in the ACK cluster. This parameter is displayed when **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**.
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
   * - ECSInstanceId: ECS
   * 
   * - ACKCluster: ACK cluster
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
      machines: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultExtendConfigsMachines },
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

export class ListCollectorsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of Filebeat collection paths.
   */
  collectorPaths?: string[];
  /**
   * @remarks
   * The configuration file information of the collector.
   */
  configs?: ListCollectorsResponseBodyResultConfigs[];
  /**
   * @remarks
   * Specifies whether to verify and create the collector. Valid values:
   * 
   * - true: only verifies the collector without creating it
   * - false: verifies and creates the collector
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended parameter information.
   */
  extendConfigs?: ListCollectorsResponseBodyResultExtendConfigs[];
  /**
   * @remarks
   * The time when the collector was created.
   * 
   * @example
   * 2020-08-18T02:06:12.000+0000
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the collector was updated.
   * 
   * @example
   * 2020-08-18T09:40:43.000+0000
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The collector name.
   * 
   * @example
   * FileBeat001
   */
  name?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 168520994880****
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
   * - activing: taking effect
   * 
   * - active: effective
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
      configs: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultExtendConfigs },
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

export class ListCollectorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers.
   */
  headers?: ListCollectorsResponseBodyHeaders;
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
   * The returned results.
   */
  result?: ListCollectorsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListCollectorsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResult },
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

