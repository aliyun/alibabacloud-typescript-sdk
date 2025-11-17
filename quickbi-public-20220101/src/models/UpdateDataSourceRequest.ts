// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Refer to the example JSON for parameter values. The parameters are explained as follows:
   * 
   * - dsId  --  Required  --  Data source ID
   * - userId -- Optional -- User identity for modifying the data source, quickbi\\"s userId. If provided, it will use the current userId for modification.
   * - dsType -- Required -- Data source type, not allowed to be modified, just pass the data source type.
   * - showName -- Optional -- Display name of the data source.
   * - address -- Optional -- Database connection string (domain or IP)
   * - port -- Optional -- Port
   * - schema --  Optional --  Database schema, only required for databases that support schemas. Example: sqlserver uses dbo by default; mysql does not support schemas.
   * - instance -- Optional -- Instance db
   * - username -- Optional -- Database username/ak
   * - password -- Optional -- Database key
   * - config -- Optional -- Additional database configuration items. Note that this data should be consistent with the different config parameters passed during creation for different data sources. Fields that do not need to be modified do not require parameters. For fields where parameters are passed, the default is to modify according to the passed parameters (including empty strings).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "schema": "schema",
   *     "userId":"S*****46345",
   *     "password": "Ta****34",
   *     "showName": "TEST",
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

