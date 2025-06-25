// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyInstanceLDAPAuthServerResponseBody extends $dara.Model {
  /**
   * @example
   * C9E97677-BD74-584B-AFCE-948C2A70BB83
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

