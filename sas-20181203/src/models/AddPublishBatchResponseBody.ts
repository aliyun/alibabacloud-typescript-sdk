// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPublishBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the release batch.
   * 
   * @example
   * 1
   */
  batchId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

