// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAdHocTaskRequestExecuteCommandParamList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * show tables;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL
   */
  operatorType?: string;
  paramList?: ExecuteAdHocTaskRequestExecuteCommandParamList[];
  /**
   * @remarks
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
   * This parameter is required.
   */
  executeCommand?: ExecuteAdHocTaskRequestExecuteCommand;
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

