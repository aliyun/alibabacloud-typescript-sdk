// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Member extends $dara.Model {
  /**
   * @remarks
   * The member ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user: 181319557522****
   */
  member?: string;
  /**
   * @remarks
   * The role of the member.
   * 
   * Valid values:
   * 
   * *   EDITOR
   * *   VIEWER
   * *   ADMIN
   * 
   * @example
   * VIEWER
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      member: 'member',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      member: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

