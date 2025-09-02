// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableRequestColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the field. You can configure a maximum of 1,000 fields when you call the CreateTable operation to create a table.
   * 
   * This parameter is required.
   * 
   * @example
   * columnName1
   */
  columnName?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * columnName in chinese
   */
  columnNameCn?: string;
  /**
   * @remarks
   * The data type of the field. For information about supported data types, see [Data type editions](https://help.aliyun.com/document_detail/27821.html) in MaxCompute documentation.
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  columnType?: string;
  /**
   * @remarks
   * The comment of the field.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether the field is a partition field.
   * 
   * @example
   * true
   */
  isPartitionCol?: boolean;
  /**
   * @remarks
   * The length of the field. For more information, see [MaxCompute data type editions](https://help.aliyun.com/document_detail/159541.html).
   * 
   * @example
   * 10
   */
  length?: number;
  /**
   * @remarks
   * The sequence number of the field. You can use this parameter to specify how fields are sorted in a table. By default, fields are sorted based on the order in which requests are created. If the field is a partition field, this parameter is not supported.
   * 
   * @example
   * 1
   */
  seqNumber?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnNameCn: 'ColumnNameCn',
      columnType: 'ColumnType',
      comment: 'Comment',
      isPartitionCol: 'IsPartitionCol',
      length: 'Length',
      seqNumber: 'SeqNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnNameCn: 'string',
      columnType: 'string',
      comment: 'string',
      isPartitionCol: 'boolean',
      length: 'number',
      seqNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestThemes extends $dara.Model {
  /**
   * @remarks
   * The theme ID.
   * 
   * @example
   * 101
   */
  themeId?: number;
  /**
   * @remarks
   * The level that corresponds to the theme ID.
   * 
   * @example
   * 101
   */
  themeLevel?: number;
  static names(): { [key: string]: string } {
    return {
      themeId: 'ThemeId',
      themeLevel: 'ThemeLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      themeId: 'number',
      themeLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the MaxCompute project. Specify the ID in the odps.{projectName} format.
   * 
   * @example
   * odps.test
   */
  appGuid?: string;
  /**
   * @remarks
   * The ID of the associated category. You can call the [GetMetaCategory](https://help.aliyun.com/document_detail/173932.html) operation to query the IDs of all categories that can be associated.
   * 
   * @example
   * 101
   */
  categoryId?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * reserved
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of fields. A maximum of 1,000 fields are supported.
   * 
   * This parameter is required.
   */
  columns?: CreateTableRequestColumns[];
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The endpoint of MaxCompute.
   * 
   * @example
   * odps://abc
   */
  endpoint?: string;
  /**
   * @remarks
   * The environment type of the DataWorks workspace. Valid values:
   * 
   * *   0: development environment
   * *   1: production environment
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The storage type of the external table. Valid values:
   * 
   * *   0: Object Storage Service (OSS)
   * *   1: Tablestore
   * *   2: Volume
   * *   3: MySQL
   * 
   * @example
   * 0
   */
  externalTableType?: string;
  /**
   * @remarks
   * Specifies whether to create a MaxCompute partitioned table. Valid values: 1 and 0. The value 1 indicates a partitioned table. The value 0 indicates a non-partitioned table. This parameter is deprecated. Do not use this parameter. The Column.N.isPartitionCol parameter is used to specify whether to create a MaxCompute partitioned table. If the Column.N.isPartitionCol parameter is set to true, a MaxCompute partitioned table is created.
   * 
   * @example
   * 0
   */
  hasPart?: number;
  /**
   * @remarks
   * Specifies whether to create a view or table. Valid values:
   * 
   * *   0: Create a table.
   * *   1: Create a view.
   * 
   * @example
   * 0
   */
  isView?: number;
  /**
   * @remarks
   * The lifecycle of the table. Unit: days. By default, this parameter is left empty, which indicates that the table is permanently stored.
   * 
   * @example
   * 10
   */
  lifeCycle?: number;
  /**
   * @remarks
   * The storage location of the external table.
   * 
   * @example
   * location
   */
  location?: string;
  /**
   * @remarks
   * The ID of the logical level.
   * 
   * @example
   * 101
   */
  logicalLevelId?: number;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the physical level.
   * 
   * @example
   * 101
   */
  physicsLevelId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 23
   */
  projectId?: number;
  /**
   * @remarks
   * The schema information of the table. You need to enter the schema information of the table if you enable the table schema in MaxCompute.
   * 
   * @example
   * default
   * 
   * **if can be null:**
   * true
   */
  schema?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * tableName1
   */
  tableName?: string;
  /**
   * @remarks
   * The list of themes.
   */
  themes?: CreateTableRequestThemes[];
  /**
   * @remarks
   * Specifies whether the table or workspace is visible. Valid values:
   * 
   * *   0: Both the table and workspace are invisible.
   * *   1: Both the table and workspace are visible.
   * *   2: Only the workspace is visible.
   * 
   * @example
   * 1
   */
  visibility?: number;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      categoryId: 'CategoryId',
      clientToken: 'ClientToken',
      columns: 'Columns',
      comment: 'Comment',
      endpoint: 'Endpoint',
      envType: 'EnvType',
      externalTableType: 'ExternalTableType',
      hasPart: 'HasPart',
      isView: 'IsView',
      lifeCycle: 'LifeCycle',
      location: 'Location',
      logicalLevelId: 'LogicalLevelId',
      ownerId: 'OwnerId',
      physicsLevelId: 'PhysicsLevelId',
      projectId: 'ProjectId',
      schema: 'Schema',
      tableName: 'TableName',
      themes: 'Themes',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      categoryId: 'number',
      clientToken: 'string',
      columns: { 'type': 'array', 'itemType': CreateTableRequestColumns },
      comment: 'string',
      endpoint: 'string',
      envType: 'number',
      externalTableType: 'string',
      hasPart: 'number',
      isView: 'number',
      lifeCycle: 'number',
      location: 'string',
      logicalLevelId: 'number',
      ownerId: 'string',
      physicsLevelId: 'number',
      projectId: 'number',
      schema: 'string',
      tableName: 'string',
      themes: { 'type': 'array', 'itemType': CreateTableRequestThemes },
      visibility: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.themes)) {
      $dara.Model.validateArray(this.themes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

