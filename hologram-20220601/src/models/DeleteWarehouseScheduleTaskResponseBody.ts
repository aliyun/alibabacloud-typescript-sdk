// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWarehouseScheduleTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: The operation was successful.
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D1303CD4-AA70-5998-8025-F55B22C50840
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

