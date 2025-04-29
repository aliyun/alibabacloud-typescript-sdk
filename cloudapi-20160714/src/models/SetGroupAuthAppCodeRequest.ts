// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetGroupAuthAppCodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  authAppCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      authAppCode: 'AuthAppCode',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAppCode: 'string',
      groupId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

