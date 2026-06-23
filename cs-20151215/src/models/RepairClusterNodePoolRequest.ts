// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepairClusterNodePoolRequestOperations extends $dara.Model {
  /**
   * @remarks
   * The list of repair operation parameters.
   */
  args?: string[];
  /**
   * @remarks
   * The repair operation ID. Valid values:
   * 
   * - restart.kubelet: restart kubelet.
   * - restart.docker: restart Docker.
   * - restart.containerd: restart Containerd.
   * - restart.ntp: restart ntpd or chronyd.
   * - remove.containerdContainerInSandbox: delete a specified sandbox container under Containerd.
   * - remove.dockerContainerInSandbox: delete a specified sandbox container under Docker.
   * - remove.containerdContainer: delete a specified container under Containerd.
   * - remove.dockerContainer: delete a specified container under Docker.
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
   * [This field is deprecated] Specifies whether to allow instance restart.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  autoRestart?: boolean;
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: string[];
  /**
   * @remarks
   * The repair operations to perform. If not specified, all repair operations are performed by default. In most scenarios, you do not need to specify this parameter.
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

