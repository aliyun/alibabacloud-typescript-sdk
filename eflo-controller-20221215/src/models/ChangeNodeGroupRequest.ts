// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeNodeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip failed nodes. The default value is False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * The node information.
   */
  nodes?: string[];
  /**
   * @remarks
   * The ID of the target node group.
   * 
   * @example
   * i234242342342
   */
  targetNodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodes: 'Nodes',
      targetNodeGroupId: 'TargetNodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreFailedNodeTasks: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
      targetNodeGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

