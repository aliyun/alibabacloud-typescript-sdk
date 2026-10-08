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
   * EDAS-scaled-cluster：默认集群
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
  createTime?: number;
  deployRecordId?: string;
  eccId?: string;
  ecuId?: string;
  packageMd5?: string;
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
  appId?: string;
  appState?: number;
  containerStatus?: string;
  createTime?: number;
  eccId?: string;
  ecuId?: string;
  groupId?: string;
  ip?: string;
  taskState?: number;
  updateTime?: number;
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
  availableCpu?: number;
  availableMem?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  groupId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
  name?: string;
  online?: boolean;
  regionId?: string;
  updateTime?: number;
  userId?: string;
  vpcId?: string;
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
  appId?: string;
  appVersionId?: string;
  clusterId?: string;
  createTime?: number;
  groupId?: string;
  groupName?: string;
  groupType?: number;
  packageVersionId?: string;
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
  deployRecordList?: QueryApplicationStatusResponseBodyAppInfoDeployRecordList;
  eccList?: QueryApplicationStatusResponseBodyAppInfoEccList;
  ecuList?: QueryApplicationStatusResponseBodyAppInfoEcuList;
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

