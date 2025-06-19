// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The connection configurations of the data source, including the connection address, access identity, and environment information. The envType parameter specifies the environment in which the data source is used. Valid values of the envType parameter:
   * 
   * *   Dev: development environment
   * *   Prod: production environment
   * 
   * The parameters that you need to configure for the data source vary based on the mode in which the data source is added. For more information, see [Data source connection information (ConnectionProperties)](https://help.aliyun.com/document_detail/2852465.html).
   * 
   * This parameter is required.
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
  connectionProperties?: string;
  /**
   * @remarks
   * The mode in which you want to add the data source. The mode varies based on the data source type. Valid values for MySQL data sources:
   * 
   * *   InstanceMode: instance mode
   * *   UrlMode: connection string mode
   * 
   * This parameter is required.
   * 
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The description of the data source. The description cannot exceed 3,000 characters in length.
   * 
   * @example
   * this is a holo datasource
   */
  description?: string;
  /**
   * @remarks
   * The name of the data source. The name can be up to 255 characters in length and can contain letters, digits, and underscores (_). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * demo_holo_datasource
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and go to the workspace management page to obtain the ID.
   * 
   * This parameter is used to determine the DataWorks workspaces used for this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the data source. More than 70 types of data sources are supported in DataWorks. For more information, see [Data source types](https://help.aliyun.com/document_detail/2852465.html).
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

