// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveRealTimeLogDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F32C57AA-7BF8-49AE-A2CC-9F42390F5A19
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

