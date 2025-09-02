// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaDBInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The compute engine instance ID. Specify the ID in the `Engine type.Engine name` format.
   * 
   * @example
   * odps.engine_name
   */
  appGuid?: string;
  /**
   * @remarks
   * The EMR cluster ID.
   * 
   * @example
   * abc
   */
  clusterBizId?: string;
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * The ID of the compute engine instance. The ID is in the Engine type.Engine name format.
   */
  comment?: string;
  /**
   * @remarks
   * The time when the compute engine instance was created.
   * 
   * @example
   * 1541576644000
   */
  createTime?: number;
  /**
   * @remarks
   * The endpoint of the service.
   * 
   * @example
   * http://service.odpsstg.aliyun-inc.com/
   */
  endpoint?: string;
  /**
   * @remarks
   * The type of the environment. Valid values: 0 and 1. The value 0 indicates the development environment. The value 1 indicates the production environment.
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The storage path of the metadatabase of the EMR cluster.
   * 
   * @example
   * hdfs://
   */
  location?: string;
  /**
   * @remarks
   * The time when the compute engine instance was modified.
   * 
   * @example
   * 1541576644000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the workspace owner.
   * 
   * @example
   * 23
   */
  ownerId?: string;
  /**
   * @remarks
   * The name of the workspace owner.
   * 
   * @example
   * 323
   */
  ownerName?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 22
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * The storage path of the metadatabase of the EMR cluster.
   */
  projectNameCn?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 233
   */
  tenantId?: number;
  /**
   * @remarks
   * The type of the metadatabase.
   * 
   * @example
   * hive
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      clusterBizId: 'ClusterBizId',
      comment: 'Comment',
      createTime: 'CreateTime',
      endpoint: 'Endpoint',
      envType: 'EnvType',
      location: 'Location',
      modifyTime: 'ModifyTime',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectNameCn: 'ProjectNameCn',
      tenantId: 'TenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      clusterBizId: 'string',
      comment: 'string',
      createTime: 'number',
      endpoint: 'string',
      envType: 'number',
      location: 'string',
      modifyTime: 'number',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      projectId: 'number',
      projectName: 'string',
      projectNameCn: 'string',
      tenantId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaDBInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic metadata information.
   */
  data?: GetMetaDBInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1411515937****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaDBInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

