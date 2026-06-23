// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ColumnBusinessMetadata extends $dara.Model {
  /**
   * @remarks
   * Custom attribute values. The key is the custom attribute identifier, and the value is a list of attribute values.
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The business description of the field. Supported only for MaxCompute, HMS (EMR cluster), and DLF types.
   * 
   * @example
   * 字段1的业务描述
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      customAttributes: 'CustomAttributes',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      description: 'string',
    };
  }

  validate() {
    if(this.customAttributes) {
      $dara.Model.validateMap(this.customAttributes);
    }
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
   * 
   * @example
   * 字段1
   */
  comment?: string;
  /**
   * @remarks
   * Indicates whether the field is a foreign key. Only MaxCompute supports this property.
   * 
   * @example
   * false
   */
  foreignKey?: boolean;
  /**
   * @remarks
   * The ID. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format is `${EntityType}:${instance ID or URL-encoded connection string}:${data catalog identifier}:${database name}:${schema name}:${table name}:${field name}`. Use an empty string for any level that does not exist.
   * 
   * > For MaxCompute and DLF types, use an empty string for the instance ID. For MaxCompute, the database name is the MaxCompute project name. If the project uses the three-layer model, provide the schema name. Otherwise, use an empty string for the schema name.
   * 
   * > For StarRocks, the data catalog identifier is the catalog name. For DLF, it is the catalog ID. Other types do not support the catalog level, so use an empty string.
   * 
   * Examples of common ID formats:
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
   * > Where:<br>
   * > `instance_id`: The instance ID, required when the data source is registered in instance mode.<br>
   * > `encoded_jdbc_url`: The URL-encoded JDBC connection string, required when the data source is registered using a connection string.<br>
   * > `catalog_id`: The DLF catalog ID.<br>
   * > `project_name`: The MaxCompute project name.<br>
   * > `database_name`: The database name.<br>
   * > `schema_name`: The schema name. For MaxCompute, provide this only if the project uses the three-layer model. Otherwise, use an empty string.<br>
   * > `table_name`: The table name.<br>
   * > `column_name`: The field name.<br><br><br><br><br><br><br><br>
   * 
   * @example
   * maxcompute-column:::project_name:[schema_name]:table_name:column_name
   */
  id?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * column_name
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the field is a partition key.
   * 
   * @example
   * false
   */
  partitionKey?: boolean;
  /**
   * @remarks
   * The position.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * Indicates whether the field is a primary key. Only MaxCompute supports this property.
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The table ID. For details, see the `Table` object.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
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

