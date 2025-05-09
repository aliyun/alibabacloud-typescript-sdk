// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTaskFlowEdgesResponseBodyEdgeIds extends $dara.Model {
  edgeId?: number[];
  static names(): { [key: string]: string } {
    return {
      edgeId: 'EdgeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.edgeId)) {
      $dara.Model.validateArray(this.edgeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

