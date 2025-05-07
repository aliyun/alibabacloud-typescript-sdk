// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskGraphFlow } from "./TaskGraphFlow";


export class TestRuleV4ResponseBodyDataHitTaskFlowList extends $dara.Model {
  graphFlow?: TaskGraphFlow;
  /**
   * @example
   * 1
   */
  rid?: number;
  taskFlowType?: number;
  static names(): { [key: string]: string } {
    return {
      graphFlow: 'GraphFlow',
      rid: 'Rid',
      taskFlowType: 'TaskFlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphFlow: TaskGraphFlow,
      rid: 'number',
      taskFlowType: 'number',
    };
  }

  validate() {
    if(this.graphFlow && typeof (this.graphFlow as any).validate === 'function') {
      (this.graphFlow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

