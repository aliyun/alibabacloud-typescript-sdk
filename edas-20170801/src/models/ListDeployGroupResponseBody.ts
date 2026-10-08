// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeployGroupResponseBodyDeployGroupListDeployGroup extends $dara.Model {
  appId?: string;
  appVersionId?: string;
  baseComponentMetaName?: string;
  clusterId?: string;
  clusterName?: string;
  cpuLimit?: string;
  cpuRequest?: string;
  createTime?: number;
  csClusterId?: string;
  deploymentName?: string;
  env?: string;
  ephemeralStorageLimit?: string;
  ephemeralStorageRequest?: string;
  groupId?: string;
  groupName?: string;
  groupType?: number;
  labels?: string;
  lastUpdateTime?: number;
  memoryLimit?: string;
  memoryRequest?: string;
  nameSpace?: string;
  packagePublicUrl?: string;
  packageUrl?: string;
  packageVersion?: string;
  packageVersionId?: string;
  postStart?: string;
  preStop?: string;
  reversion?: string;
  selector?: string;
  status?: string;
  strategy?: string;
  updateTime?: number;
  VExtServerGroupId?: string;
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
   * The status code of the request or a POP error code.
   * 
   * @example
   * 200
   */
  code?: number;
  deployGroupList?: ListDeployGroupResponseBodyDeployGroupList;
  /**
   * @remarks
   * The returned message.
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

