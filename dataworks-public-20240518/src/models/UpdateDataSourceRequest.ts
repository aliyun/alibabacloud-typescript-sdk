// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The specific connection configuration of the data source, including the endpoint, access identity, and environment context. The EnvType property of the data source environment is a member attribute of this object. Valid values:
   * - Dev: development environment.
   * - Prod: production environment.
   * 
   * Different types of data sources have different attribute specifications in different configuration patterns (ConnectionPropertiesMode). For more information, see [Connection properties](https://help.aliyun.com/document_detail/2852465.html).
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
   * The category used to add the data source. Different types have different subtypes and corresponding parameter constraints. Examples:
   * - InstanceMode: instance mode.
   * - UrlMode: connection string mode.
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
   * test
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 16033
   */
  id?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
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

