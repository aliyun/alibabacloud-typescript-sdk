// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketDeleteTaskResponseBodyTaskInfo extends $dara.Model {
  attachedMediaRemain?: number;
  creationTime?: string;
  deleteFiles?: boolean;
  imageRemain?: number;
  modificationTime?: string;
  status?: string;
  storageLocation?: string;
  storageSize?: number;
  videoRemain?: number;
  static names(): { [key: string]: string } {
    return {
      attachedMediaRemain: 'AttachedMediaRemain',
      creationTime: 'CreationTime',
      deleteFiles: 'DeleteFiles',
      imageRemain: 'ImageRemain',
      modificationTime: 'ModificationTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
      storageSize: 'StorageSize',
      videoRemain: 'VideoRemain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedMediaRemain: 'number',
      creationTime: 'string',
      deleteFiles: 'boolean',
      imageRemain: 'number',
      modificationTime: 'string',
      status: 'string',
      storageLocation: 'string',
      storageSize: 'number',
      videoRemain: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketDeleteTaskResponseBody extends $dara.Model {
  requestId?: string;
  taskInfo?: GetBucketDeleteTaskResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: GetBucketDeleteTaskResponseBodyTaskInfo,
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

