// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Task } from "./Task";


export class TaskInstance extends $dara.Model {
  bizId?: string;
  creator?: number;
  fenixRunId?: string;
  gmtCreated?: string;
  taskBizId?: string;
  taskInfo?: Task;
  taskStatus?: string;
  workspaceBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      creator: 'creator',
      fenixRunId: 'fenixRunId',
      gmtCreated: 'gmtCreated',
      taskBizId: 'taskBizId',
      taskInfo: 'taskInfo',
      taskStatus: 'taskStatus',
      workspaceBizId: 'workspaceBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      creator: 'number',
      fenixRunId: 'string',
      gmtCreated: 'string',
      taskBizId: 'string',
      taskInfo: Task,
      taskStatus: 'string',
      workspaceBizId: 'string',
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

