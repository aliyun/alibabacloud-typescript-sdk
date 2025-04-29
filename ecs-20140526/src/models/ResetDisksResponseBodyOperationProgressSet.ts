// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResetDisksResponseBodyOperationProgressSetOperationProgress } from "./ResetDisksResponseBodyOperationProgressSetOperationProgress";


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

