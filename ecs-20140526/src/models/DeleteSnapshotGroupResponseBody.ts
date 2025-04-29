// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteSnapshotGroupResponseBodyOperationProgressSet } from "./DeleteSnapshotGroupResponseBodyOperationProgressSet";


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

