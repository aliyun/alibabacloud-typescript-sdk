// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOAuth2CredentialProviderResponseBody extends $dara.Model {
  /**
   * @example
   * 679B5D1D-F2A2-5D8F-BB56-B62C28CDA9D6
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

