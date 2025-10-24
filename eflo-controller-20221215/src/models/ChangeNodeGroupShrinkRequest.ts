// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeNodeGroupShrinkRequest extends $dara.Model {
  /**
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  nodesShrink?: string;
  /**
   * @example
   * i234242342342
   */
  targetNodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodesShrink: 'Nodes',
      targetNodeGroupId: 'TargetNodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreFailedNodeTasks: 'boolean',
      nodesShrink: 'string',
      targetNodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

