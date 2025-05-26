// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataIngestion } from "./DataIngestion";


export class GetBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the batch processing task.
   */
  batch?: DataIngestion;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6E93D6C9-5AC0-49F9-914D-E02678D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      batch: 'Batch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batch: DataIngestion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.batch && typeof (this.batch as any).validate === 'function') {
      (this.batch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

