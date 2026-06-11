// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON-formatted string defining the data source configuration to update. See the example for the specific format. The JSON string includes the following parameters:
   * 
   * - `dsId`: Required. The ID of the data source.
   * 
   * - `userId`: Optional. The Quick BI user ID of the user who modifies the data source. If you specify this parameter, the update runs as this user.
   * 
   * - `dsType`: Required. The type of the data source. This value cannot be changed and must match the existing data source type.
   * 
   * - `showName`: Optional. The display name of the data source.
   * 
   * - `address`: Optional. The database connection endpoint, which can be a domain name or an IP address.
   * 
   * - `port`: Optional. The connection port for the database.
   * 
   * - `schema`: Optional. The database schema. This parameter is required only for database types that support schemas. For example, the default schema for SQL Server is `dbo`, while MySQL does not use schemas.
   * 
   * - `instance`: Optional. The database instance.
   * 
   * - `username`: Optional. The username for the database account or the AccessKey ID.
   * 
   * - `password`: Optional. The password for the database account.
   * 
   * - `resource`: Specifies the VPC type. This parameter is required if you are using a VPC connection. If the data source was created with VPC settings, you must include this parameter in your update request. Omitting this parameter from the request disables the VPC connection. For a list of `resource` values, see the **Additional information** section below.
   * 
   * - `accessId`: Optional. The AccessKey ID for the VPC instance. This parameter is required if the `resource` parameter is specified.
   * 
   * - `accessKey`: Optional. The AccessKey secret for the VPC instance. This parameter is required if the `resource` parameter is specified.
   * 
   * - `instanceId`: Optional. The ID of the VPC instance. This parameter is required if the `resource` parameter is specified.
   * 
   * - `region`: Optional. The region where the VPC instance is located. This parameter is required if the `resource` parameter is specified. For a list of region IDs, see the **Additional information** section below.
   * 
   * - `config`: Optional. A JSON object that contains additional configuration parameters for the database. You only need to include the fields that you want to update. Any field that you include is updated to the new value, even if it is an empty string. Fields that are not included in the request remain unchanged.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "schema": "schema",
   *     "userId":"S*****46345",
   *     "password": "Ta****34",
   *     "showName": "test",
   *     "address": "11*****.55",
   *     "instance": "quickbi_test",
   *     "dsId": "34d6d******3ca8ac267",
   *     "port": "3306",
   *     "dsType": "mysql",
   *     "username": "root",
   *     "config":  {
   *         "initialSql": "Set timezone = \\"-10\\""
   *     }
   * }
   */
  updateModel?: string;
  static names(): { [key: string]: string } {
    return {
      updateModel: 'UpdateModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

