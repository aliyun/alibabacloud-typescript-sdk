// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixCheckWarningsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline risk item that has been fixed by using the Batch Repair feature.
   * 
   * @example
   * 52370
   */
  batchId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 76C1D7FD-DB1E-45EA-B804-3FBD9A1DD9C0
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

