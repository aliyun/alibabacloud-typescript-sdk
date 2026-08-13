// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartNodesRequestRestartNodeGroups extends $dara.Model {
  /**
   * @remarks
   * Whether to use fast restart mode. Default is false.
   * 
   * - true: Restart compute nodes in fast mode. Nodes restart in multiple batches. Within each batch, nodes restart in parallel. Batches execute sequentially.
   * 
   * - false: Restart compute nodes using rolling restart.
   * 
   * @example
   * false
   */
  fastMode?: boolean;
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * ng-dcc7450e06a271b9
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * List of node IDs.
   */
  nodeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      fastMode: 'FastMode',
      nodeGroupId: 'NodeGroupId',
      nodeIds: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastMode: 'boolean',
      nodeGroupId: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Information about compute group nodes to restart.
   */
  restartNodeGroups?: RestartNodesRequestRestartNodeGroups[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      restartNodeGroups: 'RestartNodeGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      restartNodeGroups: { 'type': 'array', 'itemType': RestartNodesRequestRestartNodeGroups },
    };
  }

  validate() {
    if(Array.isArray(this.restartNodeGroups)) {
      $dara.Model.validateArray(this.restartNodeGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

