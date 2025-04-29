// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSet } from "./DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgressRelatedItemSet";


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

