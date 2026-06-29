// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteManualNodeRequestExecuteCommandParamList extends $dara.Model {
  /**
   * @remarks
   * The parameter.
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 1
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

export class ExecuteManualNodeRequestExecuteCommand extends $dara.Model {
  /**
   * @remarks
   * The end business date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05-07
   */
  endBizDate?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * xx测试
   */
  flowName?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n_12132
   */
  nodeId?: string;
  /**
   * @remarks
   * The runtime parameters.
   */
  paramList?: ExecuteManualNodeRequestExecuteCommandParamList[];
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123324
   */
  projectId?: number;
  /**
   * @remarks
   * The start business date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05-01
   */
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      endBizDate: 'EndBizDate',
      flowName: 'FlowName',
      nodeId: 'NodeId',
      paramList: 'ParamList',
      projectId: 'ProjectId',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endBizDate: 'string',
      flowName: 'string',
      nodeId: 'string',
      paramList: { 'type': 'array', 'itemType': ExecuteManualNodeRequestExecuteCommandParamList },
      projectId: 'number',
      startBizDate: 'string',
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

export class ExecuteManualNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment 
   * - PROD (default): production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The request for running a manual task.
   * 
   * This parameter is required.
   */
  executeCommand?: ExecuteManualNodeRequestExecuteCommand;
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
      env: 'Env',
      executeCommand: 'ExecuteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      executeCommand: ExecuteManualNodeRequestExecuteCommand,
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

