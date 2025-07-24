// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceResponseBody extends $dara.Model {
  /**
   * @example
   * 123-0F43-23423-AC43-34234
   */
  requestId?: string;
  /**
   * @example
   * em87vd@c2e25bcfe0e21ce0***
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      serviceId: 'serviceId',
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

