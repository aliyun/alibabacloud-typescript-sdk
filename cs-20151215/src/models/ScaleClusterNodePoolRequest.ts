// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The number of nodes to add. For example, if the node pool currently has 2 nodes and you set this parameter to 2, the node pool will have 4 nodes after the scale-out. Due to the node quota limit of the current cluster, you can add up to 500 nodes in a single operation.
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

