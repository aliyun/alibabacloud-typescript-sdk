// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RdsCustomInitResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  registerUidSuccess?: boolean;
  /**
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AA****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registerUidSuccess: 'RegisterUidSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registerUidSuccess: 'boolean',
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

