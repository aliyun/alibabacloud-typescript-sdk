// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskConfigListResponseBodyTaskList } from "./TaskConfigListResponseBodyTaskList";


export class TaskConfigListResponseBody extends $dara.Model {
  errorCode?: number;
  errorMessage?: string;
  pageNumber?: number;
  pageSize?: number;
  pageTotal?: number;
  requestId?: string;
  success?: boolean;
  taskList?: TaskConfigListResponseBodyTaskList;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      success: 'Success',
      taskList: 'TaskList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageTotal: 'number',
      requestId: 'string',
      success: 'boolean',
      taskList: TaskConfigListResponseBodyTaskList,
      total: 'number',
    };
  }

  validate() {
    if(this.taskList && typeof (this.taskList as any).validate === 'function') {
      (this.taskList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

