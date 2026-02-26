// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialResponseBody extends $dara.Model {
  /**
   * @example
   * cred_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  credentialId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'CredentialId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
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

