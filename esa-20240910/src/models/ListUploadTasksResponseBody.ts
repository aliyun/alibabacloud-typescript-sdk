// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUploadTasksResponseBodyTasks extends $dara.Model {
  createTime?: string;
  description?: string;
  errorCode?: string;
  status?: string;
  type?: string;
  uploadId?: string;
  uploadTaskName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      errorCode: 'ErrorCode',
      status: 'Status',
      type: 'Type',
      uploadId: 'UploadId',
      uploadTaskName: 'UploadTaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      errorCode: 'string',
      status: 'string',
      type: 'string',
      uploadId: 'string',
      uploadTaskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadTasksResponseBody extends $dara.Model {
  requestId?: string;
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

