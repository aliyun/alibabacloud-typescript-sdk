// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem extends $dara.Model {
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * SnapshotId
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * s-j6c9lpuyxo2uxxnx****
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

export class DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSet extends $dara.Model {
  relatedItem?: DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem[];
  static names(): { [key: string]: string } {
    return {
      relatedItem: 'RelatedItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedItem: { 'type': 'array', 'itemType': DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem },
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

export class DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgress extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is empty when the operation is successful.
   * 
   * For information about error codes and error messages, visit the [API error center](https://error-center.aliyun.com/status/product/Ecs).
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is empty when the operation is successful.
   * 
   * For information about error codes and error messages, visit the [API error center](https://error-center.aliyun.com/status/product/Ecs).
   * 
   * @example
   * testErrorMsg
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. If the operation was successful, a value of Success is returned. If the operation failed, an error code and an error message are returned.
   * 
   * @example
   * Success
   */
  operationStatus?: string;
  /**
   * @remarks
   * Details about the resources.
   */
  relatedItemSet?: DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSet;
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
      relatedItemSet: DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSet,
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

export class DeleteSnapshotGroupResponseBodyOperationProgressSet extends $dara.Model {
  operationProgress?: DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgress[];
  static names(): { [key: string]: string } {
    return {
      operationProgress: 'OperationProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationProgress: { 'type': 'array', 'itemType': DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgress },
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

export class DeleteSnapshotGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the delete operation.
   */
  operationProgressSet?: DeleteSnapshotGroupResponseBodyOperationProgressSet;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EDE885A-FDC1-4FAE-BC44-6EACAEA6CC6E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationProgressSet: 'OperationProgressSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationProgressSet: DeleteSnapshotGroupResponseBodyOperationProgressSet,
      requestId: 'string',
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

