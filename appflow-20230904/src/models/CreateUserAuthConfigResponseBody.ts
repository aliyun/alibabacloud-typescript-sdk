// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserAuthConfigResponseBody extends $dara.Model {
  /**
   * @example
   * uac-a2253c40486c40c1b910
   */
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 249048A1-7FF7-5D2E-A322-695420112094
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

