// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRecordTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Create and query the ID in the console. Only a single ID is supported.
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
   * The task ID. Only a single ID is supported. The value must be the same as the TaskId parameter of the [StartRecordTask](https://help.aliyun.com/document_detail/193528.html) operation.
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

