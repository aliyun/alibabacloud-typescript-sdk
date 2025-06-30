// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom scan task.
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B1F2BB1F-04EC-5D36-B136-B4DE17FD8DE0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

