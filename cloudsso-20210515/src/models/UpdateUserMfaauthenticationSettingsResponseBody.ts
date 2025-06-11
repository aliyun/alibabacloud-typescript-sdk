// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserMFAAuthenticationSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E6C6049-E9B0-5F6F-A104-6150E3B1F4D7
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

