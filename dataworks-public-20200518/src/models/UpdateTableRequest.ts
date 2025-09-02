// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableRequestColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  columnName?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * 名称
   */
  columnNameCn?: string;
  /**
   * @remarks
   * The type of the field. For more information, see MaxCompute field types.
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
   * Specifies whether the field is a partition field. Valid values: 0 and 1. The value 0 indicates that the field is not a partition field. The value 1 indicates that the field is a partition field.
   * 
   * @example
   * 0
   */
  isPartitionCol?: boolean;
  /**
   * @remarks
   * The length of the field.
   * 
   * @example
   * 10
   */
  length?: number;
  /**
   * @remarks
   * The sequence number of the field. If the field is a partition field, this parameter is not supported.
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

export class UpdateTableRequestThemes extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated topic.
   * 
   * @example
   * 101
   */
  themeId?: number;
  /**
   * @remarks
   * The level that corresponds to the topic ID.
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

export class UpdateTableRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the MaxCompute project. Specify the GUID in the odps.{projectName} format.
   * 
   * @example
   * odps.test
   */
  appGuid?: string;
  /**
   * @remarks
   * The ID of the associated category.
   * 
   * @example
   * 101
   */
  categoryId?: number;
  /**
   * @remarks
   * The list of fields.
   */
  columns?: UpdateTableRequestColumns[];
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
   * Specifies whether the table exists. Valid values:
   * 
   * *   true: The table exists.
   * *   false: The table does not exist.
   * 
   * This parameter is deprecated. Do not use this parameter.
   * 
   * @example
   * true
   */
  createIfNotExists?: boolean;
  /**
   * @remarks
   * The endpoint of MaxCompute. If you do not specify this parameter, the endpoint of the MaxCompute project is used.
   * 
   * @example
   * odps://
   */
  endpoint?: string;
  /**
   * @remarks
   * The environment of the DataWorks workspace. Valid values: 0 and 1. The value 0 indicates the development environment. The value 1 indicates the production environment.
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The type of the external table. Valid values: 0, 1, 2, and 3. The value 0 indicates that the external table is an OSS external table. The value 1 indicates that the external table is a Tablestore external table. The value 2 indicates that the external table is a volume external table. The value 3 indicates that the external table is a MySQL external table. This parameter is deprecated. Do not use this parameter.
   * 
   * @example
   * 1
   */
  externalTableType?: string;
  /**
   * @remarks
   * Specifies whether the table that you want to update is a partitioned table. Valid values: 0 and 1. The value 0 indicates that the table is not a partitioned table. The value 1 indicates that the table is a partitioned table. This parameter is deprecated. Do not use this parameter. The Column.N.isPartitionCol parameter is used instead of the HasPart parameter to specify whether the MaxCompute table is a partitioned table. If the Column.N.isPartitionCol parameter is set to 1, the MaxCompute table is a partitioned table.
   * 
   * @example
   * 0
   */
  hasPart?: number;
  /**
   * @remarks
   * Specifies whether the table is a view. Valid values: 0 and 1. The value 0 indicates that the table is not a view. The value 1 indicates that the table is a view. This parameter is deprecated. Do not use this parameter.
   * 
   * @example
   * 0
   */
  isView?: number;
  /**
   * @remarks
   * The lifecycle of the table. Unit: days. If this parameter is left empty, the table is permanently stored.
   * 
   * @example
   * 10
   */
  lifeCycle?: number;
  /**
   * @remarks
   * The storage location of the external table. This parameter is deprecated. Do not use this parameter.
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
   * The ID of the physical layer.
   * 
   * @example
   * 101
   */
  physicsLevelId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console to obtain the ID of the DataWorks workspace.
   * 
   * @example
   * 101
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
   * The name of the MaxCompute table.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  tableName?: string;
  /**
   * @remarks
   * The list of fields.
   */
  themes?: UpdateTableRequestThemes[];
  /**
   * @remarks
   * The scope in which the table is visible. Valid values: 0, 1, and 2. The value 0 indicates that the table is invisible to all workspace members. The value 1 indicates that the table is visible to all workspace members. The value 2 indicates that the table is visible to workspace members.
   * 
   * @example
   * 1
   */
  visibility?: number;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      categoryId: 'CategoryId',
      columns: 'Columns',
      comment: 'Comment',
      createIfNotExists: 'CreateIfNotExists',
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
      columns: { 'type': 'array', 'itemType': UpdateTableRequestColumns },
      comment: 'string',
      createIfNotExists: 'boolean',
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
      themes: { 'type': 'array', 'itemType': UpdateTableRequestThemes },
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

