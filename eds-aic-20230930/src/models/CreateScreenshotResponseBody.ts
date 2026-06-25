// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScreenshotResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-bwhtebzah2fse****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The screenshot ID. The generated screenshot is named "ScreenshotId_AndroidInstanceId.png."
   * 
   * @example
   * image
   */
  screenshotId?: string;
  /**
   * @remarks
   * The task ID. You can use this ID to call the DescribeTasks operation and query the screenshot task. When the task is complete, you can get the download link for the screenshot.
   * 
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      screenshotId: 'ScreenshotId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      screenshotId: 'string',
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
   * The unique ID of the request. If you encounter an issue, provide this request ID for troubleshooting.
   * 
   * @example
   * 3AF82CE1-2801-52CE-BF64-B491DD7C****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
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

