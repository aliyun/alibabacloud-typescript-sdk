// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 952ea16b-1f05-4a76-bb32-420282d8aeb9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

