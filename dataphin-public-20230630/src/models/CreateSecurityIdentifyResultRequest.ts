// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityIdentifyResultRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  classifyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * COVER_ALL
   */
  conflictStrategy?: string;
  /**
   * @example
   * DEV
   */
  datasourceEnv?: string;
  /**
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * col1
   */
  fieldName?: string;
  /**
   * @example
   * true
   */
  isDatasourceTable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableCatalog?: string;
  /**
   * @remarks
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
   * This parameter is required.
   */
  createCommand?: CreateSecurityIdentifyResultRequestCreateCommand;
  /**
   * @remarks
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

