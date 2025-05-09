// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowsByPageResponseBodyTaskFlowListTaskFlow } from "./ListTaskFlowsByPageResponseBodyTaskFlowListTaskFlow";


export class ListTaskFlowsByPageResponseBodyTaskFlowList extends $dara.Model {
  taskFlow?: ListTaskFlowsByPageResponseBodyTaskFlowListTaskFlow[];
  static names(): { [key: string]: string } {
    return {
      taskFlow: 'TaskFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskFlow: { 'type': 'array', 'itemType': ListTaskFlowsByPageResponseBodyTaskFlowListTaskFlow },
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

