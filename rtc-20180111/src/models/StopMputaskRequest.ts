// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopMPUTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Only a single ID can be passed.
   * 
   * > You can create and query the application ID in the [console](https://rtc.console.aliyun.com/manage/list#/manage/list).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The task ID. Only a single ID can be passed. The value must be the same as the TaskId parameter of [StartMpuTask](https://help.aliyun.com/document_detail/93183.html).
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
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

