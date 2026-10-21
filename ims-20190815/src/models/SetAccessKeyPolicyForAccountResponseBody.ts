// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccessKeyPolicyForAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network access restriction policy. The value is a JSON-formatted string. For more information, see the AccessKeyPolicy structure description in the SetAccessKeyPolicy documentation.
   * 
   * @example
   * {"Status":"Inactive","Statements":[{"Value":"AllowAllVPC","Type":"VPCWhiteList","IPList":["::/0","0.0.0.0/0"]}]}
   */
  accessKeyPolicy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6616F09B-2768-4C11-8866-A8EE4C4A583E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyPolicy: 'AccessKeyPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPolicy: 'string',
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

