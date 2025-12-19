// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAPIKeyCredentialProviderResponseBody extends $dara.Model {
  /**
   * @example
   * A0FD8DC1-2E36-50F4-97D4-6494F96F7FB5
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

