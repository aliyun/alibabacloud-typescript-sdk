// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIdentityProviderResponseBody extends $dara.Model {
  /**
   * @example
   * EE854F60-E275-534A-B102-F75346B6DA38
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

