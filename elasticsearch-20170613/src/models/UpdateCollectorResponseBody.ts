// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCollectorResponseBodyResultConfigs extends $dara.Model {
  /**
   * @remarks
   * The content of the configuration file.
   * 
   * @example
   * filebeat.inputs:xxx
   */
  content?: string;
  /**
   * @remarks
   * The name of the configuration file.
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
   * The installation status of the shipper on an ECS instance. Valid values:
   * 
   * *   heartOk
   * *   heartLost
   * *   uninstalled
   * *   failed
   * 
   * @example
   * heartOk
   */
  agentStatus?: string;
  /**
   * @remarks
   * The ID of the ECS instance on which the shipper is installed.
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
   * The type of the configuration items. Valid values:
   * 
   * *   collectorTargetInstance: indicates the information about the output of the shipper.
   * *   collectorDeployMachine: indicates the information about the machine on which the shipper is installed.
   * *   collectorElasticsearchForKibana: indicates the information about the Elasticsearch cluster for which Kibana Dashboard is enabled.
   * 
   * @example
   * collectorDeployMachine
   */
  configType?: string;
  /**
   * @remarks
   * Indicates whether Kibana Monitoring is enabled. This parameter is returned only when **configType** is set to **collectorTargetInstance** and **instanceType** is set to **elasticsearch**. Valid values: true and false.
   * 
   * @example
   * true
   */
  enableMonitoring?: boolean;
  /**
   * @remarks
   * The machine group ID. This parameter is returned only when **configType** is set to **collectorDeployMachine**.
   * 
   * @example
   * default_ct-cn-5i2l75bz4776****
   */
  groupId?: string;
  /**
   * @remarks
   * The address that is used to access Kibana over an internal network after you enable Kibana Dashboard. This parameter is returned only when **configType** is set to **collectorElasticsearchForKibana**.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****-kibana.internal.elasticsearch.aliyuncs.com:5601
   */
  host?: string;
  hosts?: string[];
  /**
   * @remarks
   * The ID of the object that is associated with the shipper. If **configType** is set to **collectorTargetInstance**, the value of this parameter is the ID of the output of the shipper. If **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**, the value of this parameter is the ID of an ACK cluster.
   * 
   * @example
   * es-cn-nif1z89fz003i****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the output of the shipper. Valid values: elasticsearch and logstash. This parameter is returned only when **configType** is set to **collectorTargetInstance**.
   * 
   * @example
   * elasticsearch
   */
  instanceType?: string;
  /**
   * @remarks
   * The address that is used to access Kibana over the Internet after you enable Kibana Dashboard. This parameter is returned only when **configType** is set to **collectorElasticsearchForKibana**.
   * 
   * @example
   * https://es-cn-nif1z89fz003i****.kibana.elasticsearch.aliyuncs.com:5601
   */
  kibanaHost?: string;
  /**
   * @remarks
   * This parameter is returned only when configType is set to collectorDeployMachine.
   * 
   * This parameter indicates the information about the ECS instances or ACK clusters on which the shipper is installed.
   */
  machines?: UpdateCollectorResponseBodyResultExtendConfigsMachines[];
  /**
   * @remarks
   * The transfer protocol that is used. It is the same as the protocol over which you can access the output of the shipper. Valid values: HTTP and HTTPS. This parameter is returned only when **configType** is set to **collectorTargetInstance**.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The number of pods from which logs are successfully collected in the ACK cluster. This parameter is returned only when **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**.
   * 
   * @example
   * 8
   */
  successPodsCount?: string;
  /**
   * @remarks
   * The number of pods from which logs needed to be collected in the ACK cluster. This parameter is returned only when **configType** is set to **collectorDeployMachines** and **type** is set to **ACKCluster**.
   * 
   * @example
   * 10
   */
  totalPodsCount?: string;
  /**
   * @remarks
   * The type of the machine on which the shipper is installed. This parameter is returned only when **configType** is set to **collectorDeployMachine**. Valid values:
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
   * The username that is used to access the output of the shipper. Default value: elastic. This parameter is returned only when **configType** is set to **collectorTargetInstance** or **collectorElasticsearchForKibana**.
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
   * The information about the configuration file for the shipper.
   */
  configs?: UpdateCollectorResponseBodyResultConfigs[];
  /**
   * @remarks
   * Indicates whether the shipper is checked and updated. Valid values:
   * 
   * *   true: The shipper is only checked.
   * *   false: The shipper is checked and updated.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The extended parameters that are configured for the shipper.
   */
  extendConfigs?: UpdateCollectorResponseBodyResultExtendConfigs[];
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
   * The shipper ID.
   * 
   * @example
   * ct-cn-0v3xj86085dvq****
   */
  resId?: string;
  /**
   * @remarks
   * The type of the shipper. Valid values: fileBeat, metricBeat, heartBeat, and auditBeat.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The version of the shipper.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The status of the shipper. Valid values:
   * 
   * *   activing: The shipper is being initialized.
   * *   active: The shipper is in effect.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC in which the shipper resides.
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

