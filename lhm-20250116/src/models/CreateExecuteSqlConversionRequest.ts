// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExecuteSqlConversionRequestSourceSqlScriptTableMappingList extends $dara.Model {
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The source type. Valid values: DB and Schema.
   * 
   * @example
   * db_demo
   */
  sourceSchema?: string;
  /**
   * @remarks
   * The source table name.
   * 
   * @example
   * table_demo
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The target table name.
   * 
   * @example
   * table_demo
   */
  targetTableName?: string;
  /**
   * @remarks
   * The target type. Valid values: DB and Schema.
   * 
   * @example
   * hive
   */
  targetType?: string;
  /**
   * @remarks
   * The SQL conversion task ID.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 10001
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      sourceSchema: 'sourceSchema',
      sourceTableName: 'sourceTableName',
      targetTableName: 'targetTableName',
      targetType: 'targetType',
      taskId: 'taskId',
      tenantId: 'tenantId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      sourceSchema: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
      targetType: 'string',
      taskId: 'number',
      tenantId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExecuteSqlConversionRequestSourceSqlScript extends $dara.Model {
  /**
   * @remarks
   * The error reason.
   * 
   * @example
   * connection timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the conversion is completed.
   * 
   * @example
   * 2026-01-16T10:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 1234567890
   */
  scriptId?: number;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * node_script_demo
   */
  scriptName?: string;
  /**
   * @remarks
   * The script conversion status. In conversion job scenarios, valid values: pass (conversion succeeded), turning (conversion in progress), fail (conversion failed). In some scenarios, the following values are used: success (succeeded), failed (failed), skipped (skipped).
   * 
   * @example
   * pass
   */
  scriptTransformStatus?: string;
  /**
   * @remarks
   * The converted script content.
   * 
   * @example
   * SELECT * FROM t;
   */
  sqlResultContent?: string;
  /**
   * @remarks
   * The original script content.
   * 
   * @example
   * SELECT * FROM t;
   */
  sqlSourceContent?: string;
  /**
   * @remarks
   * The table name mappings for conversion.
   */
  tableMappingList?: CreateExecuteSqlConversionRequestSourceSqlScriptTableMappingList[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      finishTime: 'finishTime',
      scriptId: 'scriptId',
      scriptName: 'scriptName',
      scriptTransformStatus: 'scriptTransformStatus',
      sqlResultContent: 'sqlResultContent',
      sqlSourceContent: 'sqlSourceContent',
      tableMappingList: 'tableMappingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      finishTime: 'string',
      scriptId: 'number',
      scriptName: 'string',
      scriptTransformStatus: 'string',
      sqlResultContent: 'string',
      sqlSourceContent: 'string',
      tableMappingList: { 'type': 'array', 'itemType': CreateExecuteSqlConversionRequestSourceSqlScriptTableMappingList },
    };
  }

  validate() {
    if(Array.isArray(this.tableMappingList)) {
      $dara.Model.validateArray(this.tableMappingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExecuteSqlConversionRequest extends $dara.Model {
  /**
   * @remarks
   * The source dialect.
   * 
   * @example
   * hive
   */
  sourceDialect?: string;
  /**
   * @remarks
   * The list of source SQL scripts.
   */
  sourceSqlScript?: CreateExecuteSqlConversionRequestSourceSqlScript[];
  /**
   * @remarks
   * The target dialect.
   * 
   * @example
   * hive
   */
  targetDialect?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Data validation task description
   */
  taskDescription?: string;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * data_check_task_demo
   */
  taskName?: string;
  /**
   * @remarks
   * The script type. Valid values: 0 (DDL) and 1 (DQL).
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      sourceDialect: 'sourceDialect',
      sourceSqlScript: 'sourceSqlScript',
      targetDialect: 'targetDialect',
      taskDescription: 'taskDescription',
      taskName: 'taskName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDialect: 'string',
      sourceSqlScript: { 'type': 'array', 'itemType': CreateExecuteSqlConversionRequestSourceSqlScript },
      targetDialect: 'string',
      taskDescription: 'string',
      taskName: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sourceSqlScript)) {
      $dara.Model.validateArray(this.sourceSqlScript);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

