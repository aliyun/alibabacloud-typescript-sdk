// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeUserInfo extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID used for role assumption.
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 203610320085271232
   */
  id?: string;
  /**
   * @remarks
   * The security token used for role assumption.
   */
  securityToken?: string;
  /**
   * @remarks
   * The user identity type.
   * 
   * @example
   * sub
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

