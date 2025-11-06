// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForTransferProhibitionLockResponseBody extends $dara.Model {
  /**
   * @example
   * F51977F9-2B40-462B-BCCD-CF5BB1E9DB56
   */
  requestId?: string;
  /**
   * @example
   * d3babb0a-c939-4c25-8c65-c47b65f5492a
   */
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

