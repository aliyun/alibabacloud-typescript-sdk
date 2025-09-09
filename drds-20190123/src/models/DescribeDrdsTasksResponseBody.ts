// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsTasksResponseBodyTasksTask extends $dara.Model {
  /**
   * @remarks
   * Indicates the content of a task.
   * 
   * @example
   * upgrade_instance
   */
  content?: string;
  /**
   * @remarks
   * Indicates the ID of the task.
   * 
   * @example
   * 64148
   */
  id?: number;
  /**
   * @remarks
   * Indicates the state of the task.
   * 
   * @example
   * FAILED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponseBodyTasks extends $dara.Model {
  task?: DescribeDrdsTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDrdsTasksResponseBodyTasksTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * CD412DF7-F21D-44CE-88FF-ED24917174A8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates information about the tasks.
   */
  tasks?: DescribeDrdsTasksResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      tasks: DescribeDrdsTasksResponseBodyTasks,
    };
  }

  validate() {
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

