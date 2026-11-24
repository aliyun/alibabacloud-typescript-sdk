// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The number of nodes to add. For example, if the node pool currently has two nodes and you add two more, the total number of nodes becomes four. You can add a maximum of 500 nodes in a single operation due to the node quota limit of the current cluster.
   * 
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

