// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSet } from "./ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSet";


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

