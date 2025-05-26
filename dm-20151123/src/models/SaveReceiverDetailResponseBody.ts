// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SaveReceiverDetailResponseBodyData } from "./SaveReceiverDetailResponseBodyData";


export class SaveReceiverDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of recipient addresses that failed to upload.
   */
  data?: SaveReceiverDetailResponseBodyData;
  /**
   * @remarks
   * Number of errors.
   * 
   * @example
   * 638
   */
  errorCount?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Number of successes.
   * 
   * @example
   * 274
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCount: 'ErrorCount',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SaveReceiverDetailResponseBodyData,
      errorCount: 'number',
      requestId: 'string',
      successCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

