// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * Role. Possible values:
   * - OPERATOR: Annotator.
   * - ADMIN: Administrator.
   * - LEADER: Annotation team leader.
   * 
   * This parameter is required.
   * 
   * @example
   * ADMIN
   */
  role?: string;
  /**
   * @remarks
   * Username.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
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

