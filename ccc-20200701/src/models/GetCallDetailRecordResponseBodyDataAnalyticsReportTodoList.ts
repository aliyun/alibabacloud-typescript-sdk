// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDetailRecordResponseBodyDataAnalyticsReportTodoList extends $dara.Model {
  success?: boolean;
  taskId?: string;
  tasks?: string[];
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      taskId: 'TaskId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      taskId: 'string',
      tasks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

