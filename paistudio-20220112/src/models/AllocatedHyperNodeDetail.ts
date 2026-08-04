// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocatedHyperNodeDetail extends $dara.Model {
  /**
   * @remarks
   * The number of allocated nodes in the hyper node.
   */
  allocatedNodeNum?: number;
  /**
   * @remarks
   * The number of idle nodes in the hyper node.
   */
  emptyNodeNum?: number;
  /**
   * @remarks
   * The name of the hyper node.
   */
  hyperNodeName?: string;
  /**
   * @remarks
   * The total number of nodes in the hyper node.
   */
  totalNodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      allocatedNodeNum: 'AllocatedNodeNum',
      emptyNodeNum: 'EmptyNodeNum',
      hyperNodeName: 'HyperNodeName',
      totalNodeNum: 'TotalNodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedNodeNum: 'number',
      emptyNodeNum: 'number',
      hyperNodeName: 'string',
      totalNodeNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

