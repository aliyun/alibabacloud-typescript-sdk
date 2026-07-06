// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccessKeyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * LTAI*******************
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The network access restriction policy.
   * 
   * A JSON-formatted string. For more information, see the AccessKeyPolicy structure description.
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
   * 30C9068D-FBAA-4998-9986-8A562FED0BC3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeyPolicy: 'AccessKeyPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
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

