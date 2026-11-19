// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ParseBatchTaskDependencyRequestParseCommand extends $dara.Model {
  /**
   * @remarks
   * The SQL code to be parsed.
   * 
   * This parameter is required.
   * 
   * @example
   * select * from t_test limit 1;
   */
  code?: string;
  /**
   * @remarks
   * The data source catalog for database SQL nodes. This parameter takes effect only for data source types that require a catalog, such as Presto.
   * 
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @remarks
   * The data source ID for database SQL nodes.
   * 
   * @example
   * 12131111
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The data source schema for database SQL nodes. This parameter takes effect only for data source types that require a schema, such as Oracle.
   * 
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * Specifies whether to include dependency information for input tables that do not have corresponding nodes. Default value: false.
   */
  includeAllInputTables?: boolean;
  /**
   * @remarks
   * Specifies whether to query lineage data when querying upstream dependencies. Default value: false.
   */
  needQueryLineages?: boolean;
  /**
   * @remarks
   * The node type, such as MAX_COMPUTE_SQL.
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL
   */
  operatorType?: string;
  /**
   * @remarks
   * The project ID.
   * 
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
   * The ID of the user who performs the operation.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The parsing request.
   * 
   * This parameter is required.
   */
  parseCommand?: ParseBatchTaskDependencyRequestParseCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      parseCommand: 'ParseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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

