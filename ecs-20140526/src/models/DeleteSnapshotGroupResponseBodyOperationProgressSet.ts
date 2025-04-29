// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgress } from "./DeleteSnapshotGroupResponseBodyOperationProgressSetOperationProgress";


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

