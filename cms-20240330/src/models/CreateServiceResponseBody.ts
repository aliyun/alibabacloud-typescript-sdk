// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceResponseBody extends $dara.Model {
  /**
   * @example
   * cwzxvuc6uo@d60088ad4797d26
   */
  pid?: string;
  /**
   * @example
   * 3A2FA9E9-9CF1-5CB1-A808-52828F14310D
   */
  requestId?: string;
  /**
   * @example
   * cwzxvuc6uo@4bc6b15ad81f166174ffb
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'pid',
      requestId: 'requestId',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
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

