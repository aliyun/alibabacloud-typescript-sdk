// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResetDisksResponseBodyOperationProgressSet } from "./ResetDisksResponseBodyOperationProgressSet";


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

