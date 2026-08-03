// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachTaskPageResponseBodyTaskList extends $dara.Model {
  finishTime?: string;
  gmtCreate?: string;
  status?: string;
  studentId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'finishTime',
      gmtCreate: 'gmtCreate',
      status: 'status',
      studentId: 'studentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      gmtCreate: 'string',
      status: 'string',
      studentId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachTaskPageResponseBody extends $dara.Model {
  requestId?: string;
  taskList?: ListAICoachTaskPageResponseBodyTaskList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskList: 'taskList',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListAICoachTaskPageResponseBodyTaskList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

