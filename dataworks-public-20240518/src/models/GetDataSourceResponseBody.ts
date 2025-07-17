// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceResponseBodyDataSource extends $dara.Model {
  /**
   * @remarks
   * The connection configurations of the data source, including the connection address, access identity, and environment information. The envType parameter specifies the environment in which the data source is used. Valid values of the envType parameter:
   * 
   * *   Dev: development environment
   * *   Prod: production environment
   * 
   * The parameters that you need to configure for the data source vary based on the mode in which the data source is added. For more information, see [Data source connection information (ConnectionProperties)](https://help.aliyun.com/document_detail/2852465.html).
   * 
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: any;
  /**
   * @remarks
   * The mode in which the data source is added. The mode varies based on the data source type. Valid values:
   * 
   * *   InstanceMode: instance mode
   * *   UrlMode: connection string mode
   * *   CdhMode: CDH cluster mode
   * 
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The time when the data source was added. This value is a UNIX timestamp.
   * 
   * @example
   * 1698286929333
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who adds the data source.
   * 
   * @example
   * 1107550004253538
   */
  createUser?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 16738
   */
  id?: number;
  /**
   * @remarks
   * The time when the data source was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1698286929333
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the user who modifies the data source.
   * 
   * @example
   * 1107550004253538
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the workspace with which the data source is associated.
   * 
   * @example
   * 52660
   */
  projectId?: number;
  /**
   * @remarks
   * The unique business key of the data source. For example, the unique business key of a Hologres data source is in the `${tenantOwnerId}:${regionId}:${type}:${instanceId}:${database}` format.
   * 
   * @example
   * 1107550004253538:cn-beijing:holo:hgprecn-cn-x0r3oun4k001:testdb
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      projectId: 'ProjectId',
      qualifiedName: 'QualifiedName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'any',
      connectionPropertiesMode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      projectId: 'number',
      qualifiedName: 'string',
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

export class GetDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data source.
   */
  dataSource?: GetDataSourceResponseBodyDataSource;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: GetDataSourceResponseBodyDataSource,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

