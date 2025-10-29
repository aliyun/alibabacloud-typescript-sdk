// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * Database entity ID. You can refer to the response of the ListDatabases operation and [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format: `${EntityType}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}`. Use empty strings as placeholders for levels that do not exist.
   * 
   * >  For StarRocks, the catalog identifier is the catalog name. For DLF, the catalog identifier is the catalog ID. For other types, the catalog-level hierarchy is not supported, and an empty string can be used as a placeholder.
   * 
   * Examples of common ID formats
   * 
   * *   `dlf-database::catalog_id:database_name`
   * *   `holo-database:instance_id::database_name`
   * *   `mysql-database:(instance_id|encoded_jdbc_url)::database_name`
   * 
   * > 
   * 
   * *   `catalog_id`: The ID of the DLF catalog.
   * 
   * *   `instance_id`: The instance ID, which is required when the data source is registered in instance mode.
   * 
   * *   `encoded_jdbc_url`: The encoded JDBC connection string, which is required when the data source is registered in connection-string mode.
   * 
   * *   `database_name`: The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql-database:rm-abc123xxx::test_db
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

