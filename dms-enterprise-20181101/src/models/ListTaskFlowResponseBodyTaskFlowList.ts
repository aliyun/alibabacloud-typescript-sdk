// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowResponseBodyTaskFlowListTaskFlow } from "./ListTaskFlowResponseBodyTaskFlowListTaskFlow";


export class ListTaskFlowResponseBodyTaskFlowList extends $dara.Model {
  taskFlow?: ListTaskFlowResponseBodyTaskFlowListTaskFlow[];
  static names(): { [key: string]: string } {
    return {
      taskFlow: 'TaskFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskFlow: { 'type': 'array', 'itemType': ListTaskFlowResponseBodyTaskFlowListTaskFlow },
    };
  }

  validate() {
    if(Array.isArray(this.taskFlow)) {
      $dara.Model.validateArray(this.taskFlow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

