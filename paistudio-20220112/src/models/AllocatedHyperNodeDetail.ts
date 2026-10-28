// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocatedHyperNodeDetail extends $dara.Model {
  /**
   * @remarks
   * The number of allocated nodes.
   * 
   * @example
   * 0
   */
  allocatedNodeNum?: number;
  /**
   * @remarks
   * The number of idle nodes.
   * 
   * @example
   * 0
   */
  emptyNodeNum?: number;
  /**
   * @remarks
   * The name of the hypernode.
   * 
   * @example
   * mg123456
   */
  hyperNodeName?: string;
  /**
   * @remarks
   * The total number of nodes.
   * 
   * @example
   * 0
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

