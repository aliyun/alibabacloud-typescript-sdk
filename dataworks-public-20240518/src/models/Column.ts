// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ColumnBusinessMetadata extends $dara.Model {
  /**
   * @remarks
   * The custom attribute values, where the key is the custom attribute identifier and the value is a list of attribute values.
   * 
   * @example
   * {"owner_name":["Zhang San"]}
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The business description of the column. This parameter is supported only by MaxCompute, HMS (EMR clusters), and DLF.
   * 
   * @example
   * Business description of column 1
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
   * The technical parameters of the column. The key is the parameter name and the value is a string. Objects or arrays are represented as JSON strings.
   * 
   * @example
   * {"type":"keyword"}
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
   * Specifies whether the column is a foreign key. This parameter is supported only by MaxCompute.
   * 
   * @example
   * false
   */
  foreignKey?: boolean;
  /**
   * @remarks
   * The ID. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format is `${EntityType}:${Instance ID or URL-encoded JDBC URL}:${Catalog identifier}:${Database name}:${Schema name}:${Table name}:${Column name}`. Use an empty string as a placeholder for non-existent levels.
   * 
   * > For MaxCompute and DLF, use an empty string as a placeholder for the instance ID. For MaxCompute, the database name is the MaxCompute project name. If the three-level model is enabled for the project, the schema name is required. Otherwise, use an empty string as a placeholder for the schema name.
   * 
   * > For StarRocks, the catalog identifier is the catalog name. For DLF, the catalog identifier is the catalog ID. Other types do not support the catalog level, so use an empty string as a placeholder.
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
   * `schema_name`: The schema name. For MaxCompute, this is required only if the three-level model is enabled for the project. Otherwise, use an empty string as a placeholder.    
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
   * Specifies whether the column is a primary key. This parameter is supported only by MaxCompute.
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The statistical metrics of the column. The key is the metric name and the value is the statistical value in string format. Current metrics include the number of production runs in the last 30 days (prodRunCount30d) and the number of downstream tasks that depend on the column (downstreamTaskCount30d). Metrics without statistical values are not returned.
   * 
   * @example
   * {"prodRunCount30d": "96"}
   */
  statisticsInfos?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the table. For more information, see the `Table` object.
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

