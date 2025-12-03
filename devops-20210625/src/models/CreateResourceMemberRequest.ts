// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1111111111111
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * admin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

