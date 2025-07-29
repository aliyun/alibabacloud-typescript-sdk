// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepairClusterNodePoolRequestOperations extends $dara.Model {
  /**
   * @remarks
   * The parameters of a repair operation.
   */
  args?: string[];
  /**
   * @remarks
   * The ID of a repair operation.
   * 
   * @example
   * remove.containerdContainer
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      operationId: 'operation_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      operationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepairClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic instance restart.
   * 
   * **
   * 
   * **Warning** This parameter is deprecated. Any configured values will be ignored.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoRestart?: boolean;
  /**
   * @remarks
   * The list of nodes. If not specified, all nodes in the node pool are selected.
   */
  nodes?: string[];
  /**
   * @remarks
   * The list of repair operations to execute. If not specified, all repair operations are executed. Typically, you do not need to specify this parameter.
   */
  operations?: RepairClusterNodePoolRequestOperations[];
  static names(): { [key: string]: string } {
    return {
      autoRestart: 'auto_restart',
      nodes: 'nodes',
      operations: 'operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRestart: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
      operations: { 'type': 'array', 'itemType': RepairClusterNodePoolRequestOperations },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

