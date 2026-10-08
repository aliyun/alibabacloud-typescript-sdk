// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForUpdatingContactInfoByRegistrantProfileIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * A unique ID for the request.
   * 
   * @example
   * EDC28FEC-6BE0-4583-95BC
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 880f1579-be51-4dd3-a69d
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

