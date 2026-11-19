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
   * The conflict strategy. Valid values: COVER_ALL (overwrites all online tags) and COVER_UNLOCKED (overwrites only unlocked online tags).
   * 
   * This parameter is required.
   * 
   * @example
   * COVER_ALL
   */
  conflictStrategy?: string;
  /**
   * @remarks
   * The environment identifier of the datasource. This parameter is required only for datasource tables.
   * 
   * @example
   * DEV
   */
  datasourceEnv?: string;
  /**
   * @remarks
   * The name of the datasource. This parameter is required only for datasource tables.
   * 
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @remarks
   * The enabled status. Valid values: true (enabled) and false (disabled). Default value: true.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The name of the field.
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
   * The catalog of the table. For a datasource table, specify the name of the database or schema to which the table belongs. For a Dataphin physical table, specify the English name of the project. For a Dataphin logical table, specify the English name of the business unit.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableCatalog?: string;
  /**
   * @remarks
   * The name of the table.
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
   * The creation request.
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
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateSecurityIdentifyResultRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
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

