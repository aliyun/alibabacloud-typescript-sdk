// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The connection properties of the data source, including the endpoint, access identity, and environment context. The envType property is a member of this object and specifies the data source environment. Valid values:
   * - Dev: development environment.
   * - Prod: production environment.
   * 
   * Different data source types have different property specifications under different connection patterns (ConnectionPropertiesMode). For more information, see [Data source connection properties ConnectionProperties](https://help.aliyun.com/document_detail/2852465.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "envType": "Prod",
   *     "regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The connection mode of the data source. Different types have different subtypes with different parameter constraints. For example, a MySQL data source supports the following modes:
   * - InstanceMode (instance mode)
   * - UrlMode (connection string mode)
   * 
   * This parameter is required.
   * 
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The description of the data source. The description can be up to 3,000 characters in length.
   * 
   * @example
   * this is a holo datasource
   */
  description?: string;
  /**
   * @remarks
   * The name of the data source. The name can contain letters, digits, and underscores (_), and cannot start with a digit or underscore. The name can be up to 255 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demo_holo_datasource
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and go to the Workspace Management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace for this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the data source. More than 70 data source types are supported. For more information about the enumerated data source types, refer to References: [Data source type list](https://help.aliyun.com/document_detail/2852465.html).
   * 
   * This parameter is required.
   * 
   * @example
   * hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      description: 'Description',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
      connectionPropertiesMode: 'string',
      description: 'string',
      name: 'string',
      projectId: 'number',
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

