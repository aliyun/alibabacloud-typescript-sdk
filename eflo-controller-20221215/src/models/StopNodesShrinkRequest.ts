// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to allow skipping failed node tasks, default value is False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * List of nodes.
   */
  nodesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodesShrink: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreFailedNodeTasks: 'boolean',
      nodesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

