// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskConfigListResponseBodyTaskListNodeTaskConfig } from "./TaskConfigListResponseBodyTaskListNodeTaskConfig";


export class TaskConfigListResponseBodyTaskList extends $dara.Model {
  nodeTaskConfig?: TaskConfigListResponseBodyTaskListNodeTaskConfig[];
  static names(): { [key: string]: string } {
    return {
      nodeTaskConfig: 'NodeTaskConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTaskConfig: { 'type': 'array', 'itemType': TaskConfigListResponseBodyTaskListNodeTaskConfig },
    };
  }

  validate() {
    if(Array.isArray(this.nodeTaskConfig)) {
      $dara.Model.validateArray(this.nodeTaskConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

