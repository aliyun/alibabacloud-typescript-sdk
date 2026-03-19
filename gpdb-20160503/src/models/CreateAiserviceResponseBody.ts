// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAIServiceResponseBody extends $dara.Model {
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * drama-123456
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

