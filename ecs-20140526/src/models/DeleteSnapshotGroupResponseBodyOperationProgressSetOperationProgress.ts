// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSet } from "./DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgressRelatedItemSet";


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

