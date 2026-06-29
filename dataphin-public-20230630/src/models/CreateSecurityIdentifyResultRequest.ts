// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityIdentifyResultRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The classification ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  classifyId?: number;
  /**
   * @remarks
   * The deduplication strategy. Valid values:
   * - COVER_ALL: overwrites all online tags.
   * - COVER_UNLOCKED: overwrites only unlocked online tags.
   * 
   * This parameter is required.
   * 
   * @example
   * COVER_ALL
   */
  conflictStrategy?: string;
  /**
   * @remarks
   * The datasource environment identifier. This parameter is required only for datasource tables.
   * 
   * @example
   * DEV
   */
  datasourceEnv?: string;
  /**
   * @remarks
   * The datasource name. This parameter is required only for datasource tables.
   * 
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @remarks
   * Specifies whether to enable the result. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * Default value: true.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The field name.
   * 
   * This parameter is required.
   * 
   * @example
   * col1
   */
  fieldName?: string;
  /**
   * @remarks
   * Specifies whether the table is a datasource table. Default value: false (treated as a Dataphin table).
   * 
   * @example
   * true
   */
  isDatasourceTable?: boolean;
  /**
   * @remarks
   * The table catalog. For a datasource table, specify the database or schema name. For a Dataphin physical table, specify the project name in English. For a Dataphin logical table, specify the business unit name in English.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableCatalog?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * t_test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      classifyId: 'ClassifyId',
      conflictStrategy: 'ConflictStrategy',
      datasourceEnv: 'DatasourceEnv',
      datasourceName: 'DatasourceName',
      enable: 'Enable',
      fieldName: 'FieldName',
      isDatasourceTable: 'IsDatasourceTable',
      tableCatalog: 'TableCatalog',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifyId: 'number',
      conflictStrategy: 'string',
      datasourceEnv: 'string',
      datasourceName: 'string',
      enable: 'boolean',
      fieldName: 'string',
      isDatasourceTable: 'boolean',
      tableCatalog: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityIdentifyResultRequest extends $dara.Model {
  /**
   * @remarks
   * The create request.
   * 
   * This parameter is required.
   */
  createCommand?: CreateSecurityIdentifyResultRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateSecurityIdentifyResultRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

