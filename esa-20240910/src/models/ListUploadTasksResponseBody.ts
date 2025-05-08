// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUploadTasksResponseBodyTasks } from "./ListUploadTasksResponseBodyTasks";


export class ListUploadTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6D****
   */
  requestId?: string;
  /**
   * @remarks
   * The file upload tasks.
   */
  tasks?: ListUploadTasksResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListUploadTasksResponseBodyTasks },
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

