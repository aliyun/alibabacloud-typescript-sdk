// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgress } from "./DescribeTaskAttributeResponseBodyOperationProgressSetOperationProgress";


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

