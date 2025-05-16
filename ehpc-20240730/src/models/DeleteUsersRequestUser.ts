// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUsersRequestUser extends $dara.Model {
  /**
   * @remarks
   * The name of user N that you want to delete.
   * 
   * Valid values of N: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

