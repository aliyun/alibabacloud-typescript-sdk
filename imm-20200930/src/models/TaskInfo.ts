// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskInfo extends $dara.Model {
  code?: string;
  endTime?: string;
  message?: string;
  progress?: number;
  startTime?: string;
  status?: string;
  tags?: { [key: string]: any };
  taskId?: string;
  taskRequestDefinition?: string;
  taskType?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      message: 'Message',
      progress: 'Progress',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskRequestDefinition: 'TaskRequestDefinition',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      message: 'string',
      progress: 'number',
      startTime: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskId: 'string',
      taskRequestDefinition: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

