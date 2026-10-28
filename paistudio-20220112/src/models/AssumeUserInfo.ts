// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeUserInfo extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the temporary access credential.
   * 
   * @example
   * STS.L4aBSCSJVMuKg5U1****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The ID of the assumed user.
   */
  id?: string;
  /**
   * @remarks
   * The temporary security token.
   * 
   * @example
   * ********
   */
  securityToken?: string;
  /**
   * @remarks
   * The identity type of the assumed user.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      id: 'Id',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      id: 'string',
      securityToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

