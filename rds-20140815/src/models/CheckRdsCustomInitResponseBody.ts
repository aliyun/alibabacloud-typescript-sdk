// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRdsCustomInitResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasServiceLinkedRole?: string;
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
  /**
   * @example
   * true
   */
  requireServiceLinkedRole?: string;
  static names(): { [key: string]: string } {
    return {
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      registerUidSuccess: 'RegisterUidSuccess',
      requestId: 'RequestId',
      requireServiceLinkedRole: 'RequireServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasServiceLinkedRole: 'string',
      registerUidSuccess: 'boolean',
      requestId: 'string',
      requireServiceLinkedRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

