// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForTransferOutByAuthorizationCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID for the request.
   * 
   * @example
   * E2598CAF-DBFE-494E-95EF-B42A33C178AA
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the batch transfer-out task.
   * 
   * @example
   * 3cb1adc3-20e8-44ae-9e76-e812fa6fc9d8
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

