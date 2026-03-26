// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ColumnBusinessMetadata extends $dara.Model {
  /**
   * @remarks
   * A business-level description of the field (supported only by MaxCompute, HMS (EMR clusters) and DLF.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Column extends $dara.Model {
  /**
   * @remarks
   * Business metadata.
   */
  businessMetadata?: ColumnBusinessMetadata;
  /**
   * @remarks
   * The comment.
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether the column is a foreign key (only supported by MaxCompute).
   * 
   * @example
   * false
   */
  foreignKey?: boolean;
  /**
   * @remarks
   * The ID. For more information, see [Description of concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format is: `${EntityType}:${Instance ID or encoded URL}:${Catalog Identifier}:${Database name}:${Schema name}:${Table Name}:${Column name}`. Use empty strings as placeholders for non-existent hierarchy levels.
   * 
   * >  For the MaxCompute and DLF types, use an empty string as the placeholder for the instance ID. For MaxCompute, the database name refers to the MaxCompute project name. If the project has schema enabled, you must specify the schema name. Otherwise, use an empty string as the placeholder for the schema name.
   * 
   * >  For StarRocks, the catalog identifier is the catalog name. For DLF, it is the catalog ID. Other types do not support the catalog level and you can use an empty string as a placeholder.
   * 
   * Examples of ID formats for common types are as follows:
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
   * `instance_id`: The instance ID, required when the data source is registered in instance mode.\\
   * `encoded_jdbc_url`: The URL-encoded JDBC connection string, which is required when the data source is registered via a connection string.\\
   * `catalog_id`: The DLF catalog ID.\\
   * `project_name`: The MaxCompute project name.\\
   * `database_name`: The database name.\\
   * `schema_name`: The schema name. For the MaxCompute type, this is required only if the project has enabled schema; otherwise, use an empty string as a placeholder.\\
   * `table_name`: The table name.\\
   * `column_name`: The field name.
   * 
   * @example
   * maxcompute-column:123456::test_project:default:test_tbl:col1
   */
  id?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * col1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the column is a partition key.
   * 
   * @example
   * false
   */
  partitionKey?: boolean;
  /**
   * @remarks
   * The position of the field.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * Specifies whether the column is a primary key (only supported by MaxCompute).
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The table ID. You can refer to the `Table` object.
   * 
   * @example
   * maxcompute-table:123456::test_project:default:test_tbl
   */
  tableId?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      businessMetadata: 'BusinessMetadata',
      comment: 'Comment',
      foreignKey: 'ForeignKey',
      id: 'Id',
      name: 'Name',
      partitionKey: 'PartitionKey',
      position: 'Position',
      primaryKey: 'PrimaryKey',
      tableId: 'TableId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMetadata: ColumnBusinessMetadata,
      comment: 'string',
      foreignKey: 'boolean',
      id: 'string',
      name: 'string',
      partitionKey: 'boolean',
      position: 'number',
      primaryKey: 'boolean',
      tableId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.businessMetadata && typeof (this.businessMetadata as any).validate === 'function') {
      (this.businessMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

