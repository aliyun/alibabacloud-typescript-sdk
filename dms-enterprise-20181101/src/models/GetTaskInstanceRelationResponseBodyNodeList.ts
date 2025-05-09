// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskInstanceRelationResponseBodyNodeListNode } from "./GetTaskInstanceRelationResponseBodyNodeListNode";


export class GetTaskInstanceRelationResponseBodyNodeList extends $dara.Model {
  node?: GetTaskInstanceRelationResponseBodyNodeListNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': GetTaskInstanceRelationResponseBodyNodeListNode },
    };
  }

  validate() {
    if(Array.isArray(this.node)) {
      $dara.Model.validateArray(this.node);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

