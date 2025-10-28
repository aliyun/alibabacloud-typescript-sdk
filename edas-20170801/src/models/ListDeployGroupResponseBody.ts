// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeployGroupResponseBodyDeployGroupListDeployGroup extends $dara.Model {
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
   * The name of the basic component.
   * 
   * @example
   * k8s-sc-consumer-****
   */
  baseComponentMetaName?: string;
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
   * The name of the cluster.
   * 
   * @example
   * doc-test
   */
  clusterName?: string;
  /**
   * @remarks
   * The maximum number of CPU cores allowed for each application instance when the application is running.
   * 
   * @example
   * 400
   */
  cpuLimit?: string;
  /**
   * @remarks
   * The number of CPU cores requested for each application instance when the application is running. Unit: cores. Value 0 indicates that no limit is set on CPU cores.
   * 
   * @example
   * 1
   */
  cpuRequest?: string;
  /**
   * @remarks
   * The time when the application was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573627695779
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Container Service for Kubernetes (ACK) cluster.
   * 
   * @example
   * c66e65950db****cba92f17434df1****
   */
  csClusterId?: string;
  /**
   * @remarks
   * The name of the deployment.
   * 
   * @example
   * test
   */
  deploymentName?: string;
  /**
   * @remarks
   * The ID of the ACK cluster.
   * 
   * @example
   * 497806cb-****-6a7
   */
  env?: string;
  /**
   * @remarks
   * The maximum size of space required by ephemeral storage. Unit: GB. Value 0 indicates that no limit is set on the space size.
   * 
   * @example
   * 8
   */
  ephemeralStorageLimit?: string;
  /**
   * @remarks
   * The minimum size of space required by ephemeral storage. Unit: GB. Value 0 indicates that no limit is set on the space size.
   * 
   * @example
   * 4
   */
  ephemeralStorageRequest?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * 577f4c50-16ee-43d8-****-************
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
   * *   0: default group.
   * *   1: Canary release is disabled for traffic management.
   * *   2: Canary release is enabled for traffic management.
   * 
   * @example
   * 1
   */
  groupType?: number;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * test
   */
  labels?: string;
  /**
   * @remarks
   * The time when the application was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1587888503825
   */
  lastUpdateTime?: number;
  /**
   * @remarks
   * The maximum size of memory allowed for each application instance when the application is running. Unit: MB. Value 0 indicates that no limit is set on the memory size.
   * 
   * @example
   * 0
   */
  memoryLimit?: string;
  /**
   * @remarks
   * The size of memory requested for each application instance when the application is running. Unit: MB. Value 0 indicates that no limit is set on the memory size.
   * 
   * @example
   * 512
   */
  memoryRequest?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * ping****est
   */
  nameSpace?: string;
  /**
   * @remarks
   * The external download URL of the deployment package.
   */
  packagePublicUrl?: string;
  /**
   * @remarks
   * The URL of the deployment package.
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package.
   * 
   * @example
   * E
   */
  packageVersion?: string;
  /**
   * @remarks
   * The version of the deployment package that was used to deploy an application in the instance group.
   * 
   * @example
   * a7d48fe8-ad8f-****-89bd-74cc1ee6****
   */
  packageVersionId?: string;
  /**
   * @remarks
   * The post-start script.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  postStart?: string;
  /**
   * @remarks
   * The pre-stop script.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  preStop?: string;
  /**
   * @remarks
   * The version of the application. The value progressively increases in the range of 0 to 7.
   * 
   * @example
   * 2
   */
  reversion?: string;
  /**
   * @remarks
   * The ID of the application deployed in the ACK cluster in Enterprise Distributed Application Service (EDAS).
   * 
   * @example
   * 53dd85cc-25b4-4d0e-****-6bf5465****4
   */
  selector?: string;
  /**
   * @remarks
   * The state of the application instance group. Valid values:
   * 
   * *   0: ready
   * *   1: in progress
   * *   2: successful
   * *   3: failed
   * *   6: terminated
   * *   10: failed due to a system exception
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The throttling policy. This parameter is reserved.
   * 
   * @example
   * RollingUpdate
   */
  strategy?: string;
  /**
   * @remarks
   * The time when the application was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573627695779
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the vServer group of the Internet-facing SLB instance associated with the instance group.
   * 
   * @example
   * rsp-cige6******
   */
  VExtServerGroupId?: string;
  /**
   * @remarks
   * The ID of the vServer group of the internal-facing Server Load Balancer (SLB) instance associated with the instance group.
   * 
   * @example
   * rsp-cige6******
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      baseComponentMetaName: 'BaseComponentMetaName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      createTime: 'CreateTime',
      csClusterId: 'CsClusterId',
      deploymentName: 'DeploymentName',
      env: 'Env',
      ephemeralStorageLimit: 'EphemeralStorageLimit',
      ephemeralStorageRequest: 'EphemeralStorageRequest',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      labels: 'Labels',
      lastUpdateTime: 'LastUpdateTime',
      memoryLimit: 'MemoryLimit',
      memoryRequest: 'MemoryRequest',
      nameSpace: 'NameSpace',
      packagePublicUrl: 'PackagePublicUrl',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      packageVersionId: 'PackageVersionId',
      postStart: 'PostStart',
      preStop: 'PreStop',
      reversion: 'Reversion',
      selector: 'Selector',
      status: 'Status',
      strategy: 'Strategy',
      updateTime: 'UpdateTime',
      VExtServerGroupId: 'VExtServerGroupId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      baseComponentMetaName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      cpuLimit: 'string',
      cpuRequest: 'string',
      createTime: 'number',
      csClusterId: 'string',
      deploymentName: 'string',
      env: 'string',
      ephemeralStorageLimit: 'string',
      ephemeralStorageRequest: 'string',
      groupId: 'string',
      groupName: 'string',
      groupType: 'number',
      labels: 'string',
      lastUpdateTime: 'number',
      memoryLimit: 'string',
      memoryRequest: 'string',
      nameSpace: 'string',
      packagePublicUrl: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      packageVersionId: 'string',
      postStart: 'string',
      preStop: 'string',
      reversion: 'string',
      selector: 'string',
      status: 'string',
      strategy: 'string',
      updateTime: 'number',
      VExtServerGroupId: 'string',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployGroupResponseBodyDeployGroupList extends $dara.Model {
  deployGroup?: ListDeployGroupResponseBodyDeployGroupListDeployGroup[];
  static names(): { [key: string]: string } {
    return {
      deployGroup: 'DeployGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployGroup: { 'type': 'array', 'itemType': ListDeployGroupResponseBodyDeployGroupListDeployGroup },
    };
  }

  validate() {
    if(Array.isArray(this.deployGroup)) {
      $dara.Model.validateArray(this.deployGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployGroupResponseBody extends $dara.Model {
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
   * The information about the instance group in which the application is deployed.
   */
  deployGroupList?: ListDeployGroupResponseBodyDeployGroupList;
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
   * 3FDE-DS9R-*********************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deployGroupList: 'DeployGroupList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      deployGroupList: ListDeployGroupResponseBodyDeployGroupList,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.deployGroupList && typeof (this.deployGroupList as any).validate === 'function') {
      (this.deployGroupList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

