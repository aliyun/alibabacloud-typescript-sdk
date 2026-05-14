// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWarehouseScheduleTaskResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
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
      data: 'string',
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

