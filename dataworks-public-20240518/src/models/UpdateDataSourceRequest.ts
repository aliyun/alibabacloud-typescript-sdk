// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The connection configurations of the data source, including the connection address, access identity, and environment information. The envType parameter specifies the environment in which the data source is used. Valid values of the envType parameter:
   * 
   * *   Dev: development environment
   * *   Prod: production environment
   * 
   * The parameters that you need to configure to the data source vary based on the mode in which the data source is added. For more information, see [Data source connection information (ConnectionProperties)](https://help.aliyun.com/document_detail/2852465.html).
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
   * The description of the data source. The description cannot exceed 3,000 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 16033
   */
  id?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5678
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      description: 'Description',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
      connectionPropertiesMode: 'string',
      description: 'string',
      id: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

