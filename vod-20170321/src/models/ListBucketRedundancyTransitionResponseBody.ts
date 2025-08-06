// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBucketRedundancyTransitionResponseBodyRedundancyTransitionInfo extends $dara.Model {
  createTime?: string;
  endTime?: string;
  estimatedRemainingTime?: string;
  processPercentage?: string;
  startTime?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      estimatedRemainingTime: 'EstimatedRemainingTime',
      processPercentage: 'ProcessPercentage',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      estimatedRemainingTime: 'string',
      processPercentage: 'string',
      startTime: 'string',
      status: 'string',
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

export class ListBucketRedundancyTransitionResponseBody extends $dara.Model {
  redundancyTransitionInfo?: ListBucketRedundancyTransitionResponseBodyRedundancyTransitionInfo;
  requestId?: string;
  storageRedundancyType?: string;
  static names(): { [key: string]: string } {
    return {
      redundancyTransitionInfo: 'RedundancyTransitionInfo',
      requestId: 'RequestId',
      storageRedundancyType: 'StorageRedundancyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redundancyTransitionInfo: ListBucketRedundancyTransitionResponseBodyRedundancyTransitionInfo,
      requestId: 'string',
      storageRedundancyType: 'string',
    };
  }

  validate() {
    if(this.redundancyTransitionInfo && typeof (this.redundancyTransitionInfo as any).validate === 'function') {
      (this.redundancyTransitionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

