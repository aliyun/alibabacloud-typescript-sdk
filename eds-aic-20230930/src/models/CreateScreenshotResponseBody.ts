// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScreenshotResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-bwhtebzah2fse****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The ID of the task. You can use the task ID with the DescribeTasks operation to get the download link for the screenshot.
   * 
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
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

export class CreateScreenshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. If the request fails, share this ID with technical support to help diagnose the issue.
   * 
   * @example
   * 3AF82CE1-2801-52CE-BF64-B491DD7C****
   */
  requestId?: string;
  /**
   * @remarks
   * The tasks.
   */
  tasks?: CreateScreenshotResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': CreateScreenshotResponseBodyTasks },
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

