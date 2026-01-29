// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCrossAccountRequest extends $dara.Model {
  alias?: string;
  /**
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @example
   * 1589753xxxxxx625
   */
  crossAccountUserId?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

