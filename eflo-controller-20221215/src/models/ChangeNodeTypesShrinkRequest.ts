// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeNodeTypesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of node IDs. You can specify a maximum of 10 nodes in a single request.
   */
  nodeIdsShrink?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * cpfs-enhanced
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeIdsShrink: 'NodeIds',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIdsShrink: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

