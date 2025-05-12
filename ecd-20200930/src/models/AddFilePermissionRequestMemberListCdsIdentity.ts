// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilePermissionRequestMemberListCdsIdentity extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * user01
   */
  id?: string;
  /**
   * @remarks
   * The type of the user.
   * 
   * Valid values:
   * 
   * *   <!-- -->
   * 
   *     IT_Group
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     IT_User
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * IT_User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

