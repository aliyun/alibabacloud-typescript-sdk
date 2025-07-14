// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem extends $dara.Model {
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * SnapshotId
   */
  name?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * s-j6cdofbycydvg7ey****
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

export class ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSet extends $dara.Model {
  relatedItem?: ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem[];
  static names(): { [key: string]: string } {
    return {
      relatedItem: 'RelatedItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedItem: { 'type': 'array', 'itemType': ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem },
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

export class ResetDisksResponseBodyOperationProgressSetOperationProgress extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned if the request failed. This parameter is empty if the request is successful.
   * 
   * For information about error codes and error messages, see [Service error codes](https://error-center.alibabacloud.com/status/product/Ecs).
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed. This parameter is empty if the request is successful.
   * 
   * For information about error codes and error messages, see [Service error codes](https://error-center.alibabacloud.com/status/product/Ecs).
   * 
   * @example
   * testErrorMsg
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. If the request is successful, Success is returned. If the request failed, an error code and an error message are returned.
   * 
   * @example
   * Success
   */
  operationStatus?: string;
  /**
   * @remarks
   * Details about the resources.
   */
  relatedItemSet?: ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSet;
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
      relatedItemSet: ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSet,
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

export class ResetDisksResponseBodyOperationProgressSet extends $dara.Model {
  operationProgress?: ResetDisksResponseBodyOperationProgressSetOperationProgress[];
  static names(): { [key: string]: string } {
    return {
      operationProgress: 'OperationProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationProgress: { 'type': 'array', 'itemType': ResetDisksResponseBodyOperationProgressSetOperationProgress },
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

export class ResetDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the rollback operation.
   */
  operationProgressSet?: ResetDisksResponseBodyOperationProgressSet;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D66C85C-AA97-4A00-B0ED-2D9A80FE782C
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
      operationProgressSet: ResetDisksResponseBodyOperationProgressSet,
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

