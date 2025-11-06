// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForApplyQuickTransferOutOpenlyResponseBody extends $dara.Model {
  /**
   * @example
   * D6CB3623-4726-4947-AC2B-2C6E673B447C
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

