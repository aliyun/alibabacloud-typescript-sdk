// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertDeployGroupResponseBodyDeployGroupEntity extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 3616cdca-4f92-4413-***********
   */
  appId?: string;
  /**
   * @remarks
   * The version of the deployment package for the application.
   * 
   * *   If the application is deployed, a string of random numbers is returned.
   * *   If the application is not deployed, the return value is empty.
   * 
   * @example
   * ****f4c50-16ee-a02b-667*****
   */
  appVersionId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 0d247b93-8d62-4e34***********
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the instance group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573627695779
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the instance group. Valid values:
   * 
   * *   0: the default group.
   * *   1: a group for which canary traffic management is not enabled.
   * *   2: a group for which canary traffic management is enabled.
   * 
   * @example
   * 1
   */
  groupType?: number;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * 577f4c50-16ee-43d8-a02b-667*********
   */
  id?: string;
  /**
   * @remarks
   * The version of the deployment package that was used to deploy an application in the instance group.
   * 
   * *   If an application is deployed in the instance group, a string of random numbers is returned.
   * *   If no application is deployed in the instance group, the return value is empty.
   * 
   * @example
   * ****7b93-8d62-4e34***********
   */
  packageVersionId?: string;
  /**
   * @remarks
   * The time when the instance group was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573627695779
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      groupName: 'GroupName',
      groupType: 'GroupType',
      id: 'Id',
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
      groupName: 'string',
      groupType: 'number',
      id: 'string',
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

export class InsertDeployGroupResponseBody extends $dara.Model {
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
   * The information about the instance group.
   */
  deployGroupEntity?: InsertDeployGroupResponseBodyDeployGroupEntity;
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
   * 3RD9-D3FRE****************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deployGroupEntity: 'DeployGroupEntity',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      deployGroupEntity: InsertDeployGroupResponseBodyDeployGroupEntity,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.deployGroupEntity && typeof (this.deployGroupEntity as any).validate === 'function') {
      (this.deployGroupEntity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

