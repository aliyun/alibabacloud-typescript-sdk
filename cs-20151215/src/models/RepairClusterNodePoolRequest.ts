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
   * - restart.kubelet: Restarts kubelet.
   * - restart.docker: Restarts Docker.
   * - restart.containerd: Restarts Containerd.
   * - restart.ntp: Restarts ntpd or chronyd.
   * - remove.containerdContainerInSandbox: Deletes the specified sandbox container in Containerd.
   * - remove.dockerContainerInSandbox: Deletes the specified sandbox container in Docker.
   * - remove.containerdContainer: Deletes the specified container in Containerd.
   * - remove.dockerContainer: Deletes the specified container in Docker.
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
   * **[Deprecated]** Specifies whether to restart the instance.
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
   * The repair operations to be performed. If you do not specify this parameter, all repair operations are performed by default. You do not need to specify this parameter in common scenarios.
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

