// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), hyphens (-), and underscores (_).
   * 
   * @example
   * zhangq****
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

