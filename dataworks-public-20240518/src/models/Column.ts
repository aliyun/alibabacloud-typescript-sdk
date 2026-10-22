// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ColumnBusinessMetadata extends $dara.Model {
  /**
   * @remarks
   * The custom attribute values, where the key is the custom attribute identifier and the value is a list of attribute values.
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The business description of the column. Currently, only MaxCompute, HMS (EMR cluster), and DLF types are supported.
   * 
   * @example
   * Business description of Column 1
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

export class ColumnTechnicalMetadata extends $dara.Model {
  /**
   * @remarks
   * The technical parameters of the column, where the key is the parameter name and the value is a string. Objects or arrays are represented as JSON strings.
   */
  parameters?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
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
   * Column 1
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether the column is a foreign key. Currently, only the MaxCompute type is supported.
   * 
   * @example
   * false
   */
  foreignKey?: boolean;
  /**
   * @remarks
   * The ID. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format is `${EntityType}:${Instance ID or URL-encoded URL}:${Catalog ID}:${Database name}:${Schema name}:${Table name}:${Column name}`. Use an empty string as a placeholder for non-existent levels.
   * 
   * > For MaxCompute and DLF types, use an empty string as a placeholder for the instance ID. For the MaxCompute type, the database name is the MaxCompute project name. Projects with the three-tier model enabled require the schema name. For projects without the three-tier model enabled, use an empty string as a placeholder for the schema name.
   * 
   * > For the StarRocks type, the catalog ID is the catalog name. For the DLF type, the catalog ID is the catalog ID. Other types do not support the catalog level, and an empty string can be used as a placeholder.
   * 
   * The following are the ID formats for several common types:
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
   * > Where:   
   * `instance_id`: The instance ID, which is required when the data source is registered in instance mode.   
   * `encoded_jdbc_url`: The URL-encoded JDBC connection string, which is required when the data source is registered in connection string mode.   
   * `catalog_id`: The DLF catalog ID.   
   * `project_name`: The MaxCompute project name.   
   * `database_name`: The database name.   
   * `schema_name`: The schema name. For the MaxCompute type, this is required only if the three-tier model is enabled for the project. If it is not enabled, use an empty string as a placeholder.    
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
   * Specifies whether the column is a partition key.
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
   * Specifies whether the column is a primary key. Currently, only the MaxCompute type is supported.
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  statisticsInfos?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the table. Refer to the Table object.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  tableId?: string;
  /**
   * @remarks
   * The technical metadata.
   */
  technicalMetadata?: ColumnTechnicalMetadata;
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
      technicalMetadata: 'TechnicalMetadata',
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
      technicalMetadata: ColumnTechnicalMetadata,
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
    if(this.technicalMetadata && typeof (this.technicalMetadata as any).validate === 'function') {
      (this.technicalMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

