// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryApplicationStatusResponseBodyAppInfoApplication extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 3616cdca-4f92-4413-****-************
   */
  applicationId?: string;
  /**
   * @remarks
   * The build package number of Enterprise Distributed Application Service (EDAS) Container.
   * 
   * @example
   * 0
   */
  buildPackageId?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 0d247b93-8d62-4e34-****-************
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of CPU cores used by the application.
   * 
   * @example
   * 0
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the application was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573626207270
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the application is a Docker application.
   * 
   * @example
   * false
   */
  dockerize?: boolean;
  /**
   * @remarks
   * The email address of the user who created the application.
   * 
   * @example
   * 1234567@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The health check URL.
   * 
   * @example
   * “”
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The time when the application was launched. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 0
   */
  launchTime?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * EDAS-scaled-cluster:default cluster
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user who created the application.
   * 
   * @example
   * edas_com***_****@******-*****.***
   */
  owner?: string;
  /**
   * @remarks
   * The mobile number of the user who created the application.
   * 
   * @example
   * 1886666****
   */
  phone?: string;
  /**
   * @remarks
   * The port used by the application.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-shenzhen:test
   */
  regionId?: string;
  /**
   * @remarks
   * The number of application instances that are running.
   * 
   * @example
   * 1
   */
  runningInstanceCount?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * edas_com***_****@******-*****.***
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      buildPackageId: 'BuildPackageId',
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      dockerize: 'Dockerize',
      email: 'Email',
      healthCheckUrl: 'HealthCheckUrl',
      instanceCount: 'InstanceCount',
      launchTime: 'LaunchTime',
      memory: 'Memory',
      name: 'Name',
      owner: 'Owner',
      phone: 'Phone',
      port: 'Port',
      regionId: 'RegionId',
      runningInstanceCount: 'RunningInstanceCount',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      buildPackageId: 'number',
      clusterId: 'string',
      cpu: 'number',
      createTime: 'number',
      dockerize: 'boolean',
      email: 'string',
      healthCheckUrl: 'string',
      instanceCount: 'number',
      launchTime: 'number',
      memory: 'number',
      name: 'string',
      owner: 'string',
      phone: 'string',
      port: 'number',
      regionId: 'string',
      runningInstanceCount: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoDeployRecordListDeployRecord extends $dara.Model {
  /**
   * @remarks
   * The time when the deployment record was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573626226691
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the deployment record.
   * 
   * @example
   * bbc6c0d5-d792-4907-****-************
   */
  deployRecordId?: string;
  /**
   * @remarks
   * The unique ID of the ECC.
   * 
   * @example
   * 0cf49a6c-95a8-4aa8-****-************
   */
  eccId?: string;
  /**
   * @remarks
   * The unique ID of the ECU.
   * 
   * @example
   * 07bd417a-b863-477d-****-************
   */
  ecuId?: string;
  /**
   * @remarks
   * The MD5 hash value of the deployment package.
   * 
   * @example
   * d0db5bcb442e492104d0f00e10a03dd9
   */
  packageMd5?: string;
  /**
   * @remarks
   * The version of the deployment package that was used to deploy an application in the instance group.
   * 
   * @example
   * 441beb18-da42-44dc-****-************
   */
  packageVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deployRecordId: 'DeployRecordId',
      eccId: 'EccId',
      ecuId: 'EcuId',
      packageMd5: 'PackageMd5',
      packageVersionId: 'PackageVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      deployRecordId: 'string',
      eccId: 'string',
      ecuId: 'string',
      packageMd5: 'string',
      packageVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoDeployRecordList extends $dara.Model {
  deployRecord?: QueryApplicationStatusResponseBodyAppInfoDeployRecordListDeployRecord[];
  static names(): { [key: string]: string } {
    return {
      deployRecord: 'DeployRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployRecord: { 'type': 'array', 'itemType': QueryApplicationStatusResponseBodyAppInfoDeployRecordListDeployRecord },
    };
  }

  validate() {
    if(Array.isArray(this.deployRecord)) {
      $dara.Model.validateArray(this.deployRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoEccListEcc extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 3616cdca-4f92-4413-****-************
   */
  appId?: string;
  /**
   * @remarks
   * The status of the application instance. Valid values:
   * 
   * *   0: AGENT_OFF: indicates that the agent is offline.
   * *   1: STOPPED: indicates that the application is stopped.
   * *   3: RUNNING_BUT_URL_FAILED: indicates that the health check failed.
   * *   7: RUNNING: indicates that the application is running.
   * 
   * @example
   * 7
   */
  appState?: number;
  /**
   * @remarks
   * The status of the container.
   * 
   * @example
   * “”
   */
  containerStatus?: string;
  /**
   * @remarks
   * The time when the ECC was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573626226691
   */
  createTime?: number;
  /**
   * @remarks
   * The unique ID of the ECC.
   * 
   * @example
   * 0cf49a6c-95a8-4aa8-****-************
   */
  eccId?: string;
  /**
   * @remarks
   * The unique ID of the ECU.
   * 
   * @example
   * 07bd417a-b863-477d-****-************
   */
  ecuId?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * 8123db90-880f-486f-****-************
   */
  groupId?: string;
  /**
   * @remarks
   * The private IP address of the ECU.
   * 
   * @example
   * 172.16.*.***
   */
  ip?: string;
  /**
   * @remarks
   * The state of the latest task initiated on the application instance. Valid values:
   * 
   * *   0: UNKNOWN: indicates that the state of the latest task is unknown.
   * *   1: PROCESSING: indicates that the latest task is being processed.
   * *   2: SUCCESS: indicates that the latest task is executed.
   * *   3: FAILED: indicates that the latest task failed.
   * 
   * @example
   * 3
   */
  taskState?: number;
  /**
   * @remarks
   * The time when the ECC was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573635952012
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz9b246zg************
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appState: 'AppState',
      containerStatus: 'ContainerStatus',
      createTime: 'CreateTime',
      eccId: 'EccId',
      ecuId: 'EcuId',
      groupId: 'GroupId',
      ip: 'Ip',
      taskState: 'TaskState',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appState: 'number',
      containerStatus: 'string',
      createTime: 'number',
      eccId: 'string',
      ecuId: 'string',
      groupId: 'string',
      ip: 'string',
      taskState: 'number',
      updateTime: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoEccList extends $dara.Model {
  ecc?: QueryApplicationStatusResponseBodyAppInfoEccListEcc[];
  static names(): { [key: string]: string } {
    return {
      ecc: 'Ecc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecc: { 'type': 'array', 'itemType': QueryApplicationStatusResponseBodyAppInfoEccListEcc },
    };
  }

  validate() {
    if(Array.isArray(this.ecc)) {
      $dara.Model.validateArray(this.ecc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoEcuListEcu extends $dara.Model {
  /**
   * @remarks
   * The number of available CPU cores.
   * 
   * @example
   * 0
   */
  availableCpu?: number;
  /**
   * @remarks
   * The size of the available memory.
   * 
   * @example
   * 0
   */
  availableMem?: number;
  /**
   * @remarks
   * The time when the ECU was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573626207270
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether Docker is installed.
   * 
   * @example
   * false
   */
  dockerEnv?: boolean;
  /**
   * @remarks
   * The unique ID of the ECU. You can run the `dmidecode` command on the ECS instance to query the ECU ID.
   * 
   * @example
   * 07bd417a-b863-477d-****-************
   */
  ecuId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * 8123db90-880f-486f-****-************
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the last heartbeat detection was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573635952012
   */
  heartbeatTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-wz9fp1ljg***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The private IP address of the ECU.
   * 
   * @example
   * 172.16.*.**
   */
  ipAddr?: string;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * EDAS-scaled-cluster: default cluster
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the ECU is online.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shen****-*
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the ECU was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573635952012
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the user associated with the ECU.
   * 
   * @example
   * edas_com***_****@******-*****.***
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-wz9b246zg************
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-shen****-*
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      groupId: 'GroupId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      name: 'Name',
      online: 'Online',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCpu: 'number',
      availableMem: 'number',
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      groupId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
      name: 'string',
      online: 'boolean',
      regionId: 'string',
      updateTime: 'number',
      userId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoEcuList extends $dara.Model {
  ecu?: QueryApplicationStatusResponseBodyAppInfoEcuListEcu[];
  static names(): { [key: string]: string } {
    return {
      ecu: 'Ecu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecu: { 'type': 'array', 'itemType': QueryApplicationStatusResponseBodyAppInfoEcuListEcu },
    };
  }

  validate() {
    if(Array.isArray(this.ecu)) {
      $dara.Model.validateArray(this.ecu);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoGroupListGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 3616cdca-4f92-4413-****-************
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the change process for application deployment in the instance group.
   * 
   * @example
   * changeorder_a**_*******_**
   */
  appVersionId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 0d247b93-8d62-4e34-****-************
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the instance group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573626155185
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * 8123db90-880f-486f-****-************
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * _DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the instance group. Valid values:
   * 
   * *   0: default group
   * *   1: self-managed group
   * *   2: canary release group
   * 
   * @example
   * 0
   */
  groupType?: number;
  /**
   * @remarks
   * The version of the deployment package that was used to deploy an application in the instance group.
   * 
   * @example
   * 441beb18-da42-44dc-****-************
   */
  packageVersionId?: string;
  /**
   * @remarks
   * The time when the instance group was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573627441388
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      packageVersionId: 'PackageVersionId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      clusterId: 'string',
      createTime: 'number',
      groupId: 'string',
      groupName: 'string',
      groupType: 'number',
      packageVersionId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfoGroupList extends $dara.Model {
  group?: QueryApplicationStatusResponseBodyAppInfoGroupListGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': QueryApplicationStatusResponseBodyAppInfoGroupListGroup },
    };
  }

  validate() {
    if(Array.isArray(this.group)) {
      $dara.Model.validateArray(this.group);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBodyAppInfo extends $dara.Model {
  /**
   * @remarks
   * The basic information about the application.
   */
  application?: QueryApplicationStatusResponseBodyAppInfoApplication;
  /**
   * @remarks
   * The information about deployment records.
   */
  deployRecordList?: QueryApplicationStatusResponseBodyAppInfoDeployRecordList;
  /**
   * @remarks
   * The information about elastic compute containers (ECCs).
   */
  eccList?: QueryApplicationStatusResponseBodyAppInfoEccList;
  /**
   * @remarks
   * The information about elastic compute units (ECUs).
   */
  ecuList?: QueryApplicationStatusResponseBodyAppInfoEcuList;
  /**
   * @remarks
   * The information about the instance groups.
   */
  groupList?: QueryApplicationStatusResponseBodyAppInfoGroupList;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      deployRecordList: 'DeployRecordList',
      eccList: 'EccList',
      ecuList: 'EcuList',
      groupList: 'GroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: QueryApplicationStatusResponseBodyAppInfoApplication,
      deployRecordList: QueryApplicationStatusResponseBodyAppInfoDeployRecordList,
      eccList: QueryApplicationStatusResponseBodyAppInfoEccList,
      ecuList: QueryApplicationStatusResponseBodyAppInfoEcuList,
      groupList: QueryApplicationStatusResponseBodyAppInfoGroupList,
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    if(this.deployRecordList && typeof (this.deployRecordList as any).validate === 'function') {
      (this.deployRecordList as any).validate();
    }
    if(this.eccList && typeof (this.eccList as any).validate === 'function') {
      (this.eccList as any).validate();
    }
    if(this.ecuList && typeof (this.ecuList as any).validate === 'function') {
      (this.ecuList as any).validate();
    }
    if(this.groupList && typeof (this.groupList as any).validate === 'function') {
      (this.groupList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryApplicationStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application.
   */
  appInfo?: QueryApplicationStatusResponseBodyAppInfo;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: QueryApplicationStatusResponseBodyAppInfo,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.appInfo && typeof (this.appInfo as any).validate === 'function') {
      (this.appInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

