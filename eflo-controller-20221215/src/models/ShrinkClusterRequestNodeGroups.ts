// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShrinkClusterRequestNodeGroupsNodes } from "./ShrinkClusterRequestNodeGroupsNodes";


export class ShrinkClusterRequestNodeGroups extends $dara.Model {
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-3b6fbd24b1b845a0
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The nodes.
   */
  nodes?: ShrinkClusterRequestNodeGroupsNodes[];
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      nodes: { 'type': 'array', 'itemType': ShrinkClusterRequestNodeGroupsNodes },
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

