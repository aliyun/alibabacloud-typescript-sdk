// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaDBInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The engine ID, in the format of `Engine type.Engine name`.
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
   * Comment
   */
  comment?: string;
  /**
   * @remarks
   * The time when the engine was created.
   * 
   * The value is a 13-digit number, for example, `1541576644000`.
   * 
   * @example
   * 1541576644000
   */
  createTime?: number;
  /**
   * @remarks
   * The service endpoint.
   * 
   * @example
   * http://service.odpsstg.aliyun-inc.com/
   */
  endpoint?: string;
  /**
   * @remarks
   * The environment type. A value of 0 indicates a non-production table. A value of 1 indicates a production table.
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The data storage address of the EMR database.
   * 
   * @example
   * hdfs://
   */
  location?: string;
  /**
   * @remarks
   * The time when the engine was modified.
   * 
   * The value is a 13-digit number, for example, `1541576644000`.
   * 
   * @example
   * 1541576644000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the workspace owner.
   * 
   * @example
   * userId
   */
  ownerId?: string;
  /**
   * @remarks
   * The name of the workspace owner.
   * 
   * @example
   * my_name
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
   * Test project
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
   * The database type.
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

