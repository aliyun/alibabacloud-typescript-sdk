// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetColumnRequest extends $dara.Model {
  /**
   * @remarks
   * The ID. You can refer to the response of the ListColumns operation and the [description of concepts related to metadata entities.](https://help.aliyun.com/document_detail/2880092.html)
   * 
   * The format: `${EntityType}:${Instance ID or escaped URL}:${Catalog name}:${Database name}`. Use empty strings as placeholders for levels that do not exist.
   * 
   * >  For the MaxCompute and DLF types, the instance ID level must be left empty. For the MaxCompute type, the instance ID level is represented by an empty string. The database name is the name of the MaxCompute project with schema enabled.
   * 
   * >  The catalog identifier of the StarRocks is the catalog name, and the catalog identifier of the DLF type is the catalog ID. Other types do not support catalog levels and can use empty strings as placeholders.
   * 
   * Examples of common ID formats
   * 
   * `maxcompute-column:::project_name:[schema_name]:table_name:column_name`
   * 
   * `dlf-column::catalog_id:database_name::table_name:column_name`
   * 
   * `hms-column:instance_id::database_name::table_name:column_name`
   * 
   * `holo-column:instance_id::database_name:schema_name:table_name:column_name`
   * 
   * `mysql-column:(instance_id|encoded_jdbc_url)::database_name::table_name:column_name`
   * 
   * > \\
   * `instance_id`: the ID of the instance, which is required when the data source is registered in instance mode.\\
   * `encoded_jdbc_url`: the URL-encoded JDBC connection string, which is required when the data source is registered via a connection string.\\
   * `catalog_id`: The DLF catalog ID.\\
   * `project_name`: The MaxCompute project name.\\
   * `database_name`: The database name.\\
   * `schema_name`: The schema name. For the MaxCompute type, this is required only if the project has enabled schema; otherwise, use an empty string as a placeholder.\\
   * `table_name`: The table name.\\
   * `column_name`: The field name.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-column:11075xxxx::test_project:test_schema:test_table:test_column
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

