// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ColumnBusinessMetadata extends $dara.Model {
  /**
   * @remarks
   * The custom attribute values, where key is the custom attribute identifier and value is the attribute value list.
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The business description of the field. Currently, only MaxCompute, HMS (EMR cluster), and DLF types are supported.
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
   * The business metadata.
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
   * Indicates whether the column is a foreign key. Currently, only MaxCompute is supported.
   * 
   * @example
   * false
   */
  foreignKey?: boolean;
  /**
   * @remarks
   * The ID. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format is `${EntityType}:${instance ID or encoded URL}:${DataCatalogIdentity}:${DatabaseName}:${PatternName}:${TableName}:${ColumnName}`. Use an empty character as a placeholder for levels that do not exist.
   * 
   * > For MaxCompute and DLF types, use an empty string as a placeholder for the instance ID. For MaxCompute, the database name is the MaxCompute project name. Projects with the three-layer model enabled must include the schema name. For projects without the three-layer model enabled, use an empty string as a placeholder for the schema name.
   * 
   * > For StarRocks, the data catalog identifier is the catalog name. For DLF, the data catalog identifier is the catalog ID. Other types do not support the catalog level, and you can use an empty string as a placeholder.
   * 
   * The following examples show the ID formats for several common types:
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
   * > Where   
   * `instance_id`: The instance ID. This is required when the data source is registered in instance mode.   
   * `encoded_jdbc_url`: The URL-encoded JDBC connection string. This is required when the data source is registered by using a connection string.   
   * `catalog_id`: The DLF catalog ID.   
   * `project_name`: The MaxCompute project name.   
   * `database_name`: The database name.   
   * `schema_name`: The schema name. For MaxCompute, this is required only when the three-layer model is enabled for the project. If the three-layer model is not enabled, use an empty string as a placeholder.    
   * `table_name`: The table name.   
   * `column_name`: The column name.
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
   * Indicates whether the column is a partition key.
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
   * Indicates whether the column is a primary key. Currently, only MaxCompute is supported.
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  statisticsInfos?: { [key: string]: string };
  /**
   * @remarks
   * The table ID. For more information, see the `Table` object.
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
      statisticsInfos: 'StatisticsInfos',
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
      statisticsInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tableId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.businessMetadata && typeof (this.businessMetadata as any).validate === 'function') {
      (this.businessMetadata as any).validate();
    }
    if(this.statisticsInfos) {
      $dara.Model.validateMap(this.statisticsInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

