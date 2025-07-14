// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem extends $dara.Model {
  /**
   * @remarks
   * The name of the related item.
   * 
   * @example
   * OSSObject
   */
  name?: string;
  /**
   * @remarks
   * The value of the related item.
   * 
   * @example
   * MYOSSPRE_m-23f8tcp***_t-23ym6mv***.vhd
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSet extends $dara.Model {
  relatedItem?: DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem[];
  static names(): { [key: string]: string } {
    return {
      relatedItem: 'RelatedItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedItem: { 'type': 'array', 'itemType': DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem },
    };
  }

  validate() {
    if(Array.isArray(this.relatedItem)) {
      $dara.Model.validateArray(this.relatedItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgress extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ParameterInvalid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified RegionId parameter is invalid.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The status of the operation.
   * 
   * @example
   * Success
   */
  operationStatus?: string;
  /**
   * @remarks
   * The type of resource information.
   */
  relatedItemSet?: DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSet;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      operationStatus: 'OperationStatus',
      relatedItemSet: 'RelatedItemSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      operationStatus: 'string',
      relatedItemSet: DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSet,
    };
  }

  validate() {
    if(this.relatedItemSet && typeof (this.relatedItemSet as any).validate === 'function') {
      (this.relatedItemSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeResponseBodyOperationProgressSet extends $dara.Model {
  operationProgress?: DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgress[];
  static names(): { [key: string]: string } {
    return {
      operationProgress: 'OperationProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationProgress: { 'type': 'array', 'itemType': DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgress },
    };
  }

  validate() {
    if(Array.isArray(this.operationProgress)) {
      $dara.Model.validateArray(this.operationProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2015-11-23T02:13Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The number of failed tasks.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The time when the task was completed.
   * 
   * @example
   * 2015-11-23T02:19Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The return data of the task.
   */
  operationProgressSet?: DescribeTaskAttributeResponseBodyOperationProgressSet;
  /**
   * @remarks
   * The region ID of the task.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of completed tasks.
   * 
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @remarks
   * Indicates whether the task can be canceled by calling the [CancelTask](https://help.aliyun.com/document_detail/25624.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  supportCancel?: string;
  /**
   * @remarks
   * The name of the operation that generated the task.
   * 
   * @example
   * ExportImage
   */
  taskAction?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * t-ce946ntx4wr****
   */
  taskId?: string;
  /**
   * @remarks
   * The progress of the task.
   * 
   * @example
   * 100%
   */
  taskProcess?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * Finished
   */
  taskStatus?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      failedCount: 'FailedCount',
      finishedTime: 'FinishedTime',
      operationProgressSet: 'OperationProgressSet',
      regionId: 'RegionId',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      supportCancel: 'SupportCancel',
      taskAction: 'TaskAction',
      taskId: 'TaskId',
      taskProcess: 'TaskProcess',
      taskStatus: 'TaskStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      failedCount: 'number',
      finishedTime: 'string',
      operationProgressSet: DescribeTaskAttributeResponseBodyOperationProgressSet,
      regionId: 'string',
      requestId: 'string',
      successCount: 'number',
      supportCancel: 'string',
      taskAction: 'string',
      taskId: 'string',
      taskProcess: 'string',
      taskStatus: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.operationProgressSet && typeof (this.operationProgressSet as any).validate === 'function') {
      (this.operationProgressSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

