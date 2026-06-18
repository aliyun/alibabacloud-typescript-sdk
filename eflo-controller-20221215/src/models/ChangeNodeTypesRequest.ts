// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeNodeTypesRequest extends $dara.Model {
  /**
   * @remarks
   * A list of node IDs. You can specify a maximum of 10 nodes in a single request.
   */
  nodeIds?: string[];
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
      nodeIds: 'NodeIds',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'string',
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

