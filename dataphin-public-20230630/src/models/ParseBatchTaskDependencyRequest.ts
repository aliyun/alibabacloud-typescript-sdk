// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ParseBatchTaskDependencyRequestParseCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select * from t_test limit 1;
   */
  code?: string;
  /**
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @example
   * 12131111
   */
  dataSourceId?: number;
  /**
   * @example
   * erp
   */
  dataSourceSchema?: string;
  includeAllInputTables?: boolean;
  needQueryLineages?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL
   */
  operatorType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      includeAllInputTables: 'IncludeAllInputTables',
      needQueryLineages: 'NeedQueryLineages',
      operatorType: 'OperatorType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'number',
      dataSourceSchema: 'string',
      includeAllInputTables: 'boolean',
      needQueryLineages: 'boolean',
      operatorType: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  parseCommand?: ParseBatchTaskDependencyRequestParseCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      parseCommand: 'ParseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      parseCommand: ParseBatchTaskDependencyRequestParseCommand,
    };
  }

  validate() {
    if(this.parseCommand && typeof (this.parseCommand as any).validate === 'function') {
      (this.parseCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

