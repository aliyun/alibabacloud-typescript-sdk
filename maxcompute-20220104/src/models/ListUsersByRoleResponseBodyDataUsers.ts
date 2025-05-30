// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersByRoleResponseBodyDataUsers extends $dara.Model {
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * ALIYUN${account_name}
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

