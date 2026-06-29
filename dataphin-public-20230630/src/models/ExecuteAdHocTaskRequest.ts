// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAdHocTaskRequestExecuteCommandParamList extends $dara.Model {
  /**
   * @remarks
   * The parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAdHocTaskRequestExecuteCommand extends $dara.Model {
  /**
   * @remarks
   * The node script.
   * 
   * This parameter is required.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @remarks
   * The catalog for a database SQL task. This parameter takes effect only for data source types that require a catalog, such as Presto.
   * 
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @remarks
   * The data source ID for a database SQL task.
   * 
   * @example
   * 12131111
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The schema for a database SQL task. This parameter takes effect only for data source types that require a schema, such as Oracle.
   * 
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * The node type.
   * 
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL
   */
  operatorType?: string;
  /**
   * @remarks
   * The runtime parameters.
   */
  paramList?: ExecuteAdHocTaskRequestExecuteCommandParamList[];
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123222121
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      operatorType: 'OperatorType',
      paramList: 'ParamList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'number',
      dataSourceSchema: 'string',
      operatorType: 'string',
      paramList: { 'type': 'array', 'itemType': ExecuteAdHocTaskRequestExecuteCommandParamList },
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAdHocTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The execution command.
   * 
   * This parameter is required.
   */
  executeCommand?: ExecuteAdHocTaskRequestExecuteCommand;
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
      executeCommand: 'ExecuteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeCommand: ExecuteAdHocTaskRequestExecuteCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.executeCommand && typeof (this.executeCommand as any).validate === 'function') {
      (this.executeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

