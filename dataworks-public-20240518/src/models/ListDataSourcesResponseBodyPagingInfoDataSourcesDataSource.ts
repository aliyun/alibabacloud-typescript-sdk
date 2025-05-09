// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource extends $dara.Model {
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
   * 1648711113000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who adds the data source.
   * 
   * @example
   * 1624387842781448
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
   * The ID of the data source.
   * 
   * @example
   * 16035
   */
  id?: number;
  /**
   * @remarks
   * The time when the data source was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1648711113000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the user who modifies the data source.
   * 
   * @example
   * 1624387842781448
   */
  modifyUser?: string;
  /**
   * @remarks
   * The unique business key of the data source. For example, the unique business key of a Hologres data source is in the `${tenantOwnerId}:${regionId}:${type}:${instanceId}:${database}` format.
   * 
   * @example
   * 1648711121000:cn-beijing:odps:yongxunQA_beijing_standard
   */
  qualifiedName?: string;
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
      qualifiedName: 'QualifiedName',
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
      qualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

