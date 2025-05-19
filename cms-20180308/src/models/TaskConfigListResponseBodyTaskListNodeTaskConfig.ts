// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskConfigListResponseBodyTaskListNodeTaskConfigInstanceList } from "./TaskConfigListResponseBodyTaskListNodeTaskConfigInstanceList";


export class TaskConfigListResponseBodyTaskListNodeTaskConfig extends $dara.Model {
  alertConfig?: string;
  disabled?: boolean;
  groupId?: number;
  groupName?: string;
  id?: number;
  instanceList?: TaskConfigListResponseBodyTaskListNodeTaskConfigInstanceList;
  jsonData?: string;
  taskName?: string;
  taskScope?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      disabled: 'Disabled',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      instanceList: 'InstanceList',
      jsonData: 'JsonData',
      taskName: 'TaskName',
      taskScope: 'TaskScope',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: 'string',
      disabled: 'boolean',
      groupId: 'number',
      groupName: 'string',
      id: 'number',
      instanceList: TaskConfigListResponseBodyTaskListNodeTaskConfigInstanceList,
      jsonData: 'string',
      taskName: 'string',
      taskScope: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.instanceList && typeof (this.instanceList as any).validate === 'function') {
      (this.instanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

