// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access key ID.
   * 
   * @example
   * LTAI*******************
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The network access restriction policy. The value is a JSON string. For more information, see the AccessKeyPolicy structure description in the SetAccessKeyPolicy documentation.
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
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
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

