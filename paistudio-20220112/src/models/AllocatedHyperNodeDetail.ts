// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocatedHyperNodeDetail extends $dara.Model {
  allocatedNodeNum?: number;
  emptyNodeNum?: number;
  hyperNodeName?: string;
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

