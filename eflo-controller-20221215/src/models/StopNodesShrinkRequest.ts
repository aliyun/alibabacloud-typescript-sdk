// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow skipping failed nodes. Default value: False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * The nodes.
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

