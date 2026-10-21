// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccessKeyPolicyForAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The network access restriction policy. The value is a JSON-formatted string. For more information, see the AccessKeyPolicy structure description in the SetAccessKeyPolicy documentation.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Status":"Inactive","Statements":[{"Value":"AllowAllVPC","Type":"VPCWhiteList","IPList":["::/0","0.0.0.0/0"]}]}
   */
  accessKeyPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyPolicy: 'AccessKeyPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

